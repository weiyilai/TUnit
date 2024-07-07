﻿using System;
using System.Collections.Generic;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using TUnit.Engine.SourceGenerator.CodeGenerators.Helpers;
using TUnit.Engine.SourceGenerator.CodeGenerators.Writers;
using TUnit.Engine.SourceGenerator.Enums;
using TUnit.Engine.SourceGenerator.Models;

namespace TUnit.Engine.SourceGenerator.CodeGenerators;

[Generator]
internal class TestsGenerator : IIncrementalGenerator
{
    public void Initialize(IncrementalGeneratorInitializationContext context)
    {
        var basicTests = context.SyntaxProvider
            .ForAttributeWithMetadataName(
                "TUnit.Core.TestAttribute",
                predicate: static (s, _) => IsSyntaxTargetForGeneration(s),
                transform: static (ctx, _) => new TestCollectionDataModel(GetSemanticTargetForGeneration(ctx, TestType.Basic)))
            .Where(static m => m is not null);
        
        var dataDrivenTests = context.SyntaxProvider
            .ForAttributeWithMetadataName(
                "TUnit.Core.DataDrivenTestAttribute",
                predicate: static (s, _) => IsSyntaxTargetForGeneration(s),
                transform: static (ctx, _) => new TestCollectionDataModel(GetSemanticTargetForGeneration(ctx, TestType.DataDriven)))
            .Where(static m => m is not null);
        
        var dataSourceDrivenTests = context.SyntaxProvider
            .ForAttributeWithMetadataName(
                "TUnit.Core.DataSourceDrivenTestAttribute",
                predicate: static (s, _) => IsSyntaxTargetForGeneration(s),
                transform: static (ctx, _) => new TestCollectionDataModel(GetSemanticTargetForGeneration(ctx, TestType.DataSourceDriven)))
            .Where(static m => m is not null);
        
        var combinativeTests = context.SyntaxProvider
            .ForAttributeWithMetadataName(
                "TUnit.Core.CombinativeTestAttribute",
                predicate: static (s, _) => IsSyntaxTargetForGeneration(s),
                transform: static (ctx, _) => new TestCollectionDataModel(GetSemanticTargetForGeneration(ctx, TestType.Combinative)))
            .Where(static m => m is not null);
        
        context.RegisterSourceOutput(basicTests, Execute);
        context.RegisterSourceOutput(dataDrivenTests, Execute);
        context.RegisterSourceOutput(dataSourceDrivenTests, Execute);
        context.RegisterSourceOutput(combinativeTests, Execute);
    }

    static bool IsSyntaxTargetForGeneration(SyntaxNode node)
    {
        return node is MethodDeclarationSyntax;
    }

    static IEnumerable<TestSourceDataModel> GetSemanticTargetForGeneration(GeneratorAttributeSyntaxContext context, TestType testType)
    {
        if (context.TargetSymbol is not IMethodSymbol methodSymbol)
        {
            yield break;
        }

        if (methodSymbol.ContainingType.IsAbstract)
        {
            yield break;
        }

        if (methodSymbol.IsStatic)
        {
            yield break;
        }

        if (methodSymbol.DeclaredAccessibility != Accessibility.Public)
        {
            yield break;
        }

        foreach (var testSourceDataModel in methodSymbol.ParseTestDatas(methodSymbol.ContainingType, testType))
        {
            yield return testSourceDataModel;
        }
    }

    private void Execute(SourceProductionContext context, TestCollectionDataModel testCollection)
    {
        foreach (var model in testCollection.TestSourceDataModels)
        {
            var className = $"{model.MethodName}_{model.MinimalTypeName}_{Guid.NewGuid():N}";

            using var sourceBuilder = new SourceCodeWriter();

            sourceBuilder.WriteLine("// <auto-generated/>");
            sourceBuilder.WriteLine("using global::System.Linq;");
            sourceBuilder.WriteLine("using global::System.Reflection;");
            sourceBuilder.WriteLine("using global::System.Runtime.CompilerServices;");
            sourceBuilder.WriteLine("using global::TUnit.Core;");
            sourceBuilder.WriteLine("using global::TUnit.Core.Helpers;");
            sourceBuilder.WriteLine("using global::TUnit.Core.Interfaces;");
            sourceBuilder.WriteLine("using global::TUnit.Engine;");
            sourceBuilder.WriteLine("using global::TUnit.Engine.Data;");
            sourceBuilder.WriteLine("using global::TUnit.Engine.Helpers;");
            sourceBuilder.WriteLine("using global::TUnit.Engine.Hooks;");
            sourceBuilder.WriteLine();
            sourceBuilder.WriteLine("namespace TUnit.Engine;");
            sourceBuilder.WriteLine();
            sourceBuilder.WriteLine("[System.Diagnostics.CodeAnalysis.ExcludeFromCodeCoverage]");
            sourceBuilder.WriteLine($"file class {className}");
            sourceBuilder.WriteLine("{");
            sourceBuilder.WriteLine("[ModuleInitializer]");
            sourceBuilder.WriteLine("public static void Initialise()");
            sourceBuilder.WriteLine("{");
            
            if(model.IsEnumerableClassArguments)
            {
                sourceBuilder.WriteLine($"var {VariableNames.EnumerableClassDataIndex} = 0;");
            }

            if(model.IsEnumerableMethodArguments)
            {
                sourceBuilder.WriteLine($"var {VariableNames.EnumerableTestDataIndex} = 0;");
            }

            sourceBuilder.WriteLine("try");
            sourceBuilder.WriteLine("{");
            GenericTestInvocationWriter.GenerateTestInvocationCode(sourceBuilder, model);
            sourceBuilder.WriteLine("}");
            sourceBuilder.WriteLine("catch (Exception exception)");
            sourceBuilder.WriteLine("{");
            sourceBuilder.WriteLine($"TestDictionary.RegisterFailedTest($\"{model.TestId}\", new FailedInitializationTest");
            sourceBuilder.WriteLine("{");
            FailedTestInitializationWriter.GenerateFailedTestCode(sourceBuilder, model);
            sourceBuilder.WriteLine("});");
            sourceBuilder.WriteLine("}");
            
            sourceBuilder.WriteLine("}");
            sourceBuilder.WriteLine("}");

            context.AddSource($"{className}.Generated.cs", sourceBuilder.ToString());
        }
    }
}
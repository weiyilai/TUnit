﻿using System.Runtime.CompilerServices;
using TUnit.Assertions.AssertConditions;
using TUnit.Assertions.AssertConditions.Interfaces;
using TUnit.Assertions.AssertionBuilders;
using TUnit.Assertions.AssertionBuilders.Wrappers;
using TUnit.Assertions.Assertions.Generics.Conditions;

namespace TUnit.Assertions.Extensions;

public static class GenericIsNotExtensions
{
    public static GenericNotEqualToAssertionBuilderWrapper<TActual> IsNotEqualTo<TActual>(this IValueSource<TActual> valueSource, TActual expected, [CallerArgumentExpression(nameof(expected))] string? doNotPopulateThisValue = null) 
    {
        var assertionBuilder = valueSource.RegisterAssertion(new NotEqualsExpectedValueAssertCondition<TActual>(expected)
            , [doNotPopulateThisValue]);
        
        return new GenericNotEqualToAssertionBuilderWrapper<TActual>(assertionBuilder);
    }
    
    public static NotNullAssertionBuilderWrapper<TActual> IsNotNull<TActual>(this IValueSource<TActual?> valueSource) where TActual : class
    {
        return new NotNullAssertionBuilderWrapper<TActual>(valueSource.RegisterConversionAssertion(new NotNullExpectedValueAssertCondition<TActual?>(), []));
    }

    public static NotNullStructAssertionBuilderWrapper<TActual> IsNotNull<TActual>(this IValueSource<TActual?> valueSource) where TActual : struct
    {
        return new NotNullStructAssertionBuilderWrapper<TActual>(
            valueSource.RegisterConversionAssertion(new NotNullStructExpectedValueAssertCondition<TActual>(), [])
        );
    }

    public static InvokableValueAssertionBuilder<TActual> IsNotEquatableOrEqualTo<TActual>(this IValueSource<TActual> valueSource, TActual expected, [CallerArgumentExpression(nameof(expected))] string? doNotPopulateThisValue = null)
    {
        return valueSource.RegisterAssertion(new NotEqualsExpectedValueAssertCondition<TActual>(expected)
            , [doNotPopulateThisValue]);
    }
    
    public static InvokableValueAssertionBuilder<TActual> IsNotSameReferenceAs<TActual, TExpected>(this IValueSource<TActual> valueSource, TExpected expected, [CallerArgumentExpression(nameof(expected))] string? doNotPopulateThisValue1 = null)
    {
        return valueSource.RegisterAssertion(new NotSameReferenceExpectedValueAssertCondition<TActual, TExpected>(expected)
            , [doNotPopulateThisValue1]);
    }
    
    public static InvokableValueAssertionBuilder<TActual> IsDefault<TActual>(this IValueSource<TActual> valueSource)
    {
        return valueSource.RegisterAssertion(new DefaultExpectedValueAssertCondition<TActual>()
            , []);
    }
    
    public static InvokableValueAssertionBuilder<TActual> IsNotDefault<TActual>(this IValueSource<TActual> valueSource)
    {
        return valueSource.RegisterAssertion(new NotDefaultExpectedValueAssertCondition<TActual>()
            , []);
    }
}
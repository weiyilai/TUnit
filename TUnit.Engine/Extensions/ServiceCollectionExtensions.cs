﻿using Microsoft.Extensions.DependencyInjection;

namespace TUnit.Engine.Extensions;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddTestEngineServices(this IServiceCollection services)
    {
        return services.AddSingleton<MethodInvoker>()
            .AddSingleton<TestDataSourceRetriever>()
            .AddSingleton<ClassLoader>()
            .AddSingleton<Disposer>()
            .AddSingleton<CacheableAssemblyLoader>()
            .AddSingleton(new ConsoleInterceptor())
            .AddSingleton<TestsLoader>()
            .AddSingleton<AsyncTestRunExecutor>()
            .AddSingleton<TestCollector>()
            .AddSingleton<SourceLocationRetriever>()
            .AddSingleton<ReflectionMetadataProvider>()
            .AddSingleton<TUnitTestFilterProvider>()
            .AddSingleton<TestClassCreator>()
            .AddSingleton<TestMethodRetriever>()
            .AddSingleton<TestGrouper>()
            .AddSingleton<CombinativeSolver>()
            .AddSingleton<SingleTestExecutor>()
            .AddSingleton<SystemResourceMonitor>();
    }
}
![](assets/banner.png)

# TUnit

A .NET testing framework built on [Microsoft.Testing.Platform](https://learn.microsoft.com/en-us/testing-platform/), with source-generated tests, parallel execution by default, and Native AOT support.

<div align="center">

[![thomhurst%2FTUnit | Trendshift](https://trendshift.io/api/badge/repositories/11781)](https://trendshift.io/repositories/11781)


[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a8231644d844435eb9fd15110ea771d8)](https://app.codacy.com/gh/thomhurst/TUnit?utm_source=github.com&utm_medium=referral&utm_content=thomhurst/TUnit&utm_campaign=Badge_Grade)![GitHub Repo stars](https://img.shields.io/github/stars/thomhurst/TUnit) ![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-closed-raw/thomhurst/TUnit)
 [![GitHub Sponsors](https://img.shields.io/github/sponsors/thomhurst)](https://github.com/sponsors/thomhurst) [![nuget](https://img.shields.io/nuget/v/TUnit.svg)](https://www.nuget.org/packages/TUnit/) [![NuGet Downloads](https://img.shields.io/nuget/dt/TUnit)](https://www.nuget.org/packages/TUnit/) ![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/thomhurst/TUnit/dotnet.yml) ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/thomhurst/TUnit/main) ![License](https://img.shields.io/github/license/thomhurst/TUnit)

</div>

## Features

- **Compile-time test discovery** — tests are generated at build time rather than discovered via reflection at runtime, which means faster startup and better IDE integration
- **Parallel by default** — tests run concurrently; use `[DependsOn]` to express ordering and `[ParallelLimiter]` to cap concurrency
- **Data-driven testing** — `[Arguments]`, `[Matrix]`, `[ClassData]`, and custom `DataSourceGenerator<T>` sources
- **Fluent async assertions** with detailed failure messages
- **Built-in Roslyn analyzers** — catch mistakes at compile time, such as missing `async`, incorrect hook signatures, and invalid attribute combinations
- **Extensible** — write custom skip conditions, retry logic, and attributes without touching the framework itself
- **Native AOT & trimming support**
- **Dependency injection** with lifecycle hooks (`[Before]` / `[After]` at method, class, assembly, or test session scope)

## Getting Started

### Using the Project Template (Recommended)
```bash
dotnet new install TUnit.Templates
dotnet new TUnit -n "MyTestProject"
```

### Manual Installation
```bash
dotnet add package TUnit
```

📖 [Getting Started Guide](https://tunit.dev/docs/getting-started/installation) · [Migration Guides](https://tunit.dev/docs/migration/xunit)

## Examples

### Basic test with assertions

```csharp
[Test]
public async Task Parsing_A_Valid_Date_Succeeds()
{
    var date = DateTime.Parse("2025-01-01");

    await Assert.That(date.Year).IsEqualTo(2025);
    await Assert.That(date.Month).IsEqualTo(1);
}
```

### Data-driven tests

```csharp
[Test]
[Arguments("user1@test.com", "ValidPassword123")]
[Arguments("user2@test.com", "AnotherPassword456")]
[Arguments("admin@test.com", "AdminPass789")]
public async Task User_Login_Should_Succeed(string email, string password)
{
    var result = await authService.LoginAsync(email, password);
    await Assert.That(result.IsSuccess).IsTrue();
}

// Matrix — generates a test for every combination (9 total here)
[Test]
[MatrixDataSource]
public async Task Database_Operations_Work(
    [Matrix("Create", "Update", "Delete")] string operation,
    [Matrix("User", "Product", "Order")] string entity)
{
    await Assert.That(await ExecuteOperation(operation, entity))
        .IsTrue();
}
```

### Test dependencies and ordering

```csharp
[Before(Class)]
public static async Task SetupDatabase(ClassHookContext context)
{
    await DatabaseHelper.InitializeAsync();
}

[Test]
[MethodDataSource(nameof(GetTestUsers))]
public async Task Register_User(string username, string password) { ... }

[Test, DependsOn(nameof(Register_User))]
[Retry(3)]
public async Task Login_With_Registered_User(string username, string password)
{
    // Guaranteed to run after Register_User passes
}
```

### Custom attributes

TUnit lets you build your own skip conditions and retry logic by extending built-in base classes:

```csharp
public class WindowsOnlyAttribute : SkipAttribute
{
    public WindowsOnlyAttribute() : base("Windows only") { }

    public override Task<bool> ShouldSkip(TestContext testContext)
        => Task.FromResult(!OperatingSystem.IsWindows());
}

public class RetryOnServiceUnavailableAttribute : RetryAttribute
{
    public RetryOnServiceUnavailableAttribute(int times) : base(times) { }

    public override Task<bool> ShouldRetry(TestInformation testInformation,
        Exception exception, int currentRetryCount)
        => Task.FromResult(exception is HttpRequestException { StatusCode: HttpStatusCode.ServiceUnavailable });
}
```

Then use them like any other attribute:

```csharp
[Test, WindowsOnly, RetryOnServiceUnavailable(5)]
public async Task Windows_Specific_Feature() { ... }
```

## IDE Support

| IDE | Notes |
|-----|-------|
| **Visual Studio 2022 (17.13+)** | Works out of the box |
| **Visual Studio 2022 (earlier)** | Enable "Use testing platform server mode" in Tools > Manage Preview Features |
| **JetBrains Rider** | Enable "Testing Platform support" in Settings > Build, Execution, Deployment > Unit Testing > Testing Platform |
| **VS Code** | Install [C# Dev Kit](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit) and enable "Use Testing Platform Protocol" |
| **CLI** | Works with `dotnet test`, `dotnet run`, and direct execution |

## Packages

| Package | Purpose |
|---------|---------|
| `TUnit` | Start here — the full framework (Core + Engine + Assertions) |
| `TUnit.Core` | Shared test library components without an execution engine |
| `TUnit.Engine` | Execution engine for test projects |
| `TUnit.Assertions` | Standalone assertions — works with other test frameworks too |
| `TUnit.Playwright` | Playwright integration with automatic browser lifecycle management |

## Migrating from xUnit, NUnit, or MSTest?

The syntax will feel familiar. For example, xUnit's `[Fact]` becomes `[Test]`, and `[Theory]` + `[InlineData]` becomes `[Test]` + `[Arguments]`. See the [Migration Guides](https://tunit.dev/docs/migration/xunit) for full details.

## Community

- [Documentation](https://tunit.dev) — guides, tutorials, and API reference
- [GitHub Discussions](https://github.com/thomhurst/TUnit/discussions) — questions and ideas welcome
- [Issues](https://github.com/thomhurst/TUnit/issues) — bug reports and feature requests
- [Changelog](https://github.com/thomhurst/TUnit/releases)

## Performance Benchmarks

The following benchmarks compare TUnit against NUnit, MSTest, and xUnit 3 across a range of scenarios, running on .NET 10.

### Scenario: Building the test project

```

BenchmarkDotNet v0.15.6, Linux Ubuntu 24.04.3 LTS (Noble Numbat)
AMD EPYC 7763 2.45GHz, 1 CPU, 4 logical and 2 physical cores
.NET SDK 10.0.100-rc.2.25502.107
  [Host]     : .NET 10.0.0 (10.0.0-rc.2.25502.107, 10.0.25.50307), X64 RyuJIT x86-64-v3
  Job-GVKUBM : .NET 10.0.0 (10.0.0-rc.2.25502.107, 10.0.25.50307), X64 RyuJIT x86-64-v3

Runtime=.NET 10.0  

```
| Method       | Version | Mean    | Error    | StdDev   | Median  |
|------------- |-------- |--------:|---------:|---------:|--------:|
| Build_TUnit  | 1.0.48  | 1.798 s | 0.0345 s | 0.0424 s | 1.785 s |
| Build_NUnit  | 4.4.0   | 1.575 s | 0.0169 s | 0.0158 s | 1.573 s |
| Build_MSTest | 4.0.1   | 1.659 s | 0.0150 s | 0.0140 s | 1.658 s |
| Build_xUnit3 | 3.2.0   | 1.579 s | 0.0182 s | 0.0170 s | 1.575 s |


### Scenario: Tests running asynchronous operations and async/await patterns

```

BenchmarkDotNet v0.15.6, Linux Ubuntu 24.04.3 LTS (Noble Numbat)
AMD EPYC 7763 2.45GHz, 1 CPU, 4 logical and 2 physical cores
.NET SDK 10.0.100-rc.2.25502.107
  [Host]     : .NET 10.0.0 (10.0.0-rc.2.25502.107, 10.0.25.50307), X64 RyuJIT x86-64-v3
  Job-GVKUBM : .NET 10.0.0 (10.0.0-rc.2.25502.107, 10.0.25.50307), X64 RyuJIT x86-64-v3

Runtime=.NET 10.0  

```
| Method    | Version | Mean     | Error    | StdDev   | Median   |
|---------- |-------- |---------:|---------:|---------:|---------:|
| TUnit     | 1.0.48  | 562.4 ms |  4.18 ms |  3.91 ms | 561.0 ms |
| NUnit     | 4.4.0   | 679.2 ms |  7.24 ms |  6.41 ms | 679.6 ms |
| MSTest    | 4.0.1   | 647.7 ms |  8.63 ms |  7.65 ms | 647.8 ms |
| xUnit3    | 3.2.0   | 744.4 ms | 11.90 ms | 10.55 ms | 741.5 ms |
| TUnit_AOT | 1.0.48  | 127.6 ms |  0.45 ms |  0.42 ms | 127.6 ms |


### Scenario: Parameterized tests with multiple test cases using data attributes

```

BenchmarkDotNet v0.15.6, Linux Ubuntu 24.04.3 LTS (Noble Numbat)
AMD EPYC 7763 2.45GHz, 1 CPU, 4 logical and 2 physical cores
.NET SDK 10.0.100-rc.2.25502.107
  [Host]     : .NET 10.0.0 (10.0.0-rc.2.25502.107, 10.0.25.50307), X64 RyuJIT x86-64-v3
  Job-GVKUBM : .NET 10.0.0 (10.0.0-rc.2.25502.107, 10.0.25.50307), X64 RyuJIT x86-64-v3

Runtime=.NET 10.0  

```
| Method    | Version | Mean      | Error     | StdDev    | Median    |
|---------- |-------- |----------:|----------:|----------:|----------:|
| TUnit     | 1.0.48  | 476.97 ms |  5.430 ms |  5.080 ms | 478.26 ms |
| NUnit     | 4.4.0   | 537.80 ms |  6.692 ms |  6.260 ms | 537.55 ms |
| MSTest    | 4.0.1   | 496.84 ms |  9.188 ms |  8.145 ms | 496.37 ms |
| xUnit3    | 3.2.0   | 584.15 ms | 10.733 ms | 10.039 ms | 582.13 ms |
| TUnit_AOT | 1.0.48  |  24.65 ms |  0.177 ms |  0.157 ms |  24.68 ms |


### Scenario: Tests executing massively parallel workloads with CPU-bound, I/O-bound, and mixed operations

```

BenchmarkDotNet v0.15.6, Linux Ubuntu 24.04.3 LTS (Noble Numbat)
AMD EPYC 7763 2.45GHz, 1 CPU, 4 logical and 2 physical cores
.NET SDK 10.0.100-rc.2.25502.107
  [Host]     : .NET 10.0.0 (10.0.0-rc.2.25502.107, 10.0.25.50307), X64 RyuJIT x86-64-v3
  Job-GVKUBM : .NET 10.0.0 (10.0.0-rc.2.25502.107, 10.0.25.50307), X64 RyuJIT x86-64-v3

Runtime=.NET 10.0  

```
| Method    | Version | Mean       | Error    | StdDev   | Median     |
|---------- |-------- |-----------:|---------:|---------:|-----------:|
| TUnit     | 1.0.48  |   578.1 ms |  5.79 ms |  5.13 ms |   577.3 ms |
| NUnit     | 4.4.0   | 1,220.5 ms |  7.43 ms |  6.20 ms | 1,220.9 ms |
| MSTest    | 4.0.1   | 3,005.3 ms | 13.91 ms | 12.33 ms | 3,003.4 ms |
| xUnit3    | 3.2.0   | 3,096.0 ms | 11.11 ms | 10.40 ms | 3,094.6 ms |
| TUnit_AOT | 1.0.48  |   130.6 ms |  0.39 ms |  0.36 ms |   130.7 ms |


### Scenario: Tests with complex parameter combinations creating 25-125 test variations

```

BenchmarkDotNet v0.15.6, Linux Ubuntu 24.04.3 LTS (Noble Numbat)
AMD EPYC 7763 2.45GHz, 1 CPU, 4 logical and 2 physical cores
.NET SDK 10.0.100-rc.2.25502.107
  [Host]     : .NET 10.0.0 (10.0.0-rc.2.25502.107, 10.0.25.50307), X64 RyuJIT x86-64-v3
  Job-GVKUBM : .NET 10.0.0 (10.0.0-rc.2.25502.107, 10.0.25.50307), X64 RyuJIT x86-64-v3

Runtime=.NET 10.0  

```
| Method    | Version | Mean        | Error    | StdDev   | Median      |
|---------- |-------- |------------:|---------:|---------:|------------:|
| TUnit     | 1.0.48  |   544.97 ms | 5.561 ms | 4.930 ms |   544.99 ms |
| NUnit     | 4.4.0   | 1,540.60 ms | 5.644 ms | 4.713 ms | 1,540.91 ms |
| MSTest    | 4.0.1   | 1,499.17 ms | 4.590 ms | 3.833 ms | 1,499.42 ms |
| xUnit3    | 3.2.0   | 1,591.72 ms | 6.560 ms | 6.136 ms | 1,592.55 ms |
| TUnit_AOT | 1.0.48  |    79.41 ms | 0.252 ms | 0.236 ms |    79.48 ms |


### Scenario: Large-scale parameterized tests with 100+ test cases testing framework scalability

```

BenchmarkDotNet v0.15.6, Linux Ubuntu 24.04.3 LTS (Noble Numbat)
AMD EPYC 7763 2.45GHz, 1 CPU, 4 logical and 2 physical cores
.NET SDK 10.0.100-rc.2.25502.107
  [Host]     : .NET 10.0.0 (10.0.0-rc.2.25502.107, 10.0.25.50307), X64 RyuJIT x86-64-v3
  Job-GVKUBM : .NET 10.0.0 (10.0.0-rc.2.25502.107, 10.0.25.50307), X64 RyuJIT x86-64-v3

Runtime=.NET 10.0  

```
| Method    | Version | Mean      | Error     | StdDev    | Median    |
|---------- |-------- |----------:|----------:|----------:|----------:|
| TUnit     | 1.0.48  | 498.22 ms |  7.188 ms |  6.723 ms | 496.45 ms |
| NUnit     | 4.4.0   | 584.65 ms | 11.669 ms | 11.461 ms | 582.38 ms |
| MSTest    | 4.0.1   | 580.53 ms | 11.233 ms | 15.747 ms | 583.58 ms |
| xUnit3    | 3.2.0   | 587.89 ms |  8.750 ms |  7.757 ms | 586.15 ms |
| TUnit_AOT | 1.0.48  |  46.75 ms |  1.442 ms |  4.253 ms |  47.33 ms |




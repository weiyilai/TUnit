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

${{ BENCHMARK }}

using TUnit.Core.SourceGenerator.CodeGenerators;
using TUnit.Core.SourceGenerator.Tests.Options;

namespace TUnit.Core.SourceGenerator.Tests.Bugs._1899;

internal class Tests1899 : TestsBase<TestHooksGenerator>
{
    [Test]
    public Task Test() => RunTest(Path.Combine(Git.RootDirectory.FullName,
            "TUnit.TestProject",
            "Bugs",
            "1899",
            "DerivedTest.cs"),
        new RunTestOptions
        {
            VerifyConfigurator = settingsTask => settingsTask.ScrubLinesContaining("TestFilePath = ")
        },
        async generatedFiles =>
        {
            await Assert.That(generatedFiles.Length).IsEqualTo(0);
        });
    
    [Test]
    public Task BaseClass() => RunTest(Path.Combine(Git.RootDirectory.FullName,
            "TUnit.TestProject.Library",
            "Bugs",
            "1899",
            "BaseClass.cs"),
        new RunTestOptions
        {
            VerifyConfigurator = settingsTask => settingsTask.ScrubLinesContaining("TestFilePath = ")
        },
        async generatedFiles =>
        {
            await Assert.That(generatedFiles.Length).IsEqualTo(1);
        });
}
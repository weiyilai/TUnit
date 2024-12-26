"use strict";(self.webpackChunktunit_docs_site=self.webpackChunktunit_docs_site||[]).push([[5803],{2338:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"comparison/framework-differences","title":"Framework Differences","description":"TUnit is inspired by NUnit and xUnit, and first and foremost I want to say that these are amazing frameworks and no hate to them.","source":"@site/docs/comparison/framework-differences.md","sourceDirName":"comparison","slug":"/comparison/framework-differences","permalink":"/TUnit/docs/comparison/framework-differences","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Attributes","permalink":"/TUnit/docs/comparison/attributes"},"next":{"title":"Extensions","permalink":"/TUnit/docs/category/extensions"}}');var i=s(4848),a=s(8453);const r={sidebar_position:2},o="Framework Differences",l={},c=[{value:"xUnit",id:"xunit",level:2},{value:"Async tests parallel limit",id:"async-tests-parallel-limit",level:3},{value:"Set up and tear downs",id:"set-up-and-tear-downs",level:3},{value:"Assembly level hooks",id:"assembly-level-hooks",level:3},{value:"TestContext",id:"testcontext",level:3},{value:"Assertions",id:"assertions",level:3},{value:"NUnit",id:"nunit",level:2},{value:"Shared test class instances",id:"shared-test-class-instances",level:3},{value:"Setting properties based off of dynamically injected data",id:"setting-properties-based-off-of-dynamically-injected-data",level:3},{value:"Assembly &amp; class level attributes",id:"assembly--class-level-attributes",level:3},{value:"Assertions",id:"assertions-1",level:3},{value:"Other",id:"other",level:2},{value:"Source generated + Native AOT Support + Single File Support",id:"source-generated--native-aot-support--single-file-support",level:3},{value:"More lifecycle hooks",id:"more-lifecycle-hooks",level:3},{value:"Test dependencies",id:"test-dependencies",level:3},{value:"Class Arguments",id:"class-arguments",level:3}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"framework-differences",children:"Framework Differences"})}),"\n",(0,i.jsx)(t.p,{children:"TUnit is inspired by NUnit and xUnit, and first and foremost I want to say that these are amazing frameworks and no hate to them.\nSo you'll be asking why use TUnit instead of them, right?\nHere are some things I've stumbled across in the past that I've found limiting when writing a test suite."}),"\n",(0,i.jsx)(t.h2,{id:"xunit",children:"xUnit"}),"\n",(0,i.jsx)(t.h3,{id:"async-tests-parallel-limit",children:"Async tests parallel limit"}),"\n",(0,i.jsxs)(t.p,{children:["xUnit gives you a way to limit the 'thread count' - but this doesn't map 1-to-1 to async tests. 1 thread can run multiple async tests when they yield, and that means limiting the thread count doesn't limit the test count. This can be problematic in certain scenarios. For example, running UI tests, you might want to limit the number of concurrent tests because spawning up too many browser instances overwhelms your system. With TUnit, you can pass in a CLI flag to limit the number of concurrent tests: ",(0,i.jsx)(t.code,{children:"--maximum-parallel-tests 8"})]}),"\n",(0,i.jsx)(t.h3,{id:"set-up-and-tear-downs",children:"Set up and tear downs"}),"\n",(0,i.jsxs)(t.p,{children:["Set ups and tear-downs work largely off of constructors and the ",(0,i.jsx)(t.code,{children:"IDisposable"})," interface (TUnit can do this too if you like this pattern). If you have async requirements, you can implement an ",(0,i.jsx)(t.code,{children:"IAsyncLifetime"})," interface. While some people like this approach as its familiar, things get messier when your classes rely on inheritance. If your base class uses these interfaces, you have to then hide the base members, implement your version, and then call the base method manually. Also with tear downs, if you want to guarantee execution of multiple pieces of code, you can't implement the interface multiple times. So you end up having to do lots of try/catches. In TUnit, you can declare multiple methods with ",(0,i.jsx)(t.code,{children:"[After(Test)]"})," attributes, and they are all guaranteed to run, even if a previous one failed. And it'll lazily aggregate and throw any exceptions after they've all run. On top of this, any set ups and tear downs are collected all the way down to the base class, and run in an order than means members are initialised and cleaned up that makes sense:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"For set ups, that means base set up methods are run first, and then the subsequent inherited class's methods"}),"\n",(0,i.jsx)(t.li,{children:"For clean ups, the top most clean ups are run first, and then the subsequent base methods"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"assembly-level-hooks",children:"Assembly level hooks"}),"\n",(0,i.jsxs)(t.p,{children:["There isn't a simplistic way to do something on starting an assembly's tests. For example, we might want to spin up 1 in-memory server to run some tests against. TUnit supports this with a simple static class, with a method containing the attribute ",(0,i.jsx)(t.code,{children:"[Before(Assembly)]"}),". Tear down is as simple as another method with ",(0,i.jsx)(t.code,{children:"[After(Assembly)]"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"testcontext",children:"TestContext"}),"\n",(0,i.jsxs)(t.p,{children:["Sometimes we want to access information about the state of a test. For example, when running UI tests, I like to take a screenshot on a test failure, so I can more easily see what went wrong. xUnit does not have a native way of determining if a test failed when you're in a tear down method. With TUnit, you can inject in a ",(0,i.jsx)(t.code,{children:"TestContext"})," object into your tear down method, or you can call the static ",(0,i.jsx)(t.code,{children:"TestContext.Current"})," static method."]}),"\n",(0,i.jsx)(t.h3,{id:"assertions",children:"Assertions"}),"\n",(0,i.jsx)(t.p,{children:"xUnit assertions are fairly basic and have the problem of it being unclear which argument goes in which position, without sifting through intellisense/documentation."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:"var one = 2;\nAssert.Equal(1, one)\nAssert.Equal(one, 1)\n"})}),"\n",(0,i.jsx)(t.h2,{id:"nunit",children:"NUnit"}),"\n",(0,i.jsx)(t.h3,{id:"shared-test-class-instances",children:"Shared test class instances"}),"\n",(0,i.jsxs)(t.p,{children:["This one has bitten me so many times, and I've seen it bite many others too. And a lot of people don't even know it. But the default behaviour of NUnit is to run all your tests within a class, against a single instance of that class. That means if you're storing state in fields/properties, they're going to be left over from previous tests.\nThis is what I call leaky test states, and I am firmly against it. Tests should be isolated from one another and really unable to affect one another. So TUnit by design runs every test against a new instance, and there is no way to change that because I consider it bad practice. If you want to share state in a field, then that's entirely possible by making it ",(0,i.jsx)(t.code,{children:"static"}),". By utilising the language instead, it makes it clear to anyone reading it whether multiple tests can access that."]}),"\n",(0,i.jsx)(t.h3,{id:"setting-properties-based-off-of-dynamically-injected-data",children:"Setting properties based off of dynamically injected data"}),"\n",(0,i.jsx)(t.p,{children:"I had a scenario in a multi-tenanted test suite where tests tests were repeated with different tenants injected in.\nLike this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:"[TestFixtureSource(typeof(Tenant), nameof(Tenant.AllTenants))]\npublic class MyTests(Tenant tenant)\n{\n    [Test]\n    public async Task Test1()\n    {\n        ...\n    }\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["With this, I wanted to be able to filter by the tenant. So I tried using a custom attribute with ",(0,i.jsx)(t.code,{children:"IApplyToTest"})," and setting a property based on the constructor argument. This didn't work. I think they're enumerated upon starting, and so you can't set this up beforehand. With TUnit, tests are enumerated and initialised via source-generation so this is all done up-front. So I could set a property in TUnit with an attribute with ",(0,i.jsx)(t.code,{children:"ITestDiscoveryEvent"}),", set a property based constructor arguments, and then run ",(0,i.jsx)(t.code,{children:"dotnet run --treenode-filter /*/*/*/*[Tenant=MyTenant]"})]}),"\n",(0,i.jsx)(t.h3,{id:"assembly--class-level-attributes",children:"Assembly & class level attributes"}),"\n",(0,i.jsxs)(t.p,{children:["Want to use the ",(0,i.jsx)(t.code,{children:"[Repeat]"})," or ",(0,i.jsx)(t.code,{children:"[Retry]"})," attributes on a class? Or even an assembly? You can't. They're only supported for test methods. With TUnit, most attributes are supported at Test, Class & Assembly levels. Test takes the highest priority, then class, then assembly. So you could set defaults with an assembly/class attribute, and then override it for certain tests by setting that same attribute on the test."]}),"\n",(0,i.jsx)(t.h3,{id:"assertions-1",children:"Assertions"}),"\n",(0,i.jsxs)(t.p,{children:["NUnit assertions largely influenced the way that TUnit assertions work. However, NUnit assertions do not have compile time checks. I could check if a string is negative (",(0,i.jsx)(t.code,{children:'NUnitAssert.That("String", Is.Negative);'}),") or if a boolean throws an exception (",(0,i.jsx)(t.code,{children:"NUnitAssert.That(true, Throws.ArgumentException);"}),"). These assertions don't make sense. There are analyzers to help catch these - But they will compile if these analyzers aren't run. TUnit assertions are built with the type system in mind (where possible!). Specific assertions are built via extensions to the relevant types, and not in a generic sense that could apply to anything. That means when you're using intellisense to see what methods you have available, you should only see assertions that are relevant for your type. This makes it harder to make mistakes, and decreases your feedback loop time."]}),"\n",(0,i.jsx)(t.h2,{id:"other",children:"Other"}),"\n",(0,i.jsx)(t.h3,{id:"source-generated--native-aot-support--single-file-support",children:"Source generated + Native AOT Support + Single File Support"}),"\n",(0,i.jsx)(t.p,{children:"As mentioned, TUnit is source generated. This should mean things are fast. And you can check out the generated code yourself! Because tests are source generated and not scanned via reflection, this means you can build your test projects using Native AOT or as a Single File application - Something that you can't current do with NUnit or xUnit."}),"\n",(0,i.jsx)(t.h3,{id:"more-lifecycle-hooks",children:"More lifecycle hooks"}),"\n",(0,i.jsx)(t.p,{children:"TUnit has tried to make it easy to hook into a range of lifecycles.\nThe attributes you can use on your hook methods are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"[Before(Test)]"})," - Run before every test in the class it's defined in"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"[After(Test)]"})," - Run after every test in the class it's defined in"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"[Before(Class)]"})," - Run once before all tests in the class it's defined in"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"[After(Class)]"})," - Run once after all tests in the class it's defined in"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"[Before(Assembly)]"})," - Run once before all tests in the assembly it's defined in"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"[After(Assembly)]"})," - Run once after all tests in the assembly it's defined in"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"[Before(TestSession)]"})," - Run once before all tests in the test run"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"[After(TestSession)]"})," - Run once after all tests in the test run"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"[Before(TestDiscovery)]"})," - Run once before any tests are discovered"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"[After(TestDiscovery)]"})," - Run once after all tests are discovered"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"[BeforeEvery(Test)]"})," - Run before every test in the test run"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"[AfterEvery(Test)]"})," - Run after every test in the test run"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"[BeforeEvery(Class)]"})," - Run before the first test in every class in the test run"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"[AfterEvery(Class)]"})," - Run after the last test in every class in the test run"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"[BeforeEvery(Assembly)]"})," - Run before the first test in every assembly in the test run"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"[AfterEvery(Assembly)]"})," - Run after the last test in every assembly in the test run"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["And all those hooks allow injecting in a relevant ",(0,i.jsx)(t.code,{children:"[HookType]Context"})," object - So you can interrogate it for information about the test run so far. Hopefully meeting the needs of most users!"]}),"\n",(0,i.jsx)(t.h3,{id:"test-dependencies",children:"Test dependencies"}),"\n",(0,i.jsxs)(t.p,{children:["Got tests that require another test to execute first?\nIn other frameworks it usually involves turning off parallelisation, then setting an ",(0,i.jsx)(t.code,{children:"[Order]"})," attribute with 1, 2, 3, etc.\nIn TUnit, you can use a ",(0,i.jsx)(t.code,{children:"[DependsOn(...)]"})," attribute. That test will wait to start, only once its dependencies have finished. And you don't have to turn off parallelisation of other tests!"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:"    [Test]\n    public async Task Test1()\n    {\n        ...\n    }\n    \n    [Test]\n    public async Task Test2()\n    {\n        ...\n    }\n    \n    [Test]\n    [DependsOn(nameof(Test1))]\n    [DependsOn(nameof(Test2))]\n    public async Task Test3()\n    {\n        ...\n    }\n"})}),"\n",(0,i.jsx)(t.h3,{id:"class-arguments",children:"Class Arguments"}),"\n",(0,i.jsxs)(t.p,{children:["A lot of the data injection mechanisms in xUnit/NUnit work for the method, or the class, and not vice-versa. With TUnit, you can use ",(0,i.jsx)(t.code,{children:"[Arguments(...)]"})," or ",(0,i.jsx)(t.code,{children:"[Matrix(...)]"})," or ",(0,i.jsx)(t.code,{children:"[MethodDataSource(...)]"})," etc. for both classes and test methods, making it super flexible!"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var n=s(6540);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
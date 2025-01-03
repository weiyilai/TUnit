"use strict";(self.webpackChunktunit_docs_site=self.webpackChunktunit_docs_site||[]).push([[7326],{747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"tutorial-basics/installing","title":"Installing TUnit","description":"First create an empty .NET console application:","source":"@site/docs/tutorial-basics/installing.md","sourceDirName":"tutorial-basics","slug":"/tutorial-basics/installing","permalink":"/TUnit/docs/tutorial-basics/installing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Tutorial - Basics","permalink":"/TUnit/docs/category/tutorial---basics"},"next":{"title":"Writing your first test","permalink":"/TUnit/docs/tutorial-basics/writing-your-first-test"}}');var r=n(4848),s=n(8453);const o={sidebar_position:1},a="Installing TUnit",l={},c=[{value:"Incompatibilities",id:"incompatibilities",level:2},{value:".NET Framework",id:"net-framework",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"installing-tunit",children:"Installing TUnit"})}),"\n",(0,r.jsx)(t.p,{children:"First create an empty .NET console application:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-powershell",children:"dotnet new console --name YourTestProjectNameHere\n"})}),"\n",(0,r.jsxs)(t.p,{children:["To that project add the ",(0,r.jsx)(t.code,{children:"TUnit"})," package:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-powershell",children:"cd YourTestProjectNameHere\ndotnet add package TUnit --prerelease\n"})}),"\n",(0,r.jsxs)(t.p,{children:["And then remove any automatically generated ",(0,r.jsx)(t.code,{children:"Program.cs"})," or main method, as this'll be taken care of by the TUnit package."]}),"\n",(0,r.jsx)(t.p,{children:"That's it. We're ready to write our first test."}),"\n",(0,r.jsxs)(t.p,{children:["Your ",(0,r.jsx)(t.code,{children:".csproj"})," should be as simple as something like:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'<Project Sdk="Microsoft.NET.Sdk">\n\n    <PropertyGroup>\n        <OutputType>Exe</OutputType>\n        <TargetFramework>net8.0</TargetFramework>\n        <ImplicitUsings>enable</ImplicitUsings>\n        <Nullable>enable</Nullable>\n    </PropertyGroup>\n\n    <ItemGroup>\n      <PackageReference Include="TUnit" VersionOverride="$(TUnitVersion)" />\n    </ItemGroup>\n\n</Project>\n'})}),"\n",(0,r.jsx)(t.h2,{id:"incompatibilities",children:"Incompatibilities"}),"\n",(0,r.jsxs)(t.p,{children:["If you're used to other testing frameworks, you're probably used to the package ",(0,r.jsx)(t.code,{children:"Microsoft.NET.Test.Sdk"}),".\nThis should NOT be used with TUnit. It'll stop test discovery from working properly."]}),"\n",(0,r.jsx)(t.h2,{id:"net-framework",children:".NET Framework"}),"\n",(0,r.jsxs)(t.p,{children:["If you are still targeting .NET Framework, TUnit will try to Polyfill some missing types that are used by the compiler, such as the ",(0,r.jsx)(t.code,{children:"ModuleInitialiserAttribute"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If you have issues with other Polyfill libraries also defining them, in your project files, you can define the property ",(0,r.jsx)(t.code,{children:"<EnableTUnitPolyfills>false</EnableTUnitPolyfills>"})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);
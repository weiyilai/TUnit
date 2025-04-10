"use strict";(self.webpackChunktunit_docs_site=self.webpackChunktunit_docs_site||[]).push([[6377],{1511:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"tutorial-advanced/logging","title":"Logging","description":"By default, TUnit will intercept any logs to the Console, and attempt to correlate them to the test that triggered that log by the current async context that it is in.","source":"@site/docs/tutorial-advanced/logging.md","sourceDirName":"tutorial-advanced","slug":"/tutorial-advanced/logging","permalink":"/docs/tutorial-advanced/logging","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"sidebar_position":20},"sidebar":"tutorialSidebar","previous":{"title":"Argument Formatters","permalink":"/docs/tutorial-advanced/argument-formatters"},"next":{"title":"Tutorial - Assertions","permalink":"/docs/category/tutorial---assertions"}}');var r=o(4848),s=o(8453);const i={sidebar_position:20},l="Logging",a={},c=[{value:"Logger Objects",id:"logger-objects",level:2},{value:"Log Level",id:"log-level",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"logging",children:"Logging"})}),"\n",(0,r.jsxs)(t.p,{children:["By default, TUnit will intercept any logs to the ",(0,r.jsx)(t.code,{children:"Console"}),", and attempt to correlate them to the test that triggered that log by the current async context that it is in."]}),"\n",(0,r.jsxs)(t.p,{children:["So for most scenarios, you can just rely on ",(0,r.jsx)(t.code,{children:"Console.WriteLine(...)"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"logger-objects",children:"Logger Objects"}),"\n",(0,r.jsxs)(t.p,{children:["If you want a logger object, you can call ",(0,r.jsx)(t.code,{children:"TestContext.GetDefaultLogger()"}),", which will give you a logger that will write output to that test's output writer."]}),"\n",(0,r.jsx)(t.p,{children:"This logger can also be used to map to other logging interfaces (e.g. Microsoft.Extensions.Logging), so that for example, Asp.NET web apps can log to your test's context, so that you have a cleaner, more isolated log output."}),"\n",(0,r.jsx)(t.h2,{id:"log-level",children:"Log Level"}),"\n",(0,r.jsxs)(t.p,{children:["TUnit will use the same log level as provided to the Microsoft.Testing.Platform, which is set on the command line when invoking the test suite. If not defined, the default log level should be ",(0,r.jsx)(t.code,{children:"Trace"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["If you want to override this, you can inherit from ",(0,r.jsx)(t.code,{children:"TUnitLogger"})," or ",(0,r.jsx)(t.code,{children:"DefaultLogger"})," and override the ",(0,r.jsx)(t.code,{children:"IsEnabled"})," method:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:" public override bool IsEnabled(LogLevel logLevel)\n{\n    return logLevel >= LogLevel.Error;\n}\n"})})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>l});var n=o(6540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
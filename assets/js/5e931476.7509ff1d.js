"use strict";(self.webpackChunktunit_docs_site=self.webpackChunktunit_docs_site||[]).push([[5533],{3077:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"tutorial-advanced/display-names","title":"Display Names","description":"If you want simple control over the name of a test, you can use the [DisplayName(...)] attribute.","source":"@site/docs/tutorial-advanced/display-names.md","sourceDirName":"tutorial-advanced","slug":"/tutorial-advanced/display-names","permalink":"/docs/tutorial-advanced/display-names","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"sidebar_position":15},"sidebar":"tutorialSidebar","previous":{"title":"Event Subscribing","permalink":"/docs/tutorial-advanced/event-subscribing"},"next":{"title":"Argument Formatters","permalink":"/docs/tutorial-advanced/argument-formatters"}}');var n=s(4848),r=s(8453);const i={sidebar_position:15},o="Display Names",c={},l=[{value:"Custom Logic",id:"custom-logic",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"display-names",children:"Display Names"})}),"\n",(0,n.jsxs)(t.p,{children:["If you want simple control over the name of a test, you can use the ",(0,n.jsx)(t.code,{children:"[DisplayName(...)]"})," attribute."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'    [Test]\n    [DisplayName("My first test!")]\n    public async Task Test()\n    {\n        ...\n    }\n'})}),"\n",(0,n.jsxs)(t.p,{children:["This is also able to reference parameters by using ",(0,n.jsx)(t.code,{children:"$parameterName"})," within the attribute."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-csharp",children:'    [Test]\n    [Arguments("foo", 1, true)]\n    [Arguments("bar", 2, false)]\n    [DisplayName("Test with: $value1 $value2 $value3!")]\n    public async Task Test3(string value1, int value2, bool value3)\n    {\n        ...\n    }\n'})}),"\n",(0,n.jsx)(t.p,{children:"The above would generate two test cases with their respective display name as:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'"Test with: foo 1 True"'}),"\n",(0,n.jsx)(t.li,{children:'"Test with: bar 2 False"'}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["If you have custom classes, you can combine this with ",(0,n.jsx)(t.a,{href:"/docs/tutorial-advanced/argument-formatters",children:"Argument Formatters"})," to specify how to show them."]}),"\n",(0,n.jsx)(t.h2,{id:"custom-logic",children:"Custom Logic"}),"\n",(0,n.jsxs)(t.p,{children:["If you want to have more control over how your test names are, you can create an attribute that inherits from ",(0,n.jsx)(t.code,{children:"DisplayNameFormatterAttribute"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["There you will find a method that you must override: ",(0,n.jsx)(t.code,{children:"FormatDisplayName"}),".\nHere you have access to all the arguments and test details via the ",(0,n.jsx)(t.code,{children:"TestContext"})," parameter."]}),"\n",(0,n.jsx)(t.p,{children:"Then simply add that custom attribute to your test."})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var a=s(6540);const n={},r=a.createContext(n);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);
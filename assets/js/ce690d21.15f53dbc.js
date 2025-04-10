"use strict";(self.webpackChunktunit_docs_site=self.webpackChunktunit_docs_site||[]).push([[6931],{9746:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"tutorial-advanced/order","title":"Ordering Tests","description":"It is recommended to use [DependsOn(...)] as it provides more flexibility and doesnt sacrifice parallelisation.","source":"@site/docs/tutorial-advanced/order.md","sourceDirName":"tutorial-advanced","slug":"/tutorial-advanced/order","permalink":"/docs/tutorial-advanced/order","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"sidebar_position":11},"sidebar":"tutorialSidebar","previous":{"title":"Depends On","permalink":"/docs/tutorial-advanced/depends-on"},"next":{"title":"Parallel Groups","permalink":"/docs/tutorial-advanced/parallel-groups"}}');var s=t(4848),o=t(8453);const i={sidebar_position:11},a="Ordering Tests",d={},l=[];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ordering-tests",children:"Ordering Tests"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"It is recommended to use [DependsOn(...)] as it provides more flexibility and doesnt sacrifice parallelisation."})}),"\n",(0,s.jsx)(n.p,{children:"By default, TUnit tests will run in parallel. This means there is no order and it doesn't make sense to be able to control that."}),"\n",(0,s.jsx)(n.p,{children:"However, if tests aren't running in parallel, they can absolutely be ordered, and this is necessary for some systems."}),"\n",(0,s.jsxs)(n.p,{children:["To control ordering, there is an ",(0,s.jsx)(n.code,{children:"Order"})," property on the ",(0,s.jsx)(n.code,{children:"[NotInParallel]"})," attribute."]}),"\n",(0,s.jsx)(n.p,{children:"Orders will execute from smallest to largest. So 1 first, then 2, then 3, etc."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"using TUnit.Core;\n\nnamespace MyTestProject;\n\npublic class MyTestClass\n{\n    [Test]\n    [NotInParallel(Order = 1)]\n    public async Task MyTest()\n    {\n        \n    }\n\n    [Test]\n    [NotInParallel(Order = 2)]\n    public async Task MyTest2()\n    {\n        \n    }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(6540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
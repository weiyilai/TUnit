"use strict";(self.webpackChunktunit_docs_site=self.webpackChunktunit_docs_site||[]).push([[6168],{7187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tutorial-assertions/or-conditions","title":"Or Conditions","description":"Similar to the And property, there is also the Or property.","source":"@site/docs/tutorial-assertions/or-conditions.md","sourceDirName":"tutorial-assertions","slug":"/tutorial-assertions/or-conditions","permalink":"/TUnit/docs/tutorial-assertions/or-conditions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Assertion Scopes","permalink":"/TUnit/docs/tutorial-assertions/scopes"},"next":{"title":"Type Checking","permalink":"/TUnit/docs/tutorial-assertions/type-checking"}}');var r=n(4848),o=n(8453);const i={sidebar_position:4},a="Or Conditions",c={},d=[];function l(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"or-conditions",children:"Or Conditions"})}),"\n",(0,r.jsxs)(t.p,{children:["Similar to the ",(0,r.jsx)(t.code,{children:"And"})," property, there is also the ",(0,r.jsx)(t.code,{children:"Or"})," property."]}),"\n",(0,r.jsx)(t.p,{children:"When using this, only one condition needs to pass:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-csharp",children:"    [Test]\n    [Repeat(100)]\n    public async Task MyTest()\n    {\n        int[] array = [1, 2];\n        var randomValue1 = Random.Shared.GetItems(array, 1).First();\n        var randomValue2 = Random.Shared.GetItems(array, 1).First();\n        \n        var result = Add(randomValue1, randomValue2);\n\n        await Assert.That(result)\n            .IsEqualTo(2)\n            .Or.IsEqualTo(3)\n            .Or.IsEqualTo(4);\n    }\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(6540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);
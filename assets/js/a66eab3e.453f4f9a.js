"use strict";(self.webpackChunktunit_docs_site=self.webpackChunktunit_docs_site||[]).push([[9372],{4057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"tutorial-assertions/delegates","title":"Delegates","description":"TUnit can execute your delegates for you, and this allows you to assert on the data returned (if any was) - Or on any exceptions thrown:","source":"@site/docs/tutorial-assertions/delegates.md","sourceDirName":"tutorial-assertions","slug":"/tutorial-assertions/delegates","permalink":"/TUnit/docs/tutorial-assertions/delegates","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Type Checking","permalink":"/TUnit/docs/tutorial-assertions/type-checking"},"next":{"title":"Assertion Groups","permalink":"/TUnit/docs/tutorial-assertions/assertion-groups"}}');var o=n(4848),r=n(8453);const a={sidebar_position:6},i="Delegates",c={},l=[];function u(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"delegates",children:"Delegates"})}),"\n",(0,o.jsx)(t.p,{children:"TUnit can execute your delegates for you, and this allows you to assert on the data returned (if any was) - Or on any exceptions thrown:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-csharp",children:"    [Test]\n    public async Task MyTest()\n    {\n        await Assert.That(() =>\n        {\n            // Do something here\n        }).ThrowsNothing();\n    }\n\n    // or\n\n    [Test]\n    public async Task MyTest()\n    {\n        await Assert.That(() =>\n        {\n            // Do something here\n        }).ThrowsException().OfType<ArgumentNullException>();\n    }\n\n    // or \n\n    [Test]\n    public async Task MyTest()\n    {\n        var argumentNullException = await Assert.ThrowsAsync<ArgumentNullException>(() =>\n        {\n            // Do something here\n            return Task.CompletedTask;\n        });\n    }\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(6540);const o={},r=s.createContext(o);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
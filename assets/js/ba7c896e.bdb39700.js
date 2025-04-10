"use strict";(self.webpackChunktunit_docs_site=self.webpackChunktunit_docs_site||[]).push([[8584],{2677:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"tutorial-basics/things-to-know","title":"Things to know","description":"TUnit has made some decisions by design. You may need to know about them:","source":"@site/docs/tutorial-basics/things-to-know.md","sourceDirName":"tutorial-basics","slug":"/tutorial-basics/things-to-know","permalink":"/docs/tutorial-basics/things-to-know","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"Matrix Tests","permalink":"/docs/tutorial-basics/matrix-tests"},"next":{"title":"Libraries","permalink":"/docs/tutorial-basics/libraries"}}');var a=t(4848),i=t(8453);const r={sidebar_position:7},o="Things to know",l={},c=[{value:"Parallelisation",id:"parallelisation",level:2},{value:"Test Classes and Instance Data",id:"test-classes-and-instance-data",level:2}];function d(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"things-to-know",children:"Things to know"})}),"\n",(0,a.jsx)(s.p,{children:"TUnit has made some decisions by design. You may need to know about them:"}),"\n",(0,a.jsx)(s.h2,{id:"parallelisation",children:"Parallelisation"}),"\n",(0,a.jsxs)(s.p,{children:["Tests are run in parallel by design. If you have operations you can't do in parallel, you'll need to add a ",(0,a.jsx)(s.code,{children:"[NotInParallel]"})," attribute to your test. That attribute can also take an ",(0,a.jsx)(s.code,{children:"Order"})," property, so you can control the ordering of your not in parallel tests."]}),"\n",(0,a.jsx)(s.h2,{id:"test-classes-and-instance-data",children:"Test Classes and Instance Data"}),"\n",(0,a.jsxs)(s.p,{children:["Classes are ",(0,a.jsx)(s.code,{children:"new"}),"ed up for each test within their class."]}),"\n",(0,a.jsx)(s.p,{children:"This is by design because tests should be stateless and side effect free."}),"\n",(0,a.jsx)(s.p,{children:"By doing this it enables parallelisation (for speed and throughput), and reduces bugs and side effects when there is stale data left over from previous tests. This is something I've experienced with NUnit before. I've seen test suites that were all green, and they were actually broken, because they were asserting against instance data that had been left over from previous tests."}),"\n",(0,a.jsx)(s.p,{children:"So if you have:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-csharp",children:"public class MyTests\n{\n    [Test]\n    public void MyTest1() { ... }\n\n    [Test]\n    public void MyTest2() { ... }\n}\n"})}),"\n",(0,a.jsxs)(s.p,{children:["Then ",(0,a.jsx)(s.code,{children:"MyTest1"})," and ",(0,a.jsx)(s.code,{children:"MyTest2"})," will have a different instance of ",(0,a.jsx)(s.code,{children:"MyTests"}),"."]}),"\n",(0,a.jsx)(s.p,{children:"This isn't that important unless you're storing state."}),"\n",(0,a.jsx)(s.p,{children:"So you can't do this:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-csharp",children:"public class MyTests\n{\n    private int _value;\n\n    [Test, NotInParallel]\n    public void MyTest1() { _value = 99; }\n\n    [Test, NotInParallel]\n    public async Task MyTest2() { await Assert.That(_value).IsEqualTo(99); }\n}\n"})}),"\n",(0,a.jsx)(s.p,{children:"The above will compile fine and run, but it will result in a failing test."}),"\n",(0,a.jsxs)(s.p,{children:["Because ",(0,a.jsx)(s.code,{children:"MyTests"})," in ",(0,a.jsx)(s.code,{children:"MyTest2"})," is different from ",(0,a.jsx)(s.code,{children:"MyTests"})," in ",(0,a.jsx)(s.code,{children:"MyTest1"}),", therefore the ",(0,a.jsx)(s.code,{children:"_value"})," field is a different reference."]}),"\n",(0,a.jsxs)(s.p,{children:["If you really want to perform a test like the above, you can make your field static, and then that field will persist across any instance. The ",(0,a.jsx)(s.code,{children:"static"})," keyword makes it clear to the user that data persists outside of instances."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-csharp",children:"public class MyTests\n{\n    private static int _value;\n\n    [Test, NotInParallel]\n    public void MyTest1() { _value = 99; }\n\n    [Test, NotInParallel]\n    public async Task MyTest2() { await Assert.That(_value).IsEqualTo(99); }\n}\n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>o});var n=t(6540);const a={},i=n.createContext(a);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);
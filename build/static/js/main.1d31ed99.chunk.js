(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{42:function(e,t){e.exports.sitesConfig={github:{url:"https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"},monster:{url:"https://www.monster.com"},jooble:{url:"https://cors-anywhere.herokuapp.com/https://jooble.org/api/",API_KEY:"34852776-0e67-43d5-92f3-87b38f1f01d4"}}},66:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(30),i=n.n(r),c=(n(66),n(25)),o=n(13),s=n(47),l=n.n(s),d=n(53),b=n(17),j=n(42),u=n.n(j),h=n(85),p=n(80),m=n(84),f=n(56),x=n(81),O=Object(a.createContext)(null),g=n(2);function v(){var e=Object(a.useContext)(O).firebase,t=e.auth().currentUser||{};return Object(g.jsx)(h.a,{bg:"dark",variant:"dark",children:Object(g.jsxs)(p.a,{children:[Object(g.jsxs)(h.a.Brand,{href:"#home",children:["Find Jobs Here ",t.displayName]}),Object(g.jsxs)(m.a,{inline:!0,children:[Object(g.jsx)(f.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),Object(g.jsx)(x.a,{variant:"outline-info",onClick:function(){return e.auth().signOut()},children:"Sign Out"})]})]})})}function w(){return Object(g.jsx)("footer",{style:{bottom:"0",backgroundColor:"#f5f5f5"},children:Object(g.jsx)(p.a,{className:"py-3 text-center",children:Object(g.jsx)("span",{className:"text-muted text-centered",children:"Created By Siddhant Rawat"})})})}var y=n(38),k=n(6),S=n(82);function C(e){var t=e.updateJobDetail,n=(e.updateJobTitle,e.updateJobLocation,Object(a.useState)({title:"",location:""})),r=Object(b.a)(n,2),i=r[0],c=r[1],o=function(e){c(Object(k.a)(Object(k.a)({},i),{},Object(y.a)({},e.target.name,e.target.value)))};return Object(g.jsx)(m.a,{className:"mb-4",onSubmit:function(e){e.preventDefault(),t(i)},children:Object(g.jsxs)(S.a,{children:[Object(g.jsx)(S.a.Prepend,{children:Object(g.jsx)(S.a.Text,{id:"basic-addon1",children:Object(g.jsx)("i",{className:"fas fa-search"})})}),Object(g.jsx)(f.a,{type:"text",value:i.title,name:"title",placeholder:"Search Jobs",className:"mr-sm-2",onChange:o}),Object(g.jsx)(S.a.Prepend,{children:Object(g.jsx)(S.a.Text,{id:"basic-addon1",children:Object(g.jsx)("i",{className:"fas fa-map-marker-alt"})})}),Object(g.jsx)(f.a,{type:"text",value:i.location,name:"location",placeholder:"Search Location",className:"mr-sm-2",onChange:o}),Object(g.jsx)(x.a,{type:"submit",variant:"outline-info",children:"Search"})]})})}var N=n(87),I=n(83),_=n(86);function T(e){var t=e.job,n=t.title,a=t.company,r=t.location,i=t.created_at,c=t.url,o=t.from,s=new Date(i);s="".concat(s.getDate()," ").concat(s.toLocaleString("default",{month:"long"}));var l="fab fa-".concat(o);return Object(g.jsxs)(_.a,{bg:"light",children:[Object(g.jsxs)(_.a.Body,{children:[Object(g.jsxs)(_.a.Title,{children:[n,Object(g.jsxs)("small",{className:"text-muted",children:[" ",Object(g.jsx)("i",{className:l})]})]}),Object(g.jsxs)(_.a.Text,{children:[Object(g.jsx)("i",{className:"fas fa-map-marker-alt"})," ",r,Object(g.jsx)("br",{}),Object(g.jsxs)("small",{className:"text-muted",children:[Object(g.jsx)("i",{className:"fas fa-building"})," ",a]})]})]}),Object(g.jsx)(_.a.Footer,{children:Object(g.jsxs)("small",{style:{alignItems:"center"},className:"d-flex justify-content-between text-muted",children:[Object(g.jsxs)("span",{className:"align-middle",children:[Object(g.jsx)("i",{className:"fas fa-calendar-alt"})," ",s]}),Object(g.jsx)("span",{className:"align-middle",children:Object(g.jsx)("a",{href:c,children:Object(g.jsx)(x.a,{variant:"light",size:"sm",children:"Apply"})})})]})})]})}function z(e){var t=e.jobs,n=0===t.length;return console.log("hasjobs",n),n?Object(g.jsx)(N.a,{variant:"info",children:"No data available right now."}):Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(I.a,{children:t.map((function(e){return Object(g.jsx)(T,{job:e},e.id)}))})})}n(72);function P(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)({title:"",location:""}),c=Object(b.a)(i,2),o=c[0],s=c[1],j=Object(a.useRef)(!0);Object(a.useEffect)((function(){j.current?(j.current=!1,h(o)):h(o)}),[o]);var h=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a,i,c,o,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(u.a.sitesConfig.github.url,"?description=").concat(t.title,"&location=").concat(t.location),console.log("githuburl",n),e.next=4,fetch(n,{method:"GET",headers:{"X-Requested-With":"XMLHttpRequest"}});case 4:return a=e.sent,e.next=7,a.json();case 7:return i=e.sent,c=m(i,"github"),o=c,s={keywords:""===t.title?"it":t.title,location:t.location,searchMode:1},e.next=13,fetch("".concat(u.a.sitesConfig.jooble.url).concat(u.a.sitesConfig.jooble.API_KEY),{method:"post",body:JSON.stringify(s)});case 13:return a=e.sent,e.next=16,a.json();case 16:i=e.sent,console.log("--",i),i=i.jobs,console.log("jb",i),c=m(i,"jooble"),o=o.concat(c),r(o);case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e,t){var n=e.map((function(e){return f(e,t)}));return console.log(n),n},f=function(e,t){var n={};return"github"===t?Object.assign(n,{from:"github",id:e.id,title:e.title,location:e.location,company:e.company,created_at:e.created_at,url:e.url}):"jooble"===t&&Object.assign(n,{from:"facebook",id:e.id,title:e.title,location:e.location,company:e.company,created_at:e.updated,url:e.link}),n};return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(v,{}),Object(g.jsxs)(p.a,{children:[Object(g.jsx)(C,{updateJobDetail:s}),Object(g.jsx)(z,{jobs:n})]}),Object(g.jsx)(w,{})]})}var A="/",E=n(11),L=n(10),J=L.b.div.withConfig({displayName:"feature__Container",componentId:"tjez54-0"})(["display:flex;flex-direction:column;border-bottom:8px solid #222;text-align:center;padding:165px 45px;"]),F=L.b.h1.withConfig({displayName:"feature__Title",componentId:"tjez54-1"})(["color:white;max-width:640px;font-size:50px;font-weight:500;margin:auto;@media (max-width:600px){font-size:35px;}"]),B=L.b.h2.withConfig({displayName:"feature__SubTitle",componentId:"tjez54-2"})(["color:white;font-size:26px;font-weight:normal;margin:16px auto;@media (max-width:600px){font-size:18px;}"]);function D(e){var t=e.children,n=Object(E.a)(e,["children"]);return Object(g.jsx)(J,Object(k.a)(Object(k.a)({},n),{},{children:t}))}D.Title=function(e){var t=e.children,n=Object(E.a)(e,["children"]);return Object(g.jsx)(F,Object(k.a)(Object(k.a)({},n),{},{children:t}))},D.SubTitle=function(e){var t=e.children,n=Object(E.a)(e,["children"]);return Object(g.jsx)(B,Object(k.a)(Object(k.a)({},n),{},{children:t}))};var q=L.b.div.withConfig({displayName:"form__Container",componentId:"t8epka-0"})(["display:flex;flex-direction:column;min-height:660px;background-color:rgba(0,0,0,0.75);border-radius:5px;width:100%;margin:auto;max-width:450px;padding:60px 68px 40px;margin-bottom:100px;"]),U=L.b.div.withConfig({displayName:"form__Error",componentId:"t8epka-1"})(["background:#e87c03;border-radius:4px;font-size:14px;margin:0 0 16px;color:white;padding:15px 20px;"]),H=L.b.form.withConfig({displayName:"form__Base",componentId:"t8epka-2"})(["display:flex;flex-direction:column;max-width:450px;width:100%;"]),G=L.b.h1.withConfig({displayName:"form__Title",componentId:"t8epka-3"})(["color:#fff;font-size:32px;font-weight:bold;margin-bottom:28px;"]),R=L.b.p.withConfig({displayName:"form__Text",componentId:"t8epka-4"})(["color:#737373;font-size:16px;font-weight:500;"]),W=L.b.p.withConfig({displayName:"form__TextSmall",componentId:"t8epka-5"})(["margin-top:10px;font-size:13px;line-height:normal;color:#8c8c8c;"]),K=Object(L.b)(c.b).withConfig({displayName:"form__Link",componentId:"t8epka-6"})(["color:#fff;text-decoration:none;&:hover{text-decoration:underline;}"]),X=L.b.input.withConfig({displayName:"form__Input",componentId:"t8epka-7"})(["background:#333;border-radius:4px;border:0;color:#fff;height:50px;line-height:50px;padding:5px 20px;margin-bottom:20px;&:last-of-type{margin-bottom:30px;}"]),M=L.b.button.withConfig({displayName:"form__Submit",componentId:"t8epka-8"})(["background:#e50914;border-radius:4px;font-size:16px;font-weight:bold;margin:24px 0 12px;padding:16px;border:0;color:white;cursor:pointer;&:disabled{opacity:0.5;}"]);function Y(e){var t=e.children,n=Object(E.a)(e,["children"]);return Object(g.jsx)(q,Object(k.a)(Object(k.a)({},n),{},{children:t}))}Y.Error=function(e){var t=e.children,n=Object(E.a)(e,["children"]);return Object(g.jsx)(U,Object(k.a)(Object(k.a)({},n),{},{children:t}))},Y.Title=function(e){var t=e.children,n=Object(E.a)(e,["children"]);return Object(g.jsx)(G,Object(k.a)(Object(k.a)({},n),{},{children:t}))},Y.Base=function(e){var t=e.children,n=Object(E.a)(e,["children"]);return Object(g.jsx)(H,Object(k.a)(Object(k.a)({},n),{},{children:t}))},Y.Text=function(e){var t=e.children,n=Object(E.a)(e,["children"]);return Object(g.jsx)(R,Object(k.a)(Object(k.a)({},n),{},{children:t}))},Y.TextSmall=function(e){var t=e.children,n=Object(E.a)(e,["children"]);return Object(g.jsx)(W,Object(k.a)(Object(k.a)({},n),{},{children:t}))},Y.Link=function(e){var t=e.children,n=Object(E.a)(e,["children"]);return Object(g.jsx)(K,Object(k.a)(Object(k.a)({},n),{},{children:t}))},Y.Input=function(e){var t=e.children,n=Object(E.a)(e,["children"]);return Object(g.jsx)(X,Object(k.a)(Object(k.a)({},n),{},{children:t}))},Y.Submit=function(e){var t=e.children,n=Object(E.a)(e,["children"]);return Object(g.jsx)(M,Object(k.a)(Object(k.a)({},n),{},{children:t}))};var Q=L.b.div.withConfig({displayName:"profiles__Container",componentId:"sc-1k5qu1e-0"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;margin:auto;max-width:80%;"]),V=L.b.h1.withConfig({displayName:"profiles__Title",componentId:"sc-1k5qu1e-1"})(["width:100%;color:#fff;font-size:48px;text-align:center;font-weight:500;"]),Z=L.b.ul.withConfig({displayName:"profiles__List",componentId:"sc-1k5qu1e-2"})(["padding:0;margin:0;display:flex;flex-direction:row;"]),$=L.b.p.withConfig({displayName:"profiles__Name",componentId:"sc-1k5qu1e-3"})(["color:#808080;text-overflow:ellipsis;font-size:16px;&:hover{font-weight:bold;color:#e5e5e5;}"]),ee=L.b.img.withConfig({displayName:"profiles__Picture",componentId:"sc-1k5qu1e-4"})(["width:100%;max-width:150px;height:auto;border:3px solid black;cursor:pointer;"]),te=L.b.li.withConfig({displayName:"profiles__Item",componentId:"sc-1k5qu1e-5"})(["max-height:200px;max-width:200px;list-style-type:none;text-align:center;margin-right:30px;&:hover > ","{border:3px solid white;}&:hover ","{font-weight:bold;color:white;}&:last-of-type{margin-right:0;}"],ee,$);function ne(e){var t=e.children,n=Object(E.a)(e,["children"]);return Object(g.jsx)(Q,Object(k.a)(Object(k.a)({},n),{},{children:t}))}ne.Title=function(e){var t=e.children,n=Object(E.a)(e,["children"]);return Object(g.jsx)(V,Object(k.a)(Object(k.a)({},n),{},{children:t}))},ne.List=function(e){var t=e.children,n=Object(E.a)(e,["children"]);return Object(g.jsx)(Z,Object(k.a)(Object(k.a)({},n),{},{children:t}))},ne.User=function(e){var t=e.children,n=Object(E.a)(e,["children"]);return Object(g.jsx)(te,Object(k.a)(Object(k.a)({},n),{},{children:t}))},ne.Name=function(e){var t=e.children,n=Object(E.a)(e,["children"]);return Object(g.jsx)($,Object(k.a)(Object(k.a)({},n),{},{children:t}))};var ae,re,ie,ce,oe,se=n(27);Object(L.a)(ae||(ae=Object(se.a)(["\n  body {\n    overflow: hidden;\n  }\n"]))),Object(L.a)(re||(re=Object(se.a)(["\n  body {\n    overflow: visible;\n  }\n"]))),L.b.div(ie||(ie=Object(se.a)(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  z-index: 999;\n\n  :after {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    background-image: url(/images/misc/spinner.png);\n    background-size: contain;\n    background-repeat: no-repeat;\n    margin-top: -150px;\n    margin-left: -75px;\n    width: 150px;\n    height: 150px;\n    animation-name: spin;\n    animation-duration: 1000ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n\n  @-ms-keyframes spin {\n    from {\n      -ms-transform: rotate(0deg);\n    }\n    to {\n      -ms-transform: rotate(360deg);\n    }\n  }\n\n  @-moz-keyframes spin {\n    from {\n      -moz-transform: rotate(0deg);\n    }\n    to {\n      -moz-transform: rotate(360deg);\n    }\n  }\n\n  @-webkit-keyframes spin {\n    from {\n      -webkit-transform: rotate(0deg);\n    }\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n\n  @keyframes spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]))),L.b.img(ce||(ce=Object(se.a)(["\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -100px;\n  margin-left: -22px;\n"])));function le(){var e=Object(o.g)(),t=Object(a.useContext)(O).firebase,n=Object(a.useState)(""),r=Object(b.a)(n,2),i=r[0],c=r[1],s=Object(a.useState)(""),l=Object(b.a)(s,2),d=l[0],j=l[1],u=Object(a.useState)(""),h=Object(b.a)(u,2),p=h[0],m=h[1],f=""===d||""===i;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(Y,{children:[Object(g.jsx)(Y.Title,{children:"Sign In"}),p&&Object(g.jsx)(Y.Error,{children:p}),Object(g.jsxs)(Y.Base,{onSubmit:function(n){n.preventDefault(),t.auth().signInWithEmailAndPassword(i,d).then((function(){e.push(A)})).catch((function(e){c(""),j(""),m(e.message)}))},method:"POST",children:[Object(g.jsx)(Y.Input,{placeholder:"Email Address",value:i,onChange:function(e){var t=e.target;return c(t.value)}}),Object(g.jsx)(Y.Input,{type:"password",autocomplete:"off",placeholder:"Password",value:d,onChange:function(e){var t=e.target;return j(t.value)}}),Object(g.jsx)(Y.Submit,{disabled:f,type:"submit",children:"Sign In"})]}),Object(g.jsxs)(Y.Text,{children:[" Welcome   ",Object(g.jsx)(Y.Link,{to:"/signup",children:"Sign up now"})]}),Object(g.jsx)(Y.TextSmall,{children:"This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more."})]})})}function de(){var e=Object(o.g)(),t=Object(a.useContext)(O).firebase,n=Object(a.useState)(""),r=Object(b.a)(n,2),i=r[0],c=r[1],s=Object(a.useState)(""),l=Object(b.a)(s,2),d=l[0],j=l[1],u=Object(a.useState)(""),h=Object(b.a)(u,2),p=h[0],m=h[1],f=Object(a.useState)(""),x=Object(b.a)(f,2),v=x[0],w=x[1],y=""===i||""===p||""===d;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(Y,{children:[Object(g.jsx)(Y.Title,{children:"Sign Up"}),v&&Object(g.jsx)(Y.Error,{children:v}),Object(g.jsxs)(Y.Base,{onSubmit:function(n){n.preventDefault(),t.auth().createUserWithEmailAndPassword(d,p).then((function(t){return t.user.updateProfile({displayName:i}).then((function(){e.push(A)}))})).catch((function(e){c(""),j(""),m(""),w(e.message)}))},method:"POST",children:[Object(g.jsx)(Y.Input,{placeholder:"First Name",value:i,onChange:function(e){var t=e.target;return c(t.value)}}),Object(g.jsx)(Y.Input,{placeholder:"Email Address",value:d,onChange:function(e){var t=e.target;return j(t.value)}}),Object(g.jsx)(Y.Input,{type:"password",autocomplete:"off",placeholder:"Password",value:p,onChange:function(e){var t=e.target;return m(t.value)}}),Object(g.jsx)(Y.Submit,{disabled:y,type:"submit",children:"Sign Up"})]}),Object(g.jsxs)(Y.Text,{children:[" Already a user?  ",Object(g.jsx)(Y.Link,{to:"/signin",children:"Sign in now"})]}),Object(g.jsx)(Y.TextSmall,{children:"This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more."})]})})}function be(e){var t=e.user,n=e.loggedInPath,a=e.children,r=Object(E.a)(e,["user","loggedInPath","children"]);return Object(g.jsx)(o.b,Object(k.a)(Object(k.a)({},r),{},{render:function(){return t?t?Object(g.jsx)(o.a,{to:{pathname:n}}):null:a}}))}function je(e){var t=e.user,n=e.children,a=Object(E.a)(e,["user","children"]);return Object(g.jsx)(o.b,Object(k.a)(Object(k.a)({},a),{},{render:function(e){var a=e.location;return t?n:t?null:Object(g.jsx)(o.a,{to:{pathname:"signin",state:{from:a}}})}}))}function ue(){var e=function(){var e=Object(a.useState)(JSON.parse(localStorage.getItem("authUser"))),t=Object(b.a)(e,2),n=t[0],r=t[1],i=Object(a.useContext)(O).firebase;return Object(a.useEffect)((function(){var e=i.auth().onAuthStateChanged((function(e){e?(localStorage.setItem("authUser",JSON.stringify(e)),r(e)):(localStorage.removeItem("authUser"),r(null))}));return function(){return e()}}),[]),{user:n}}().user;return Object(g.jsx)(c.a,{children:Object(g.jsxs)(o.d,{children:[Object(g.jsx)(be,{user:e,loggedInPath:A,path:"/signin",children:Object(g.jsx)(le,{})}),Object(g.jsx)(be,{user:e,loggedInPath:A,path:"/signup",children:Object(g.jsx)(de,{})}),Object(g.jsx)(je,{user:e,path:A,children:Object(g.jsx)(P,{})}),Object(g.jsx)(be,{user:e,loggedInPath:A,path:A,children:Object(g.jsx)(P,{})})]})})}var he=Object(L.a)(oe||(oe=Object(se.a)(["\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n  html, body {\n    height: 100%;\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-color:white;\n    color: #333333;\n    font-size: 16px;\n}"]))),pe=n(60),me=(n(78),n(75),pe.a.initializeApp({apiKey:"AIzaSyAjOCl7Nz8wFQ6mbEhrnwH6f6s8FN4Cou8",authDomain:"excel-5d0f5.firebaseapp.com",projectId:"excel-5d0f5",storageBucket:"excel-5d0f5.appspot.com",messagingSenderId:"824985658914",appId:"1:824985658914:web:f4413e28369b20789d8c7b",measurementId:"G-S44TXC9DVF"}));i.a.render(Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(O.Provider,{value:{firebase:me},children:[Object(g.jsx)(he,{}),Object(g.jsx)(ue,{})]})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.1d31ed99.chunk.js.map
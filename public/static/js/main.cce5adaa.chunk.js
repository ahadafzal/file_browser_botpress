(this.webpackJsonpfile_browser_ui=this.webpackJsonpfile_browser_ui||[]).push([[0],{57:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),i=n.n(r),o=(n(57),n(14)),s=n(108),d=n(110),l=n(28),u=n.n(l),j=n(29),h=n.n(j),f=n(113),b=n(17),p=n(23),O=n(3),x=Object(s.a)({root:{height:110,flexGrow:1,maxWidth:400}});function m(e){var t=e.dir,n=e.execute,c=e.isd,r=e.Name,i=Object(a.useState)({path:"root",name:t}),s=Object(o.a)(i,2),l=s[0],j=s[1];Object(a.useEffect)((function(){if(c&&j({path:"root",name:r,children:[{path:t,name:"loading.."}]}),!1!==n){var e=new b.w3cwebsocket("ws://127.0.0.1:3000");e.onmessage=function(e){j({path:"root",name:r,children:JSON.parse(e.data)})},e.onopen=function(){e.send(JSON.stringify({dir:t}))}}}),[]);var g=x();return Object(O.jsx)(d.a,{onClick:function(){var e=new b.w3cwebsocket("ws://127.0.0.1:3000");e.onmessage=function(e){j({path:"root",name:r,children:JSON.parse(e.data)})},e.onopen=function(){console.log("WebSocket Client Connected"),e.send(JSON.stringify({dir:t}))}},className:g.rooot,defaultCollapseIcon:Object(O.jsx)(u.a,{}),defaultExpandIcon:Object(O.jsx)(h.a,{}),children:function e(t){if(t.hasOwnProperty("isDir")&&!0===t.isDir)return Object(O.jsx)(m,{dir:t.path,Name:t.name,execute:!1,onClick:function(){return console.log("hi")},isd:!0});var n="./icons/"+Object(p.getIconForFile)(t.name);return n="./icons/default_file.svg"!==n?Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:n,width:"20px"}),t.name]}):t.name,Object(O.jsx)(f.a,{nodeId:t.path,label:n,children:Array.isArray(t.children)?t.children.map((function(t){return e(t)})):null},t.path)}(l)})}var g=Object(s.a)({root:{height:110,flexGrow:1,maxWidth:400}});function w(e){var t=e.dir,n=e.execute,c=e.isd,r=Object(a.useState)({path:"root",name:t}),i=Object(o.a)(r,2),s=i[0],l=i[1];Object(a.useEffect)((function(){if(c&&l({path:"root",name:t,children:[{path:t,name:"loading.."}]}),!1!==n){var e=new b.w3cwebsocket("ws://127.0.0.1:3000");e.onmessage=function(e){l({path:"root",name:t,children:JSON.parse(e.data)})},e.onopen=function(){e.send(JSON.stringify({dir:t}))}}}),[]);var j=g();return Object(O.jsx)(d.a,{className:j.rooot,defaultCollapseIcon:Object(O.jsx)(u.a,{}),defaultExpandIcon:Object(O.jsx)(h.a,{}),children:function e(t){if(t.hasOwnProperty("isDir")&&!0===t.isDir)return Object(O.jsx)(m,{dir:t.path,Name:t.name,execute:!1,onClick:function(){},isd:!0});var n="./icons/"+Object(p.getIconForFile)(t.name);return n="./icons/default_file.svg"!==n?Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:n,width:"20px"}),t.name]}):t.name,Object(O.jsx)(f.a,{nodeId:t.path,label:n,children:Array.isArray(t.children)?t.children.map((function(t){return e(t)})):null},t.path)}(s)})}var v=n(112),N=n(111),S=n(48),y=n.n(S),C=Object(s.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),color:e.palette.text.secondary}}}));function I(){var e=C(),t=Object(a.useState)([]),n=Object(o.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){y.a.get("http://localhost:3000/dirs").then((function(e){r(e.data)}))}),[]),Object(O.jsx)("div",{className:e.root,children:Object(O.jsxs)(N.a,{container:!0,spacing:3,children:[Object(O.jsx)(N.a,{item:!0,xs:12,children:Object(O.jsx)(v.a,{className:e.paper,children:"Live File Tree"})}),c.map((function(t){return Object(O.jsx)(N.a,{item:!0,xs:6,children:Object(O.jsx)(v.a,{className:e.paper,children:Object(O.jsx)(w,{dir:t,execute:!0})})})}))]})})}var k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,115)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root")),k()}},[[90,1,2]]]);
//# sourceMappingURL=main.cce5adaa.chunk.js.map
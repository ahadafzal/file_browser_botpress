(this.webpackJsonpfile_browser_ui=this.webpackJsonpfile_browser_ui||[]).push([[0],{47:function(e,n,t){},62:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),r=t(9),o=t.n(r),i=(t(47),t(13)),s=t(80),l=t(82),d=t(27),u=t.n(d),j=t(28),h=t.n(j),f=t(85),b=t(14),p=t(22),O=t(3);console.log("start");var x=Object(s.a)({root:{height:110,flexGrow:1,maxWidth:400}});function m(e){var n=e.dir,t=e.execute,a=e.isd,r=e.Name,o=Object(c.useState)({path:"root",name:n}),s=Object(i.a)(o,2),d=s[0],j=s[1];Object(c.useEffect)((function(){if(a&&j({path:"root",name:r,children:[{path:n,name:"loading.."}]}),!1!==t){var e=new b.w3cwebsocket("ws://127.0.0.1:3000");e.onmessage=function(e){j({path:"root",name:r,children:JSON.parse(e.data)})},e.onopen=function(){console.log("WebSocket Client Connected"),e.send(JSON.stringify({dir:n}))}}}),[]);var g=x();return Object(O.jsx)(l.a,{onClick:function(){var e=new b.w3cwebsocket("ws://127.0.0.1:3000");e.onmessage=function(e){j({path:"root",name:r,children:JSON.parse(e.data)})},e.onopen=function(){console.log("WebSocket Client Connected"),e.send(JSON.stringify({dir:n}))}},className:g.rooot,defaultCollapseIcon:Object(O.jsx)(u.a,{}),defaultExpandIcon:Object(O.jsx)(h.a,{}),children:function e(n){if(n.hasOwnProperty("isDir")&&!0===n.isDir)return Object(O.jsx)(m,{dir:n.path,Name:n.name,execute:!1,onClick:function(){return console.log("hi")},isd:!0});var t="./icons/"+Object(p.getIconForFile)(n.name);return t="./icons/default_file.svg"!==t?Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:t,width:"20px"}),n.name]}):n.name,Object(O.jsx)(f.a,{nodeId:n.path,label:t,children:Array.isArray(n.children)?n.children.map((function(n){return e(n)})):null},n.path)}(d)})}console.log("start");var g=Object(s.a)({root:{height:110,flexGrow:1,maxWidth:400}});function w(e){var n=e.dir,t=e.execute,a=e.isd,r=Object(c.useState)({path:"root",name:n}),o=Object(i.a)(r,2),s=o[0],d=o[1];Object(c.useEffect)((function(){if(a&&d({path:"root",name:n,children:[{path:n,name:"loading.."}]}),!1!==t){var e=new b.w3cwebsocket("ws://127.0.0.1:3000");e.onmessage=function(e){d({path:"root",name:n,children:JSON.parse(e.data)})},e.onopen=function(){console.log("WebSocket Client Connected"),e.send(JSON.stringify({dir:n}))}}}),[]);var j=g();return Object(O.jsx)(l.a,{className:j.rooot,defaultCollapseIcon:Object(O.jsx)(u.a,{}),defaultExpandIcon:Object(O.jsx)(h.a,{}),children:function e(n){if(n.hasOwnProperty("isDir")&&!0===n.isDir)return Object(O.jsx)(m,{dir:n.path,Name:n.name,execute:!1,onClick:function(){},isd:!0});var t="./icons/"+Object(p.getIconForFile)(n.name);return t="./icons/default_file.svg"!==t?Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:t,width:"20px"}),n.name]}):n.name,Object(O.jsx)(f.a,{nodeId:n.path,label:t,children:Array.isArray(n.children)?n.children.map((function(n){return e(n)})):null},n.path)}(s)})}var v=t(84),C=t(83),N=Object(s.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),color:e.palette.text.secondary}}}));function S(){var e=N(),n=Object(c.useState)(["/",".","../..","../Profile"]),t=Object(i.a)(n,2),a=t[0];t[1];return Object(O.jsx)("div",{className:e.root,children:Object(O.jsxs)(C.a,{container:!0,spacing:3,children:[Object(O.jsx)(C.a,{item:!0,xs:12,children:Object(O.jsx)(v.a,{className:e.paper,children:"Live File Tree"})}),a.map((function(n){return Object(O.jsx)(C.a,{item:!0,xs:6,children:Object(O.jsx)(v.a,{className:e.paper,children:Object(O.jsx)(w,{dir:n,execute:!0})})})}))]})})}var k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,87)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root")),k()}},[[62,1,2]]]);
//# sourceMappingURL=main.2e57e216.chunk.js.map
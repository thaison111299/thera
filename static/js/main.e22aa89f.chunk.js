(this.webpackJsonpthera=this.webpackJsonpthera||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var s,c=n(0),a=n(1),i=n.n(a),o=n(35),r=n.n(o),l=(n(43),n(37)),j=n(9),m=(n.p,n(44),n(36)),u=n.n(m);n(74),n(82);var h=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)(""),r=Object(j.a)(o,2),m=r[0],h=r[1],b=Object(a.useState)(!1),d=Object(j.a)(b,2),O=d[0],g=d[1],x=Object(a.useState)(""),f=Object(j.a)(x,2),p=f[0],v=f[1],N=Object(a.useState)([]),C=Object(j.a)(N,2),S=C[0],y=C[1];return Object(a.useEffect)((function(){console.log("called"),s&&s.on("send-message",(function(e){e.room===m&&y([].concat(Object(l.a)(S),[{name:e.name,message:e.message}]))}))}),[s,p]),Object(c.jsxs)("div",{className:"container",children:[!O&&Object(c.jsxs)("form",{className:"join-form",onSubmit:function(e){e.preventDefault(),g(!0);var t={name:n,room:m};(s=u.a.connect("https://thera-server.herokuapp.com/")).emit("join",t)},children:[Object(c.jsx)("h1",{children:"CHAT"}),Object(c.jsx)("input",{className:"input",type:"text",placeholder:"name",onChange:function(e){return i(e.target.value)},required:!0}),Object(c.jsx)("input",{className:"input",type:"text",placeholder:"room",onChange:function(e){return h(e.target.value)},required:!0}),Object(c.jsx)("button",{children:"Join"})]}),O&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("form",{className:"chat-box",onSubmit:function(e){e.preventDefault(),s.emit("send-message",{message:p,name:n,room:m}),v("")},children:[Object(c.jsxs)("div",{className:"title",children:[Object(c.jsxs)("h2",{children:["room: ",m]}),Object(c.jsxs)("h2",{children:["you: ",n]})]}),Object(c.jsx)("div",{id:"message-container",className:"message-container",children:S.map((function(e,t){return e.name===n?Object(c.jsxs)("div",{className:"my-message",children:[Object(c.jsx)("h3",{children:"\xa0you"}),Object(c.jsxs)("h4",{className:"message-text",children:[e.message," "]})]},t):Object(c.jsxs)("div",{className:"message",children:[Object(c.jsxs)("h3",{children:[e.name,":"]}),Object(c.jsx)("h4",{className:"message-text",children:e.message})]},t)}))}),Object(c.jsx)("input",{className:"input-text",type:"text",placeholder:"message",onChange:function(e){return v(e.target.value)},required:!0,value:p})]}),Object(c.jsx)("button",{className:"button-leave",onClick:function(){s.emit("leave",{name:n,room:m}),s.disconnect(),s.off(),g(!1)},children:"leave this shit"}),Object(c.jsx)("button",{onClick:function(){!function(e){if(O){var t=document.getElementById(e);t.scrollTop=t.scrollHeight}}("message-container")},children:"test"})]})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),b()}},[[83,1,2]]]);
//# sourceMappingURL=main.e22aa89f.chunk.js.map
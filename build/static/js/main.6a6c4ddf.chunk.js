(this["webpackJsonprouter-query-params"]=this["webpackJsonprouter-query-params"]||[]).push([[0],{34:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(15),s=c.n(n),j=c(14),a=c(18),i=c(2),o=c(8),l=c(16),h=c.n(l),b=c(1),u=function(e){console.log({props:e});var t=Object(r.useState)(""),c=Object(a.a)(t,2),n=c[0],s=c[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Home"}),Object(b.jsxs)("form",{onSubmit:function(t){console.log({event:t,q:n}),t.preventDefault(),n&&e.history.push({pathname:"/search",params:{q:n},search:"?q=".concat(n)})},children:[Object(b.jsx)("input",{type:"search",name:"q",onInput:function(e){var t;return s(null===(t=e.target)||void 0===t?void 0:t.value)}}),Object(b.jsx)("button",{type:"submit",children:"search"})]})]})},d=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:"Category"})})},O=function(e){var t,c;console.log({searchProps:e});var r=Object(i.e)(),n=null===(t=e.location)||void 0===t||null===(c=t.search)||void 0===c?void 0:c.split("?")[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Search"}),Object(b.jsx)("h3",{children:"these are your searchProps"}),Object(b.jsx)("pre",{children:JSON.stringify({searchProps:e},null,"  ")}),Object(b.jsx)("h3",{children:"useParams hook"}),Object(b.jsx)("pre",{children:JSON.stringify({params:r},null,"  ")}),Object(b.jsx)("h3",{children:"querystring library"}),Object(b.jsx)("pre",{children:JSON.stringify({querystringResult:h.a.parse(n)},null,"  ")})]})},x=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:"Products"})})};function p(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{className:"navbar navbar-light",children:Object(b.jsxs)("ul",{className:"nav navbar-nav",children:[Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{to:"/search",children:"search"})}),Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{to:"/category",children:"Category"})}),Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{to:"/products",children:"Products"})})]})}),Object(b.jsx)(i.a,{exact:!0,path:"/",component:function(e){return Object(b.jsx)(u,Object(j.a)({},e))}}),Object(b.jsx)(i.a,{path:"/search",component:function(e){return Object(b.jsx)(O,Object(j.a)({},e))}}),Object(b.jsx)(i.a,{path:"/category",children:Object(b.jsx)(d,{})}),Object(b.jsx)(i.a,{path:"/products",children:Object(b.jsx)(x,{})})]})}s.a.render(Object(b.jsx)(o.a,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.6a6c4ddf.chunk.js.map
(this["webpackJsonpstripe-submenus"]=this["webpackJsonpstripe-submenus"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.1090473d.svg"},function(e,t,a){e.exports=a.p+"static/media/phone.58d7e3d6.svg"},function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),c=a.n(r),s=(a(12),a(5)),i=a.n(s),u=a(1),o=a(2),m=[{page:"products",links:[{label:"payment",icon:l.a.createElement(u.d,null),url:"/"},{label:"terminal",icon:l.a.createElement(u.d,null),url:"/"},{label:"connect",icon:l.a.createElement(u.d,null),url:"/"}]},{page:"developers",links:[{label:"plugins",icon:l.a.createElement(u.b,null),url:"/"},{label:"libraries",icon:l.a.createElement(u.b,null),url:"/"},{label:"help",icon:l.a.createElement(u.b,null),url:"/"},{label:"billing",icon:l.a.createElement(u.b,null),url:"/"}]},{page:"company",links:[{label:"about",icon:l.a.createElement(u.c,null),url:"/"},{label:"customers",icon:l.a.createElement(u.c,null),url:"/"}]}],b=l.a.createContext(),p=function(e){var t=e.children,a=Object(n.useState)(!1),r=Object(o.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(!1),u=Object(o.a)(i,2),p=u[0],E=u[1],d=Object(n.useState)({}),g=Object(o.a)(d,2),v=g[0],f=g[1],h=Object(n.useState)({page:"",links:[]}),k=Object(o.a)(h,2),N=k[0],O=k[1];return l.a.createElement(b.Provider,{value:{isSidebarOpen:c,isSubmenuOpen:p,openSidebar:function(){s(!0)},closeSidebar:function(){s(!1)},closeSubmenu:function(){E(!1)},openSubmenu:function(e,t){var a=m.find((function(t){return t.page===e}));O(a),f(t),E(!0)},location:v,page:N}},t)},E=function(){return Object(n.useContext)(b)},d=function(){var e=E(),t=e.openSidebar,a=e.openSubmenu,n=e.closeSubmenu,r=function(e){var t=e.target.textContent,n=e.target.getBoundingClientRect(),l=(n.left+n.right)/2,r=n.bottom-3;a(t,{center:l,bottom:r})};return l.a.createElement("nav",{className:"nav",onMouseOver:function(e){e.target.classList.contains("link-btn")||n()}},l.a.createElement("div",{className:"nav-center"},l.a.createElement("div",{className:"nav-header"},l.a.createElement("img",{src:i.a,alt:"stripe",className:"nav-logo"}),l.a.createElement("button",{className:"btn toggle-btn",onClick:t},l.a.createElement(u.a,null))),l.a.createElement("ul",{className:"nav-links"},l.a.createElement("li",null,l.a.createElement("button",{className:"link-btn",onMouseOver:r},"products")),l.a.createElement("li",null,l.a.createElement("button",{className:"link-btn",onMouseOver:r},"developers")),l.a.createElement("li",null,l.a.createElement("button",{className:"link-btn",onMouseOver:r},"company"))),l.a.createElement("button",{className:"btn signin-btn"}," Sign In")))},g=a(6),v=a.n(g),f=function(){var e=E().closeSubmenu;return l.a.createElement("section",{className:"hero",onMouseOver:e},l.a.createElement("div",{className:"hero-center"},l.a.createElement("article",{className:"hero-info"},l.a.createElement("h1",null,"Payments infrastructure for the internet"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet beatae repellat eum, laborum aliquid placeat fuga saepe quod nobis unde cum adipisci ipsa id odit, harum obcaecati! Veritatis, vitae. Dignissimos!"),l.a.createElement("a",{className:"btn",href:"https://samirrodrigues.github.io",target:"_blank",rel:"noopener noreferrer"},"Start Now")),l.a.createElement("article",{className:"hero-images"},l.a.createElement("img",{src:v.a,className:"phone-img",alt:"phone"})),l.a.createElement("article",null)))},h=function(){var e=E(),t=e.isSidebarOpen,a=e.closeSidebar;return l.a.createElement("aside",{className:"".concat(t?"sidebar-wrapper show":"sidebar-wrapper")},l.a.createElement("div",{className:"sidebar"},l.a.createElement("button",{className:"close-btn",onClick:a},l.a.createElement(u.e,null)),l.a.createElement("div",{className:"sidebar-links"},m.map((function(e,t){var a=e.links,n=e.page;return l.a.createElement("article",{key:t},l.a.createElement("h4",null,n),l.a.createElement("div",{className:"sidebar-sublinks"},a.map((function(e,t){var a=e.url,n=e.icon,r=e.label;return l.a.createElement("a",{key:t,href:a},n,r)}))))})))))},k=function(){var e=E(),t=e.isSubmenuOpen,a=e.location,r=e.page,c=Object(n.useRef)(null),s=Object(n.useState)("col-2"),i=Object(o.a)(s,2),u=i[0],m=i[1];return Object(n.useEffect)((function(){m("col-2");var e=c.current,t=a.center,n=a.bottom;e.style.left="".concat(t,"px"),e.style.top="".concat(n,"px"),3===r.links.length&&m("col-3"),r.links.length>=4&&m("col-4")}),[a,r.links]),l.a.createElement("aside",{className:"".concat(t?"submenu show":"submenu"),ref:c},l.a.createElement("h4",null,r.page),l.a.createElement("div",{className:"submenu-center ".concat(u)},r.links.map((function(e,t){var a=e.label,n=e.icon,r=e.url;return l.a.createElement("a",{key:t,href:r},n,a)}))))};var N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement(h,null),l.a.createElement(f,null),l.a.createElement(k,null))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null,l.a.createElement(N,null))),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.405ebfd4.chunk.js.map
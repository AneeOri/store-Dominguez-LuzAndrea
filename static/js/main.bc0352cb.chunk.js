(this["webpackJsonpstore-dominguez-luzandrea"]=this["webpackJsonpstore-dominguez-luzandrea"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,,,,,,function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(16),a=c.n(r),i=c(7),o=(c(22),c(3)),j=c(4),u=c(6),l=c.n(u),d=c(10),b=function(){var e=Object(d.a)(l.a.mark((function e(t,c){var n,s,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.headers,s=t.setProductsData,e.prev=1,e.next=4,fetch(c,{headers:n});case 4:return r=e.sent,e.next=7,r.json();case 7:a=e.sent,s(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,c){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(l.a.mark((function e(t,c){var n,s,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.headers,s=t.setUserData,e.prev=1,e.next=4,fetch(c,{headers:n});case 4:return r=e.sent,e.next=7,r.json();case 7:a=e.sent,s(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,c){return e.apply(this,arguments)}}(),h=function(){var e=Object(d.a)(l.a.mark((function e(t,c){var n,s,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.headers,s=t.setHistoryData,e.prev=1,e.next=4,fetch(c,{headers:n});case 4:return r=e.sent,e.next=7,r.json();case 7:a=e.sent,s(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,c){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(l.a.mark((function e(t,c){var n,s,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,s=t.headers,e.prev=1,r=JSON.stringify({productId:n}),a={method:"POST",body:r,headers:s},e.next=6,fetch(c,a);case 6:return e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(1),console.log("error",e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,c){return e.apply(this,arguments)}}(),m=function(){var e=Object(d.a)(l.a.mark((function e(t,c){var n,s,r,a,i,o,u,d,b;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.amount,s=t.headers,r=t.userData,a=t.setUserData,e.prev=1,i=JSON.stringify({amount:n}),o={method:"POST",body:i,headers:s},e.next=6,fetch(c,o);case 6:return u=e.sent,e.next=9,u.json();case 9:d=e.sent,(b=Object(j.a)({},r)).points=d["New Points"],a(b),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log("error",e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t,c){return e.apply(this,arguments)}}(),p="https://coding-challenge-api.aerolab.co",v="/products",f="/user/me",g="/user/history",C="/user/points",N="/redeem",y={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTExOGYxM2Q5ZmMzODAwMjFmNjM4NDUiLCJpYXQiOjE2Mjg1NDA2OTJ9.PA0rEWI4gDP8xHFtuty2J7uJW1yCTVcnDqWyDw8UVZQ"},w=c(0),k=Object(n.createContext)(),D=function(e){var t="".concat(p).concat(v),c=Object(n.useState)([{name:"",_id:"",cost:0,category:"",img:{hdUrl:"",url:""}}]),s=Object(o.a)(c,2),r=s[0],a=s[1];return Object(n.useEffect)((function(){b({headers:y,setProductsData:a},t)}),[]),Object(w.jsx)(k.Provider,{value:[r,a],children:e.children})},I=Object(n.createContext)(),P=function(e){var t="".concat(p).concat(f),c=Object(n.useState)({name:"",points:0}),s=Object(o.a)(c,2),r=s[0],a=s[1];return Object(n.useEffect)((function(){O({headers:y,setUserData:a},t)}),[]),Object(w.jsx)(I.Provider,{value:[r,a],children:e.children})},S=Object(n.createContext)(),E=function(e){var t=Object(n.useState)({category:"all",price:"all"}),c=Object(o.a)(t,2),s=c[0],r=c[1];return Object(w.jsx)(S.Provider,{value:[s,r],children:e.children})},J=c.p+"static/media/aerolab-logo.0a8fb170.svg",L=c.p+"static/media/coin.b8bc711d.svg";c(25);function M(){var e=Object(n.useContext)(I),t=Object(o.a)(e,1)[0];return Object(w.jsxs)("div",{className:"navBar",children:[Object(w.jsxs)("div",{className:"points",children:[Object(w.jsx)("p",{children:t.name}),Object(w.jsxs)("div",{className:"name",children:[Object(w.jsx)("p",{children:t.points}),Object(w.jsx)("img",{className:"coin",src:L,alt:"imagen de moneda"})]})]}),Object(w.jsx)("div",{children:Object(w.jsx)("nav",{children:Object(w.jsxs)("ul",{className:"links",children:[Object(w.jsx)(i.b,{to:"/points",children:Object(w.jsx)("li",{children:"Get Coins"})}),Object(w.jsx)(i.b,{to:"/history",children:Object(w.jsx)("li",{children:"Reddems"})}),Object(w.jsx)(i.b,{to:"/",children:Object(w.jsx)("li",{children:"Shop"})})]})})})]})}c(26);function F(){return Object(w.jsxs)("div",{height:"100px",width:"100px",className:"header",children:[Object(w.jsx)("img",{src:J,alt:"Logo de Aerolab"}),Object(w.jsx)(M,{})]})}var U=c(2),A=c(12),B=(c(14),c(27),c.p+"static/media/buy-white.9b6e6567.svg");function T(e){var t=e.title,c=e.content,n=e.close;return Object(w.jsx)("div",{className:"modal",children:Object(w.jsxs)("div",{className:"modal-container",children:[Object(w.jsx)("div",{className:"modal-close",onClick:function(){return n(!1)}}),Object(w.jsx)("div",{className:"modal-title",children:t}),Object(w.jsxs)("div",{className:"modal-content",children:[c,Object(w.jsx)("img",{src:B,alt:"imagen de bolsa de compra"})]}),Object(w.jsx)("div",{className:"modal-footer"})]})})}c(15);function z(e){var t=e.redeemItem,c=e.userPoints,s=e.productCost,r=e.productId,a=e.redeem,i=Object(n.useState)(!1),j=Object(o.a)(i,2),u=j[0],l=j[1];return Object(w.jsxs)("div",{children:[Object(w.jsx)("button",{className:"shopButton",onClick:function(){l(!0),t(r,s,c)},children:"Shop Now"}),u&&Object(w.jsx)(T,{title:Object(w.jsx)("p",{children:a?"Congratulations":"ops! something went wrong"}),content:Object(w.jsx)("h3",{children:a?"keep shoping":"try again"}),close:l})]})}function H(e){var t="".concat(p).concat(N),c=e.userData,s=e.setUserData,r=e.userPoints,a=e.productCost,i=e.productId,u=Object(n.useState)(!1),l=Object(o.a)(u,2),d=l[0],b=l[1];return Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:"hoverCoins",children:[Object(w.jsx)("p",{children:a}),Object(w.jsx)("img",{src:L,alt:"imagen de moneda"})]}),r>=a&&Object(w.jsx)("div",{children:Object(w.jsx)(z,{redeemItem:function(e,n,r){var a=x({id:e,headers:y},t),i=r-n;s(Object(j.a)(Object(j.a)({},c),{},{points:i})),b(a)},userPoints:r,productCost:a,productId:i,redeem:d})})]})}var G=c.p+"static/media/buy-blue.c5c4f01c.svg";c(28);function Q(e){var t=e.userPoints,c=e.productCost,n=e.isHover;return Object(w.jsx)("div",{children:function(e,t){if(t>e)return Object(w.jsxs)("div",{className:"divInfo",children:[Object(w.jsxs)("p",{children:[" You need ",t-e]}),Object(w.jsx)("img",{src:L,alt:"imagen de moneda"})]});var c=n?B:G;return Object(w.jsx)("div",{className:"bag",children:Object(w.jsx)("img",{src:c,alt:"imagen de bolsa de compra"})})}(t,c)})}function R(e){var t=e.img,c=e.category,s=e.name,r=e.cost,a=e._id,i=Object(n.useContext)(I),j=Object(o.a)(i,2),u=j[0],l=j[1],d=u.points,b=Object(n.useState)(!1),O=Object(o.a)(b,2),h=O[0],x=O[1];return Object(w.jsx)("div",{className:"item",onMouseEnter:function(){return x(!0)},onMouseLeave:function(){return x(!1)},children:Object(w.jsxs)("div",{className:"figura",children:[Object(w.jsxs)("div",{className:"imagen",children:[Object(w.jsx)(Q,{productCost:r,userPoints:d,isHover:h}),Object(w.jsx)("img",{src:t.url,alt:"Imagen ilustrativa del producto"}),Object(w.jsx)("h3",{children:c}),Object(w.jsx)("h3",{children:s})]}),Object(w.jsx)("div",{className:"capa",children:h&&Object(w.jsx)("div",{children:Object(w.jsx)(H,{userData:u,setUserData:l,userPoints:d,productCost:r,productId:a})})})]})})}var W=c(9);c(29);function V(){var e=Object(n.useContext)(k),t=Object(o.a)(e,1)[0],c=Object(n.useContext)(S),s=Object(o.a)(c,2),r=s[0],a=s[1],i=Object(A.a)(new Set(t.map((function(e){return e.category})))).sort();return Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"textFilter",children:"Filter by Category"}),Object(w.jsxs)("select",{className:"select",name:"category",value:r.category,onChange:function(e){var t=e.target,c=t.name,n=t.value,s=Object(j.a)(Object(j.a)({},r),{},Object(W.a)({},c,n.toLowerCase()));a(s)},children:[Object(w.jsx)("option",{children:"All"}),i.map((function(e){return Object(w.jsx)("option",{value:e.toLowerCase(),children:e},e)}))]})]})}function Y(){var e=Object(n.useContext)(S),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"textFilter",children:"Filter by Price"}),Object(w.jsxs)("select",{className:"select",name:"price",value:c.price,onChange:function(e){var t=e.target,n=t.name,r=t.value,a=Object(j.a)(Object(j.a)({},c),{},Object(W.a)({},n,r));s(a)},children:[Object(w.jsx)("option",{value:"all",children:"All"}),Object(w.jsx)("option",{value:"cheaper",children:"Cheaper"}),Object(w.jsx)("option",{value:"expensive",children:"Most expensive"})]})]})}var _=c(17),X=c.n(_);c(30);function Z(){var e=Object(n.useContext)(k),t=Object(o.a)(e,1)[0],c=Object(n.useState)([]),s=Object(o.a)(c,2),r=s[0],a=s[1],i=Object(n.useContext)(S),u=Object(o.a)(i,1)[0];function l(e){var t=e.category,c=u.category;return"all"===c||c===t.toLowerCase()}function d(e,t){return"cheaper"===u.price?e.cost-t.cost:"expensive"===u.price?t.cost-e.cost:0}Object(n.useEffect)((function(){a(Object(A.a)(t))}),[t]),Object(n.useEffect)((function(){!function(){var e=t.filter(l).sort(d);a(e)}()}),[u]);var b=Object(n.useState)(0),O=Object(o.a)(b,2),h=O[0],x=O[1],m=Math.ceil(r.length/16),p=16*h,v=r.slice(p,p+16).map((function(e){return Object(n.createElement)(R,Object(j.a)(Object(j.a)({},e),{},{key:e._id}))}));return Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:"filters",children:[Object(w.jsx)(V,{}),Object(w.jsx)(Y,{})]}),Object(w.jsx)("div",{className:"products",children:v}),Object(w.jsx)("div",{className:"paginator",children:Object(w.jsx)(X.a,{breakLabel:"...",nextLabel:"next >",onPageChange:function(e){var t=e.selected;x(t)},pageCount:m,previousLabel:"< previous",containerClassName:"paginationBtns",previousClassName:"previousBtn",nextLinkClassName:"nextBtn",disabledClassName:"paginationDis",activeClassName:"paginationActive"})})]})}var q=c.p+"static/media/header-x1.b6f067c6.png";c(31);function K(){return Object(w.jsxs)("div",{className:"coverImage",children:[Object(w.jsx)("img",{src:q,alt:"cover"}),Object(w.jsx)("h1",{children:"Rewards Store"})]})}function $(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(K,{}),Object(w.jsx)(Z,{})]})}c(32);function ee(){var e="".concat(p).concat(C),t=Object(n.useContext)(I),c=Object(o.a)(t,2),s=c[0],r=c[1];function a(t){m({amount:t,headers:y,userData:s,setUserData:r},e)}return Object(w.jsxs)("div",{className:"coinsContainer",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("h1",{children:"Get More Coins"}),Object(w.jsx)("h3",{children:"How many coins do you want to add?"})]}),Object(w.jsxs)("div",{className:"coinButtons",children:[Object(w.jsxs)("button",{onClick:function(){a(1e3)},children:[" 1000",Object(w.jsx)("img",{className:"imgC",src:L,alt:"imagen de moneda"})]}),Object(w.jsxs)("button",{onClick:function(){a(5e3)},children:[" 5000",Object(w.jsx)("img",{className:"imgC",src:L,alt:"imagen de moneda"})]}),Object(w.jsxs)("button",{onClick:function(){a(7500)},children:[" 7500",Object(w.jsx)("img",{className:"imgC",src:L,alt:"imagen de moneda"})]})]})]})}c(33);function te(e){return Object(w.jsxs)("div",{className:"itemContainer",children:[Object(w.jsx)("img",{src:e.img.url,alt:"imagen del producto"}),Object(w.jsxs)("div",{className:"info",children:[Object(w.jsx)("p",{children:e.name}),Object(w.jsx)("p",{children:"cost: "}),Object(w.jsxs)("p",{children:[e.cost," coins"]})]})]})}c(34);function ce(){var e="".concat(p).concat(g),t=Object(n.useState)([]),c=Object(o.a)(t,2),s=c[0],r=c[1];Object(n.useEffect)((function(){h({headers:y,setHistoryData:r},e)}),[]);var a=s.reverse();return Object(w.jsxs)("div",{className:"histContainer",children:[Object(w.jsx)("h1",{children:"Redeemed products"}),Object(w.jsx)("h2",{children:"History of your redeems"}),Object(w.jsx)("div",{className:"products2",children:a.map((function(e){return Object(n.createElement)(te,Object(j.a)(Object(j.a)({},e),{},{key:e.createDate}))}))})]})}function ne(){return Object(w.jsxs)(U.c,{children:[Object(w.jsx)(U.a,{path:"/points",element:Object(w.jsx)(ee,{})}),Object(w.jsx)(U.a,{path:"/history",element:Object(w.jsx)(ce,{})}),Object(w.jsx)(U.a,{path:"/*",element:Object(w.jsx)($,{})})]})}function se(){return Object(w.jsx)(P,{children:Object(w.jsx)(D,{children:Object(w.jsx)(E,{children:Object(w.jsxs)("div",{children:[Object(w.jsx)(F,{}),Object(w.jsx)(ne,{})]})})})})}var re=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};a.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(i.a,{children:Object(w.jsx)(se,{})})}),document.getElementById("root")),re()}],[[35,1,2]]]);
//# sourceMappingURL=main.bc0352cb.chunk.js.map
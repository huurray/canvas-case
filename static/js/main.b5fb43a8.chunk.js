(this["webpackJsonpcanvas-case"]=this["webpackJsonpcanvas-case"]||[]).push([[0],{63:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),a=n(24),o=n.n(a),c=n(44),s=n(3),l=n(5),d=n(4),u=n(9),h=n(10),f=[{name:"Make Circles",backgroundImage:n.p+"static/media/make-circles.d8363d5b.png",url:"/make-circles"}],b=n(19),m=n(40),g=n(33),j=Object(m.b)({name:"auth",initialState:{initialized:!1},reducers:{setInit:function(e){e.initialized=!0}}}),p=j.reducer,x=Object(b.b)({auth:p}),v=Object(m.a)({reducer:x}),O=g.c;function y(){var e=Object(g.b)();return{state:O((function(e){return e.auth})),setInit:function(){e(j.actions.setInit())}}}var w,k=n(41),C=n(2);var z,E=function(e){var t=e.style;return Object(C.jsx)(S,{style:t,children:"\xa9 Copyright 2022 Huurray, All rights reserved."})},S=u.a.div(w||(w=Object(l.a)(["\n  width: 100%;\n  font-size: 1.5rem;\n  color: ",";\n  text-align: center;\n"])),(function(e){return e.theme.colors.grey500}));var H,M,q,I,Y=function(e){var t=e.transition;return Object(C.jsxs)(F,{children:[Object(C.jsx)("div",{className:"content",children:t((function(e,t){var n=e.innerHeight,r=Object(k.a)(e,["innerHeight"]);return Object(C.jsx)(h.animated.div,{className:"item",style:r,children:Object(C.jsx)(h.animated.div,{style:{overflow:"hidden",height:n},children:t})})}))}),Object(C.jsx)(E,{style:{position:"absolute",bottom:"2rem"}})]})},F=u.a.div(z||(z=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n\n  .content {\n    width: 37.5rem;\n  }\n\n  .item {\n    overflow: hidden;\n    width: 100%;\n    color: black;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    font-size: 6rem;\n    font-weight: 800;\n    text-transform: uppercase;\n    will-change: transform, opacity, height;\n    white-space: nowrap;\n  }\n"]))),L=n(34),T=n(64);var A,N,R,B=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],i=t[1],a=Object(h.useTransition)(n,{from:{opacity:0,transform:"translateY(10px)"},enter:{opacity:1,transform:"translateY(0)"},delay:400}),o=Object(h.useTransition)(n,{from:{opacity:0,transform:"translateY(10px)"},enter:{opacity:1,transform:"translateY(0)"},delay:600}),c=Object(h.useTransition)(n,{from:{opacity:0,transform:"translateY(10px)"},enter:{opacity:1,transform:"translateY(0)"},delay:800});return Object(r.useEffect)((function(){i(!0)}),[]),Object(C.jsxs)(P,{children:[a((function(e){return Object(C.jsx)(h.animated.div,{style:e,children:Object(C.jsx)(W,{children:"CANVAS CASE."})})})),o((function(e){return Object(C.jsx)(h.animated.div,{style:e,children:Object(C.jsx)(D,{children:"A collection of interactive designs using HTML Canvas that has been recreated with many references."})})})),c((function(e){return Object(C.jsx)(h.animated.div,{style:e,children:Object(C.jsxs)(J,{href:"https://github.com/huurray/canvas-case",children:[Object(C.jsx)(T.a,{}),Object(C.jsx)("p",{children:"Code is here"})]})})}))]})},P=u.a.div(H||(H=Object(l.a)(["\n  padding: 6rem 4rem 4.5rem 4rem;\n"]))),W=u.a.h1(M||(M=Object(l.a)(["\n  font-size: 6.5rem;\n  color: ",";\n  font-weight: 800;\n  margin-bottom: 2rem;\n"])),(function(e){return e.theme.colors.orange})),D=u.a.p(q||(q=Object(l.a)(["\n  font-size: 2.2rem;\n  color: ",";\n  line-height: 1.46;\n  margin-bottom: 1.2rem;\n"])),(function(e){return e.theme.colors.grey500})),J=u.a.a(I||(I=Object(l.a)(["\n  font-size: 2.2rem;\n  color: ",";\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n\n  svg {\n    width: 1.9rem;\n    height: 1.9rem;\n    margin-right: 0.4rem;\n    margin-top: -0.3rem;\n  }\n\n  &:hover {\n    p {\n      text-decoration: underline;\n    }\n  }\n"])),(function(e){return e.theme.colors.green})),K=n(23),V=Object(K.c)(A||(A=Object(l.a)(["\n  10%, 90% {\n    transform: translate3d(-2px, 0, -1px);\n  }\n  20%, 80% {\n    transform: translate3d(2px, 0, 1px);\n  }\n  30%, 50%, 70% {\n    transform: translate3d(-2px, 0, 1px);\n  }\n  40%, 60% {\n    transform: translate3d(2px, 0, 1px);\n  }\n"])));var X,G=function(e){var t=e.transition,n=Object(s.f)();return Object(C.jsxs)(Q,{children:[Object(C.jsx)(B,{}),Object(C.jsx)(U,{children:t((function(e,t){return Object(C.jsxs)(h.animated.div,{className:"item",style:Object(L.a)({},e),onClick:function(){return n(t.url)},children:[Object(C.jsx)("div",{className:"name",children:t.name}),Object(C.jsx)("img",{src:t.backgroundImage,alt:"\uc774\ubbf8\uc9c0"})]})}))}),Object(C.jsx)(E,{style:{marginBottom:"4rem"}})]})},Q=u.a.div(N||(N=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n"]))),U=u.a.div(R||(R=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 2.5rem;\n  padding: 0 4rem 4rem 4rem;\n  margin-bottom: auto;\n\n  img {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    z-index: -1;\n  }\n\n  .item {\n    width: 100%;\n    height: 30vh;\n    border-radius: 2.2rem;\n    will-change: transform, opacity;\n    cursor: pointer;\n    transition: 0.15s transform;\n    overflow: hidden;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n\n    .name {\n      margin: 2rem 2.5rem;\n      font-size: 2rem;\n      text-align: right;\n      color: ",";\n    }\n\n    &:hover {\n      animation: "," 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97);\n      animation-iteration-count: infinite;\n      transform: translate3d(0, 0, 0);\n      perspective: 1000px;\n    }\n  }\n"])),(function(e){return e.theme.colors.grey500}),V);var Z=function(){var e=window.innerWidth>750?70:40,t=y(),n=t.state,i=t.setInit,a=Object(r.useState)(n.initialized),o=Object(d.a)(a,2),c=o[0],s=o[1],l=Object(r.useState)([]),u=Object(d.a)(l,2),b=u[0],m=u[1],g=Object(h.useSpringRef)(),j=Object(h.useTransition)(b,{ref:g,from:{opacity:0,height:0,innerHeight:0,transform:"perspective(600px) rotateY(0deg)",color:"#f8f8f8"},enter:[{opacity:1,height:e,innerHeight:e},{transform:"perspective(600px) rotateY(60deg)",color:"#e76f51"},{transform:"perspective(600px) rotateY(0deg)"}],leave:[{color:"#dddddd"},{innerHeight:0},{opacity:0,height:0}],update:[{color:"#e76f51"}]});Object(r.useEffect)((function(){m(["Canvas","Case","By Huurray."]),setTimeout((function(){return m(["Canvas","Case"])}),1500),setTimeout((function(){s(!0),i()}),4e3)}),[]);var p=Object(h.useSpringRef)(),x=Object(h.useTransition)(c?f:[],{ref:p,trail:400/f.length,from:{opacity:0,scale:0},enter:{opacity:1,scale:1},leave:{opacity:0,scale:0}});return Object(h.useChain)(c?[g,p]:[p,g],[0,c?.1:.6]),Object(C.jsx)($,{children:c?Object(C.jsx)(G,{transition:x}):Object(C.jsx)(Y,{transition:j})})},$=u.a.div(X||(X=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: ",";\n"])),(function(e){return e.theme.colors.indigo}));var _,ee=n(65);var te,ne=function(e){var t=e.whiteBackIcon,n=e.style,r=Object(s.f)();return Object(C.jsx)(re,{style:n,children:Object(C.jsx)(ee.a,{onClick:function(){return r(-1)},style:{color:t?"#fff":void 0}})})},re=u.a.div(_||(_=Object(l.a)(["\n  background-color: unset;\n  height: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  svg {\n    height: 100%;\n    padding: 0 2rem;\n    cursor: pointer;\n  }\n"])),(function(e){return e.theme.sizes.headerHeight}));u.a.button(te||(te=Object(l.a)(["\n  width: ",";\n  background-color: red;\n  border-radius: 6px;\n  color: ",";\n  font-weight: bold;\n  cursor: pointer;\n  white-space: nowrap;\n\n  padding: ",";\n  height: ",";\n  font-size: ",";\n"])),(function(e){return e.full?"100%":"fit-content"}),(function(e){return e.theme.colors.white}),(function(e){switch(e.size){case"xLarge":case"large":return"0 20px";default:return"0 16px"}}),(function(e){switch(e.size){case"xLarge":return"60px";case"large":return"50px";default:return"36px"}}),(function(e){switch(e.size){case"xLarge":case"large":return"18px";default:return"12px"}}));var ie,ae,oe=function(){var e=window.innerWidth,t=window.innerHeight,n=Object(r.useRef)(null),i=Object(r.useState)(null),a=Object(d.a)(i,2),o=a[0],c=a[1],s=function(e){var t=window.innerWidth,n=window.innerHeight,i=Object(r.useRef)({x:t/2,y:n/2}),a=[{r:255,g:71,b:71},{r:0,g:206,b:237},{r:255,g:255,b:255}];function o(r,i,o,c,s,l){var d=1,u=l,h=Math.floor(Math.random()*a.length);return{update:function(){e&&(((r+=o)+s>=t||r-s<=0)&&(o=-o),((i+=c)+s>=n||i-s<=0)&&(c=-c),r=Math.min(Math.max(r,0+s),t-s),i=Math.min(Math.max(i,0+s),n-s),e.beginPath(),e.arc(r,i,s,0,2*Math.PI,!1),e.strokeStyle="rgba("+a[h].r+","+a[h].g+","+a[h].b+","+d+")",e.fillStyle="rgba("+a[h].r+","+a[h].g+","+a[h].b+","+d+")",e.stroke(),e.closePath(),d-=1/(l/.1),(s-=s/(l/.1))<0&&(s=0),u-=.1)},remove:function(){return u<=0}}}function c(e,t){var n=[],r={x:3.5*(Math.random()-.5),y:3.5*(Math.random()-.5)},i=new o(e,t,r.x,r.y,60,8);return n.push(i),{draw:function(){for(var e=0;e<n.length;e++)n[e].update(),n[e].remove()&&n.splice(e,1)}}}var s=[];function l(e){i.current.x=e.clientX,i.current.y=e.clientY}return Object(r.useEffect)((function(){return window.addEventListener("mousemove",l),function(){return window.addEventListener("mousemove",l)}}),[]),Object(r.useEffect)((function(){return window.addEventListener("onClick",l),function(){return window.addEventListener("onClick",l)}}),[]),{animate:function r(){if(e){window.requestAnimationFrame(r),e.fillStyle="#1e1e1e",e.fillRect(0,0,t,n);var a=new c(i.current.x,i.current.y);s.push(a);for(var o=0;o<s.length;o++)s[o].draw()}}}}(o).animate;return Object(r.useEffect)((function(){o&&s()}),[o]),Object(r.useEffect)((function(){!function(){if(null===n||void 0===n?void 0:n.current){var r=n.current,i=r.getContext("2d");c(i),r.width=e,r.height=t}}()}),[]),Object(C.jsxs)(ce,{children:[Object(C.jsx)(ne,{whiteBackIcon:!0}),Object(C.jsx)("canvas",{ref:n})]})},ce=u.a.div(ie||(ie=Object(l.a)(["\n  canvas {\n    width: 100%;\n    height: 100%;\n  }\n"]))),se=n(11),le=Object(K.b)(ae||(ae=Object(l.a)(["\n\t@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');\n\n\thtml, body {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tfont-size: 10px;\n\t}\n\thtml, body, div, span, applet, object, iframe,\n\th1, h2, h3, h4, h5, h6, p, blockquote, pre,\n\ta, abbr, acronym, address, big, cite, code,\n\tdel, dfn, em, img, ins, kbd, q, s, samp,\n\tsmall, strike, strong, sub, sup, tt, var,\n\tb, u, i, center,\n\tdl, dt, dd, ol, ul, li,\n\tfieldset, form, label, legend,\n\ttable, caption, tbody, tfoot, thead, tr, th, td,\n\tarticle, aside, canvas, details, embed, \n\tfigure, figcaption, footer, header, hgroup, \n\tmenu, nav, output, ruby, section, summary,\n\ttime, mark, audio, video {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tborder: 0;\n\t\tvertical-align: baseline;\n\t}\n\tarticle, aside, details, figcaption, figure, \n\tfooter, header, hgroup, menu, nav, section {\n\t\tdisplay: block;\n\t}\n\tbody {\n\t\tline-height: 1;\n\t\toverflow: hidden;\n\t}\n\tbutton, input {\n\t\toutline: none;\n\t\tborder: none;\n\t\tbackground-color: unset;\n\t}\n\tol, ul {\n\t\tlist-style: none;\n\t}\n\tblockquote, q {\n\t\tquotes: none;\n\t}\n\tblockquote:before, blockquote:after,\n\tq:before, q:after {\n\t\tcontent: '';\n\t\tcontent: none;\n\t}\n\ttable {\n\t\tborder-collapse: collapse;\n\t\tborder-spacing: 0;\n\t}\n\ta {\n\t\tcolor: unset;\n\t\ttext-decoration: none; \n\t\toutline: none;\n\t}\n\t#root {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\t@media all and (max-width: 750px) {\n\t\thtml { font-size: 6px; } \n\t}\n\t* {\n\t \t/* scrollbar styling */\n\t\tscrollbar-color: unset;\n    ::-webkit-scrollbar {\n      -webkit-appearance: none;\n      width: 8px;\n      height: 8px;\n    }\n    ::-webkit-scrollbar-track {\n      background: unset; \n    }\n    ::-webkit-scrollbar-thumb {\n      border-radius: 7px;\n      background-color: #eeeeee;\n    }\n\t}\n"]))),de={sizes:{headerHeight:"60px"},colors:{white:"#fff",black:"#000",green:"#2a9d8f",blue:"#0081EC",red:"#e14614",orange:"#e76f51",yellow:"#f4a261",beige:"#F2F3ED",gold:"#F3CE6F",silver:"#CFCFCF",bronze:"#D7A088",indigo:"#23272f",grey100:"#fafafa",grey200:"#f8f8f8",grey300:"#eeeeee",grey400:"#dddddd",grey500:"#bababe",grey600:"#8e8e8e",grey700:"#333333",grey800:"#1d1c1d"}},ue=function(){return Object(C.jsx)(se.c,{theme:de,children:Object(C.jsxs)(g.a,{store:v,children:[Object(C.jsx)(K.a,{styles:le}),Object(C.jsx)(c.a,{basename:"/canvas-case",children:Object(C.jsxs)(s.c,{children:[Object(C.jsx)(s.a,{path:"/",element:Object(C.jsx)(Z,{})}),Object(C.jsx)(s.a,{path:"/make-circles",element:Object(C.jsx)(oe,{})})]})})]})})};o.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(ue,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.b5fb43a8.chunk.js.map
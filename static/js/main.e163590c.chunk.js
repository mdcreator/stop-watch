(this["webpackJsonpcreate-react-app-template"]=this["webpackJsonpcreate-react-app-template"]||[]).push([[0],{24:function(e,t,n){e.exports={container:"Container_container__PB5M9"}},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n(0),r=n.n(c),o=n(23),a=n.n(o),s=n(24),l=n.n(s);function p(e){var t=e.children;return Object(i.jsx)("div",{className:l.a.container,children:t})}var d=n(22),b=n(14),x=n(7),u=n(45),h=n(44),j=n(43),m=Object(x.a)({btn:{width:"100px",height:"30px",fontSize:"12px",background:"none",border:"1px solid whitesmoke",color:"whitesmoke",marginLeft:"10px",alignItems:"center",justifyContent:"center","&:hover":{background:"whitesmoke",color:"#222222",cursor:"pointer"}}});function f(e){var t=e.onClick,n=m();return Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:n.btn,onClick:t,children:"Start"})})}var g=Object(x.a)({btn:{width:"100px",height:"30px",fontSize:"12px",background:"none",border:"1px solid whitesmoke",color:"whitesmoke",marginLeft:"10px",alignItems:"center",justifyContent:"center","&:hover":{background:"whitesmoke",color:"#222222",cursor:"pointer"}}});function k(e){var t=e.onClick,n=g();return Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:n.btn,onClick:t,children:"Stop"})})}var O=Object(x.a)({btn:{width:"100px",height:"30px",fontSize:"12px",background:"none",border:"1px solid whitesmoke",color:"whitesmoke",marginLeft:"10px",alignItems:"center",justifyContent:"center","&:hover":{background:"whitesmoke",color:"#222222",cursor:"pointer"}}});function S(e){var t=e.onClick,n=O();return Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:n.btn,onClick:t,children:"Reset"})})}var v,w,C=Object(x.a)({btn:{width:"100px",height:"30px",fontSize:"12px",background:"none",border:"1px solid whitesmoke",color:"whitesmoke",marginLeft:"10px",alignItems:"center",justifyContent:"center","&:hover":{background:"whitesmoke",color:"#222222",cursor:"pointer"}}});function z(e){var t=e.onClick,n=C();return Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:n.btn,onClick:t,children:"Wait"})})}var y=Object(x.a)((w={timerTitle:{fontSize:"19px",fontWeight:"400",textTransform:"uppercase",padding:"25px 0 10px 0",fontStretch:"50%",letterSpacing:"11.5px","@media screen and (min-width: 768px)":{fontSize:"30px"}},titleDescr:{fontSize:"12px",fontStretch:"50%",letterSpacing:"1.5px",marginBottom:"70px","@media screen and (min-width: 768px)":{fontSize:"20px"}},timer:{position:"relative",display:"block",backgroundImage:"linear-gradient(to right,rgba(47, 48, 58, 0.2),rgba(47, 48, 58, 0.2))",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"100% 100%",color:"#fff",fontWeight:"800",textAlign:"center",fontSize:"22px",padding:"20px 50px",margin:"30px 10px",borderRadius:"10px","@media screen and (min-width: 768px)":{fontWeight:"800",fontSize:"50px",padding:"40px 50px"}},field:{display:"inline-block",marginBottom:"70px","@media screen and (max-width: 768px)":{width:"calc((100% - 20px) / 2)"}},value:{display:"inline-block"},label:{fontSize:"12px","@media screen and (min-width: 768px)":{fontSize:"16px"}},info:(v={fontSize:"8px",fontStretch:"50%",letterSpacing:"2.5px",textTransform:"uppercase"},Object(b.a)(v,"fontStretch","50%"),Object(b.a)(v,"@media screen and (min-width: 768px)",{fontSize:"15px"}),v)},Object(b.a)(w,"info",{"& nth- child(2n)":{marginBottom:"25px"}}),Object(b.a)(w,"buttons",{display:"flex",justifyContent:"center"}),w));function N(){var e=Object(c.useState)(0),t=Object(d.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(0),s=Object(d.a)(a,2),l=s[0],p=s[1],b=y();Object(c.useEffect)((function(){var e=new u.a;return Object(h.a)(1e3).pipe(Object(j.a)(e)).subscribe((function(){"run"===l&&o((function(e){return e+1e3}))})),function(){e.next(),e.complete()}}),[l]);var x=r.a.useCallback((function(){p("run")}),[]),m=r.a.useCallback((function(){p("stop"),o(0)}),[]),g=r.a.useCallback((function(){o(0)}),[]),O=r.a.useCallback((function(){p("wait")}),[]);return Object(i.jsxs)("div",{className:b.timer,id:"timer-1",children:[Object(i.jsx)("h1",{className:b.timerTitle,children:"Birthday party"}),Object(i.jsx)("p",{className:b.titleDescr,children:"\ud83e\udd73 Let's get this party started \ud83e\udd73"}),Object(i.jsxs)("span",{children:[" ",new Date(n).toISOString().slice(11,19)]}),Object(i.jsxs)("div",{className:b.buttons,children:[Object(i.jsx)(f,{onClick:x}),Object(i.jsx)(k,{onClick:m}),Object(i.jsx)(S,{onClick:g}),Object(i.jsx)(z,{onClick:O})]})]})}function I(){return Object(i.jsx)("div",{children:Object(i.jsx)(p,{children:Object(i.jsx)(N,{})})})}n(39);a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(I,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e163590c.chunk.js.map
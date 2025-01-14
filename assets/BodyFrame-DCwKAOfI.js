import{r as M,a as W,c as Y,j as i,T as J,B as F,b as q,d as V}from"./index-DufHjiZM.js";var x={},O;function U(){if(O)return x;O=1,Object.defineProperty(x,"__esModule",{value:!0});var m=M(),d=W(),s=function(){return s=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},s.apply(this,arguments)};function H(e,n){var t,r;switch(n.type){case"TYPE":return s(s({},e),{speed:n.speed,text:(t=n.payload)===null||t===void 0?void 0:t.substring(0,e.text.length+1)});case"DELAY":return s(s({},e),{speed:n.payload});case"DELETE":return s(s({},e),{speed:n.speed,text:(r=n.payload)===null||r===void 0?void 0:r.substring(0,e.text.length-1)});case"COUNT":return s(s({},e),{count:e.count+1});default:return e}}var A=function(e){var n=e.words,t=n===void 0?["Hello World!","This is","a simple Typewriter"]:n,r=e.loop,o=r===void 0?1:r,a=e.typeSpeed,u=a===void 0?80:a,g=e.deleteSpeed,E=g===void 0?50:g,v=e.delaySpeed,T=v===void 0?1500:v,c=e.onLoopDone,S=e.onType,p=e.onDelete,b=e.onDelay,w=d.useReducer(H,{speed:u,text:"",count:0}),D=w[0],j=D.speed,f=D.text,k=D.count,y=w[1],_=d.useRef(0),h=d.useRef(!1),l=d.useRef(!1),R=d.useRef(!1),C=d.useRef(!1),L=d.useCallback(function(){var B=k%t.length,z=t[B];l.current?(y({type:"DELETE",payload:z,speed:E}),f===""&&(l.current=!1,y({type:"COUNT"}))):(y({type:"TYPE",payload:z,speed:u}),R.current=!0,f===z&&(y({type:"DELAY",payload:T}),R.current=!1,C.current=!0,setTimeout(function(){C.current=!1,l.current=!0},T),o>0&&(_.current+=1,_.current/t.length===o&&(C.current=!1,h.current=!0)))),R.current&&S&&S(_.current),l.current&&p&&p(),C.current&&b&&b()},[k,T,E,o,u,t,f,S,p,b]);return d.useEffect(function(){var B=setTimeout(L,j);return h.current&&clearTimeout(B),function(){return clearTimeout(B)}},[L,j]),d.useEffect(function(){c&&h.current&&c()},[c]),[f,{isType:R.current,isDelay:C.current,isDelete:l.current,isDone:h.current}]},N="styles-module_blinkingCursor__yugAC",P="styles-module_blinking__9VXRT";(function(e,n){n===void 0&&(n={});var t=n.insertAt;if(typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",t==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var I=d.memo(function(e){var n=e.cursorBlinking,t=n===void 0||n,r=e.cursorStyle,o=r===void 0?"|":r,a=e.cursorColor,u=a===void 0?"inherit":a;return m.jsx("span",s({style:{color:u},className:"".concat(N," ").concat(t?P:"")},{children:o}))});return x.Cursor=I,x.Typewriter=function(e){var n=e.words,t=n===void 0?["Hello World!","This is","a simple Typewriter"]:n,r=e.loop,o=r===void 0?1:r,a=e.typeSpeed,u=a===void 0?80:a,g=e.deleteSpeed,E=g===void 0?50:g,v=e.delaySpeed,T=v===void 0?1500:v,c=e.cursor,S=c!==void 0&&c,p=e.cursorStyle,b=p===void 0?"|":p,w=e.cursorColor,D=w===void 0?"inherit":w,j=e.cursorBlinking,f=j===void 0||j,k=e.onLoopDone,y=e.onType,_=e.onDelay,h=e.onDelete,l=A({words:t,loop:o,typeSpeed:u,deleteSpeed:E,delaySpeed:T,onLoopDone:k,onType:y,onDelay:_,onDelete:h})[0];return m.jsxs(m.Fragment,{children:[m.jsx("span",{children:l}),S&&m.jsx(I,{cursorStyle:b,cursorColor:D,cursorBlinking:f})]})},x.useTypewriter=A,x}var X=U();const G=Y(i.jsx("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download"),Q=()=>i.jsxs("div",{children:[i.jsx(J,{}),i.jsxs(F,{id:"home",sx:{width:"100%",height:"auto",position:"relative",overflow:"hidden"},children:[i.jsx(F,{sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.9)",zIndex:1}}),i.jsx("img",{src:"frame.JPG",alt:"Responsive",style:{width:"100%",height:"auto",objectFit:"cover",position:"relative",zIndex:0}}),i.jsxs(F,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",zIndex:2,textAlign:"center"},children:[i.jsxs(q,{variant:"h3",sx:{fontSize:"4vw",fontFamily:"fantasy",letterSpacing:4},children:["I am ",i.jsx("span",{style:{color:"red",fontSize:"5vw"},children:"S"}),"ehan"," ",i.jsx("span",{style:{color:"red",fontSize:"5vw"},children:"M"}),"adushanka"]}),i.jsxs("div",{children:[i.jsx(q,{variant:"h5",mt:2,fontWeight:"bold",gutterBottom:!0,sx:{fontSize:"2vw",fontFamily:"monospace"},children:i.jsx(X.Typewriter,{words:["Software Engineer...","Full-Stack Developer..","Java / Spring Boot Developer...","React Front-end Developer...","Cloud Enthusiast..."],loop:!0,cursor:!0,cursorStyle:"|",typeSpeed:90,deleteSpeed:90,delaySpeed:1e3})}),i.jsx(V,{variant:"contained",startIcon:i.jsx(G,{}),sx:{backgroundColor:"black",color:"white",border:"2px solid red",borderRadius:"20px","&:hover":{backgroundColor:"red"},padding:{xs:"8px 16px",sm:"10px 20px",md:"12px 24px"},marginTop:"15px",fontFamily:"revert",fontWeight:"bold",fontSize:{xs:"12px",sm:"14px",md:"16px"},width:{xs:"90%",sm:"auto"},textAlign:"center"},children:"Download Resume"})]})]})]})]});export{Q as default};
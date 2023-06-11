import{r as c,j as a,R as l}from"./react-76f7fb99.js";import{c as d}from"./react-dom-e44ba450.js";import"./@tensorflow-4a9c595e.js";import{d as u,T as f,l as m}from"./face-api.js-a34ad70b.js";import{G as p}from"./react-github-btn-5c4c3b9f.js";import"./scheduler-765c72db.js";import"./tslib-890ecb0d.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const g=({onStream:r})=>{const n=c.useRef(!1),o=c.useRef(null),t=c.useCallback(async e=>{if(!r)return;await r(e)===!0&&t(e)},[r]);return c.useEffect(()=>{o.current&&!n.current&&(navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:""}}).then(e=>{o.current&&(o.current.srcObject=e)}),n.current=!0)},[t]),a.jsx("video",{ref:o,autoPlay:!0,playsInline:!0,onPlay:e=>t(e.target),style:{position:"fixed",opacity:0,top:0,left:0}})},h="/3d-object/assets/astronaut-be2fa186.png",b=({angle:r})=>{const o=(r.x-50)/100*30,t=(r.x-50)/100*20,e=0,s=0,i=(r.x-50)/100*10;return a.jsx("div",{className:"card-container",style:{display:"grid",placeItems:"center",perspective:300},children:a.jsx("div",{className:"card",style:{position:"relative",width:300,maxWidth:300,height:400,borderRadius:30,background:`linear-gradient(
            rgba(255, 30, 0, 0.05),
            rgba(3, 255, 142, 0.1))`,boxShadow:"0 0 100px #000",backdropFilter:"blur(4px)",transform:`
            rotateY(${t}deg)
            rotateX(${e}deg)
            translateX(${o}%)
            translateY(0%)
          `,transition:"transform 0.1s ease-in-out"},children:a.jsx("img",{className:"astronaut",style:{position:"absolute",width:"100%",height:"100%",objectFit:"contain",transform:`
              translateX(${i}%)
              translateY(${s}%)
            `,transition:"transform 0.2s ease-in-out"},src:h})})})},x="/3d-object/assets/background-29d0aee3.jpg",y=({angle:r})=>{const o=(r.x-50)/100*20;return a.jsx("img",{className:"background",style:{position:"absolute",top:"-10%",left:"-10%",width:"120%",height:"120%",objectFit:"cover",transform:`
          translateX(${o}%)
          translateY(0%)
        `,filter:"blur(1px)",transition:"transform 0.1s ease-in-out"},src:x})},j=({name:r,children:n})=>{const o=c.useRef(!1),[t,e]=c.useState();c.useEffect(()=>{o.current||(o.current=!0,(async()=>{try{const i=await navigator.permissions.query({name:r});e(i),i.onchange=()=>{e(i)}}catch{}})())},[o,r,e]);const s=c.useCallback(()=>navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:""}}),[]);return c.useEffect(()=>{(t==null?void 0:t.state)==="prompt"&&confirm(`The ${r} permission is needed.`)&&s().then(()=>window.location.reload()),(t==null?void 0:t.state)==="denied"&&alert(`This app will not works without ${r} permission. Please give this permission via browser.`)},[s,r,t]),(t==null?void 0:t.state)==="granted"&&n};function w(){const[r,n]=c.useState({x:50,y:20}),o=c.useCallback(async t=>{const e=await u(t,new f({scoreThreshold:.5,inputSize:128}));return e!=null&&e.box&&(n({x:(e.box.x+e.box.width/2)/e.imageWidth*100,y:(e.box.y+e.box.height/2)/e.imageHeight*100}),await new Promise(s=>requestAnimationFrame(s))),!0},[]);return a.jsxs("div",{style:{display:"grid",placeItems:"center",position:"relative",height:"100%",width:"100%",background:"cyan"},children:[a.jsx(y,{angle:r}),a.jsx(b,{angle:r}),a.jsx(j,{name:"camera",children:a.jsx(g,{onStream:o})}),a.jsx("div",{style:{position:"fixed",bottom:15,right:15},children:a.jsx(p,{href:"https://github.com/nainemom/3d-object","data-size":"large","data-show-count":"true","aria-label":"Star nainemom/3d-object on GitHub",children:"Star"})})]})}const v=async()=>{await m("./models"),d(document.getElementById("root")).render(a.jsx(l.StrictMode,{children:a.jsx(w,{})}))};v();

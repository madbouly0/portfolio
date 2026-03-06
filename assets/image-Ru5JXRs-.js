import{j as f,r}from"./jsx-runtime-BfF-YriY.js";import{c as R,m as N,t as L,k as C,a as E,n as _,u as q,B as Q,I as J}from"./heading-EZs7gulK.js";const X="/portfolio/assets/gotham-bold-italic-C_msAlmW.woff2",Y="/portfolio/assets/gotham-bold-D1kvQ7KV.woff2",Z="/portfolio/assets/gotham-book-italic-Bm2IEtSK.woff2",tt="/portfolio/assets/gotham-book-Bnaws0Ef.woff2",et="/portfolio/assets/gotham-medium-italic-Dok430ou.woff2",ot="/portfolio/assets/gotham-medium-0VT3RO8I.woff2",st="/portfolio/assets/ipa-gothic-DimHCOud.woff2",z=r.createContext({}),St=({theme:t="dark",children:e,className:a,as:s="div",...c})=>{const o=!W().theme;return f.jsxs(z.Provider,{value:{theme:t},children:[o&&e,!o&&f.jsx(s,{className:R(a),"data-theme":t,...c,children:e})]})};function W(){return r.useContext(z)}function y(t){return t.replace(/\s\s+/g," ")}function j(t){return y(Object.keys(t).map(e=>`--${e}: ${t[e]};`).join(`

`))}function at(){return y(Object.keys(N).map(t=>`
        @media (max-width: ${N[t]}px) {
          :root {
            ${j(L[t])}
          }
        }
      `).join(`
`))}const nt=y(`
  @layer theme, base, components, layout;
`),rt=y(`
  :root {
    ${j(L.base)}
  }

  ${at()}

  [data-theme='dark'] {
    ${j(C.dark)}
  }

  [data-theme='light'] {
    ${j(C.light)}
  }
`),ct=y(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${tt}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${Z}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${ot}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${et}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${Y}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${X}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${st}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`),It=y(`
  ${nt}

  @layer theme {
    ${rt}
    ${ct}
  }
`);function it(){const[t,e]=r.useState(!1);return r.useEffect(()=>{e(!0)},[]),t}function lt(t,e,a={},s=!0){const[c,n]=r.useState(!1),[o,i]=r.useState(!1);return r.useEffect(()=>{if(!(t!=null&&t.current))return;const l=new IntersectionObserver(([u])=>{const{isIntersecting:m,target:h}=u;n(m),m&&e&&(l.unobserve(h),i(!0))},a);return!o&&s&&l.observe(t.current),()=>l.disconnect()},[t,e,a,o,s]),c}async function ft({src:t,srcSet:e,sizes:a}){return new Promise((s,c)=>{try{if(!t&&!e)throw new Error("No image src or srcSet provided");let n=new Image;t&&(n.src=t),e&&(n.srcset=e),a&&(n.sizes=a);const o=()=>{n.removeEventListener("load",o);const i=n.currentSrc;n=null,s(i)};n.addEventListener("load",o)}catch(n){c(`Error loading ${e}: ${n}`)}})}async function ut(t=1,e=1){return new Promise(a=>{const s=document.createElement("canvas"),c=s.getContext("2d");s.width=t,s.height=e,c.fillStyle="rgba(0, 0, 0, 0)",c.fillRect(0,0,t,e),s.toBlob(async n=>{if(!n)throw new Error("Video thumbnail failed to load");const o=URL.createObjectURL(n);s.remove(),a(o)})})}async function mt({srcSet:t,sizes:e}){const a=await Promise.all(t.split(", ").map(async o=>{const[i,l]=o.split(" "),u=Number(l.replace("w","")),m=await ut(u);return{src:i,image:m,width:l}})),s=a.map(({image:o,width:i})=>`${o} ${i}`).join(", "),c=await ft({srcSet:s,sizes:e});return a.find(o=>o.image===c).src}const dt="_image_4szht_2",ht="_elementWrapper_4szht_49",pt="_placeholder_4szht_71",yt="_element_4szht_49",gt="_button_4szht_104",p={image:dt,elementWrapper:ht,placeholder:pt,element:yt,button:gt},kt=({className:t,style:e,reveal:a,delay:s=0,raised:c,src:n,srcSet:o,placeholder:i,...l})=>{const[u,m]=r.useState(!1),{theme:h}=W(),g=r.useRef(),w=n||o.split(" ")[0],S=lt(g,!D(w)),v=r.useCallback(()=>{m(!0)},[]);return f.jsx("div",{className:R(p.image,t),"data-visible":S||u,"data-reveal":a,"data-raised":c,"data-theme":h,style:E({delay:_(s)},e),ref:g,children:f.jsx(wt,{delay:s,onLoad:v,loaded:u,inViewport:S,reveal:a,src:w,srcSet:o,placeholder:i,...l})})},wt=({onLoad:t,loaded:e,inViewport:a,srcSet:s,placeholder:c,delay:n,src:o,alt:i,play:l=!0,restartOnPause:u,reveal:m,sizes:h,width:g,height:w,noPauseButton:S,cover:v,...G})=>{const I=q(),[F,U]=r.useState(!0),[T,k]=r.useState(!I),[P,V]=r.useState(),[B,A]=r.useState(!1),O=r.useRef(),d=r.useRef(),b=D(o),M=a,H=it();r.useEffect(()=>{b&&s?(async()=>{const x=await mt({srcSet:s,sizes:h});V(x)})():b&&V(o)},[b,h,o,s]),r.useEffect(()=>{if(!d.current||!P)return;const $=()=>{k(!0),d.current.play()},x=()=>{k(!1),d.current.pause()};l||(x(),u&&(d.current.currentTime=0)),!B&&(a?a&&!I&&l&&$():x())},[a,l,I,u,B,P]);const K=$=>{$.preventDefault(),A(!0),d.current.paused?(k(!0),d.current.play()):(k(!1),d.current.pause())};return f.jsxs("div",{className:p.elementWrapper,"data-reveal":m,"data-visible":a||e,style:E({delay:_(n+1e3)}),children:[b&&H&&f.jsxs(r.Fragment,{children:[f.jsx("video",{muted:!0,loop:!0,playsInline:!0,className:p.element,"data-loaded":e,"data-cover":v,autoPlay:!I,onLoadStart:t,src:P,"aria-label":i,ref:d,...G}),!S&&f.jsxs(Q,{className:p.button,onClick:K,children:[f.jsx(J,{icon:T?"pause":"play"}),T?"Pause":"Play"]})]}),!b&&f.jsx("img",{className:p.element,"data-loaded":e,"data-cover":v,onLoad:t,decoding:"async",src:M?o:void 0,srcSet:M?s:void 0,width:g,height:w,alt:i,sizes:h,...G}),F&&f.jsx("img",{"aria-hidden":!0,className:p.placeholder,"data-loaded":e,"data-cover":v,style:E({delay:_(n)}),ref:O,src:c,width:g,height:w,onTransitionEnd:()=>U(!1),decoding:"async",loading:"lazy",alt:"",role:"presentation"})]})};function D(t){return typeof t=="string"&&t.includes(".mp4")}export{ot as G,kt as I,St as T,tt as a,lt as b,It as t,W as u};

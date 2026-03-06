import{j as f,r}from"./jsx-runtime-BfF-YriY.js";import{c as R,m as M,t as L,k as C,a as E,n as N,u as q,B as Q,I as J}from"./heading-CsrwUCaY.js";const X="/New-folder/assets/gotham-bold-italic-C_msAlmW.woff2",Y="/New-folder/assets/gotham-bold-D1kvQ7KV.woff2",Z="/New-folder/assets/gotham-book-italic-Bm2IEtSK.woff2",ee="/New-folder/assets/gotham-book-Bnaws0Ef.woff2",te="/New-folder/assets/gotham-medium-italic-Dok430ou.woff2",oe="/New-folder/assets/gotham-medium-0VT3RO8I.woff2",se="/New-folder/assets/ipa-gothic-DimHCOud.woff2",z=r.createContext({}),Se=({theme:e="dark",children:t,className:n,as:s="div",toggleTheme:l,...a})=>{const o=W(),c=!o.theme;return f.jsxs(z.Provider,{value:{theme:e,toggleTheme:l||o.toggleTheme},children:[c&&t,!c&&f.jsx(s,{className:R(n),"data-theme":e,...a,children:t})]})};function W(){return r.useContext(z)}function y(e){return e.replace(/\s\s+/g," ")}function j(e){return y(Object.keys(e).map(t=>`--${t}: ${e[t]};`).join(`

`))}function ae(){return y(Object.keys(M).map(e=>`
        @media (max-width: ${M[e]}px) {
          :root {
            ${j(L[e])}
          }
        }
      `).join(`
`))}const ne=y(`
  @layer theme, base, components, layout;
`),re=y(`
  :root {
    ${j(L.base)}
  }

  ${ae()}

  [data-theme='dark'] {
    ${j(C.dark)}
  }

  [data-theme='light'] {
    ${j(C.light)}
  }
`),ce=y(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${ee}) format('woff2');
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
    src: url(${oe}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${te}) format('woff2');
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
    src: url(${se}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`),Ie=y(`
  ${ne}

  @layer theme {
    ${re}
    ${ce}
  }
`);function le(){const[e,t]=r.useState(!1);return r.useEffect(()=>{t(!0)},[]),e}function ie(e,t,n={},s=!0){const[l,a]=r.useState(!1),[o,c]=r.useState(!1);return r.useEffect(()=>{if(!(e!=null&&e.current))return;const i=new IntersectionObserver(([u])=>{const{isIntersecting:d,target:h}=u;a(d),d&&t&&(i.unobserve(h),c(!0))},n);return!o&&s&&i.observe(e.current),()=>i.disconnect()},[e,t,n,o,s]),l}async function fe({src:e,srcSet:t,sizes:n}){return new Promise((s,l)=>{try{if(!e&&!t)throw new Error("No image src or srcSet provided");let a=new Image;e&&(a.src=e),t&&(a.srcset=t),n&&(a.sizes=n);const o=()=>{a.removeEventListener("load",o);const c=a.currentSrc;a=null,s(c)};a.addEventListener("load",o)}catch(a){l(`Error loading ${t}: ${a}`)}})}async function ue(e=1,t=1){return new Promise(n=>{const s=document.createElement("canvas"),l=s.getContext("2d");s.width=e,s.height=t,l.fillStyle="rgba(0, 0, 0, 0)",l.fillRect(0,0,e,t),s.toBlob(async a=>{if(!a)throw new Error("Video thumbnail failed to load");const o=URL.createObjectURL(a);s.remove(),n(o)})})}async function de({srcSet:e,sizes:t}){const n=await Promise.all(e.split(", ").map(async o=>{const[c,i]=o.split(" "),u=Number(i.replace("w","")),d=await ue(u);return{src:c,image:d,width:i}})),s=n.map(({image:o,width:c})=>`${o} ${c}`).join(", "),l=await fe({srcSet:s,sizes:t});return n.find(o=>o.image===l).src}const me="_image_4szht_2",he="_elementWrapper_4szht_49",pe="_placeholder_4szht_71",ye="_element_4szht_49",ge="_button_4szht_104",p={image:me,elementWrapper:he,placeholder:pe,element:ye,button:ge},ke=({className:e,style:t,reveal:n,delay:s=0,raised:l,src:a,srcSet:o,placeholder:c,...i})=>{const[u,d]=r.useState(!1),{theme:h}=W(),g=r.useRef(),w=a||o.split(" ")[0],S=ie(g,!D(w)),v=r.useCallback(()=>{d(!0)},[]);return f.jsx("div",{className:R(p.image,e),"data-visible":S||u,"data-reveal":n,"data-raised":l,"data-theme":h,style:E({delay:N(s)},t),ref:g,children:f.jsx(we,{delay:s,onLoad:v,loaded:u,inViewport:S,reveal:n,src:w,srcSet:o,placeholder:c,...i})})},we=({onLoad:e,loaded:t,inViewport:n,srcSet:s,placeholder:l,delay:a,src:o,alt:c,play:i=!0,restartOnPause:u,reveal:d,sizes:h,width:g,height:w,noPauseButton:S,cover:v,..._})=>{const I=q(),[F,U]=r.useState(!0),[G,k]=r.useState(!I),[P,T]=r.useState(),[V,A]=r.useState(!1),O=r.useRef(),m=r.useRef(),b=D(o),B=n,H=le();r.useEffect(()=>{b&&s?(async()=>{const x=await de({srcSet:s,sizes:h});T(x)})():b&&T(o)},[b,h,o,s]),r.useEffect(()=>{if(!m.current||!P)return;const $=()=>{k(!0),m.current.play()},x=()=>{k(!1),m.current.pause()};i||(x(),u&&(m.current.currentTime=0)),!V&&(n?n&&!I&&i&&$():x())},[n,i,I,u,V,P]);const K=$=>{$.preventDefault(),A(!0),m.current.paused?(k(!0),m.current.play()):(k(!1),m.current.pause())};return f.jsxs("div",{className:p.elementWrapper,"data-reveal":d,"data-visible":n||t,style:E({delay:N(a+1e3)}),children:[b&&H&&f.jsxs(r.Fragment,{children:[f.jsx("video",{muted:!0,loop:!0,playsInline:!0,className:p.element,"data-loaded":t,"data-cover":v,autoPlay:!I,onLoadStart:e,src:P,"aria-label":c,ref:m,..._}),!S&&f.jsxs(Q,{className:p.button,onClick:K,children:[f.jsx(J,{icon:G?"pause":"play"}),G?"Pause":"Play"]})]}),!b&&f.jsx("img",{className:p.element,"data-loaded":t,"data-cover":v,onLoad:e,decoding:"async",src:B?o:void 0,srcSet:B?s:void 0,width:g,height:w,alt:c,sizes:h,..._}),F&&f.jsx("img",{"aria-hidden":!0,className:p.placeholder,"data-loaded":t,"data-cover":v,style:E({delay:N(a)}),ref:O,src:l,width:g,height:w,onTransitionEnd:()=>U(!1),decoding:"async",loading:"lazy",alt:"",role:"presentation"})]})};function D(e){return typeof e=="string"&&e.includes(".mp4")}export{oe as G,ke as I,Se as T,ee as a,ie as b,Ie as t,W as u};

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37955],{86999:function(e,t,n){"use strict";n.r(t),n.d(t,{ErrorBoundary:function(){return r}});var i=n(27573),o=n(7653);class r extends o.Component{static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){console.log("Error boundary caught an error",e,t.componentStack)}render(){return this.state.hasError?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)(i.Fragment,{children:this.props.children})}constructor(e){super(e),this.state={hasError:!1}}}},72658:function(e,t,n){"use strict";n.d(t,{S:function(){return i.ErrorBoundary}});var i=n(86999)},67046:function(e,t,n){"use strict";n.r(t),n.d(t,{Link:function(){return v}});var i=n(27573),o=n(7653),r=n(67754),l=n(87659),a=n(58416),c=n(67368),s=n(79826),d=n(58993);n(13603);let u=e=>{let{uri:t,settings:n}=e,i=n.domainName,o=t;if(o)return o.startsWith("mailto:")||o.startsWith("tel:")||o.startsWith("#")||(o.startsWith("/")||o.startsWith("http://")||o.startsWith("https://")||(o="https://".concat(o)),(o=o.replace(n.notionPage,"").replace("http://".concat(i),"/").replace("https://".concat(i),"/")).startsWith("//")&&(o=o.replace("//","/"))),o},v=(0,o.forwardRef)((e,t)=>{let{uri:n}=e,v=(0,r.useRouter)(),h=(0,r.usePathname)(),{pageId:f}=(0,d.l)(),{settings:g,config:p}=(0,s.A)(),m=g.domainName,b=u({uri:n,settings:g}),y=e.id?(0,c.wj)(e.id):void 0,x=(0,a.cn)("notion-link",e.className),w=(0,o.useMemo)(()=>n&&(n.startsWith("#")||n.startsWith("/")||n.startsWith("http://".concat(m))||n.startsWith("https://".concat(m))),[n]),k=((e,t)=>{let n=e,[i,o]=e.split("#");return(t&&o&&!o.startsWith("block-")&&(n=i+"#block-".concat(o)),null==p?void 0:p.routeTransform)?p.routeTransform("",n):{href:w?"/main/".concat(m).concat(n):n,as:n}})(b||"#",y),E=k.as.includes("#")&&(k.as.split("#")[0]===h||"/"===h&&k.as.split("#")[0]==="/".concat(g.notionPage)),j=async()=>{e.onClick&&e.onClick(),(null==g?void 0:g.analytics)&&await fetch("/api/click",{method:"POST",body:JSON.stringify({uri:e.uri,page:window.location.pathname})})};return w?(0,i.jsx)(l.default,{id:y,ref:t,as:k.as,href:k.href,prefetch:e.prefetch||!1,shallow:E,className:x,onClick:t=>{e.onClick&&e.onClick(t),"404"===f&&window.location.replace(k.as)},onMouseEnter:()=>{v.prefetch(k.as),e.onMouseEnter&&e.onMouseEnter()},onMouseLeave:e.onMouseLeave,style:e.style,children:e.children}):(0,i.jsx)("a",{id:y,ref:t,href:b,className:x,target:"_blank",rel:"noopener noreferrer",onClick:j,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,style:e.style,children:e.children})})},63884:function(e,t,n){"use strict";n.d(t,{r:function(){return i.Link}});var i=n(67046)},21966:function(e,t,n){"use strict";n.d(t,{ThemeToggle:function(){return a}});var i=n(27573);n(7653);var o=n(10119),r=n(68619),l=n(58416);let a=e=>{let{colorMode:t,toggleColorMode:n}=(0,r.T)();return(0,i.jsx)("div",{className:(0,l.cn)(e.notion?"notion-navbar__button":"super-navbar__button","super-navbar__theme-toggle"),onClick:n,children:"dark"===t?(0,i.jsx)(o.J,{type:"Moon",size:20}):(0,i.jsx)(o.J,{type:"Sun",size:20})})}},96325:function(e,t,n){"use strict";n.r(t),n.d(t,{PageProvider:function(){return d},usePageContext:function(){return s}});var i=n(27573),o=n(78745),r=n.n(o),l=n(7653),a=n(67754);let c=(0,l.createContext)({records:{},pageId:"",rootPageId:"",pageLocation:"",passwords:null}),s=()=>(0,l.useContext)(c),d=e=>{var t,n,o,s,d;let v=(0,a.useRouter)();(0,l.useEffect)(()=>{var t;return e.pageReplacement?v.replace(e.pageReplacement):!e.settings||(null===(t=e.config)||void 0===t?void 0:t.isPreview)||u(),()=>{}},[v,e.pageReplacement,null===(t=e.settings)||void 0===t?void 0:t.analytics]);let h="\n    html {\n      font-size: ".concat((null==e?void 0:null===(s=e.settings)||void 0===s?void 0:null===(o=s.theme)||void 0===o?void 0:null===(n=o.typography)||void 0===n?void 0:n.baseSize)||(e.smallText?"14":"16"),"px;\n    }\n\n    ").concat(e.styles,"\n  ");return(0,i.jsxs)(c.Provider,{value:e,children:[e.children,(null===(d=e.config)||void 0===d?void 0:d.isPreview)?(0,i.jsx)("style",{children:h}):(0,i.jsx)(r(),{id:h.__hash,children:h})]})},u=async()=>{await fetch("/api/view",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pathname:location.pathname})})}},58993:function(e,t,n){"use strict";n.d(t,{T:function(){return i.PageProvider},l:function(){return i.usePageContext}});var i=n(96325)},6227:function(e,t,n){"use strict";n.r(t),n.d(t,{Picture:function(){return v}});var i=n(27573),o=n(7653),r=n(65880),l=n(67368);let a=e=>encodeURI(e.src.replace("public","".concat(e.width?"w=".concat(e.width,","):"","quality=").concat(e.quality,",fit=scale-down"))),c=e=>{var t;let n=e.src,r=e.priority?void 0:"lazy",[c,s]=(0,o.useState)(!1),{newSrc:d,webpSrc:u}=(0,o.useMemo)(()=>{let t=(0,l.HU)(n),i=t&&e.width?"".concat(n,"?").concat(e.width?"w=".concat(e.width):""):n,o=t&&(e.width||e.height)?i+((null==e?void 0:e.width)||(null==e?void 0:e.height)?"&f=webp":"f=webp"):t?i+"?f=webp":void 0;return{newSrc:i,webpSrc:o}},[n]);return c?(0,i.jsx)("div",{style:e.style,className:e.className,children:" "}):(0,i.jsx)("img",{src:e.isCFImage?a({src:d,width:e.width,quality:80}):d,alt:e.alt,width:e.width||"100%",height:e.height||(null===(t=e.style)||void 0===t?void 0:t.height)||"100%",className:e.className,style:{...e.style||{},objectFit:e.objectFit,objectPosition:e.objectPosition},loading:r,onError:()=>s(!0)})},s=e=>{var t,n,o;let[r,l]=(null===(t=e.src)||void 0===t?void 0:t.split("?b="))||[],a=e.priority?void 0:"lazy";return(0,i.jsx)("span",{style:{maxWidth:e.width||(null===(n=e.style)||void 0===n?void 0:n.width)||"100%"},children:(0,i.jsx)("img",{width:"100%",height:e.height||(null===(o=e.style)||void 0===o?void 0:o.height)||"100%",src:r,alt:e.alt,loading:a,className:e.className,style:{objectPosition:e.objectPosition}})})},d=(e,t,n)=>{if(!t)return e;let i=e.lastIndexOf(t);return -1!==i?"".concat(e.slice(0,i)).concat(n).concat(e.slice(i+t.length)):e},u=e=>encodeURI(d(e.src,"public","w=".concat(e.width,",quality=").concat(e.quality,",fit=scale-down"))),v=e=>{var t,n,o,a,d;let[v,h]=(null===(t=e.src)||void 0===t?void 0:t.split("?b="))||[],f=e.priority?void 0:"lazy";if((0,l.Fk)(v))return(0,i.jsx)(s,{...e});let g=(0,l.Dx)(v),p=(0,l.HU)(v)||g,m=null==v?void 0:null===(o=v.split("?"))||void 0===o?void 0:null===(n=o[0])||void 0===n?void 0:n.endsWith("gif");if(!p||m||!e.fill&&(!e.width||!e.height))return(0,i.jsx)(c,{...e,isCFImage:g});{let t={};return e.objectFit&&(t.objectFit=e.objectFit),e.objectPosition&&(t.objectPosition=e.objectPosition),(null===(a=e.style)||void 0===a?void 0:a.maxWidth)&&(t.maxWidth=e.style.maxWidth),!e.fill&&(null==e?void 0:null===(d=e.style)||void 0===d?void 0:d.height)&&(t.height=e.style.height),(0,i.jsx)(r.default,{src:v,alt:e.alt||"",width:e.fill?void 0:e.width,height:e.fill?void 0:e.height,loader:g?u:void 0,quality:e.quality||90,priority:e.priority,loading:f,className:e.className,style:t,fill:e.fill,sizes:e.sizes})}}},58846:function(e,t,n){"use strict";n.d(t,{t:function(){return i.Picture}});var i=n(6227)},17011:function(e,t,n){"use strict";n.r(t),n.d(t,{SiteProvider:function(){return c},useSiteContext:function(){return a}});var i=n(27573),o=n(7653),r=n(67754);let l=(0,o.createContext)({settings:{},config:{},previewPage:""}),a=()=>(0,o.useContext)(l),c=e=>{let t=(0,r.useParams)(),[n,a]=(0,o.useState)("");return(0,o.useEffect)(()=>{if(e.config.isPreview){var t,n;a("/"+((null===(n=new URLSearchParams(window.location.search).get("path"))||void 0===n?void 0:null===(t=n.split("#"))||void 0===t?void 0:t[0])||""))}},[t,e.config.isPreview]),(0,i.jsx)(l.Provider,{value:{...e,previewPage:n},children:e.children})}},79826:function(e,t,n){"use strict";n.d(t,{A:function(){return i.useSiteContext}});var i=n(17011)},10119:function(e,t,n){"use strict";n.d(t,{J:function(){return d}});var i=n(27573),o=n(7653),r=n(68426),l=n.n(r),a=n(34900);let c={},s=e=>(0,i.jsx)("div",{style:{width:e.size,minWidth:e.size,height:e.size,minHeight:e.size}}),d=o.memo(e=>{let t=l()(e.type).replace("-x-","x"),n=c[t]||(a.Z[t]?(0,o.lazy)(a.Z[t]):()=>s(e));return c[t]||(c[t]=n),(0,i.jsx)(o.Suspense,{fallback:s(e),children:(0,i.jsx)(n,{...e})})})},68619:function(e,t,n){"use strict";n.d(t,{T:function(){return d},ThemeProvider:function(){return u}});var i=n(27573),o=n(78745),r=n.n(o),l=n(7653),a=n(72658),c=n(12419);let s=(0,l.createContext)({}),d=()=>(0,l.useContext)(s),u=e=>{var t,n,o,d,u,v,h,f,g,p;let[m,b]=(0,l.useState)(""),y=(null===(t=e.settings)||void 0===t?void 0:t.legacyTheme)||!(null==e?void 0:null===(n=e.settings)||void 0===n?void 0:n.theme)||"string"==typeof(null==e?void 0:null===(o=e.settings)||void 0===o?void 0:o.theme),x={colorMode:m,theme:(null==e?void 0:null===(d=e.settings)||void 0===d?void 0:d.theme)||c.U,isLegacyTheme:y,toggleColorMode:()=>{var t;let n="light"===m?"dark":"light",i=e.isPreview?null===(t=document.getElementById("static-renderer-frame"))||void 0===t?void 0:t.contentDocument.children[0]:document.getElementsByTagName("html")[0];i&&(i.classList.remove("theme-".concat(m)),i.classList.add("theme-".concat(n))),b(n),localStorage&&!e.isPreview&&localStorage.setItem("color-preference",n)}};(0,l.useEffect)(()=>{try{var t,n,i,o;if(localStorage&&!e.isPreview){let i=localStorage.getItem("color-preference");i?b(i):b(null==e?void 0:null===(n=e.settings)||void 0===n?void 0:null===(t=n.theme)||void 0===t?void 0:t.colorMode)}else b(null==e?void 0:null===(o=e.settings)||void 0===o?void 0:null===(i=o.theme)||void 0===i?void 0:i.colorMode)}catch(e){console.log("ERROR",e)}},[e.isPreview]),(0,l.useEffect)(()=>{var t,n,i,o,r,l,a;if(e.isPreview&&(null==e?void 0:null===(n=e.settings)||void 0===n?void 0:null===(t=n.theme)||void 0===t?void 0:t.colorMode)!==m){let t=null===(i=document.getElementById("static-renderer-frame"))||void 0===i?void 0:i.contentDocument.children[0];t&&(t.classList.remove("theme-".concat(m)),t.classList.add("theme-".concat(null==e?void 0:null===(a=e.settings)||void 0===a?void 0:null===(l=a.theme)||void 0===l?void 0:l.colorMode))),b(null==e?void 0:null===(r=e.settings)||void 0===r?void 0:null===(o=r.theme)||void 0===o?void 0:o.colorMode)}return()=>{}},[null==e?void 0:null===(v=e.settings)||void 0===v?void 0:null===(u=v.theme)||void 0===u?void 0:u.colorMode,e.isPreview]);let w="\n  ".concat(!y||(null==e?void 0:null===(h=e.settings)||void 0===h?void 0:h.themeToggle)?(null==e?void 0:null===(f=e.settings)||void 0===f?void 0:f.themeToggle)?"".concat(e.dark," ").concat(e.light):(null==e?void 0:null===(p=e.settings)||void 0===p?void 0:null===(g=p.theme)||void 0===g?void 0:g.colorMode)==="dark"?e.dark:e.light:e.legacy,"\n  ").concat(e.global,"\n");return(0,i.jsxs)(s.Provider,{value:x,children:[e.children,(0,i.jsx)(a.S,{children:e.isPreview?(0,i.jsx)("style",{children:w}):(0,i.jsx)(r(),{id:"ef7eeab1ed2c0da5",dynamic:[w],children:"".concat(w,"\n          ")})})]})}},58416:function(e,t,n){"use strict";n.d(t,{cn:function(){return i}});let i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(e=>!!e).join(" ")}},12419:function(e,t,n){"use strict";n.d(t,{U:function(){return i}});let i={layout:{paddingLayout:.6,layoutMaxWidth:900,columnSpacing:46,borderThicknessLayout:1,borderTypeLayout:"solid",borderRadiiLayout:5,pageDisplay:"flex"},header:{coverHeight:30,titleAlign:"left",iconAlign:"-112px auto auto auto",display:"block"},collectionCard:{gap:10,shadow:"rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px",coverHeightLarge:200,coverHeightMedium:200,coverHeightSmall:128,titleSize:.875,coverSizeSmall:172,coverSizeMedium:260,coverSizeLarge:320,iconDisplay:"inline-flex"},callout:{iconDisplay:"block",shadow:"none"},typography:{primaryFont:"Inter",secondaryFont:"Inter",fonts:[],baseSize:16,titleSize:2.5,quoteSize:1.2,quoteSizeLarge:1.4,headingSize:1,textWeight:"normal",headingWeight:"600"},scrollbar:{width:15},navbar:{height:56,shadow:"rgba(0, 0, 0, 0.12) 0px 10px 20px -6px"},sidebar:{width:280,shadow:"rgba(0, 0, 0, 0.12) 0px 10px 20px -6px"},colors:{light:{text:"#37352F",textLight:"#7d7c78",background:"#ffffff",borderColor:"#E9E9E7",checkboxBackground:"#2EAADC",hoverBackground:"#efefef",scrollbar:{background:"#FAFAFA",handle:"#C1C1C1",border:"#E8E8E8"},navbar:{background:"#ffffff",buttonBackground:"#37352F",buttonText:"#ffffff",text:"#37352F"},footer:{background:"#ffffff",buttonBackground:"#37352F",buttonText:"#ffffff",text:"#37352F"},sidebar:{background:"#ffffff",hoverBackground:"#efefef",ctaBackground:"#ffffff",ctaText:"#37352F",text:"#37352F",border:"#E9E9E7"},database:{cardBackground:"#ffffff",cardHoverBackground:"#f9f9f8",calendarWeekendBackground:"#f7f6f3"},default:[45,8,20],gray:[45,2,46],brown:[19,31,47],orange:[30,87,45],yellow:[38,62,49],green:[149,31,39],blue:[202,53,43],purple:[274,32,54],pink:[328,48,53],red:[2,62,55]},dark:{text:"#e1e1e1",textLight:"#9b9b9b",background:"#191919",borderColor:"#373737",checkboxBackground:"#2EAADC",hoverBackground:"#262626",scrollbar:{background:"#FAFAFA",handle:"#C1C1C1",border:"#E8E8E8"},navbar:{background:"#191919",buttonBackground:"#e1e1e1",buttonText:"#191919",text:"#e1e1e1"},footer:{background:"#191919",buttonBackground:"#e1e1e1",buttonText:"#191919",text:"#e1e1e1"},sidebar:{background:"#191919",hoverBackground:"#262626",ctaBackground:"#191919",ctaText:"#e1e1e1",text:"#e1e1e1",border:"#373737"},database:{cardBackground:"#262626",cardHoverBackground:"#2f2f2f",calendarWeekendBackground:"#202020"},default:[45,8,20],gray:[0,0,61],brown:[18,35,58],orange:[25,54,53],yellow:[38,54,54],green:[146,32,47],blue:[217,50,58],purple:[270,55,62],pink:[329,57,58],red:[1,69,60]}}}},89452:function(e,t,n){"use strict";var i,o,r,l,a,c,s,d,u,v,h,f,g,p,m,b;n.d(t,{B6:function(){return o},Fs:function(){return l},UI:function(){return i},Vj:function(){return r},ZX:function(){return s}}),(u=i||(i={})).lite="lite",u.personal="personal",u.pro="pro",u.none="none",(v=o||(o={})).url="url",v.page="page",v.list="list",(h=r||(r={})).Text="text",h.Image="image",(f=l||(l={})).Hidden="hidden",f.Notion="notion",f.Simple="simple",f.Balanced="balanced",f.Minimal="minimal",(g=a||(a={})).None="none",g.Small="small",g.Medium="medium",g.Large="large",(p=c||(c={})).Popover="popover",p.Drawer="drawer",p.Fullscreen="fullscreen",(m=s||(s={})).None="none",m.Stack="stack",m.Corners="corners",m.Floating="floating",(b=d||(d={})).Left="left",b.Center="center",b.Right="right"},10762:function(e,t,n){"use strict";n.d(t,{O:function(){return a}});var i=n(7653),o=n(79826),r=n(42383);let l=e=>t=>{let{key:n}=t;"Escape"===n&&e()},a=e=>{let{config:{isPreview:t}}=(0,o.A)(),[n,a]=(0,i.useState)(null),c=(0,i.useRef)(null),s=(0,i.useCallback)(()=>a(!0),[]),d=(0,i.useCallback)(()=>a(!1),[]),{isMobile:u}=(0,r.Z)();return(0,i.useEffect)(()=>{var i,o;let r=t?null===(o=document.getElementById("static-renderer-frame"))||void 0===o?void 0:null===(i=o.contentDocument)||void 0===i?void 0:i.body:document.body,a=t=>{let{closeType:n}=t;d(),(null==e?void 0:e.onClose)&&e.onClose(n)},s=t=>{let{target:n}=t;!(!c.current||c.current.contains(n))&&(null!=e&&e.noMobile&&u||a({closeType:"click"}))},v=l(()=>a({closeType:"esc"}));return n&&(r.addEventListener("mouseup",s),r.addEventListener("keydown",v)),()=>{r.removeEventListener("mouseup",s),r.removeEventListener("keydown",v)}},[n,d,u,t,e]),{containerRef:c,isShown:n,onOpen:s,onClose:d}}},42383:function(e,t,n){"use strict";var i=n(7653),o=n(79826);t.Z=()=>{let{config:{isPreview:e}}=(0,o.A)(),[t,n]=(0,i.useState)({width:void 0,height:void 0});return(0,i.useEffect)(()=>{function t(){e?n({width:document.getElementById("static-renderer-frame").clientWidth,height:document.getElementById("static-renderer-frame").clientHeight}):n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)},[]),{...t,isMobile:547>((null==t?void 0:t.width)||0)}}},67368:function(e,t,n){"use strict";n.d(t,{Dx:function(){return a},Fk:function(){return o},HU:function(){return l},OP:function(){return d},S$:function(){return c},cj:function(){return u},mg:function(){return s},wj:function(){return r}});var i=n(89452);let o=e=>/^data:image/.test(e),r=e=>e?"block-"+e.split("/").join("-"):"",l=e=>null==e?void 0:e.startsWith("https://assets.super.so"),a=e=>null==e?void 0:e.startsWith("https://images.spr.so/cdn-cgi/imagedelivery"),c=e=>{var t;return null!==(t=null==e?void 0:e.reduce((e,t)=>e+t[0],""))&&void 0!==t?t:""};function s(e){var t;return(null==e?void 0:null===(t=e.view)||void 0===t?void 0:t.superProperties)||(null==e?void 0:e.superProperties)||{}}function d(e){var t,i;return Array.isArray(e)?e.every(e=>{var t,i;return!!(null===(i=n.g)||void 0===i?void 0:null===(t=i.document)||void 0===t?void 0:t.querySelector('script[src="'+e+'"]'))}):!!(null===(i=n.g)||void 0===i?void 0:null===(t=i.document)||void 0===t?void 0:t.querySelector('script[src="'+e+'"]'))}function u(e){return!(null==e?void 0:e.free)&&(null==e?void 0:e.tier)!==i.UI.lite}},13603:function(){}}]);
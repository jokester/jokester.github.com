_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"0sNQ":function(e,t){"trimStart"in String.prototype||(String.prototype.trimStart=String.prototype.trimLeft),"trimEnd"in String.prototype||(String.prototype.trimEnd=String.prototype.trimRight),"description"in Symbol.prototype||Object.defineProperty(Symbol.prototype,"description",{configurable:!0,get:function(){var e=/\((.*)\)/.exec(this.toString());return e?e[1]:void 0}}),Array.prototype.flat||(Array.prototype.flat=function(e,t){return t=this.concat.apply([],this),e>1&&t.some(Array.isArray)?t.flat(e-1):t},Array.prototype.flatMap=function(e,t){return this.map(e,t).flat()}),Promise.prototype.finally||(Promise.prototype.finally=function(e){if("function"!=typeof e)return this.then(e,e);var t=this.constructor||Promise;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){throw r}))}))})},BMP1:function(e,t,r){"use strict";var n=r("284h")(r("IKlv"));window.next=n,(0,n.default)().catch(console.error)},DqTX:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(){let e=null;return{mountedInstances:new Set,updateHead:t=>{const r=e=Promise.resolve().then((()=>{if(r!==e)return;e=null;const n={};t.forEach((e=>{const t=n[e.type]||[];t.push(e),n[e.type]=t}));const a=n.title?n.title[0]:null;let i="";if(a){const e=a.props.children;i="string"===typeof e?e:Array.isArray(e)?e.join(""):""}i!==document.title&&(document.title=i),["meta","base","link","style","script"].forEach((e=>{!function(e,t){const r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]");0;const a=Number(n.content),i=[];for(let o=0,c=n.previousElementSibling;o<a;o++,c=c.previousElementSibling)c.tagName.toLowerCase()===e&&i.push(c);const s=t.map(o).filter((e=>{for(let t=0,r=i.length;t<r;t++){if(i[t].isEqualNode(e))return i.splice(t,1),!1}return!0}));i.forEach((e=>e.parentNode.removeChild(e))),s.forEach((e=>r.insertBefore(e,n))),n.content=(a-i.length+s.length).toString()}(e,n[e]||[])}))}))}}},t.DOMAttributeNames=void 0;const n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"};function o({type:e,props:t}){const r=document.createElement(e);for(const i in t){if(!t.hasOwnProperty(i))continue;if("children"===i||"dangerouslySetInnerHTML"===i)continue;if(void 0===t[i])continue;const e=n[i]||i.toLowerCase();r.setAttribute(e,t[i])}const o=t.children,a=t.dangerouslySetInnerHTML;return a?r.innerHTML=a.__html||"":o&&(r.textContent="string"===typeof o?o:Array.isArray(o)?o.join(""):""),r}t.DOMAttributeNames=n},IKlv:function(e,t,r){"use strict";var n=r("o0o1"),o=r("yXPU"),a=r("284h"),i=r("TqRt");t.__esModule=!0,t.render=K,t.renderError=$,t.default=t.emitter=t.router=t.version=void 0;var s=i(r("pVnL"));i(r("284h"));r("0sNQ");var c=i(r("FdF9")),u=i(r("FdF9")),l=r("FYa8"),d=i(r("dZ6Y")),p=r("qOIg"),f=r("elyg"),m=r("/jkW"),h=a(r("3WeD")),y=a(r("yLiY")),v=r("g/15"),g=i(r("DqTX")),S=i(r("zmvN")),b=i(r("bGXG")),E=r("nOHt");const w=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=w;t.version="10.0.4";const _=e=>[].slice.call(e),x=w.props,T=w.err,P=w.page,A=w.query,N=w.buildId,C=w.assetPrefix,L=w.runtimeConfig,F=w.dynamicIds,M=w.isFallback,k=w.locales;let R=w.locale,I=w.defaultLocale;const D=C||"";r.p="".concat(D,"/_next/"),y.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:L||{}});let B=(0,v.getURL)();(0,f.hasBasePath)(B)&&(B=(0,f.delBasePath)(B));const j=new S.default(N,D),q=([e,t])=>j.routeLoader.onEntrypoint(e,t);window.__NEXT_P&&window.__NEXT_P.map((e=>setTimeout((()=>q(e)),0))),window.__NEXT_P=[],window.__NEXT_P.push=q;const O=(0,g.default)(),H=document.getElementById("__next");let X,G,U,W,Y,V;t.router=U;class J extends c.default.Component{componentDidCatch(e,t){this.props.fn(e,t)}componentDidMount(){this.scrollToHash(),U.isSsr&&(M||w.nextExport&&((0,m.isDynamicRoute)(U.pathname)||location.search)||x&&x.__N_SSG&&location.search)&&U.replace(U.pathname+"?"+String(h.assign(h.urlQueryToSearchParams(U.query),new URLSearchParams(location.search))),B,{_h:1,shallow:!M})}componentDidUpdate(){this.scrollToHash()}scrollToHash(){let e=location.hash;if(e=e&&e.substring(1),!e)return;const t=document.getElementById(e);t&&setTimeout((()=>t.scrollIntoView()),0)}render(){return this.props.children}}const Q=(0,d.default)();t.emitter=Q;var z=function(){var e=o(n.mark((function e(r={}){var o,a,i,s,c,u;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,j.routeLoader.whenEntrypoint("/_app");case 3:if(!("error"in(o=e.sent))){e.next=6;break}throw o.error;case 6:a=o.component,i=o.exports,Y=a,i&&i.reportWebVitals&&(V=({id:e,name:t,startTime:r,value:n,duration:o,entryType:a,entries:s})=>{const c="".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12);let u;s&&s.length&&(u=s[0].startTime),i.reportWebVitals({id:e||c,name:t,startTime:r||u,value:null==n?o:n,label:"mark"===a||"measure"===a?"custom":"web-vital"})}),s=T,e.prev=10,e.next=15;break;case 15:return e.next=17,j.routeLoader.whenEntrypoint(P);case 17:e.t0=e.sent;case 18:if(!("error"in(c=e.t0))){e.next=21;break}throw c.error;case 21:W=c.component,e.next=26;break;case 26:e.next=31;break;case 28:e.prev=28,e.t1=e.catch(10),s=e.t1;case 31:if(!window.__NEXT_PRELOADREADY){e.next=35;break}return e.next=35,window.__NEXT_PRELOADREADY(F);case 35:return t.router=U=(0,E.createRouter)(P,A,B,{initialProps:x,pageLoader:j,App:Y,Component:W,wrapApp:ae,err:s,isFallback:Boolean(M),subscription:(e,t)=>K(Object.assign({},e,{App:t})),locale:R,locales:k,defaultLocale:I}),K(u={App:Y,initial:!0,Component:W,props:x,err:s}),e.abrupt("return",Q);case 43:return e.abrupt("return",{emitter:Q,render:K,renderCtx:u});case 44:case"end":return e.stop()}}),e,null,[[10,28]])})));return function(){return e.apply(this,arguments)}}();function K(e){return Z.apply(this,arguments)}function Z(){return(Z=o(n.mark((function e(t){return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.err){e.next=4;break}return e.next=3,$(t);case 3:return e.abrupt("return");case 4:return e.prev=4,e.next=7,ie(t);case 7:e.next=16;break;case 9:if(e.prev=9,e.t0=e.catch(4),!e.t0.cancelled){e.next=13;break}throw e.t0;case 13:return e.next=16,$((0,s.default)({},t,{err:e.t0}));case 16:case"end":return e.stop()}}),e,null,[[4,9]])})))).apply(this,arguments)}function $(e){const t=e.App,r=e.err;return console.error(r),j.loadPage("/_error").then((({page:n,styleSheets:o})=>{const a=ae(t),i={Component:n,AppTree:a,router:U,ctx:{err:r,pathname:P,query:A,asPath:B,AppTree:a}};return Promise.resolve(e.props?e.props:(0,v.loadGetInitialProps)(t,i)).then((t=>ie((0,s.default)({},e,{err:r,Component:n,styleSheets:o,props:t}))))}))}t.default=z;let ee="function"===typeof u.default.hydrate;function te(){v.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),V&&performance.getEntriesByName("Next.js-hydration").forEach(V),ne())}function re(){if(!v.ST)return;performance.mark("afterRender");const e=performance.getEntriesByName("routeChange","mark");e.length&&(performance.measure("Next.js-route-change-to-render",e[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),V&&(performance.getEntriesByName("Next.js-render").forEach(V),performance.getEntriesByName("Next.js-route-change-to-render").forEach(V)),ne(),["Next.js-route-change-to-render","Next.js-render"].forEach((e=>performance.clearMeasures(e))))}function ne(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach((e=>performance.clearMarks(e)))}function oe({children:e}){return c.default.createElement(J,{fn:e=>$({App:Y,err:e}).catch((e=>console.error("Error rendering page: ",e)))},c.default.createElement(p.RouterContext.Provider,{value:(0,E.makePublicRouterInstance)(U)},c.default.createElement(l.HeadManagerContext.Provider,{value:O},e)))}const ae=e=>t=>{const r=(0,s.default)({},t,{Component:W,err:T,router:U});return c.default.createElement(oe,null,c.default.createElement(e,r))};function ie(e){let t=e.App,r=e.Component,n=e.props,o=e.err,a="initial"in e?void 0:e.styleSheets;r=r||X.Component,n=n||X.props;const i=(0,s.default)({},n,{Component:r,err:o,router:U});X=i;let l,d=!1;const p=new Promise(((e,t)=>{G&&G(),l=()=>{G=null,e()},G=()=>{d=!0,G=null;const e=new Error("Cancel rendering route");e.cancelled=!0,t(e)}}));const f=c.default.createElement(se,{callback:function(){l()}},c.default.createElement(ce,{callback:function(){if(a&&!d){const e=new Set(a.map((e=>e.href))),t=_(document.querySelectorAll("style[data-n-href]")),r=t.map((e=>e.getAttribute("data-n-href")));for(let o=0;o<r.length;++o)e.has(r[o])?t[o].removeAttribute("media"):t[o].setAttribute("media","x");let n=document.querySelector("noscript[data-n-css]");n&&a.forEach((({href:e})=>{const t=document.querySelector('style[data-n-href="'.concat(e,'"]'));t&&(n.parentNode.insertBefore(t,n.nextSibling),n=t)})),_(document.querySelectorAll("link[data-n-p]")).forEach((e=>{e.parentNode.removeChild(e)})),getComputedStyle(document.body,"height")}}}),c.default.createElement(oe,null,c.default.createElement(t,i)));var m,h;return function(){if(!a)return!1;const e=_(document.querySelectorAll("style[data-n-href]")),t=new Set(e.map((e=>e.getAttribute("data-n-href")))),r=document.querySelector("noscript[data-n-css]"),n=null==r?void 0:r.getAttribute("data-n-css");a.forEach((({href:e,text:r})=>{if(!t.has(e)){const t=document.createElement("style");t.setAttribute("data-n-href",e),t.setAttribute("media","x"),n&&t.setAttribute("nonce",n),document.head.appendChild(t),t.appendChild(document.createTextNode(r))}}))}(),m=f,h=H,v.ST&&performance.mark("beforeRender"),ee?(u.default.hydrate(m,h,te),ee=!1):u.default.render(m,h,re),p}function se({callback:e,children:t}){return c.default.useLayoutEffect((()=>e()),[e]),c.default.useEffect((()=>{(0,b.default)(V)}),[]),t}function ce({callback:e}){return c.default.useLayoutEffect((()=>e()),[e]),null}},bGXG:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r("p0hA");location.href;let o,a=!1;function i(e){o&&o(e)}t.default=e=>{o=e,a||(a=!0,(0,n.getCLS)(i),(0,n.getFID)(i),(0,n.getFCP)(i),(0,n.getLCP)(i),(0,n.getTTFB)(i))}},p0hA:function(e,t,r){(function(t){e.exports=function(){var e={692:function(e,t){!function(e){"use strict";var t,r,n=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},o=function(e){return{name:e,value:arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,delta:0,entries:[],id:n(),isFinal:!1}},a=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return r.observe({type:e,buffered:!0}),r}}catch(e){}},i=!1,s=!1,c=function(e){i=!e.persisted},u=function(){addEventListener("pagehide",c),addEventListener("beforeunload",(function(){}))},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s||(u(),s=!0),addEventListener("visibilitychange",(function(t){var r=t.timeStamp;"hidden"===document.visibilityState&&e({timeStamp:r,isUnloading:i})}),{capture:!0,once:t})},d=function(e,t,r,n){var o;return function(){r&&t.isFinal&&r.disconnect(),t.value>=0&&(n||t.isFinal||"hidden"===document.visibilityState)&&(t.delta=t.value-(o||0),(t.delta||t.isFinal||void 0===o)&&(e(t),o=t.value))}},p=function(){return void 0===t&&(t="hidden"===document.visibilityState?0:1/0,l((function(e){var r=e.timeStamp;return t=r}),!0)),{get timeStamp(){return t}}},f=function(){return r||(r=new Promise((function(e){return["scroll","keydown","pointerdown"].map((function(t){addEventListener(t,e,{once:!0,passive:!0,capture:!0})}))}))),r};e.getCLS=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=o("CLS",0),i=function(e){e.hadRecentInput||(n.value+=e.value,n.entries.push(e),t())},s=a("layout-shift",i);s&&(t=d(e,n,s,r),l((function(e){var r=e.isUnloading;s.takeRecords().map(i),r&&(n.isFinal=!0),t()})))},e.getFCP=function(e){var t,r=o("FCP"),n=p(),i=a("paint",(function(e){"first-contentful-paint"===e.name&&e.startTime<n.timeStamp&&(r.value=e.startTime,r.isFinal=!0,r.entries.push(e),t())}));i&&(t=d(e,r,i))},e.getFID=function(e){var t=o("FID"),r=p(),n=function(e){e.startTime<r.timeStamp&&(t.value=e.processingStart-e.startTime,t.entries.push(e),t.isFinal=!0,s())},i=a("first-input",n),s=d(e,t,i);i?l((function(){i.takeRecords().map(n),i.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(e,n){n.timeStamp<r.timeStamp&&(t.value=e,t.isFinal=!0,t.entries=[{entryType:"first-input",name:n.type,target:n.target,cancelable:n.cancelable,startTime:n.timeStamp,processingStart:n.timeStamp+e}],s())}))},e.getLCP=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=o("LCP"),i=p(),s=function(e){var r=e.startTime;r<i.timeStamp?(n.value=r,n.entries.push(e)):n.isFinal=!0,t()},c=a("largest-contentful-paint",s);if(c){t=d(e,n,c,r);var u=function(){n.isFinal||(c.takeRecords().map(s),n.isFinal=!0,t())};f().then(u),l(u,!0)}},e.getTTFB=function(e){var t,r=o("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var r in e)"navigationStart"!==r&&"toJSON"!==r&&(t[r]=Math.max(e[r]-e.navigationStart,0));return t}();r.value=r.delta=t.responseStart,r.entries=[t],r.isFinal=!0,e(r)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)},Object.defineProperty(e,"__esModule",{value:!0})}(t)}},r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={exports:{}},a=!0;try{e[t].call(o.exports,o,o.exports,n),a=!1}finally{a&&delete r[t]}return o.exports}return n.ab=t+"/",n(692)}()}).call(this,"/")},pVnL:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},yLiY:function(e,t,r){"use strict";let n;t.__esModule=!0,t.setConfig=function(e){n=e},t.default=void 0;t.default=()=>n},zmvN:function(e,t,r){"use strict";var n=r("284h"),o=r("TqRt");t.__esModule=!0,t.default=void 0;var a=r("elyg"),i=o(r("Lab5")),s=r("/jkW"),c=r("hS4m"),u=n(r("Nh2W"));function l(e){if("/"!==e[0])throw new Error('Route name should start with a "/", got "'.concat(e,'"'));return"/"===e?e:e.replace(/\/$/,"")}t.default=class{constructor(e,t){this.buildId=void 0,this.assetPrefix=void 0,this.promisedSsgManifest=void 0,this.promisedDevPagesManifest=void 0,this.routeLoader=void 0,this.routeLoader=(0,u.default)(t),this.buildId=e,this.assetPrefix=t,this.promisedSsgManifest=new Promise((e=>{window.__SSG_MANIFEST?e(window.__SSG_MANIFEST):window.__SSG_MANIFEST_CB=()=>{e(window.__SSG_MANIFEST)}}))}getPageList(){return(0,u.getClientBuildManifest)().then((e=>e.sortedPages))}getDataHref(e,t,r,n){const o=(0,c.parseRelativeUrl)(e),u=o.pathname,d=o.query,p=o.search,f=(0,c.parseRelativeUrl)(t).pathname,m=l(u),h=e=>{const t=(0,i.default)((0,a.addLocale)(e,n),".json");return(0,a.addBasePath)("/_next/data/".concat(this.buildId).concat(t).concat(r?"":p))},y=(0,s.isDynamicRoute)(m),v=y?(0,a.interpolateAs)(u,f,d).result:"";return y?v&&h(v):h(m)}_isSsg(e){const t=l((0,c.parseRelativeUrl)(e).pathname);return this.promisedSsgManifest.then((e=>e.has(t)))}loadPage(e){return this.routeLoader.loadRoute(e).then((e=>{if("component"in e)return{page:e.component,mod:e.exports,styleSheets:e.styles.map((e=>({href:e.href,text:e.content})))};throw e.error}))}prefetch(e){return this.routeLoader.prefetch(e)}}}},[["BMP1",0,2,1]]]);
//# sourceMappingURL=main-a33862f2a9b4c9428792.js.map
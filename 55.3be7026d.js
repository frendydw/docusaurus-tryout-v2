(window.webpackJsonp=window.webpackJsonp||[]).push([[55,10],{121:function(e,t,n){"use strict";var a=n(2),l=n(0),o=n.n(l),r=n(20),c=n(113),s=n(118),u=n(115),i=n(114),m=n(117),b=n(119),h=n(195),d=n(196);let f=null;function O({hit:e,children:t}){return o.a.createElement(i.a,{to:e.url},t)}function j({state:e,onClose:t}){const{generateSearchPageLink:n}=Object(b.a)();return o.a.createElement(i.a,{to:n(e.query),onClick:t},"See all ",e.context.nbHits," results")}function g(e){const{siteMetadata:t}=Object(c.a)(),{withBaseUrl:i}=Object(u.b)(),b=Object(s.useHistory)(),g=Object(l.useRef)(null),[p,k]=Object(l.useState)(!1),[E,C]=Object(l.useState)(null),w=Object(l.useCallback)(()=>f?Promise.resolve():Promise.all([n.e(56).then(n.bind(null,123)),Promise.all([n.e(0),n.e(57)]).then(n.bind(null,122)),n.e(0).then(n.t.bind(null,47,7))]).then(([{DocSearchModal:e}])=>{f=e}),[]),v=Object(l.useCallback)(()=>{w().then(()=>{k(!0)})},[w,k]),P=Object(l.useCallback)(()=>{k(!1)},[k]),S=Object(l.useCallback)(e=>{w().then(()=>{k(!0),C(e.key)})},[w,k,C]),y=Object(l.useRef)({navigate({suggestionUrl:e}){b.push(e)}}).current,N=Object(l.useRef)(e=>e.map(e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:i(`${t.pathname}${t.hash}`)}})).current,F=Object(l.useMemo)(()=>e=>o.a.createElement(j,Object(a.a)({},e,{onClose:P})),[P]),R=Object(l.useCallback)(e=>(e.addAlgoliaAgent("docusaurus",t.docusaurusVersion),e),[t.docusaurusVersion]);return Object(h.a)({isOpen:p,onOpen:v,onClose:P,onInput:S,searchButtonRef:g}),o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,null,o.a.createElement("link",{rel:"preconnect",href:`https://${e.appId}-dsn.algolia.net`,crossOrigin:!0})),o.a.createElement(d.a,{onTouchStart:w,onFocus:w,onMouseOver:w,onClick:v,ref:g}),p&&Object(r.createPortal)(o.a.createElement(f,Object(a.a)({onClose:P,initialScrollY:window.scrollY,initialQuery:E,navigator:y,transformItems:N,hitComponent:O,resultsFooterComponent:F,transformSearchClient:R},e)),document.body))}t.a=function(){const{siteConfig:e}=Object(c.a)();return o.a.createElement(g,e.themeConfig.algolia)}},149:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(120);t.default=function(){return l.a.createElement(o.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);
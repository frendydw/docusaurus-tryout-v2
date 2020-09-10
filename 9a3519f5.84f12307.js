(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{112:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,f=u["".concat(s,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(f,i(i({ref:t},p),{},{components:r})):a.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},92:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(112)),s={id:"api-types",title:"Types of API 1.2.0"},i={unversionedId:"api-types",id:"version-1.2.0/api-types",isDocsHomePage:!1,title:"Types of API 1.2.0",description:"Database APIs.",source:"@site/versioned_docs\\version-1.2.0\\apitypes.md",slug:"/api-types",permalink:"/docusaurus-tryout-v2/docs/api-types",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.2.0/apitypes.md",version:"1.2.0",sidebar:"version-1.2.0/someSidebar",previous:{title:"Introduction to API 1.2.0",permalink:"/docusaurus-tryout-v2/docs/api-introduction"},next:{title:"Rest API 1.2.0",permalink:"/docusaurus-tryout-v2/docs/api-rest"}},c=[{value:"Database APIs.",id:"database-apis",children:[]},{value:"Operating systems APIs.",id:"operating-systems-apis",children:[]},{value:"Remote APIs.",id:"remote-apis",children:[]},{value:"Web APIs.",id:"web-apis",children:[]}],p={rightToc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"database-apis"},"Database APIs."),Object(o.b)("p",null,"Database APIs enable communication between an application and a database management system. Developers work with databases by writing queries to access data, change tables, etc. The Drupal 7 Database API, for example, allows users to write unified queries for different databases, both proprietary and open source (Oracle, MongoDB, PostgreSQL, MySQL, CouchDB, and MSSQL)."),Object(o.b)("p",null,"Another example is ORDS database API, which is embedded into Oracle REST Data Services."),Object(o.b)("h2",{id:"operating-systems-apis"},"Operating systems APIs."),Object(o.b)("p",null,"This group of APIs defines how applications use the resources and services of operating systems. Every OS has its set of APIs, for instance, Windows API or Linux API (kernel\u2013user space API and kernel internal API)."),Object(o.b)("p",null,"Apple provides API reference for macOS and iOS in its developer documentation. APIs for building applications for Apple\u2019s macOS desktop operating system are included in the Cocoa set of developer tools. Those building apps for the iOS mobile operating system use Cocoa Touch \u2013 a modified version of Cocoa."),Object(o.b)("h2",{id:"remote-apis"},"Remote APIs."),Object(o.b)("p",null,"Remote APIs define standards of interaction for applications running on different machines. In other words, one software product accesses resources located outside the device that requests them, which explains the name. Since two remotely located applications are connected over a communications network, particularly the internet, most remote APIs are written based on web standards. Java Database Connectivity API and Java Remote Method Invocation API are two examples of remote application programming interfaces."),Object(o.b)("h2",{id:"web-apis"},"Web APIs."),Object(o.b)("p",null,"This API class is the most common. Web APIs provide machine-readable data and functionality transfer between web-based systems which represent client-server architecture. These APIs mainly deliver requests from web applications and responses from servers using Hypertext Transfer Protocol (HTTP)."),Object(o.b)("p",null,"Developers can use web APIs to extend the functionality of their apps or sites. For instance, the Pinterest API comes with tools for adding users\u2019 Pinterest data like boards or Pins to a website. Google Maps API enables the addition of a map with an organization\u2019s location."))}l.isMDXComponent=!0}}]);
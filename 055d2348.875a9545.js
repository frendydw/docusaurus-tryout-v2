(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{112:function(e,t,i){"use strict";i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return h}));var n=i(0),r=i.n(n);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(i),b=n,h=d["".concat(a,".").concat(b)]||d[b]||p[b]||o;return i?r.a.createElement(h,s(s({ref:t},l),{},{components:i})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<o;l++)a[l]=i[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,i)}b.displayName="MDXCreateElement"},62:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return a})),i.d(t,"metadata",(function(){return s})),i.d(t,"rightToc",(function(){return c})),i.d(t,"default",(function(){return u}));var n=i(2),r=i(6),o=(i(0),i(112)),a={id:"microservice-features",title:"Features 1.2.0"},s={unversionedId:"microservice-features",id:"version-1.2.0/microservice-features",isDocsHomePage:!1,title:"Features 1.2.0",description:"there are 6 defining features of microservices.",source:"@site/versioned_docs\\version-1.2.0\\microservicesfeatures.md",slug:"/microservice-features",permalink:"/docusaurus-tryout-v2/docs/microservice-features",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.2.0/microservicesfeatures.md",version:"1.2.0",sidebar:"version-1.2.0/someSidebar",previous:{title:"Introduction to Microservice 1.2.0",permalink:"/docusaurus-tryout-v2/docs/microservices-introduction"},next:{title:"Introduction to API 1.2.0",permalink:"/docusaurus-tryout-v2/docs/api-introduction"}},c=[{value:"Multiple Individually Deployable Components",id:"multiple-individually-deployable-components",children:[]},{value:"Service Distribution-Based on Business Capability",id:"service-distribution-based-on-business-capability",children:[]},{value:"Decentralized",id:"decentralized",children:[]},{value:"Build it, Run It",id:"build-it-run-it",children:[]},{value:"Polyglot",id:"polyglot",children:[]},{value:"Black Box",id:"black-box",children:[]}],l={rightToc:c};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"there are 6 defining features of microservices."),Object(o.b)("h2",{id:"multiple-individually-deployable-components"},"Multiple Individually Deployable Components"),Object(o.b)("p",null,"Microservices architecture encourages you to break your application into smaller components. This makes it easy to apply changes. Deploying such components does not end up impacting a large part of the codebase."),Object(o.b)("p",null,"This, in turn, makes it easier to introduce new features in an application since the deployment units are small and manageable."),Object(o.b)("h2",{id:"service-distribution-based-on-business-capability"},"Service Distribution-Based on Business Capability"),Object(o.b)("p",null,"Technical boundaries decide the overall architecture of monolithic applications. You would have one team working on the user interface, one working on databases, and one working on the integration layer."),Object(o.b)("p",null,"Microservices actively discourages such a model. Business functionalities decide the overall landscape of your microservices."),Object(o.b)("p",null,"In microservices, teams are based on expertise in a particular business function. Each team strives to be self-sufficient in terms of their technology stack."),Object(o.b)("p",null,"For example, in a typical microservices-based application, you could think of user registration as one microservice and billing management as another. Different teams manage these different services."),Object(o.b)("h2",{id:"decentralized"},"Decentralized"),Object(o.b)("p",null,"Microservices architecture invariably leads to distributed systems. It embraces the concept of decentralized data management."),Object(o.b)("p",null,"There won't be a monolithic database containing all the data belonging to the application."),Object(o.b)("p",null,"Rather, each service will have ownership of the data related to the business functionality supported by that particular service."),Object(o.b)("p",null,"This isolates the impact of schema changes. Development teams can be more in control of the impact when planning releases."),Object(o.b)("h2",{id:"build-it-run-it"},"Build it, Run It"),Object(o.b)("p",null,"Microservices also embrace the concept of DevOps."),Object(o.b)("p",null,"The idea is that the team responsible for building a service is also responsible for operating and maintaining its code in production."),Object(o.b)("p",null,"This is a big mindset shift from monolithic applications. In monolithic applications, developers were often only concerned about just writing their feature code. In the end, they would simply commit the changes to a central repository. The responsibility of deploying the changes would rest with another team."),Object(o.b)("p",null,"This introduces an extra layer of process. It makes deploying changes slower. If an issue occurred, the same process overhead might cause even more delays."),Object(o.b)("p",null,"DevOps eliminates this by pushing the responsibility of deploying and running a service to the team developing it. Thus, if there's an issue, these teams can react much faster. These teams can also plan their own releases and hot-fixes. This increases customer satisfaction."),Object(o.b)("h2",{id:"polyglot"},"Polyglot"),Object(o.b)("p",null,"Another significant aspect of microservices is its technology independence."),Object(o.b)("p",null,"Each microservice is its own world. It communicates with other services through standard channels. They don't rely on technology-related bindings."),Object(o.b)("p",null,"This gives an incredible amount of feature to the developers. Teams maintaining a service are now free to choose the technology stack for their service."),Object(o.b)("p",null,"The team can make informed choices based on the problem that is being solved. For example, certain problems lend themselves better to the use of a particular pattern or database choice. Guess what, the teams are free to decide what's best for their use case. This directly feeds into independence and ownership of the teams."),Object(o.b)("h2",{id:"black-box"},"Black Box"),Object(o.b)("p",null,"Each microservice is defined as a black box. This means that details of their complexity are hidden from other components."),Object(o.b)("p",null,"Services communicate to each other using a set of well-defined APIs or messaging channels. This prevents the proliferation of dependencies between microservices."))}u.isMDXComponent=!0}}]);
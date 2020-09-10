(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{112:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(a),p=n,m=u["".concat(i,".").concat(p)]||u[p]||b[p]||o;return a?r.a.createElement(m,s(s({ref:t},c),{},{components:a})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},130:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/database-illustration-a4bd22634408484a5ae4aaaa8c4eb677.png"},75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return l}));var n=a(2),r=a(6),o=(a(0),a(112)),i={id:"database-introduction",title:"Introduction to Database 1.2.0"},s={unversionedId:"database-introduction",id:"version-1.2.0/database-introduction",isDocsHomePage:!1,title:"Introduction to Database 1.2.0",description:"What is a Database",source:"@site/versioned_docs\\version-1.2.0\\database.md",slug:"/database-introduction",permalink:"/docusaurus-tryout-v2/docs/database-introduction",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.2.0/database.md",version:"1.2.0",sidebar:"version-1.2.0/someSidebar",previous:{title:"Rest API 1.2.0",permalink:"/docusaurus-tryout-v2/docs/api-rest"},next:{title:"SQL 1.2.0",permalink:"/docusaurus-tryout-v2/docs/database-sql"}},d=[{value:"What is a Database",id:"what-is-a-database",children:[]},{value:"What is Structured Query Language (SQL)?",id:"what-is-structured-query-language-sql",children:[]},{value:"Evolution of Database",id:"evolution-of-database",children:[]}],c={rightToc:d};function l(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-is-a-database"},"What is a Database"),Object(o.b)("p",null,"A database is an organized collection of data, generally stored and accessed electronically from a computer system. Where databases are more complex they are often developed using formal design and modeling techniques."),Object(o.b)("p",null,"Data within the most common types of databases in operation today is typically modeled in rows and columns in a series of tables to make processing and data querying efficient. The data can then be easily accessed, managed, modified, updated, controlled, and organized. Most databases use structured query language (SQL) for writing and querying data."),Object(o.b)("p",null,Object(o.b)("img",{alt:"alt-text",src:a(130).default})),Object(o.b)("h2",{id:"what-is-structured-query-language-sql"},"What is Structured Query Language (SQL)?"),Object(o.b)("p",null,"SQL is a programming language used by nearly all relational databases to query, manipulate, and define data, and to provide access control. SQL was first developed at IBM in the 1970s with Oracle as a major contributor, which led to implementation of the SQL ANSI standard, SQL has spurred many extensions from companies such as IBM, Oracle, and Microsoft. Although SQL is still widely used today, new programming languages are beginning to appear."),Object(o.b)("h2",{id:"evolution-of-database"},"Evolution of Database"),Object(o.b)("p",null,"Databases have evolved dramatically since their inception in the early 1960s. Navigational databases such as the hierarchical database (which relied on a tree-like model and allowed only a one-to-many relationship), and the network database (a more flexible model that allowed multiple relationships), were the original systems used to store and manipulate data. Although simple, these early systems were inflexible. In the 1980s, relational databases became popular, followed by object-oriented databases in the 1990s. More recently, NoSQL databases came about as a response to the growth of the internet and the need for faster speed and processing of unstructured data. Today, cloud databases and self-driving databases are breaking new ground when it comes to how data is collected, stored, managed, and utilized."))}l.isMDXComponent=!0}}]);
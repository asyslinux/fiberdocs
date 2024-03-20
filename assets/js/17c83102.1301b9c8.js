"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[64285],{3905:(t,e,r)=>{r.d(e,{Zo:()=>b,kt:()=>g});var o=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,o,i=function(t,e){if(null==t)return{};var r,o,i={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var l=o.createContext({}),c=function(t){var e=o.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):n(n({},e),t)),r},b=function(t){var e=c(t.components);return o.createElement(l.Provider,{value:e},t.children)},f="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var r=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,b=s(t,["components","mdxType","originalType","parentName"]),f=c(r),m=i,g=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return r?o.createElement(g,n(n({ref:e},b),{},{components:r})):o.createElement(g,n({ref:e},b))}));function g(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=r.length,n=new Array(a);n[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[f]="string"==typeof t?t:i,n[1]=s;for(var c=2;c<a;c++)n[c]=r[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98126:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(87462),i=(r(67294),r(3905));const a={title:"\ud83d\udc4b Welcome",sidebar_position:1},n=void 0,s={unversionedId:"README",id:"version-paseto_v1.x.x/README",title:"\ud83d\udc4b Welcome",description:"Discord",source:"@site/contrib_versioned_docs/version-paseto_v1.x.x/README.md",sourceDirName:".",slug:"/",permalink:"/contrib/paseto_v1.x.x/",draft:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/README.md",tags:[],version:"paseto_v1.x.x",lastUpdatedAt:1710937592,formattedLastUpdatedAt:"Mar 20, 2024",sidebarPosition:1,frontMatter:{title:"\ud83d\udc4b Welcome",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Casbin",permalink:"/contrib/paseto_v1.x.x/casbin/"}},l={},c=[{value:"\ud83d\udcd1 Middleware Implementations",id:"-middleware-implementations",level:2}],b={toc:c},f="wrapper";function p(t){let{components:e,...r}=t;return(0,i.kt)(f,(0,o.Z)({},b,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{height:"125",alt:"Fiber",src:"https://raw.githubusercontent.com/gofiber/contrib/master/.github/logo-dark.svg#gh-dark-mode-only"}),(0,i.kt)("img",{height:"125",alt:"Fiber",src:"https://raw.githubusercontent.com/gofiber/contrib/master/.github/logo.svg#gh-light-mode-only"}),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,i.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})),(0,i.kt)("p",null,"Repository for third party middlewares with dependencies.")),(0,i.kt)("h2",{id:"-middleware-implementations"},"\ud83d\udcd1 Middleware Implementations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contrib/paseto_v1.x.x/casbin/"},"Casbin")," ",(0,i.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+Casbin%22"}," ",(0,i.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-casbin.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contrib/paseto_v1.x.x/fgprof/"},"Fgprof")," ",(0,i.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+Fgprof%22"}," ",(0,i.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-fgprof.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contrib/paseto_v1.x.x/fiberi18n/"},"Fiberi18n")," ",(0,i.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+fiberi18n%22"}," ",(0,i.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-fiberi18n.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contrib/paseto_v1.x.x/fibersentry/"},"Fibersentry")," ",(0,i.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+fibersentry%22"}," ",(0,i.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-fibersentry.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contrib/paseto_v1.x.x/fiberzap/"},"Fiberzap")," ",(0,i.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+fiberzap%22"}," ",(0,i.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-fiberzap.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contrib/paseto_v1.x.x/fiberzerolog/"},"Fiberzerolog")," ",(0,i.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+fiberzerolog%22"}," ",(0,i.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-fiberzerolog.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contrib/paseto_v1.x.x/jwt/"},"JWT")," ",(0,i.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+jwt%22"}," ",(0,i.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-jwt.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contrib/paseto_v1.x.x/loadshed/"},"Loadshed")," ",(0,i.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+Loadshed%22"}," ",(0,i.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-loadshed.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contrib/paseto_v1.x.x/fibernewrelic/"},"NewRelic")," ",(0,i.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+fibernewrelic%22"}," ",(0,i.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-fibernewrelic.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contrib/paseto_v1.x.x/opafiber/"},"Open Policy Agent")," ",(0,i.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+opafiber%22"}," ",(0,i.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-opafiber.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contrib/paseto_v1.x.x/otelfiber/"},"Otelfiber (OpenTelemetry)")," ",(0,i.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+otelfiber%22"}," ",(0,i.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-otelfiber.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contrib/paseto_v1.x.x/paseto/"},"Paseto")," ",(0,i.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+paseto%22"}," ",(0,i.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-paseto.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contrib/paseto_v1.x.x/swagger/"},"Swagger")," ",(0,i.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+swagger%22"}," ",(0,i.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-swagger.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contrib/paseto_v1.x.x/websocket/"},"Websocket")," ",(0,i.kt)("a",{href:"https://github.com/gofiber/contrib/actions?query=workflow%3A%22Test+websocket%22"}," ",(0,i.kt)("img",{src:"https://img.shields.io/github/actions/workflow/status/gofiber/contrib/test-websocket.yml?branch=main&label=%F0%9F%A7%AA%20&style=flat&color=75C46B"})," "))))}p.isMDXComponent=!0}}]);
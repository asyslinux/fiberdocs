"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[71257],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=p(a),c=n,m=f["".concat(d,".").concat(c)]||f[c]||u[c]||l;return a?r.createElement(m,o(o({ref:t},s),{},{components:a})):r.createElement(m,o({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[f]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},94093:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={id:"earlydata"},o="EarlyData",i={unversionedId:"api/middleware/earlydata",id:"version-v2.x/api/middleware/earlydata",title:"EarlyData",description:'The Early Data middleware for Fiber adds support for TLS 1.3\'s early data ("0-RTT") feature.',source:"@site/versioned_docs/version-v2.x/api/middleware/earlydata.md",sourceDirName:"api/middleware",slug:"/api/middleware/earlydata",permalink:"/api/middleware/earlydata",draft:!1,tags:[],version:"v2.x",lastUpdatedAt:1710937592,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{id:"earlydata"},sidebar:"tutorialSidebar",previous:{title:"CSRF",permalink:"/api/middleware/csrf"},next:{title:"Encrypt Cookie",permalink:"/api/middleware/encryptcookie"}},d={},p=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2},{value:"Constants",id:"constants",level:2}],s={toc:p},f="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"earlydata"},"EarlyData"),(0,n.kt)("p",null,"The Early Data middleware for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber"),' adds support for TLS 1.3\'s early data ("0-RTT") feature.\nCiting ',(0,n.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc8446#section-2-3"},"RFC 8446"),', when a client and server share a PSK, TLS 1.3 allows clients to send data on the first flight ("early data") to speed up the request, effectively reducing the regular 1-RTT request to a 0-RTT request.'),(0,n.kt)("p",null,"Make sure to enable fiber's ",(0,n.kt)("inlineCode",{parentName:"p"},"EnableTrustedProxyCheck")," config option before using this middleware in order to not trust bogus HTTP request headers of the client."),(0,n.kt)("p",null,"Also be aware that enabling support for early data in your reverse proxy (e.g. nginx, as done with a simple ",(0,n.kt)("inlineCode",{parentName:"p"},"ssl_early_data on;"),") makes requests replayable. Refer to the following documents before continuing:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc8446#section-8"},"https://datatracker.ietf.org/doc/html/rfc8446#section-8")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.trailofbits.com/2019/03/25/what-application-developers-need-to-know-about-tls-early-data-0rtt/"},"https://blog.trailofbits.com/2019/03/25/what-application-developers-need-to-know-about-tls-early-data-0rtt/"))),(0,n.kt)("p",null,"By default, this middleware allows early data requests on safe HTTP request methods only and rejects the request otherwise, i.e. aborts the request before executing your handler. This behavior can be controlled by the ",(0,n.kt)("inlineCode",{parentName:"p"},"AllowEarlyData")," config option.\nSafe HTTP methods \u2014 ",(0,n.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"HEAD"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"OPTIONS")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"TRACE")," \u2014 should not modify a state on the server."),(0,n.kt)("h2",{id:"signatures"},"Signatures"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/fiber/v2/middleware/earlydata"\n)\n')),(0,n.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"// Initialize default config\napp.Use(earlydata.New())\n\n// Or extend your config for customization\napp.Use(earlydata.New(earlydata.Config{\n    Error: fiber.ErrTooEarly,\n    // ...\n}))\n")),(0,n.kt)("h2",{id:"config"},"Config"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) bool")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Next defines a function to skip this middleware when returned true."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"nil"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"IsEarlyData"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) bool")),(0,n.kt)("td",{parentName:"tr",align:"left"},"IsEarlyData returns whether the request is an early-data request."),(0,n.kt)("td",{parentName:"tr",align:"left"},'Function checking if "Early-Data" header equals "1"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AllowEarlyData"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) bool")),(0,n.kt)("td",{parentName:"tr",align:"left"},"AllowEarlyData returns whether the early-data request should be allowed or rejected."),(0,n.kt)("td",{parentName:"tr",align:"left"},"Function rejecting on unsafe and allowing safe methods")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Error"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"error")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Error is returned in case an early-data request is rejected."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"fiber.ErrTooEarly"))))),(0,n.kt)("h2",{id:"default-config"},"Default Config"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"var ConfigDefault = Config{\n    IsEarlyData: func(c *fiber.Ctx) bool {\n        return c.Get(DefaultHeaderName) == DefaultHeaderTrueValue\n    },\n\n    AllowEarlyData: func(c *fiber.Ctx) bool {\n        return fiber.IsMethodSafe(c.Method())\n    },\n\n    Error: fiber.ErrTooEarly,\n}\n")),(0,n.kt)("h2",{id:"constants"},"Constants"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'const (\n    DefaultHeaderName      = "Early-Data"\n    DefaultHeaderTrueValue = "1"\n)\n')))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[4047],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var g=n.createContext({}),p=function(e){var t=n.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(g.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,g=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,c=s["".concat(g,".").concat(m)]||s[m]||f[m]||o;return r?n.createElement(c,i(i({ref:t},d),{},{components:r})):n.createElement(c,i({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},36710:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"fiberzerolog"},i="Fiberzerolog",l={unversionedId:"fiberzerolog/fiberzerolog",id:"version-_.x.x/fiberzerolog/fiberzerolog",title:"Fiberzerolog",description:"Release",source:"@site/contrib_versioned_docs/version-_.x.x/fiberzerolog/README.md",sourceDirName:"fiberzerolog",slug:"/fiberzerolog/",permalink:"/contrib/_.x.x/fiberzerolog/",draft:!1,editUrl:"https://github.com/gofiber/contrib/edit/main/fiberzerolog/README.md",tags:[],version:"_.x.x",lastUpdatedAt:1710937592,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{id:"fiberzerolog"},sidebar:"tutorialSidebar",previous:{title:"Fiberzap",permalink:"/contrib/_.x.x/fiberzap/"},next:{title:"JWT",permalink:"/contrib/_.x.x/jwt/"}},g={},p=[{value:"Install",id:"install",level:2},{value:"Signature",id:"signature",level:2},{value:"Config",id:"config",level:2},{value:"Example",id:"example",level:2}],d={toc:p},s="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fiberzerolog"},"Fiberzerolog"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/contrib?filter=fiberzerolog*",alt:"Release"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://github.com/gofiber/contrib/workflows/Linter/badge.svg",alt:"Linter"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://zerolog.io/"},"Zerolog")," logging support for Fiber."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: Requires Go 1.18 and above")),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"This middleware supports Fiber v2."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"go get -u github.com/gofiber/fiber/v2\ngo get -u github.com/gofiber/contrib/fiberzerolog\ngo get -u github.com/rs/zerolog/log\n")),(0,a.kt)("h2",{id:"signature"},"Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"fiberzerolog.New(config ...fiberzerolog.Config) fiber.Handler\n")),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Next"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(*Ctx) bool")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Define a function to skip this middleware when returned true"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Logger"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"*zerolog.Logger")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Add custom zerolog logger."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"zerolog.New(os.Stderr).With().Timestamp().Logger()"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"GetLogger"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"func(*fiber.Ctx) zerolog.Logger")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Get custom zerolog logger, if it's defined the returned logger will replace the ",(0,a.kt)("inlineCode",{parentName:"td"},"Logger")," value."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Fields"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Add fields what you want see."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'[]string{"latency", "status", "method", "url", "error"}'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Messages"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom response messages."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},'[]string{"Server error", "Client error", "Success"}'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Levels"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]zerolog.Level")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Custom response levels."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]zerolog.Level{zerolog.ErrorLevel, zerolog.WarnLevel, zerolog.InfoLevel}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"SkipURIs"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Skip logging these URI."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"[]string{}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"GetResBody"),(0,a.kt)("td",{parentName:"tr",align:"left"},"func(c *fiber.Ctx) []byte"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Define a function to get response body when return non-nil.",(0,a.kt)("br",null),"eg: When use compress middleware, resBody is unreadable. you can set GetResBody func to get readable resBody."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"nil"))))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/contrib/fiberzerolog"\n    "github.com/rs/zerolog"\n)\n\nfunc main() {\n    app := fiber.New()\n    logger := zerolog.New(os.Stderr).With().Timestamp().Logger()\n\n    app.Use(fiberzerolog.New(fiberzerolog.Config{\n        Logger: &logger,\n    }))\n\n    app.Get("/", func (c *fiber.Ctx) error {\n        return c.SendString("Hello, World!")\n    })\n\n    if err := app.Listen(":3000"); err != nil {\n        logger.Fatal().Err(err).Msg("Fiber app error")\n    }\n}\n')))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[57625],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),c=i,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return t?a.createElement(g,o(o({ref:n},d),{},{components:t})):a.createElement(g,o({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},17295:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const r={id:"django",title:"Django"},o=void 0,l={unversionedId:"django/django",id:"version-handlebars_v2.x.x/django/django",title:"Django",description:"Release",source:"@site/template_versioned_docs/version-handlebars_v2.x.x/django/README.md",sourceDirName:"django",slug:"/django/",permalink:"/template/handlebars_v2.x.x/django/",draft:!1,editUrl:"https://github.com/gofiber/template/edit/master/django/README.md",tags:[],version:"handlebars_v2.x.x",lastUpdatedAt:1710937592,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{id:"django",title:"Django"},sidebar:"tutorialSidebar",previous:{title:"Amber",permalink:"/template/handlebars_v2.x.x/amber/"},next:{title:"Handlebars",permalink:"/template/handlebars_v2.x.x/handlebars/"}},s={},p=[{value:"Basic Example",id:"basic-example",level:3},{value:"Using embedded file system (1.16+ only)",id:"using-embedded-file-system-116-only",level:3},{value:"Register and use custom functions",id:"register-and-use-custom-functions",level:3},{value:"Important Information on Template Data Binding",id:"important-information-on-template-data-binding",level:3},{value:"AutoEscape is enabled by default",id:"autoescape-is-enabled-by-default",level:3},{value:"Disabling Auto-Escape",id:"disabling-auto-escape",level:3},{value:"Setting AutoEscape using Django built-in template tags",id:"setting-autoescape-using-django-built-in-template-tags",level:3},{value:"Security Implications of Disabling Auto-Escape",id:"security-implications-of-disabling-auto-escape",level:3}],d={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/github/v/tag/gofiber/template?filter=django*",alt:"Release"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://gofiber.io/discord"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/704680098577514527?style=flat&label=%F0%9F%92%AC%20discord&color=00ACD7",alt:"Discord"})),"\n",(0,i.kt)("img",{parentName:"p",src:"https://github.com/gofiber/template/workflows/Tests/badge.svg",alt:"Test"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://github.com/gofiber/template/workflows/Security/badge.svg",alt:"Security"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://github.com/gofiber/template/workflows/Linter/badge.svg",alt:"Linter"})),(0,i.kt)("p",null,"Django is a template engine create by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/flosch/pongo2"},"flosch"),", to see the original syntax documentation please ",(0,i.kt)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/dev/topics/templates/"},"click here")),(0,i.kt)("h3",{id:"basic-example"},"Basic Example"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"./views/index.django"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'{% include "partials/header.django" %}\n\n<h1>{{ Title }}</h1>\n\n{% include "partials/footer.django" %}\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"./views/partials/header.django"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<h2>Header</h2>\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"./views/partials/footer.django"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<h2>Footer</h2>\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"./views/layouts/main.django"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Main</title>\n</head>\n\n<body>\n  {{embed}}\n</body>\n\n</html>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/template/django/v3"\n)\n\nfunc main() {\n    // Create a new engine\n    engine := django.New("./views", ".django")\n\n    // Or from an embedded system\n    // See github.com/gofiber/embed for examples\n    // engine := html.NewFileSystem(http.Dir("./views", ".django"))\n\n    // Pass the engine to the Views\n    app := fiber.New(fiber.Config{\n        Views: engine,\n    })\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        // Render index\n        return c.Render("index", fiber.Map{\n            "Title": "Hello, World!",\n        })\n    })\n\n    app.Get("/layout", func(c *fiber.Ctx) error {\n        // Render index within layouts/main\n        return c.Render("index", fiber.Map{\n            "Title": "Hello, World!",\n        }, "layouts/main")\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n\n')),(0,i.kt)("h3",{id:"using-embedded-file-system-116-only"},"Using embedded file system (1.16+ only)"),(0,i.kt)("p",null,"When using the ",(0,i.kt)("inlineCode",{parentName:"p"},"// go:embed")," directive, resolution of inherited templates using django's ",(0,i.kt)("inlineCode",{parentName:"p"},"{% extend '' %}")," keyword fails when instantiating the template engine with ",(0,i.kt)("inlineCode",{parentName:"p"},"django.NewFileSystem()"),". In that case, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"django.NewPathForwardingFileSystem()")," function to instantiate the template engine. "),(0,i.kt)("p",null,"This function provides the proper configuration for resolving inherited templates."),(0,i.kt)("p",null,"Assume you have the following files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/blob/master/django/views/ancestor.django"},"views/ancenstor.django")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/gofiber/template/blob/master/django/views/descendant.django"},"views/descendant.djando"))),(0,i.kt)("p",null,"then"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n    "embed"\n    "net/http"\n\n    "github.com/gofiber/fiber/v2"\n    "github.com/gofiber/template/django/v3"\n)\n\n//go:embed views\nvar viewsAsssets embed.FS\n\nfunc main() {\n    // Create a new engine\n    engine := NewPathForwardingFileSystem(http.FS(viewsAsssets), "/views", ".django")\n\n    // Pass the engine to the Views\n    app := fiber.New(fiber.Config{\n        Views: engine,\n    })\n\n    app.Get("/", func(c *fiber.Ctx) error {\n        // Render descendant\n        return c.Render("descendant", fiber.Map{\n            "greeting": "World",\n        })\n    })\n\n    log.Fatal(app.Listen(":3000"))\n}\n\n')),(0,i.kt)("h3",{id:"register-and-use-custom-functions"},"Register and use custom functions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// My custom function\nfunc Nl2brHtml(value interface{}) string {\n    if str, ok := value.(string); ok {\n        return strings.Replace(str, "\\n", "<br />", -1)\n    }\n    return ""\n}\n\n// Create a new engine\nengine := django.New("./views", ".django")\n\n// register functions\nengine.AddFunc("nl2br", Nl2brHtml)\n\n// Pass the engine to the Views\napp := fiber.New(fiber.Config{Views: engine})\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"in the handler"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'c.Render("index", fiber.Map{\n    "Fiber": "Hello, World!\\n\\nGreetings from Fiber Team",\n})\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"./views/index.django"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head><meta charset="UTF-8"></head>\n<body>\n{{ nl2br(Fiber) }}\n</body>\n</html>\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Output:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head><meta charset="UTF-8"></head>\n<body>\nHello, World!<br /><br />Greetings from Fiber Team\n</body>\n</html>\n')),(0,i.kt)("h3",{id:"important-information-on-template-data-binding"},"Important Information on Template Data Binding"),(0,i.kt)("p",null,"When working with Pongo2 and this template engine, it's crucial to understand the specific rules for data binding. Only keys that match the following regular expression are supported: ",(0,i.kt)("inlineCode",{parentName:"p"},"^[a-zA-Z0-9_]+$"),"."),(0,i.kt)("p",null,"This means that keys with special characters or punctuation, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"my-key")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"my.key"),", are not compatible and will not be bound to the template. This is a restriction imposed by the underlying Pongo2 template engine. Please ensure your keys adhere to these rules to avoid any binding issues."),(0,i.kt)("p",null,"If you need to access a value in the template that doesn't adhere to the key naming restrictions imposed by the Pongo2 template engine, you can bind the value to a new field when calling ",(0,i.kt)("inlineCode",{parentName:"p"},"fiber.Render"),". Here's an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'c.Render("index", fiber.Map{\n    "Fiber": "Hello, World!\\n\\nGreetings from Fiber Team",\n    "MyKey": c.Locals("my-key"),\n})\n')),(0,i.kt)("h3",{id:"autoescape-is-enabled-by-default"},"AutoEscape is enabled by default"),(0,i.kt)("p",null,"When you create a new instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Engine"),", the auto-escape is ",(0,i.kt)("strong",{parentName:"p"},"enabled by default"),". This setting automatically escapes output, providing a critical security measure against Cross-Site Scripting (XSS) attacks."),(0,i.kt)("h3",{id:"disabling-auto-escape"},"Disabling Auto-Escape"),(0,i.kt)("p",null,"Auto-escaping can be disabled if necessary, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"SetAutoEscape")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'engine := django.New("./views", ".django")\nengine.SetAutoEscape(false)\n')),(0,i.kt)("h3",{id:"setting-autoescape-using-django-built-in-template-tags"},"Setting AutoEscape using Django built-in template tags"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Explicitly turning off autoescaping for a section:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-django"},"  {% autoescape off %}\n  {{ \"<script>alert('Hello World');<\/script>\" }}\n  {% endautoescape %}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Turning autoescaping back on for a section:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-django"},"  {% autoescape on %}\n  {{ \"<script>alert('Hello World');<\/script>\" }}\n  {% endautoescape %}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It can also be done on a per variable basis using the ",(0,i.kt)("em",{parentName:"li"},"safe")," built-in:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-django"},'<h1>{{ someSafeVar | safe }}</h1>\n{{ "<script>" | safe }}\n')),(0,i.kt)("h3",{id:"security-implications-of-disabling-auto-escape"},"Security Implications of Disabling Auto-Escape"),(0,i.kt)("p",null,"Disabling auto-escape should be approached with caution. It can expose your application to XSS attacks, where malicious scripts are injected into web pages. Without auto-escaping, there is a risk of rendering harmful HTML or JavaScript from user-supplied data."),(0,i.kt)("p",null,"It is advisable to keep auto-escape enabled unless there is a strong reason to disable it. If you do disable it, ensure all user-supplied content is thoroughly sanitized and validated to avoid XSS vulnerabilities."))}m.isMDXComponent=!0}}]);
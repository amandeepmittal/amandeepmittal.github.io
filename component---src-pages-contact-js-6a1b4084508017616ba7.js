(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return c});var M=a(5),n=a.n(M),r=a(0),i=a.n(r),s=a(170),L=a.n(s),u=a(172),A=a(188),j=a(169),o=a.n(j),c=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return i.a.createElement(u.a,null,i.a.createElement(L.a,{title:"Contact – "+o.a.siteTitle}),i.a.createElement("div",{className:"container"},i.a.createElement(A.a,null)))},t}(r.Component)},169:function(e,t,a){a(36);var M={siteTitle:"Aman Mittal (@amanhimself)",siteTitleShort:"Aman Mittal",siteTitleAlt:"Aman Mittal (@amanhimself)",siteLogo:"/logos/tania.jpg",siteUrl:"http://amanhimself.me",repo:"https://github.com/taniarascia/taniarascia.com",pathPrefix:"",siteDescription:"Aman Mittal is a full-stack software developer specializing in web and mobile technologies leveraging JavaScript ecosystem. He is passionate about breaking down complex concepts, share them, write blog posts/tutorials and is a curriculum creator and technical writer for more than 15 online publications.",siteRss:"/rss.xml",dateFromFormat:"YYYY-MM-DD",dateFormat:"MMMM Do, YYYY",googleAnalyticsID:"UA-96738144-3",disqusShortname:"",postDefaultCategoryID:"Tech",userName:"Aman (@amanhimself)",userEmail:"amanmittal.work@gmail.com",userTwitter:"amanhimself",userLocation:"New Delhi, IN",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"I write technical tutorials on modern JavaScript frameworks including Node.js, React, React Native and GraphQL. I have got over 900k views on my technical articles. I like to make things simple for fellow developers to learn more and new developers to kick-start their development careers.",menuLinks:[{name:"About Me",link:"/"},{name:"Articles",link:"/blog/"}],copyright:"Copyright © 2019. Aman Mittal",themeColor:"#654ea3",backgroundColor:"#ecf0f1"};"/"===M.pathPrefix?M.pathPrefix="":M.pathPrefix="/"+M.pathPrefix.replace(/^\/|\/$/g,""),"/"===M.siteUrl.substr(-1)&&(M.siteUrl=M.siteUrl.slice(0,-1)),M.siteRss&&"/"!==M.siteRss[0]&&(M.siteRss="/"+M.siteRss),e.exports=M},171:function(e,t,a){e.exports=a.p+"static/avatar-2f61ea94fb821b550b2153e2b9c9d0ea.jpg"},172:function(e,t,a){"use strict";var M=a(5),n=a.n(M),r=a(0),i=a.n(r),s=a(170),L=a.n(s),u=a(57),A=a(56),j=(a(174),a(175),a(176),a(173)),o=a.n(j),c=function(e){function t(){for(var t,a=arguments.length,M=new Array(a),n=0;n<a;n++)M[n]=arguments[n];return(t=e.call.apply(e,[this].concat(M))||this).state={scrolled:!1},t.navOnScroll=function(){window.scrollY>20?t.setState({scrolled:!0}):t.setState({scrolled:!1})},t}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.navOnScroll)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.navOnScroll)},a.render=function(){var e=this.state.scrolled;this.props.menuLinks,this.context;return i.a.createElement("nav",{className:e?"nav scroll":"nav"},i.a.createElement("div",{className:"nav-container"},i.a.createElement("div",{className:"links"},i.a.createElement(A.Link,{to:"/"},i.a.createElement("span",{className:"text"},"Aman Mittal")),i.a.createElement("a",{href:"https://medium.com/@amanhimself",target:"_blank",rel:"noopener noreferrer"},"Blog"),i.a.createElement("a",{href:"https://github.com/amandeepmittal/tech-writing",target:"_blank",rel:"noopener noreferrer"},"All Tutorials"),i.a.createElement("a",{href:"https://upscri.be/e51a31/",target:"_blank",rel:"noopener noreferrer"},"Newsletter"),i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://ko-fi.com/amanhimself"},i.a.createElement("img",{src:o.a,alt:"Kofi",className:"kofi"})))))},t}(r.Component);c.contextType=u.b;var w=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return i.a.createElement("footer",{className:"footer container"},i.a.createElement("a",{href:"https://twitter.com/amanhimself",target:"_blank",rel:"noopener noreferrer"},"Twitter"),i.a.createElement("a",{href:"https://github.com/amandeepmittal",target:"_blank",rel:"noopener noreferrer"},"GitHub"),i.a.createElement("a",{href:"https://medium.com/@amanhimself",target:"_blank",rel:"noopener noreferrer"},"Medium"),i.a.createElement("a",{href:"https://upscri.be/e51a31/",target:"_blank",rel:"noopener noreferrer"},"Weekly Newsletter"),i.a.createElement("a",{href:"https://ko-fi.com/amanhimself",target:"_blank",rel:"noopener noreferrer"},"Buy me a Coffee"))},t}(r.Component),l=a(169),m=a.n(l),D=a(171),g=a.n(D);a(179);a.d(t,"a",function(){return E});var E=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.context,t=e.dark,a=e.notFound,M=this.props.children,n="";return t&&!a?n="dark":a&&(n="not-found"),i.a.createElement(i.a.Fragment,null,i.a.createElement(L.a,{bodyAttributes:{class:"theme "+n}},i.a.createElement("meta",{name:"description",content:m.a.siteDescription}),i.a.createElement("link",{rel:"shortcut icon",type:"image/png",href:g.a})),i.a.createElement(c,{menuLinks:m.a.menuLinks}),i.a.createElement("main",{id:"main-content"},M),i.a.createElement(w,null))},t}(r.Component);E.contextType=u.b},173:function(e,t){e.exports="data:image/png;base64,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"},174:function(e,t,a){e.exports=a.p+"static/floppy-7d563114074bfca5f3beef4a260cdd7d.png"},175:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDEyODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxnPgogICAgPHBhdGggZD0iTTY0LDMwLjM0Yy0xOC41OSwwLTMzLjY2LDE1LjA3LTMzLjY2LDMzLjY1YzAsMTguNTksMTUuMDcsMzMuNjYsMzMuNjYsMzMuNjYgYzE4LjU5LDAsMzMuNjYtMTUuMDcsMzMuNjYtMzMuNjZDOTcuNjYsNDUuNDEsODIuNTksMzAuMzQsNjQsMzAuMzR6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTU2Ljc2LDI0LjIxTDU2Ljc2LDI0LjIxaDE0LjQ5YzAuNjcsMCwxLjI5LTAuMzMsMS42OC0wLjg4YzAuMzgtMC41NCwwLjQ3LTEuMjUsMC4yNC0xLjg4IEw2NS45MiwxLjgzYy0wLjMtMC44MS0xLjA2LTEuMzQtMS45Mi0xLjM0cy0xLjYyLDAuNTQtMS45MiwxLjM0bC03LjI1LDE5LjYzYy0wLjIzLDAuNjMtMC4xNCwxLjMzLDAuMjQsMS44OCBDNTUuNDYsMjMuODksNTYuMDksMjQuMjEsNTYuNzYsMjQuMjF6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTk3LjI2LDQwLjk5YzAuMzgsMC4zOSwwLjkxLDAuNiwxLjQ0LDAuNmMwLjEyLDAsMC4yNC0wLjAxLDAuMzYtMC4wM2MwLjY2LTAuMTIsMS4yMS0wLjU1LDEuNS0xLjE2IGw4Ljc2LTE5LjAxYzAuMzYtMC43OCwwLjE5LTEuNjktMC40MS0yLjNjLTAuNjEtMC42MS0xLjUzLTAuNzctMi4zMS0wLjQyTDg3LjYsMjcuNDRjLTAuNjEsMC4yOC0xLjA0LDAuODQtMS4xNiwxLjUgYy0wLjEyLDAuNjYsMC4xLDEuMzMsMC41NiwxLjgxTDk3LjI2LDQwLjk5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0xMjYuMTgsNjIuMDhsLTE5LjY0LTcuMjRjLTAuNjMtMC4yMy0xLjMzLTAuMTQtMS44OCwwLjI0Yy0wLjU1LDAuMzgtMC44NywxLTAuODcsMS42N2wwLjAxLDE0LjQ5IGMwLDAuNjcsMC4zMywxLjMsMC44OCwxLjY4YzAuMzUsMC4yMywwLjc2LDAuMzYsMS4xNywwLjM2YzAuMjQsMCwwLjQ4LTAuMDQsMC43MS0wLjEzbDE5LjY0LTcuMjRjMC44LTAuMjksMS4zNC0xLjA2LDEuMzQtMS45MyBDMTI3LjUyLDYzLjE0LDEyNi45OSw2Mi4zOCwxMjYuMTgsNjIuMDh6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTEwMC41Niw4Ny42Yy0wLjI4LTAuNjEtMC44NC0xLjA0LTEuNS0xLjE2Yy0wLjY2LTAuMTEtMS4zNCwwLjEtMS44LDAuNTdMODcuMDEsOTcuMjYgYy0wLjQ3LDAuNDctMC42OSwxLjE1LTAuNTcsMS44MWMwLjEyLDAuNjUsMC41NSwxLjIyLDEuMTYsMS41bDE5LjAxLDguNzZjMC4yNywwLjEzLDAuNTYsMC4xOCwwLjg2LDAuMTggYzAuNTMsMCwxLjA1LTAuMjEsMS40NC0wLjZjMC42MS0wLjYxLDAuNzctMS41MiwwLjQxLTIuM0wxMDAuNTYsODcuNnoiIHN0eWxlPSJmaWxsOiNGQ0MyMUI7Ii8+CiAgICA8cGF0aCBkPSJNNzEuMjQsMTAzLjc4TDcxLjI0LDEwMy43OGwtMTQuNDksMC4wMWMtMC42NywwLTEuMjksMC4zMy0xLjY3LDAuODggYy0wLjM4LDAuNTUtMC40NywxLjI1LTAuMjUsMS44N2w3LjI1LDE5LjY0YzAuMywwLjgsMS4wNiwxLjM0LDEuOTIsMS4zNHMxLjYyLTAuNTQsMS45Mi0xLjM0bDcuMjUtMTkuNjQgYzAuMjMtMC42MywwLjE0LTEuMzMtMC4yNC0xLjg4QzcyLjU0LDEwNC4xMSw3MS45MiwxMDMuNzgsNzEuMjQsMTAzLjc4eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0zMC43NCw4Ny4wMWMtMC40Ny0wLjQ3LTEuMTQtMC42OC0xLjgtMC41N2MtMC42NiwwLjEyLTEuMjIsMC41NS0xLjUsMS4xNmwtOC43NiwxOS4wMSBjLTAuMzYsMC43OC0wLjE5LDEuNywwLjQyLDIuM2MwLjM5LDAuMzksMC45MSwwLjYsMS40NCwwLjZjMC4yOSwwLDAuNTgtMC4wNiwwLjg2LTAuMTlsMTkuMDEtOC43N2MwLjYxLTAuMjgsMS4wNC0wLjg0LDEuMTYtMS41IGMwLjEyLTAuNjYtMC4xLTEuMzMtMC41Ny0xLjhMMzAuNzQsODcuMDF6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTIyLjE3LDczLjI5YzAuNDEsMCwwLjgyLTAuMTMsMS4xNy0wLjM3YzAuNTUtMC4zOCwwLjg4LTEuMDEsMC44OC0xLjY4bC0wLjAxLTE0LjQ5IGMwLTAuNjctMC4zMy0xLjI5LTAuODgtMS42OGMtMC41NS0wLjM4LTEuMjUtMC40Ny0xLjg3LTAuMjRMMS44Miw2Mi4wOGMtMC44LDAuMjktMS4zNCwxLjA2LTEuMzQsMS45MmMwLDAuODUsMC41MywxLjYyLDEuMzQsMS45MiBsMTkuNjUsNy4yNEMyMS43LDczLjI1LDIxLjkzLDczLjI5LDIyLjE3LDczLjI5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0yNy40NSw0MC40YzAuMjgsMC42MSwwLjg0LDEuMDQsMS41LDEuMTZjMC4xMiwwLjAyLDAuMjQsMC4wMywwLjM2LDAuMDNjMC41NCwwLDEuMDYtMC4yMSwxLjQ1LTAuNiBMNDEsMzAuNzRjMC40Ny0wLjQ4LDAuNjgtMS4xNSwwLjU2LTEuODFjLTAuMTItMC42NS0wLjU1LTEuMjEtMS4xNi0xLjQ5bC0xOS4wMi04Ljc2Yy0wLjc4LTAuMzYtMS42OS0wLjE5LTIuMywwLjQyIGMtMC42MSwwLjYxLTAuNzcsMS41Mi0wLjQxLDIuM0wyNy40NSw0MC40eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICA8L2c+Cjwvc3ZnPg=="},176:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDEyODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxwYXRoIGQ9Ik0xMDUuODcsMTQuOTljLTMuNzQtMy4zOS03LjkxLTYuMzgtMTIuNDItOC44OWMtMC44Ny0wLjQ5LTItMC4zNS0yLjcxLDAuMzMgYy0wLjcxLDAuNjgtMC44MywxLjczLTAuMjksMi41M2MxNS42MywyMi45MywxMi4yOSw1Mi41Mi04LjExLDcxLjk3Yy0xMS45LDExLjM1LTI3Ljg1LDE3LjYtNDQuOTEsMTcuNiBjLTExLjM5LDAtMjIuNTQtMi44Ni0zMi4yNC04LjI3Yy0wLjg3LTAuNDktMi0wLjM2LTIuNzEsMC4zM2MtMC43MSwwLjY4LTAuODMsMS43Mi0wLjI4LDIuNTNjMi44MSw0LjEyLDYuMTIsNy45Myw5Ljg2LDExLjMyIGMxMi42MSwxMS40NSwyOS4yNywxNy43Niw0Ni45LDE3Ljc2YzE4LjI3LDAsMzUuMzQtNi43LDQ4LjA5LTE4Ljg2YzEyLjUzLTExLjk0LDE5LjMxLTI3LjcxLDE5LjA5LTQ0LjQgQzEyNS45Miw0Mi4yNSwxMTguNzIsMjYuNjQsMTA1Ljg3LDE0Ljk5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KPC9zdmc+"},184:function(e,t,a){"use strict";var M=a(0),n=a.n(M);t.a=function(){return n.a.createElement("section",{className:"section"},n.a.createElement("iframe",{src:"https://upscri.be/e51a31?as_embed",width:"100%",height:"400px",frameBorder:"0",title:"subscribe"}))}},188:function(e,t,a){"use strict";a.d(t,"a",function(){return L});var M=a(5),n=a.n(M),r=a(0),i=a.n(r),s=a(184),L=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"Stay in touch"),i.a.createElement("p",null,"Like the posts you see here? Sign up to get notified about new content."),i.a.createElement(s.a,null),i.a.createElement("p",null,"You can find me around the web:"),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("strong",null,"Email"),": ",i.a.createElement("a",{href:"mailto:tania@taniarascia.com"},"tania@taniarascia.com")),i.a.createElement("li",null,i.a.createElement("strong",null,"GitHub"),":"," ",i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/taniarascia"},"taniarascia")),i.a.createElement("li",null,i.a.createElement("strong",null,"Twitter"),":"," ",i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/taniarascia"},"taniarascia")),i.a.createElement("li",null,i.a.createElement("strong",null,"LinkedIn"),":"," ",i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://linkedin.com/in/taniarascia"},"taniarascia"))))},t}(r.Component)}}]);
//# sourceMappingURL=component---src-pages-contact-js-6a1b4084508017616ba7.js.map
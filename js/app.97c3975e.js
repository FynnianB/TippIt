(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},a={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-c76440ec":"341e9bd2","chunk-30d1fbfd":"f81a8cec","chunk-826cc6e2":"43e85b1c","chunk-5b23bc5f":"4b7f04ca","chunk-a44caee2":"fc185d27","chunk-002ebaa8":"a3e5d04c","chunk-17660fca":"c1c5c5e5","chunk-8bd0ad98":"a4e96850","chunk-90af8d66":"0c1c1e2d"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-c76440ec":1,"chunk-826cc6e2":1,"chunk-5b23bc5f":1,"chunk-a44caee2":1,"chunk-002ebaa8":1,"chunk-17660fca":1,"chunk-8bd0ad98":1,"chunk-90af8d66":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-c76440ec":"1a31b591","chunk-30d1fbfd":"31d6cfe0","chunk-826cc6e2":"f42260bb","chunk-5b23bc5f":"5f628237","chunk-a44caee2":"051cf743","chunk-002ebaa8":"f63f36fb","chunk-17660fca":"b417d44c","chunk-8bd0ad98":"c3b07fa1","chunk-90af8d66":"9600e10d"}[e]+".css",a=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],d.parentNode.removeChild(d),n(o)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/TippIt/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",["Login"!=e.pageTitle?n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-app-bar-nav-icon",{staticClass:"nav-bar-icon-menu",attrs:{"aria-label":"Menu"},on:{click:function(t){e.drawer=!0}}}),n("v-toolbar-title",[e._v(e._s(e.pageTitle))])],1):e._e(),n("v-navigation-drawer",{attrs:{app:"",temporary:"",fixed:""},scopedSlots:e._u([{key:"append",fn:function(){return[n("div",{staticClass:"pa-2"},[n("v-btn",{attrs:{block:"",outlined:""},on:{click:function(t){return t.stopPropagation(),e.logout.apply(null,arguments)}}},[e._v(" Logout ")])],1)]},proxy:!0}]),model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"title text-center"},[e._v(" "+e._s(e.username)+" ")])],1)],1),n("v-divider"),n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",{attrs:{"active-class":"primary--text text--accent-4",mandatory:""},on:{change:function(t){e.drawer=!1}},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}},[n("v-list-item",{attrs:{value:"Dashboard",link:""},on:{click:function(t){return e.redirect("Dashboard")}}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-home")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Dashboard")])],1)],1),n("v-list-item",{attrs:{value:"Guess",link:""},on:{click:function(t){return e.redirect("Guess")}}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-account")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Tippen")])],1)],1),n("v-list-item",{attrs:{value:"ListGuess",link:""},on:{click:function(t){return e.redirect("ListGuess")}}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-dots-grid")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Tippübersicht")])],1)],1),n("v-list-item",{attrs:{value:"ListPoints",link:""},on:{click:function(t){return e.redirect("ListPoints")}}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-format-list-numbered")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Punkteübersicht")])],1)],1),n("v-list-item",{attrs:{value:"Games",link:""},on:{click:function(t){return e.redirect("Games")}}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-soccer-field")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Spielplan")])],1)],1)],1)],1)],1),n("v-main",[n("router-view")],1)],1)},a=[],o=(n("b0c0"),n("14b7")),i=n.n(o),u={name:"App",data:function(){return{username:"",drawer:!1,page:"Dashboard"}},mounted:function(){this.getUsername(),this.page=this.$route.name},computed:{pageTitle:function(){var e="";switch(this.$route.name){case"Login":e="Login";break;case"Dashboard":e="Dashboard";break;case"Guess":e="Tippen";break;case"ListGuess":e="Tippübersicht";break;case"ListPoints":e="Punkteübersicht";break;case"Games":e="Spielplan";break;default:e="TippIt";break}return e}},watch:{$route:function(e,t){this.page=e.name}},methods:{getUsername:function(){localStorage.user_token&&i.a.decode(localStorage.user_token)&&(this.username=i.a.decode(localStorage.user_token).username)},logout:function(){localStorage.removeItem("user_token"),this.$router.push({name:"Login"})},redirect:function(e){e!=this.page&&this.$router.push({name:e})}}},s=u,l=(n("034f"),n("2877")),f=n("6544"),d=n.n(f),p=n("7496"),h=n("40dc"),m=n("5bc1"),v=n("8336"),b=n("ce7e"),k=n("132d"),g=n("8860"),y=n("da13"),w=n("5d23"),_=n("1baa"),L=n("34c3"),P=n("f6c4"),T=n("f774"),S=n("2a7f"),E=Object(l["a"])(s,c,a,!1,null,null,null),x=E.exports;d()(E,{VApp:p["a"],VAppBar:h["a"],VAppBarNavIcon:m["a"],VBtn:v["a"],VDivider:b["a"],VIcon:k["a"],VList:g["a"],VListItem:y["a"],VListItemContent:w["a"],VListItemGroup:_["a"],VListItemIcon:L["a"],VListItemTitle:w["b"],VMain:P["a"],VNavigationDrawer:T["a"],VToolbarTitle:S["a"]});var V=n("9483");Object(V["a"])("".concat("/TippIt/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var j=n("8c4f");function A(e,t,n){localStorage.user_token?n({name:"Dashboard"}):n()}function C(e,t,n){localStorage.user_token?n():n({name:"Login"})}r["a"].use(j["a"]);var O=[{path:"/login",name:"Login",component:function(){return Promise.all([n.e("chunk-c76440ec"),n.e("chunk-826cc6e2"),n.e("chunk-5b23bc5f")]).then(n.bind(null,"a55b"))},beforeEnter:A},{path:"/",name:"Dashboard",component:function(){return Promise.all([n.e("chunk-c76440ec"),n.e("chunk-30d1fbfd")]).then(n.bind(null,"7277"))},beforeEnter:C},{path:"/games",name:"Games",component:function(){return Promise.all([n.e("chunk-c76440ec"),n.e("chunk-826cc6e2"),n.e("chunk-a44caee2"),n.e("chunk-8bd0ad98")]).then(n.bind(null,"a2e9"))},beforeEnter:C},{path:"/guess",name:"Guess",component:function(){return Promise.all([n.e("chunk-c76440ec"),n.e("chunk-826cc6e2"),n.e("chunk-a44caee2"),n.e("chunk-17660fca")]).then(n.bind(null,"33a8"))},beforeEnter:C},{path:"/listguess",name:"ListGuess",component:function(){return Promise.all([n.e("chunk-c76440ec"),n.e("chunk-826cc6e2"),n.e("chunk-a44caee2"),n.e("chunk-002ebaa8")]).then(n.bind(null,"c9d9"))},beforeEnter:C},{path:"/listpoints",name:"ListPoints",component:function(){return Promise.all([n.e("chunk-c76440ec"),n.e("chunk-826cc6e2"),n.e("chunk-a44caee2"),n.e("chunk-90af8d66")]).then(n.bind(null,"5435"))},beforeEnter:C}],F=new j["a"]({routes:O}),G=F,I=n("f3091"),D=n("0fe0"),N=n.n(D);r["a"].use(I["a"]);var B=new I["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#FF5722",secondary:"#00B383",accent:"#FF9E80",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{de:N.a},current:"de"}});r["a"].config.productionTip=!1,new r["a"]({router:G,vuetify:B,render:function(e){return e(x)}}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},"85ec":function(e,t,n){},9:function(e,t){}});
//# sourceMappingURL=app.97c3975e.js.map
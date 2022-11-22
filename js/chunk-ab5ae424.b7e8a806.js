(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab5ae424"],{"33a8":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"fill-height table-container max-width-1200"},[r("div",{staticClass:"table-wrapper"},[t.mobile?r("v-data-table",{staticClass:"elevation-3",attrs:{headers:t.mobileHeaders,items:t.items,"items-per-page":-1,"disable-filtering":"","disable-sort":"",locale:"de-DE",loading:t.loading,"mobile-breakpoint":"-1"},scopedSlots:t._u([{key:"item.info",fn:function(e){var n=e.item;return[r("b",["group"==n.stage?r("span",[t._v("Gruppenphase (Gruppe "+t._s(n.group.toUpperCase())+")")]):r("span",[t._v(t._s(n.stage))])]),r("br"),t._v(t._s(n.date)+" ")]}},{key:"item.teams",fn:function(e){var n=e.item;return[r("b",[t._v(t._s(n.homeTeam)+" : "+t._s(n.awayTeam))]),r("br"),n.editable?r("div",{staticClass:"d-flex flex-row align-center"},[r("v-text-field",{staticClass:"mr-1 centered-input",attrs:{outlined:"",dense:"","single-line":"",rules:[t.rules.numeric],"hide-details":""},model:{value:n.home,callback:function(e){t.$set(n,"home",e)},expression:"item.home"}}),r("span",[t._v(":")]),r("v-text-field",{staticClass:"ml-1 centered-input",attrs:{outlined:"",dense:"","single-line":"",rules:[t.rules.numeric],"hide-details":""},model:{value:n.away,callback:function(e){t.$set(n,"away",e)},expression:"item.away"}})],1):r("span",[t._v(t._s(t.getGuessStr(n.guess)))])]}},{key:"footer.prepend",fn:function(){return[r("v-btn",{attrs:{color:"secondary",elevation:"2",large:""},on:{click:function(e){return t.saveGuesses()}}},[t._v("Speichern")])]},proxy:!0}])}):r("v-data-table",{staticClass:"elevation-3",attrs:{headers:t.headers,items:t.items,"items-per-page":-1,"disable-filtering":"","disable-sort":"",locale:"de-DE",loading:t.loading},scopedSlots:t._u([{key:"item.guess",fn:function(e){var n=e.item;return[n.editable?r("div",{staticClass:"d-flex flex-row align-center"},[r("v-text-field",{staticClass:"mr-1 centered-input",attrs:{outlined:"",dense:"","single-line":"",rules:[t.rules.numeric],"hide-details":""},model:{value:n.home,callback:function(e){t.$set(n,"home",e)},expression:"item.home"}}),r("span",[t._v(":")]),r("v-text-field",{staticClass:"ml-1 centered-input",attrs:{outlined:"",dense:"","single-line":"",rules:[t.rules.numeric],"hide-details":""},model:{value:n.away,callback:function(e){t.$set(n,"away",e)},expression:"item.away"}})],1):r("span",[t._v(t._s(t.getGuessStr(n.guess)))])]}},{key:"item.stage",fn:function(e){var n=e.item;return["group"==n.stage?r("span",[t._v("Gruppenphase (Gruppe "+t._s(n.group.toUpperCase())+")")]):r("span",[t._v(t._s(n.stage))])]}},{key:"footer.prepend",fn:function(){return[r("v-btn",{attrs:{color:"secondary",elevation:"8",large:""},on:{click:function(e){return t.saveGuesses()}}},[t._v("Speichern")])]},proxy:!0}],null,!1,859993609)})],1),r("v-snackbar",{attrs:{timeout:"3000"},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[r("v-btn",t._b({attrs:{color:"blue",text:""},on:{click:function(e){t.error_sheet.enabled=!1}}},"v-btn",n,!1),[t._v(" Schliessen ")])]}}]),model:{value:t.error_sheet.enabled,callback:function(e){t.$set(t.error_sheet,"enabled",e)},expression:"error_sheet.enabled"}},[r("div",{class:"py-3 "+t.error_sheet.color+"--text"},[t._v(" "+t._s(t.error_sheet.context)+" ")])])],1)},a=[];r("d3b7");function i(t,e,r,n,a,i,o){try{var s=t[i](o),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,a)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function s(t){i(o,n,a,s,c,"next",t)}function c(t){i(o,n,a,s,c,"throw",t)}s(void 0)}))}}var s=r("5530"),c=r("ade3"),u=(r("96cf"),r("8ba4"),r("a9e3"),r("d81d"),r("ac1f"),r("1276"),{name:"Guess",data:function(){return{headers:[{text:"Phase",value:"stage",align:"start"},{text:"Anpfiff",align:"start",value:"date"},{text:"Heim",value:"homeTeam",align:"start"},{text:"Gast",value:"awayTeam",align:"start"},Object(c["a"])({text:"Tipp",value:"guess",align:"end",width:"20%"},"align","center")],mobileHeaders:[{text:"Begegnung",value:"info",align:"start"},{text:"Mannschaften / Tipp",value:"teams",align:"center",width:"50%"}],items:[],rules:{numeric:function(t){return!(t&&!(Number.isInteger(parseInt(t,10))&&t>=0))||"Nur positive Zahlen erlaubt"}},error_sheet:{color:"red",enabled:!1,context:""},loading:!0}},mounted:function(){this.fetchData()},computed:{mobile:function(){return window.innerWidth<800}},methods:{fetchData:function(){var t=this;fetch("https://tipp-it.vercel.app/api/v1/guesses/myguesses",{method:"GET",headers:{authorization:"Bearer ".concat(localStorage.user_token),"content-type":"application/json"}}).then((function(t){return t.json()})).then((function(e){if(Array.isArray(e)){var r=e.map((function(t){var e=Object(s["a"])({},t);e.guess||(e.guess={home:"-",away:"-"}),null===e.guess.home&&(e.guess.home="-"),null===e.guess.away&&(e.guess.away="-"),e.home="-"===e.guess.home?"":e.guess.home,e.away="-"===e.guess.away?"":e.guess.away,e.guess=e.guess.home+":"+e.guess.away,e.editable=Date.now()<new Date(e.date).getTime();var r=new Date(t.date).toLocaleString();return r=r.substr(0,r.length-3),e.date=r,e}));t.items=r,t.loading=!1}}))},getGuessStr:function(t){var e=t.split(":");return e[0]+" : "+e[1]},saveGuesses:function(){var t=this;return o(regeneratorRuntime.mark((function e(){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(r=0;r<t.items.length;r++)n=t.items[r],n.editable&&Number.isInteger(parseInt(n.home,10))&&n.home>=0&&Number.isInteger(parseInt(n.away,10))&&n.away>=0&&(a={gameId:n._id,home:n.home,away:n.away},fetch("https://tipp-it.vercel.app/api/v1/guesses/guess",{method:"POST",headers:{authorization:"Bearer ".concat(localStorage.user_token),"content-type":"application/json"},body:JSON.stringify(a)}).then((function(t){return t.json()})).then((function(e){if(e.message){switch(e.message){case"Game not found":t.error_sheet.context="Spiel konnte nicht gefunden werden",t.error_sheet.color="error";break;case"Game already started":t.error_sheet.context="Das Spiel hat bereits begonnen. Du kannst nur vor Anpfiff tippen",t.error_sheet.color="error";break;default:t.error_sheet.context="Beim Speichern ist ein Fehler aufgetreten",t.error_sheet.color="error";break}t.error_sheet.enabled=!0}else t.error_sheet.context="Erfolgreich gespeichert",t.error_sheet.color="success",t.error_sheet.enabled=!0})));t.fetchData();case 2:case"end":return e.stop()}}),e)})))()}}}),l=u,h=(r("79c3"),r("2877")),f=r("6544"),p=r.n(f),d=r("8336"),v=r("a523"),m=r("8fea"),g=(r("caad"),r("ca71"),r("8dd9")),y=r("a9ad"),b=r("7560"),w=r("f2e7"),_=r("fe6c"),x=r("58df"),k=r("80d2"),L=r("d9bd"),T=Object(x["a"])(g["a"],y["a"],w["a"],Object(_["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:b["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,r=t.bottom,n=t.footer,a=t.insetFooter,i=t.left,o=t.right,s=t.top;return{paddingBottom:Object(k["g"])(r+n+a),paddingLeft:this.app?Object(k["g"])(i):void 0,paddingRight:this.app?Object(k["g"])(o):void 0,paddingTop:Object(k["g"])(e+s)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(L["e"])("auto-height",this),0==this.timeout&&Object(L["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(k["r"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(c["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(k["r"])(this)])},genWrapper:function(){var t=this,e=this.hasBackground?this.setBackgroundColor:this.setTextColor,r=e(this.color,{staticClass:"v-snack__wrapper",class:g["a"].options.computed.classes.call(this),style:g["a"].options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{mouseenter:function(){return window.clearTimeout(t.activeTimeout)},mouseleave:this.setTimeout}});return this.$createElement("div",r,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),E=r("8654"),j=Object(h["a"])(l,n,a,!1,null,"565ece4c",null);e["default"]=j.exports;p()(j,{VBtn:d["a"],VContainer:v["a"],VDataTable:m["a"],VSnackbar:T,VTextField:E["a"]})},"54a5":function(t,e,r){},"5e89":function(t,e,r){var n=r("861d"),a=Math.floor;t.exports=function(t){return!n(t)&&isFinite(t)&&a(t)===t}},"79c3":function(t,e,r){"use strict";r("54a5")},"8ba4":function(t,e,r){var n=r("23e7"),a=r("5e89");n({target:"Number",stat:!0},{isInteger:a})},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(B){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),o=new S(n||[]);return i._invoke=T(t,r,o),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(B){return{type:"throw",arg:B}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={};function m(){}function g(){}function y(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,_=w&&w(w(C([])));_&&_!==r&&n.call(_,i)&&(b=_);var x=y.prototype=m.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(a,i,o,s){var c=l(t[a],t,i);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,o,s)}),(function(t){r("throw",t,o,s)})):e.resolve(h).then((function(t){u.value=t,o(u)}),(function(t){return r("throw",t,o,s)}))}s(c.arg)}var a;function i(t,n){function i(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(i,i):i()}this._invoke=i}function T(t,e,r){var n=h;return function(a,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===a)throw i;return G()}r.method=a,r.arg=i;while(1){var o=r.delegate;if(o){var s=E(o,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?d:f,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function C(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){while(++a<t.length)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:G}}function G(){return{value:e,done:!0}}return g.prototype=x.constructor=y,y.constructor=g,g.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(L.prototype),L.prototype[o]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new L(u(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(x),c(x,s,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return s.type="throw",s.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},ca71:function(t,e,r){}}]);
//# sourceMappingURL=chunk-ab5ae424.b7e8a806.js.map
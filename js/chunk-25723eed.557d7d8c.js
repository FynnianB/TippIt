(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25723eed"],{"73c9":function(e,a,t){"use strict";t("8e73")},"8e73":function(e,a,t){},a2e9:function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",{staticClass:"fill-height table-container"},[t("div",{staticClass:"table-wrapper"},[e.mobile?t("v-data-table",{staticClass:"elevation-3",attrs:{headers:e.mobileHeaders,items:e.items,"items-per-page":-1,"disable-filtering":"","disable-sort":"",locale:"de-DE",loading:e.loading,"mobile-breakpoint":"-1"},scopedSlots:e._u([{key:"item.info",fn:function(a){var n=a.item;return[t("b",["group"==n.stage?t("span",[e._v("Gruppenphase (Gruppe "+e._s(n.group.toUpperCase())+")")]):t("span",[e._v(e._s(n.stage))])]),t("br"),e._v(e._s(n.date)+" ")]}},{key:"item.teams",fn:function(a){var n=a.item;return[t("v-chip",{attrs:{color:n.homeResult>n.awayResult?"#00DB73":"transparent"}},[e._v(" "+e._s(n.homeTeamName)+" ")]),t("br"),t("v-chip",{attrs:{color:n.awayResult>n.homeResult?"#00DB73":"transparent"}},[e._v(" "+e._s(n.awayTeamName)+" ")])]}},{key:"item.result",fn:function(a){var n=a.item;return[n.homeResult>n.awayResult?t("b",[e._v(e._s(n.homeResult))]):t("span",[e._v(e._s(n.homeResult))]),t("br"),n.homeResult<n.awayResult?t("b",[e._v(e._s(n.awayResult))]):t("span",[e._v(e._s(n.awayResult))])]}}])}):t("v-data-table",{staticClass:"elevation-3",attrs:{headers:e.headers,items:e.items,"items-per-page":-1,"disable-filtering":"","disable-sort":"",locale:"de-DE",loading:e.loading},on:{"click:row":e.goToGame},scopedSlots:e._u([{key:"item.homeTeam",fn:function(a){var n=a.item;return[t("v-chip",{attrs:{color:n.homeResult>n.awayResult?"#00DB73":"transparent"}},[t("v-img",{staticClass:"flag",attrs:{src:e.flagUrl(n.homeTeam)}}),e._v(" "+e._s(n.homeTeamName)+" ")],1)]}},{key:"item.awayTeam",fn:function(a){var n=a.item;return[t("v-chip",{attrs:{color:n.awayResult>n.homeResult?"#00DB73":"transparent"}},[t("v-img",{staticClass:"flag",attrs:{src:e.flagUrl(n.awayTeam)}}),e._v(" "+e._s(n.awayTeamName)+" ")],1)]}},{key:"item.stage",fn:function(a){var n=a.item;return["group"==n.stage?t("span",[e._v("Gruppenphase (Gruppe "+e._s(n.group.toUpperCase())+")")]):t("span",[e._v(e._s(n.stage))])]}}],null,!1,3296806505)})],1)])},s=[],r=t("5530"),i=(t("d3b7"),t("d81d"),new Intl.DisplayNames(["de"],{type:"region"})),o={name:"Games",data:function(){return{headers:[{text:"Phase",value:"stage",align:"start"},{text:"Anpfiff",align:"start",value:"date"},{text:"Heim",value:"homeTeam",align:"start"},{text:"Gast",value:"awayTeam",align:"start"},{text:"Ergebnis",value:"result",align:"end"}],mobileHeaders:[{text:"Begegnung",value:"info",align:"start"},{text:"Mannschaften",value:"teams",align:"center"},{text:"Ergebnis",value:"result",align:"end",width:"10%"}],items:[],loading:!0}},mounted:function(){this.fetchData()},computed:{mobile:function(){return window.innerWidth<800}},methods:{fetchData:function(){var e=this;fetch("https://tipp-it.vercel.app/api/v1/games/list",{method:"GET",headers:{authorization:"Bearer ".concat(localStorage.user_token),"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(a){Array.isArray(a)&&(e.items=a.map((function(a){var t=Object(r["a"])({},a);null===a.homeResult&&(a.homeResult="-"),null===a.awayResult&&(a.awayResult="-"),t.result=a.homeResult+" : "+a.awayResult,t.homeTeamName=e.unicodeToName(t.homeTeam),t.awayTeamName=e.unicodeToName(t.awayTeam);var n=new Date(a.date).toLocaleString();return n=n.substr(0,n.length-3),t.date=n,t})),e.loading=!1)}))},goToGame:function(e){this.$router.push({name:"Game",query:{id:e._id}})},flagUrl:function(e){return"EN"!=e&&"WL"!=e||(e="GB"),"http://purecatamphetamine.github.io/country-flag-icons/3x2/"+e+".svg"},unicodeToName:function(e){var a=i.of(e);return"EN"==e&&(a="England"),"WL"==e&&(a="Wales"),a}}},l=o,u=(t("73c9"),t("2877")),m=t("6544"),c=t.n(m),p=t("cc20"),h=t("a523"),d=t("8fea"),g=t("adda"),f=Object(u["a"])(l,n,s,!1,null,"7f3da230",null);a["default"]=f.exports;c()(f,{VChip:p["a"],VContainer:h["a"],VDataTable:d["a"],VImg:g["a"]})}}]);
//# sourceMappingURL=chunk-25723eed.557d7d8c.js.map
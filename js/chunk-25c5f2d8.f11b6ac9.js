(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25c5f2d8"],{"7bc62":function(e,a,t){"use strict";t("e4cb")},a2e9:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",{staticClass:"fill-height table-container"},[t("div",{staticClass:"table-wrapper"},[e.mobile?t("v-data-table",{staticClass:"elevation-3",attrs:{headers:e.mobileHeaders,items:e.items,"items-per-page":-1,"disable-filtering":"","disable-sort":"",locale:"de-DE",loading:e.loading,"mobile-breakpoint":"-1"},scopedSlots:e._u([{key:"item.info",fn:function(a){var s=a.item;return[t("b",["group"==s.stage?t("span",[e._v("Gruppenphase (Gruppe "+e._s(s.group.toUpperCase())+")")]):t("span",[e._v(e._s(s.stage))])]),t("br"),e._v(e._s(s.date)+" ")]}},{key:"item.teams",fn:function(a){var s=a.item;return[t("v-chip",{attrs:{color:s.homeResult>s.awayResult?"#00DB73":"transparent"}},[t("v-img",{staticClass:"flag",attrs:{src:e.flagUrl(s.homeTeam)}}),e._v(" "+e._s(s.homeTeamName)+" ")],1),t("br"),t("v-chip",{attrs:{color:s.awayResult>s.homeResult?"#00DB73":"transparent"}},[t("v-img",{staticClass:"flag",attrs:{src:e.flagUrl(s.awayTeam)}}),e._v(" "+e._s(s.awayTeamName)+" ")],1)]}},{key:"item.result",fn:function(a){var s=a.item;return[s.homeResult>s.awayResult?t("b",[e._v(e._s(s.homeResult))]):t("span",[e._v(e._s(s.homeResult))]),t("br"),s.homeResult<s.awayResult?t("b",[e._v(e._s(s.awayResult))]):t("span",[e._v(e._s(s.awayResult))])]}}])}):t("v-data-table",{staticClass:"elevation-3",attrs:{headers:e.headers,items:e.items,"items-per-page":-1,"disable-filtering":"","disable-sort":"",locale:"de-DE",loading:e.loading},on:{"click:row":e.goToGame},scopedSlots:e._u([{key:"item.homeTeam",fn:function(a){var s=a.item;return[t("v-chip",{attrs:{color:s.homeResult>s.awayResult?"#00DB73":"transparent"}},[t("v-img",{staticClass:"flag",attrs:{src:e.flagUrl(s.homeTeam)}}),e._v(" "+e._s(s.homeTeamName)+" ")],1)]}},{key:"item.awayTeam",fn:function(a){var s=a.item;return[t("v-chip",{attrs:{color:s.awayResult>s.homeResult?"#00DB73":"transparent"}},[t("v-img",{staticClass:"flag",attrs:{src:e.flagUrl(s.awayTeam)}}),e._v(" "+e._s(s.awayTeamName)+" ")],1)]}},{key:"item.stage",fn:function(a){var s=a.item;return["group"==s.stage?t("span",[e._v("Gruppenphase (Gruppe "+e._s(s.group.toUpperCase())+")")]):t("span",[e._v(e._s(s.stage))])]}}],null,!1,3296806505)})],1)])},n=[],r=t("5530"),i=(t("d3b7"),t("d81d"),new Intl.DisplayNames(["de"],{type:"region"})),l={name:"Games",data:function(){return{headers:[{text:"Phase",value:"stage",align:"start"},{text:"Anpfiff",align:"start",value:"date"},{text:"Heim",value:"homeTeam",align:"start"},{text:"Gast",value:"awayTeam",align:"start"},{text:"Ergebnis",value:"result",align:"end"}],mobileHeaders:[{text:"Begegnung",value:"info",align:"start"},{text:"Mannschaften",value:"teams",align:"center"},{text:"Ergebnis",value:"result",align:"end",width:"10%"}],items:[],loading:!0}},mounted:function(){this.fetchData()},computed:{mobile:function(){return window.innerWidth<800}},methods:{fetchData:function(){var e=this;fetch("https://tipp-it.vercel.app/api/v1/games/list",{method:"GET",headers:{authorization:"Bearer ".concat(localStorage.user_token),"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(a){Array.isArray(a)&&(e.items=a.map((function(a){var t=Object(r["a"])({},a);null===a.homeResult&&(a.homeResult="-"),null===a.awayResult&&(a.awayResult="-"),t.result=a.homeResult+" : "+a.awayResult,t.homeTeamName=e.unicodeToName(t.homeTeam),t.awayTeamName=e.unicodeToName(t.awayTeam);var s=new Date(a.date).toLocaleString();return s=s.substr(0,s.length-3),t.date=s,t})),e.loading=!1)}))},goToGame:function(e){this.$router.push({name:"Game",query:{id:e._id}})},flagUrl:function(e){return"EN"!=e&&"WL"!=e||(e="GB"),"http://purecatamphetamine.github.io/country-flag-icons/3x2/"+e+".svg"},unicodeToName:function(e){var a=i.of(e);return"EN"==e&&(a="England"),"WL"==e&&(a="Wales"),a}}},o=l,u=(t("7bc62"),t("2877")),m=t("6544"),c=t.n(m),p=t("cc20"),g=t("a523"),h=t("8fea"),d=t("adda"),f=Object(u["a"])(o,s,n,!1,null,"cc987ca6",null);a["default"]=f.exports;c()(f,{VChip:p["a"],VContainer:g["a"],VDataTable:h["a"],VImg:d["a"]})},e4cb:function(e,a,t){}}]);
//# sourceMappingURL=chunk-25c5f2d8.f11b6ac9.js.map
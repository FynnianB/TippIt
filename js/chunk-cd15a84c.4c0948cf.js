(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd15a84c"],{"34ac":function(e,t,a){},"5e8a":function(e,t,a){"use strict";a("34ac")},a2e9:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"fill-height table-container"},[a("div",{staticClass:"table-wrapper"},[a("v-data-table",{staticClass:"elevation-3",attrs:{headers:e.headers,items:e.items,"items-per-page":-1,"disable-filtering":"","disable-sort":"",locale:"de-DE"},scopedSlots:e._u([{key:"item.homeTeam",fn:function(t){var n=t.item;return[a("v-chip",{attrs:{color:n.homeResult>n.awayResult?"#00DB73":"transparent"}},[e._v(" "+e._s(n.homeTeam)+" ")])]}},{key:"item.awayTeam",fn:function(t){var n=t.item;return[a("v-chip",{attrs:{color:n.awayResult>n.homeResult?"#00DB73":"transparent"}},[e._v(" "+e._s(n.awayTeam)+" ")])]}},{key:"item.stage",fn:function(t){var n=t.item;return["group"==n.stage?a("span",[e._v("Gruppenphase (Gruppe "+e._s(n.group.toUpperCase())+")")]):a("span",[e._v(e._s(n.stage))])]}}])})],1)])},s=[],r=a("5530"),i=(a("d3b7"),a("d81d"),{name:"Games",data:function(){return{headers:[{text:"Phase",value:"stage",align:"start"},{text:"Anpfiff",align:"start",value:"date"},{text:"Heim",value:"homeTeam",align:"start"},{text:"Gast",value:"awayTeam",align:"start"},{text:"Ergebnis",value:"result",align:"end"}],items:[]}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var e=this;fetch("https://tipp-it.vercel.app/api/v1/games/list",{method:"GET",headers:{authorization:"Bearer ".concat(localStorage.user_token),"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(t){Array.isArray(t)&&(e.items=t.map((function(e){var t=Object(r["a"])({},e);null===e.homeResult&&(e.homeResult="-"),null===e.awayResult&&(e.awayResult="-"),t.result=e.homeResult+" : "+e.awayResult;var a=new Date(e.date).toLocaleString();return t.date=a,t})))}))}}}),l=i,o=(a("5e8a"),a("2877")),u=a("6544"),c=a.n(u),p=a("cc20"),m=a("a523"),h=a("8fea"),f=Object(o["a"])(l,n,s,!1,null,"7f61b8b6",null);t["default"]=f.exports;c()(f,{VChip:p["a"],VContainer:m["a"],VDataTable:h["a"]})}}]);
//# sourceMappingURL=chunk-cd15a84c.4c0948cf.js.map
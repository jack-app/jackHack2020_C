(function(t){function e(e){for(var a,o,c=e[0],s=e[1],u=e[2],f=0,d=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0446":function(t,e,n){t.exports=n.p+"img/jackinator.55b61d12.png"},"08f4":function(t,e,n){"use strict";var a=n("8917"),r=n.n(a);r.a},"199c":function(t,e){},"23be":function(t,e,n){"use strict";var a=n("199c"),r=n.n(a);e["default"]=r.a},"3dfd":function(t,e,n){"use strict";var a=n("95f5"),r=n("23be"),i=(n("4e43"),n("2877")),o=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,"4a600f98",null);e["default"]=o.exports},"4e43":function(t,e,n){"use strict";var a=n("6216"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("3dfd"),i=n("f309");a["a"].use(i["a"]);var o=new i["a"]({}),c=n("8c4f"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"d-flex justify-center"},[n("div",{staticClass:"title"},[n("v-img",{attrs:{src:t.jackinatorTitleImage}})],1),n("div",[n("v-img",{staticClass:"jackImage",attrs:{src:t.jackinatorImage,"max-width":"180px","max-height":"270px",contain:""}})],1),n("div",{staticClass:"caution"},[n("h3",[t._v("素直に答えてね")])]),n("div",{staticClass:"Btn"},[n("v-btn",{staticClass:"mainBtn",attrs:{width:"270px",height:"75px",color:"#FFA95A"},on:{click:t.toQuestion}},[t._v("私にチャレンジ"),n("br"),t._v("あなたの生まれ年を当ててみせます")])],1)])},u=[],l=n("cd7c"),f=n.n(l),d=n("0446"),h=n.n(d),p={data:function(){return{jackinatorTitleImage:f.a,jackinatorImage:h.a}},methods:{toQuestion:function(){this.$router.push({path:"/question/".concat(1)})}}},v=p,m=(n("620d"),n("2877")),g=n("6544"),b=n.n(g),x=n("8336"),j=n("a523"),k=n("adda"),w=Object(m["a"])(v,s,u,!1,null,"81c904a4",null),_=w.exports;b()(w,{VBtn:x["a"],VContainer:j["a"],VImg:k["a"]});var y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-img",{staticClass:"jackImage",attrs:{src:t.jackinatorImage,"max-height":"250","max-width":"180",contain:""}}),n("v-card",{staticClass:"question",attrs:{flat:"","max-height":"380px","min-height":"250px"}},[n("v-card-title",[t._v("質問その"+t._s(this.$route.params.id))]),n("v-card-text",[t._v(t._s(this.question.qestion))])],1),n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("v-btn",{staticClass:"choice",attrs:{height:"67px"},on:{click:function(e){return t.checkAnswer("Yes")}}},[t._v("知ってた")])],1),n("v-col",{attrs:{cols:"6"}},[n("v-btn",{staticClass:"choice",attrs:{height:"67px"},on:{click:function(e){return t.checkAnswer("No")}}},[t._v("知らなかった")])],1)],1)],1)},C=[],O=n("d4ec"),V=n("bee2"),I=n("bc3a"),q=n.n(I),T="http://localhost:5000/questions",$=function(){function t(){Object(O["a"])(this,t),this.init(),this.fetch()}return Object(V["a"])(t,[{key:"fetch",value:function(){var t=this;q.a.get(T).then((function(e){console.log(e.data.question),Object.assign(t,e.data),console.log(t)}))}},{key:"toPostedObject",value:function(t){var e={};return e.question=this.question,e.answer=t,e}},{key:"cheackAnswer",value:function(t){return q.a.post(T,this.toPostedObject(t))}},{key:"init",value:function(){this.question=""}}]),t}(),P={data:function(){return{question:new $,jackinatorImage:h.a}},methods:{checkAnswer:function(t){var e=this;console.log(this.question),this.question.checkAnswer(t).then((function(t){t.data.continue?e.$router.go({path:e.$router.currentRoute.path,force:!0}):e.$router.push({path:"/result",params:{result:t.data.result}})}))}}},A=P,B=(n("08f4"),n("b0af")),S=n("99d9"),E=n("62ad"),M=n("0fd9"),J=Object(m["a"])(A,y,C,!1,null,"1df765b0",null),Q=J.exports;b()(J,{VBtn:x["a"],VCard:B["a"],VCardText:S["a"],VCardTitle:S["b"],VCol:E["a"],VContainer:j["a"],VImg:k["a"],VRow:M["a"]});var R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-img",{staticClass:"jackImage",attrs:{src:t.jackinatorImage,"max-height":"250","max-width":"180",contain:""}}),n("v-card",{staticClass:"answer",attrs:{flat:"","min-height":"250px","max-height":"320px"}},[n("v-card-title",[t._v("あなたの生まれ年は")]),n("v-card-text",{staticClass:"result"},[t._v(t._s(t.result)+"年です")])],1),n("div",{staticClass:"again"},[n("v-btn",{staticClass:"againBtn",attrs:{width:"188px",height:"35px"}},[n("router-link",{attrs:{to:"/"}},[t._v("もう一度遊ぶ")])],1)],1)],1)},F=[],N=(n("a9e3"),{props:{result:Number},data:function(){return{jackinatorImage:h.a}}}),H=N,Y=(n("e233"),Object(m["a"])(H,R,F,!1,null,"f8fc99c8",null)),z=Y.exports;b()(Y,{VBtn:x["a"],VCard:B["a"],VCardText:S["a"],VCardTitle:S["b"],VImg:k["a"]}),a["a"].use(c["a"]);var D=[{path:"/",name:"Home",component:_},{path:"/question/:id",name:"Question",component:Q},{path:"/result",name:"Result",component:z,props:!0}],G=new c["a"]({mode:"history",base:"",routes:D}),K=G;a["a"].config.productionTip=!1,new a["a"]({vuetify:o,router:K,render:function(t){return t(r["default"])}}).$mount("#app")},"620d":function(t,e,n){"use strict";var a=n("f1e9"),r=n.n(a);r.a},6216:function(t,e,n){},"6aeb":function(t,e,n){},8917:function(t,e,n){},"95f5":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[]},cd7c:function(t,e,n){t.exports=n.p+"img/JackinatorTitle.822efa25.png"},e233:function(t,e,n){"use strict";var a=n("6aeb"),r=n.n(a);r.a},f1e9:function(t,e,n){}});
//# sourceMappingURL=app.f7fdd61a.js.map
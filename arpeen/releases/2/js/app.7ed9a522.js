(function(t){function n(n){for(var e,r,s=n[0],a=n[1],l=n[2],p=0,f=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e]);u&&u(n);while(f.length)f.shift()();return c.push.apply(c,l||[]),i()}function i(){for(var t,n=0;n<c.length;n++){for(var i=c[n],e=!0,s=1;s<i.length;s++){var a=i[s];0!==o[a]&&(e=!1)}e&&(c.splice(n--,1),t=r(r.s=i[0]))}return t}var e={},o={app:0},c=[];function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,n,i){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)r.d(i,e,function(n){return t[n]}.bind(null,e));return i},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/arpeen/releases/2/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var u=a;c.push([0,"chunk-vendors"]),i()})({0:function(t,n,i){t.exports=i("56d7")},"034f":function(t,n,i){"use strict";i("85ec")},"56d7":function(t,n,i){"use strict";i.r(n);i("e260"),i("e6cf"),i("cca6"),i("a79d");var e=i("2b0e"),o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("main",{staticClass:"noselect screen-centered"},[i("section",{attrs:{id:"screen"}},[i("div",{class:{incomplete:t.stack.length>3},attrs:{id:"stack"}},t._l(t.stack_shown,(function(n,e){return i("span",{key:e},[t._v(" "+t._s(t.prettyPrint(n))+" ")])})),0),i("div",{attrs:{id:"input"}},[t._v(t._s(t.inputfield))])]),i("section",{attrs:{id:"face"}},t._l(t.face,(function(n,e){return i("div",{key:e,staticClass:"button",style:{"grid-column-start":n.mincol+1,"grid-column-end":n.maxcol+1,"grid-row-start":n.row},attrs:{id:"key-"+n.action},on:{click:function(i){return t.dispatchAction(n.action)}}},[t._v(" "+t._s(n.icon)+" ")])})),0)])},c=[],r=(i("fb6a"),i("a9e3"),i("2532"),i("4128"));i("caad"),i("b680"),i("d3b7"),i("25f0");function s(t,n){var i=t.s>0?" ":"-",e=t.abs(),o=e.toFixed();if(o.length+1<=n)return i+o;if(o=e.toPrecision(n-1),!o.includes("e")&&o.length+1<=n)return i+o;var c=n-5-Math.abs(t.e).toString().length;return i+e.toExponential(c)}var a=[{icon:"0",row:5,mincol:0,maxcol:3,action:"0"},{icon:".",row:5,mincol:3,maxcol:6,action:"."},{icon:"+",row:5,mincol:9,maxcol:12,action:"+"},{icon:"1",row:4,mincol:0,maxcol:3,action:"1"},{icon:"2",row:4,mincol:3,maxcol:6,action:"2"},{icon:"3",row:4,mincol:6,maxcol:9,action:"3"},{icon:"-",row:4,mincol:9,maxcol:12,action:"-"},{icon:"4",row:3,mincol:0,maxcol:3,action:"4"},{icon:"5",row:3,mincol:3,maxcol:6,action:"5"},{icon:"6",row:3,mincol:6,maxcol:9,action:"6"},{icon:"×",row:3,mincol:9,maxcol:12,action:"*"},{icon:"7",row:2,mincol:0,maxcol:3,action:"7"},{icon:"8",row:2,mincol:3,maxcol:6,action:"8"},{icon:"9",row:2,mincol:6,maxcol:9,action:"9"},{icon:"÷",row:2,mincol:9,maxcol:12,action:"/"},{icon:"C",row:1,mincol:0,maxcol:3,action:"Backspace"},{icon:"⇵",row:1,mincol:3,maxcol:6,action:"Tab"},{icon:"↑",row:1,mincol:9,maxcol:12,action:"Enter"}],l=20,u={name:"arpeen",data:function(){return{stack:[],face:a,inputfield:""}},mounted:function(){document.addEventListener("keydown",this.keypressed)},beforeDestroy:function(){document.removeEventListener("keydown",this.keypressed)},computed:{stack_shown:function(){return this.stack.slice(-3)}},methods:{prettyPrint:function(t){return s(t,l)},pushToDisplay:function(t){var n=this.inputfield+t;n.length<l&&!isNaN(Number(n))&&(this.inputfield=n)},drop:function(){""!==this.inputfield?this.inputfield="":this.stack.pop()},push:function(){""===this.inputfield||isNaN(Number(this.inputfield))||(this.stack.push(new r["Decimal"](this.inputfield)),this.inputfield="")},switch:function(){if(this.stack.length>1){var t=this.stack.pop(),n=this.stack.pop();this.stack.push(t),this.stack.push(n)}},keypressed:function(t){this.dispatchAction(t.key)&&(t.preventDefault(),t.stopPropagation())},dispatchAction:function(t){if("0123456789.".includes(t))this.pushToDisplay(t);else if("+-*/".includes(t))this.binaryOperation(t);else if("Backspace"==t)this.drop();else if("Enter"==t)this.push();else{if("Tab"!=t)return!1;this.switch()}return!0},pushOrFail:function(){return""===this.inputfield||!isNaN(Number(this.inputfield))&&(this.stack.push(new r["Decimal"](this.inputfield)),this.inputfield="",!0)},binaryOperation:function(t){if(!1===this.pushOrFail())return null;if(this.stack.length<2)return null;var n=this.stack.pop(),i=this.stack.pop();switch(t){case"+":this.stack.push(i.plus(n));break;case"-":this.stack.push(i.minus(n));break;case"*":this.stack.push(i.times(n));break;case"/":this.stack.push(i.dividedBy(n));break}}}},p=u,f=(i("034f"),i("2877")),h=Object(f["a"])(p,o,c,!1,null,null,null),d=h.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(d)}}).$mount("#app")},"85ec":function(t,n,i){}});
//# sourceMappingURL=app.7ed9a522.js.map
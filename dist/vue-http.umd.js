!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("axios")):"function"==typeof define&&define.amd?define("vHttp",["axios"],e):"object"==typeof exports?exports.vHttp=e(require("axios")):t.vHttp=e(t.axios)}(this,(function(t){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.$post=e.$get=e.$ajaxSetup=e.$http=void 0;const r=o(n(1));class i{constructor(t){this.config={method:"get"},this.http=r.default.create(t)}ajax(t,e){this.parseOptions(e);return this.http(t,e)}parseOptions(t){return Object.assign({},this.config,t||{})}}let u={instance:null,config:{method:"get"},setConfig(t){this.config=t,this.instance=null},getInstance(){return null===this.instance&&(this.instance=new i(this.config)),this.instance}};e.$http=i,e.$ajaxSetup=function(t){return u.setConfig(t),u.config},e.$get=function(t,e){return u.getInstance().ajax(t,e)},e.$post=function(t,e){return u.getInstance().ajax(t,Object.assign({method:"post"},e))}},function(e,n){e.exports=t}])}));
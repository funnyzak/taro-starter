/*! For license information please see 10.6b31a5e5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"136":function(o,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(o){"object"==typeof window&&(n=window)}o.exports=n},"137":function(o,e,n){"use strict";(function(o){n.d(e,"a",(function(){return createCommonjsModule})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return getDefaultExportFromCjs}));var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==o?o:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function createCommonjsModule(o,e,n){return o(n={"path":e,"exports":{},"require":function(o,e){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}var s=createCommonjsModule((function(o){!function(){var e={}.hasOwnProperty;function r(){for(var o=[],n=0;n<arguments.length;n++){var i=arguments[n];if(i){var s=typeof i;if("string"===s||"number"===s)o.push(i);else if(Array.isArray(i)){if(i.length){var u=r.apply(null,i);u&&o.push(u)}}else if("object"===s)if(i.toString===Object.prototype.toString)for(var a in i)e.call(i,a)&&i[a]&&o.push(a);else o.push(i.toString())}}return o.join(" ")}o.exports?(r.default=r,o.exports=r):window.classNames=r}()}))}).call(this,n(136))},"92":function(o,e,n){"use strict";n.r(e),n.d(e,"taro_cover_view_core",(function(){return u}));var i=n(32),s=n(137),u=function(){function t(o){Object(i.g)(this,o),this.onLongPress=Object(i.c)(this,"longpress",7),this.hoverStartTime=50,this.hoverStayTime=400,this.hover=!1,this.touch=!1,this.startTime=0}return t.prototype.onTouchStart=function(){var o=this;this.hoverClass&&(this.touch=!0,setTimeout((function(){o.touch&&(o.hover=!0)}),this.hoverStartTime)),this.timeoutEvent=setTimeout((function(){o.onLongPress.emit()}),350),this.startTime=Date.now()},t.prototype.onTouchMove=function(){clearTimeout(this.timeoutEvent)},t.prototype.onTouchEnd=function(){var o=this;Date.now()-this.startTime<350&&clearTimeout(this.timeoutEvent),this.hoverClass&&(this.touch=!1,setTimeout((function(){o.touch||(o.hover=!1)}),this.hoverStayTime))},t.prototype.render=function(){var o,e=Object(s.c)(((o={})[""+this.hoverClass]=this.hover,o)),n={};return this.animation&&(n.animation=this.animation,n["data-animation"]=this.animation),Object(i.e)(i.a,Object.assign({"class":e},n),Object(i.e)("slot",null))},t}();u.style="taro-cover-view-core{display:block}"}}]);
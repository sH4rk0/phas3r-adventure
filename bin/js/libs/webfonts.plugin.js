!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.rexwebfontloaderplugin=n():t.rexwebfontloaderplugin=n()}(window,function(){return function(t){var n={};function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(i,o,function(n){return t[n]}.bind(null,o));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=97)}({29:function(t,n,e){"use strict";var i=e(55),o=e.n(i);const a=Phaser.Loader.FILE_POPULATED;var s=class extends Phaser.Loader.File{constructor(t,n){super(t,n)}load(){if(this.state===a)this.loader.nextFile(this,!0);else{var t=this.config;t.active=this.onLoad.bind(this),t.inactive=this.onError.bind(this),t.fontactive=this.onFontActive.bind(this),t.fontinactive=this.onFontInactive.bind(this),o.a.load(t)}}onLoad(){this.loader.nextFile(this,!0)}onError(){this.loader.nextFile(this,!1)}onFontActive(t,n){this.loader.emit("webfontactive",this,t)}onFontInactive(t,n){this.loader.emit("webfontinactive",this,t)}};const r=Phaser.Utils.Objects.IsPlainObject;n.a=function(t,n){return r(t)?(n=t).hasOwnProperty("config")?(n.type="webfont",n.url=""):n={key:"webfont",type:"webfont",url:"",config:n}:n={type:"webfont",url:"",key:t,config:n},this.addFile(new s(this,n)),this}},55:function(t,n,e){var i;!function(){function o(t,n,e){return t.call.apply(t.bind,arguments)}function a(t,n,e){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(e,i),t.apply(n,e)}}return function(){return t.apply(n,arguments)}}function s(t,n,e){return(s=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:a).apply(null,arguments)}var r=Date.now||function(){return+new Date};var c=!!window.FontFace;function f(t,n,e,i){if(n=t.c.createElement(n),e)for(var o in e)e.hasOwnProperty(o)&&("style"==o?n.style.cssText=e[o]:n.setAttribute(o,e[o]));return i&&n.appendChild(t.c.createTextNode(i)),n}function h(t,n,e){(t=t.c.getElementsByTagName(n)[0])||(t=document.documentElement),t.insertBefore(e,t.lastChild)}function l(t){t.parentNode&&t.parentNode.removeChild(t)}function u(t,n,e){n=n||[],e=e||[];for(var i=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var a=!1,s=0;s<i.length;s+=1)if(n[o]===i[s]){a=!0;break}a||i.push(n[o])}for(n=[],o=0;o<i.length;o+=1){for(a=!1,s=0;s<e.length;s+=1)if(i[o]===e[s]){a=!0;break}a||n.push(i[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function p(t,n){for(var e=t.className.split(/\s+/),i=0,o=e.length;i<o;i++)if(e[i]==n)return!0;return!1}function d(t,n,e){function i(){r&&o&&a&&(r(s),r=null)}n=f(t,"link",{rel:"stylesheet",href:n,media:"all"});var o=!1,a=!0,s=null,r=e||null;c?(n.onload=function(){o=!0,i()},n.onerror=function(){o=!0,s=Error("Stylesheet failed to load"),i()}):setTimeout(function(){o=!0,i()},0),h(t,"head",n)}function g(t,n,e,i){var o=t.c.getElementsByTagName("head")[0];if(o){var a=f(t,"script",{src:n}),s=!1;return a.onload=a.onreadystatechange=function(){s||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(s=!0,e&&e(null),a.onload=a.onreadystatechange=null,"HEAD"==a.parentNode.tagName&&o.removeChild(a))},o.appendChild(a),setTimeout(function(){s||(s=!0,e&&e(Error("Script load timeout")))},i||5e3),a}return null}function v(){this.a=0,this.c=null}function w(t){return t.a++,function(){t.a--,y(t)}}function m(t,n){t.c=n,y(t)}function y(t){0==t.a&&t.c&&(t.c(),t.c=null)}function b(t){this.a=t||"-"}function x(t,n){this.c=t,this.f=4,this.a="n";var e=(n||"n4").match(/^([nio])([1-9])$/i);e&&(this.a=e[1],this.f=parseInt(e[2],10))}function j(t){var n=[];t=t.split(/,\s*/);for(var e=0;e<t.length;e++){var i=t[e].replace(/['"]/g,"");-1!=i.indexOf(" ")||/^\d/.test(i)?n.push("'"+i+"'"):n.push(i)}return n.join(",")}function _(t){return t.a+t.f}function T(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function S(t){var n=4,e="n",i=null;return t&&((i=t.match(/(normal|oblique|italic)/i))&&i[1]&&(e=i[1].substr(0,1).toLowerCase()),(i=t.match(/([1-9]00|normal|bold)/i))&&i[1]&&(/bold/i.test(i[1])?n=7:/[1-9]00/.test(i[1])&&(n=parseInt(i[1].substr(0,1),10)))),e+n}function k(t){if(t.g){var n=p(t.f,t.a.c("wf","active")),e=[],i=[t.a.c("wf","loading")];n||e.push(t.a.c("wf","inactive")),u(t.f,e,i)}P(t,"inactive")}function P(t,n,e){t.j&&t.h[n]&&(e?t.h[n](e.c,_(e)):t.h[n]())}function F(t,n){this.c=t,this.f=n,this.a=f(this.c,"span",{"aria-hidden":"true"},this.f)}function O(t){h(t.c,"body",t.a)}function A(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(t.c)+";font-style:"+T(t)+";font-weight:"+t.f+"00;"}function E(t,n,e,i,o,a){this.g=t,this.j=n,this.a=i,this.c=e,this.f=o||3e3,this.h=a||void 0}function C(t,n,e,i,o,a,s){this.v=t,this.B=n,this.c=e,this.a=i,this.s=s||"BESbswy",this.f={},this.w=o||3e3,this.u=a||null,this.m=this.j=this.h=this.g=null,this.g=new F(this.c,this.s),this.h=new F(this.c,this.s),this.j=new F(this.c,this.s),this.m=new F(this.c,this.s),t=A(t=new x(this.a.c+",serif",_(this.a))),this.g.a.style.cssText=t,t=A(t=new x(this.a.c+",sans-serif",_(this.a))),this.h.a.style.cssText=t,t=A(t=new x("serif",_(this.a))),this.j.a.style.cssText=t,t=A(t=new x("sans-serif",_(this.a))),this.m.a.style.cssText=t,O(this.g),O(this.h),O(this.j),O(this.m)}b.prototype.c=function(t){for(var n=[],e=0;e<arguments.length;e++)n.push(arguments[e].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)},E.prototype.start=function(){var t=this.c.o.document,n=this,e=r(),i=new Promise(function(i,o){!function a(){r()-e>=n.f?o():t.fonts.load(function(t){return T(t)+" "+t.f+"00 300px "+j(t.c)}(n.a),n.h).then(function(t){1<=t.length?i():setTimeout(a,25)},function(){o()})}()}),o=null,a=new Promise(function(t,e){o=setTimeout(e,n.f)});Promise.race([a,i]).then(function(){o&&(clearTimeout(o),o=null),n.g(n.a)},function(){n.j(n.a)})};var I={D:"serif",C:"sans-serif"},N=null;function L(){if(null===N){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);N=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return N}function W(t,n,e){for(var i in I)if(I.hasOwnProperty(i)&&n===t.f[I[i]]&&e===t.f[I[i]])return!0;return!1}function B(t){var n,e=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(n=e===t.f.serif&&i===t.f["sans-serif"])||(n=L()&&W(t,e,i)),n?r()-t.A>=t.w?L()&&W(t,e,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?M(t,t.v):M(t,t.B):function(t){setTimeout(s(function(){B(this)},t),50)}(t):M(t,t.v)}function M(t,n){setTimeout(s(function(){l(this.g.a),l(this.h.a),l(this.j.a),l(this.m.a),n(this.a)},t),0)}function D(t,n,e){this.c=t,this.a=n,this.f=0,this.m=this.j=!1,this.s=e}C.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),B(this)};var $=null;function U(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&u(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),P(t,"active")):k(t.a))}function q(t){this.j=t,this.a=new function(){this.c={}},this.h=0,this.f=this.g=!0}function H(t,n,e,i,o){var a=0==--t.h;(t.f||t.g)&&setTimeout(function(){var t=o||null,r=i||{};if(0===e.length&&a)k(n.a);else{n.f+=e.length,a&&(n.j=a);var c,f=[];for(c=0;c<e.length;c++){var h=e[c],l=r[h.c],p=n.a,d=h;if(p.g&&u(p.f,[p.a.c("wf",d.c,_(d).toString(),"loading")]),P(p,"fontloading",d),p=null,null===$)if(window.FontFace){d=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var g=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);$=d?42<parseInt(d[1],10):!g}else $=!1;p=$?new E(s(n.g,n),s(n.h,n),n.c,h,n.s,l):new C(s(n.g,n),s(n.h,n),n.c,h,n.s,t,l),f.push(p)}for(c=0;c<f.length;c++)f[c].start()}},0)}function z(t,n){this.c=t,this.a=n}function G(t,n){this.c=t,this.a=n}D.prototype.g=function(t){var n=this.a;n.g&&u(n.f,[n.a.c("wf",t.c,_(t).toString(),"active")],[n.a.c("wf",t.c,_(t).toString(),"loading"),n.a.c("wf",t.c,_(t).toString(),"inactive")]),P(n,"fontactive",t),this.m=!0,U(this)},D.prototype.h=function(t){var n=this.a;if(n.g){var e=p(n.f,n.a.c("wf",t.c,_(t).toString(),"active")),i=[],o=[n.a.c("wf",t.c,_(t).toString(),"loading")];e||i.push(n.a.c("wf",t.c,_(t).toString(),"inactive")),u(n.f,i,o)}P(n,"fontinactive",t),U(this)},q.prototype.load=function(t){this.c=new function(t,n){this.a=t,this.o=n||t,this.c=this.o.document}(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,n,e){var i=[],o=e.timeout;!function(t){t.g&&u(t.f,[t.a.c("wf","loading")]),P(t,"loading")}(n);var i=function(t,n,e){var i,o=[];for(i in n)if(n.hasOwnProperty(i)){var a=t.c[i];a&&o.push(a(n[i],e))}return o}(t.a,e,t.c),a=new D(t.c,n,o);for(t.h=i.length,n=0,e=i.length;n<e;n++)i[n].load(function(n,e,i){H(t,a,n,e,i)})}(this,new function(t,n){this.c=t,this.f=t.o.document.documentElement,this.h=n,this.a=new b("-"),this.j=!1!==n.events,this.g=!1!==n.classes}(this.c,t),t)},z.prototype.load=function(t){var n=this,e=n.a.projectId,i=n.a.version;if(e){var o=n.c.o;g(this.c,(n.a.api||"https://fast.fonts.net/jsapi")+"/"+e+".js"+(i?"?v="+i:""),function(i){i?t([]):(o["__MonotypeConfiguration__"+e]=function(){return n.a},function n(){if(o["__mti_fntLst"+e]){var i,a=o["__mti_fntLst"+e](),s=[];if(a)for(var r=0;r<a.length;r++){var c=a[r].fontfamily;void 0!=a[r].fontStyle&&void 0!=a[r].fontWeight?(i=a[r].fontStyle+a[r].fontWeight,s.push(new x(c,i))):s.push(new x(c))}t(s)}else setTimeout(function(){n()},50)}())}).id="__MonotypeAPIScript__"+e}else t([])},G.prototype.load=function(t){var n,e,i=this.a.urls||[],o=this.a.families||[],a=this.a.testStrings||{},s=new v;for(n=0,e=i.length;n<e;n++)d(this.c,i[n],w(s));var r=[];for(n=0,e=o.length;n<e;n++)if((i=o[n].split(":"))[1])for(var c=i[1].split(","),f=0;f<c.length;f+=1)r.push(new x(i[0],c[f]));else r.push(new x(i[0]));m(s,function(){t(r,a)})};var K="https://fonts.googleapis.com/css";var R={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},V={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},X={i:"i",italic:"i",n:"n",normal:"n"},J=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function Q(t,n){this.c=t,this.a=n}var Y={Arimo:!0,Cousine:!0,Tinos:!0};function Z(t,n){this.c=t,this.a=n}function tt(t,n){this.c=t,this.f=n,this.a=[]}Q.prototype.load=function(t){var n=new v,e=this.c,i=new function(t,n){this.c=t||K,this.a=[],this.f=[],this.g=n||""}(this.a.api,this.a.text),o=this.a.families;!function(t,n){for(var e=n.length,i=0;i<e;i++){var o=n[i].split(":");3==o.length&&t.f.push(o.pop());var a="";2==o.length&&""!=o[1]&&(a=":"),t.a.push(o.join(a))}}(i,o);var a=new function(t){this.f=t,this.a=[],this.c={}}(o);!function(t){for(var n=t.f.length,e=0;e<n;e++){var i=t.f[e].split(":"),o=i[0].replace(/\+/g," "),a=["n4"];if(2<=i.length){var s;if(s=[],r=i[1])for(var r,c=(r=r.split(",")).length,f=0;f<c;f++){var h;if((h=r[f]).match(/^[\w-]+$/))if(null==(u=J.exec(h.toLowerCase())))h="";else{if(h=null==(h=u[2])||""==h?"n":X[h],null==(u=u[1])||""==u)u="4";else var l=V[u],u=l||(isNaN(u)?"4":u.substr(0,1));h=[h,u].join("")}else h="";h&&s.push(h)}0<s.length&&(a=s),3==i.length&&(s=[],0<(i=(i=i[2])?i.split(","):s).length&&(i=R[i[0]])&&(t.c[o]=i))}for(t.c[o]||(i=R[o])&&(t.c[o]=i),i=0;i<a.length;i+=1)t.a.push(new x(o,a[i]))}}(a),d(e,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var n=t.a.length,e=[],i=0;i<n;i++)e.push(t.a[i].replace(/ /g,"+"));return n=t.c+"?family="+e.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}(i),w(n)),m(n,function(){t(a.a,a.c,Y)})},Z.prototype.load=function(t){var n=this.a.id,e=this.c.o;n?g(this.c,(this.a.api||"https://use.typekit.net")+"/"+n+".js",function(n){if(n)t([]);else if(e.Typekit&&e.Typekit.config&&e.Typekit.config.fn){n=e.Typekit.config.fn;for(var i=[],o=0;o<n.length;o+=2)for(var a=n[o],s=n[o+1],r=0;r<s.length;r++)i.push(new x(a,s[r]));try{e.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(i)}},2e3):t([])},tt.prototype.load=function(t){var n=this.f.id,e=this.c.o,i=this;n?(e.__webfontfontdeckmodule__||(e.__webfontfontdeckmodule__={}),e.__webfontfontdeckmodule__[n]=function(n,e){for(var o=0,a=e.fonts.length;o<a;++o){var s=e.fonts[o];i.a.push(new x(s.name,S("font-weight:"+s.weight+";font-style:"+s.style)))}t(i.a)},g(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+n+".js",function(n){n&&t([])})):t([])};var nt=new q(window);nt.a.c.custom=function(t,n){return new G(n,t)},nt.a.c.fontdeck=function(t,n){return new tt(n,t)},nt.a.c.monotype=function(t,n){return new z(n,t)},nt.a.c.typekit=function(t,n){return new Z(n,t)},nt.a.c.google=function(t,n){return new Q(n,t)};var et={load:s(nt.load,nt)};void 0===(i=function(){return et}.call(n,e,n,t))||(t.exports=i)}()},97:function(t,n,e){"use strict";e.r(n);var i=e(29);n.default=class extends Phaser.Plugins.BasePlugin{constructor(t){super(t),t.registerFileType("rexWebFont",i.a)}addToScene(t){t.sys.load.rexWebFont=i.a}}}}).default});
(this["webpackJsonpvisualizing-commuter-data"]=this["webpackJsonpvisualizing-commuter-data"]||[]).push([[0],{145:function(e,t,r){"use strict";var n=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty;e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var u,a,c,f=n(t),s=n(r);if(f&&s){if((a=t.length)!=r.length)return!1;for(u=a;0!==u--;)if(!e(t[u],r[u]))return!1;return!0}if(f!=s)return!1;var l=t instanceof Date,d=r instanceof Date;if(l!=d)return!1;if(l&&d)return t.getTime()==r.getTime();var p=t instanceof RegExp,v=r instanceof RegExp;if(p!=v)return!1;if(p&&v)return t.toString()==r.toString();var h=i(t);if((a=h.length)!==i(r).length)return!1;for(u=a;0!==u--;)if(!o.call(r,h[u]))return!1;for(u=a;0!==u--;)if(!e(t[c=h[u]],r[c]))return!1;return!0}return t!==t&&r!==r}},246:function(e,t,r){"use strict";var n=r(5);t.a=function(e,t){var r=function(){var e=Object(n.useRef)(!0);return e.current?(e.current=!1,!0):e.current}();Object(n.useEffect)((function(){if(!r)return e()}),t)}},75:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},76:function(e,t,r){"use strict";function n(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function i(e){return!!e&&!!e[H]}function o(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype}(e)||Array.isArray(e)||!!e[N]||!!e.constructor[N]||d(e)||p(e))}function u(e,t,r){void 0===r&&(r=!1),0===a(e)?(r?Object.keys:J)(e).forEach((function(n){r&&"symbol"==typeof n||t(n,e[n],e)})):e.forEach((function(r,n){return t(n,r,e)}))}function a(e){var t=e[H];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:d(e)?2:p(e)?3:0}function c(e,t){return 2===a(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function f(e,t){return 2===a(e)?e.get(t):e[t]}function s(e,t,r){var n=a(e);2===n?e.set(t,r):3===n?(e.delete(t),e.add(r)):e[t]=r}function l(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e){return W&&e instanceof Map}function p(e){return F&&e instanceof Set}function v(e){return e.o||e.t}function h(e){if(Array.isArray(e))return e.slice();var t=Object.getOwnPropertyDescriptors(e);for(var r in delete t[H],t){var n=t[r];!1===n.writable&&(n.writable=!0,n.configurable=!0),(n.get||n.set)&&(t[r]={configurable:!0,writable:!0,enumerable:n.enumerable,value:e[r]})}return Object.create(Object.getPrototypeOf(e),t)}function y(e,t){Object.isFrozen(e)||i(e)||!o(e)||(a(e)>1&&(e.set=e.add=e.clear=e.delete=b),Object.freeze(e),t&&u(e,(function(e,t){return y(t,!0)}),!0))}function b(){n(2)}function g(e){var t=U[e];return t||n(19,e),t}function O(){return K}function m(e,t){t&&(g("Patches"),e.u=[],e.s=[],e.p=t)}function w(e){j(e),e.v.forEach(_),e.v=null}function j(e){e===K&&(K=e.l)}function P(e){return K={v:[],l:K,h:e,m:!0,_:0}}function _(e){var t=e[H];0===t.i||1===t.i?t.j():t.O=!0}function S(e,t){t._=t.v.length;var r=t.v[0],i=void 0!==e&&e!==r;return t.h.g||g("ES5").S(t,e,i),i?(r[H].P&&(w(t),n(4)),o(e)&&(e=E(t,e),t.l||x(t,e)),t.u&&g("Patches").M(r[H],e,t.u,t.s)):e=E(t,r,[]),w(t),t.u&&t.p(t.u,t.s),e!==V?e:void 0}function E(e,t,r){if(null==(n=t)||"object"!=typeof n||Object.isFrozen(n))return t;var n,i=t[H];if(!i)return u(t,(function(n,o){return A(e,i,t,n,o,r)}),!0),t;if(i.A!==e)return t;if(!i.P)return x(e,i.t,!0),i.t;if(!i.I){i.I=!0,i.A._--;var o=4===i.i||5===i.i?i.o=h(i.k):i.o;u(o,(function(t,n){return A(e,i,o,t,n,r)})),x(e,o,!1),r&&e.u&&g("Patches").R(i,r,e.u,e.s)}return i.o}function A(e,t,r,n,u,a){if(i(u)){var f=E(e,u,a&&t&&3!==t.i&&!c(t.D,n)?a.concat(n):void 0);if(s(r,n,f),!i(f))return;e.m=!1}if(o(u)&&!Object.isFrozen(u)){if(!e.h.N&&e._<1)return;E(e,u),t&&t.A.l||x(e,u)}}function x(e,t,r){void 0===r&&(r=!1),e.h.N&&e.m&&y(t,r)}function R(e,t){var r=e[H];return(r?v(r):e)[t]}function D(e){e.P||(e.P=!0,e.l&&D(e.l))}function k(e){e.o||(e.o=h(e.t))}function I(e,t,r){var n=d(t)?g("MapSet").T(t,r):p(t)?g("MapSet").F(t,r):e.g?function(e,t){var r=Array.isArray(e),n={i:r?1:0,A:t?t.A:O(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},i=n,o=$;r&&(i=[n],o=q);var u=Proxy.revocable(i,o),a=u.revoke,c=u.proxy;return n.k=c,n.j=a,c}(t,r):g("ES5").J(t,r);return(r?r.A:O()).v.push(n),n}function z(e){return i(e)||n(22,e),function e(t){if(!o(t))return t;var r,n=t[H],i=a(t);if(n){if(!n.P&&(n.i<4||!g("ES5").K(n)))return n.t;n.I=!0,r=C(t,i),n.I=!1}else r=C(t,i);return u(r,(function(t,i){n&&f(n.t,t)===i||s(r,t,e(i))})),3===i?new Set(r):r}(e)}function C(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return h(e)}var T,K,M="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),W="undefined"!=typeof Map,F="undefined"!=typeof Set,L="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,V=M?Symbol("immer-nothing"):((T={})["immer-nothing"]=!0,T),N=M?Symbol("immer-draftable"):"__$immer_draftable",H=M?Symbol("immer-state"):"__$immer_state",J=("undefined"!=typeof Symbol&&Symbol.iterator,"undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames),U={},$={get:function(e,t){if(t===H)return e;var r=v(e);if(!c(r,t))return function(e,t,r){if(r in t)for(var n=Object.getPrototypeOf(t);n;){var i,o=Object.getOwnPropertyDescriptor(n,r);if(o)return"value"in o?o.value:null===(i=o.get)||void 0===i?void 0:i.call(e.k);n=Object.getPrototypeOf(n)}}(e,r,t);var n=r[t];return e.I||!o(n)?n:n===R(e.t,t)?(k(e),e.o[t]=I(e.A.h,n,e)):n},has:function(e,t){return t in v(e)},ownKeys:function(e){return Reflect.ownKeys(v(e))},set:function(e,t,r){if(e.D[t]=!0,!e.P){if(l(r,R(v(e),t))&&void 0!==r)return!0;k(e),D(e)}return e.o[t]=r,!0},deleteProperty:function(e,t){return void 0!==R(e.t,t)||t in e.t?(e.D[t]=!1,k(e),D(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=v(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){n(12)}},q={};u($,(function(e,t){q[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),q.deleteProperty=function(e,t){return $.deleteProperty.call(this,e[0],t)},q.set=function(e,t,r){return $.set.call(this,e[0],t,r,e[0])};var G=new(function(){function e(e){this.g=L,this.N=!1,"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var t=e.prototype;return t.produce=function(e,t,r){if("function"==typeof e&&"function"!=typeof t){var i=t;t=e;var u=this;return function(e){var r=this;void 0===e&&(e=i);for(var n=arguments.length,o=Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return u.produce(e,(function(e){var n;return(n=t).call.apply(n,[r,e].concat(o))}))}}var a;if("function"!=typeof t&&n(6),void 0!==r&&"function"!=typeof r&&n(7),o(e)){var c=P(this),f=I(this,e,void 0),s=!0;try{a=t(f),s=!1}finally{s?w(c):j(c)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(e){return m(c,r),S(e,c)}),(function(e){throw w(c),e})):(m(c,r),S(a,c))}if(!e||"object"!=typeof e){if((a=t(e))===V)return;return void 0===a&&(a=e),this.N&&y(a,!0),a}n(21,e)},t.produceWithPatches=function(e,t){var r,n,i=this;return"function"==typeof e?function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return i.produceWithPatches(t,(function(t){return e.apply(void 0,[t].concat(n))}))}:[this.produce(e,t,(function(e,t){r=e,n=t})),r,n]},t.createDraft=function(e){o(e)||n(8),i(e)&&(e=z(e));var t=P(this),r=I(this,e,void 0);return r[H].C=!0,j(t),r},t.finishDraft=function(e,t){var r=(e&&e[H]).A;return m(r,t),S(void 0,r)},t.setAutoFreeze=function(e){this.N=e},t.setUseProxies=function(e){e&&!L&&n(20),this.g=e},t.applyPatches=function(e,t){var r;for(r=t.length-1;r>=0;r--){var n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}var o=g("Patches").$;return i(e)?o(e,t):this.produce(e,(function(e){return o(e,t.slice(r+1))}))},e}()),X=G.produce;G.produceWithPatches.bind(G),G.setAutoFreeze.bind(G),G.setUseProxies.bind(G),G.applyPatches.bind(G),G.createDraft.bind(G),G.finishDraft.bind(G);t.a=X},88:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(72);function i(e,t){if(null==e)return{};var r,i,o=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(i=0;i<u.length;i++)r=u[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}},97:function(e,t,r){"use strict";var n=r(5),i=r(145),o=r.n(i);function u(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState}function a(){return"undefined"===typeof navigator.onLine||navigator.onLine}var c=new WeakMap,f=0;var s=new(function(){function e(e){void 0===e&&(e={}),this.__cache=new Map(Object.entries(e)),this.__listeners=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.__cache.get(t)},e.prototype.set=function(e,t,r){void 0===r&&(r=!0);var n=this.serializeKey(e)[0];this.__cache.set(n,t),r&&D(e,t,!1),this.notify()},e.prototype.keys=function(){return Array.from(this.__cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.__cache.has(t)},e.prototype.clear=function(e){void 0===e&&(e=!0),e&&this.__cache.forEach((function(e){return D(e,null,!1)})),this.__cache.clear(),this.notify()},e.prototype.delete=function(e,t){void 0===t&&(t=!0);var r=this.serializeKey(e)[0];t&&D(e,null,!1),this.__cache.delete(r),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(r){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",r=0;r<e.length;++r){var n=void 0;null===e[r]||"object"!==typeof e[r]?n="string"===typeof e[r]?'"'+e[r]+'"':String(e[r]):c.has(e[r])?n=c.get(e[r]):(n=f,c.set(e[r],f++)),t+="@"+n}return t}(e)):e=String(e||""),[e,t,e?"err@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var r=!0;return this.__listeners.push(e),function(){if(r){r=!1;var n=t.__listeners.indexOf(e);n>-1&&(t.__listeners[n]=t.__listeners[t.__listeners.length-1],t.__listeners.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.__listeners;e<t.length;e++){(0,t[e])()}},e}()),l={},d={},p={},v={},h={};var y="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),b={onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,r,n,i){if(u()&&!(r.errorRetryCount&&i.retryCount>r.errorRetryCount)){var o=Math.min(i.retryCount||0,8),a=~~((Math.random()+.5)*(1<<o))*r.errorRetryInterval;setTimeout(n,a,i)}},errorRetryInterval:1e3*(y?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(y?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:o.a},g=!1;if("undefined"!==typeof window&&window.addEventListener&&!g){var O=function(){if(u()&&a())for(var e in p)p[e][0]&&p[e][0]()};window.addEventListener("visibilitychange",O,!1),window.addEventListener("focus",O,!1),g=!0}var m=b;function w(e,t){var r=!1;return function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];r||(r=!0,e.apply(void 0,n),setTimeout((function(){return r=!1}),t))}}var j=Object(n.createContext)({});j.displayName="SWRConfigContext";var P=j,_=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function u(e){try{c(n.next(e))}catch(t){o(t)}}function a(e){try{c(n.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(u,a)}c((n=n.apply(e,t||[])).next())}))},S=function(e,t){var r,n,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,n=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(a){o=[6,a],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},E="undefined"===typeof window,A=E?n.useEffect:n.useLayoutEffect,x=function(e,t){void 0===t&&(t=!0);var r=s.serializeKey(e),n=r[0],i=r[2];if(!n)return Promise.resolve();var o=v[n];if(n&&o){for(var u=s.get(n),a=s.get(i),c=[],f=0;f<o.length;++f)c.push(o[f](t,u,a,f>0));return Promise.all(c).then((function(){return s.get(n)}))}return Promise.resolve(s.get(n))},R=function(e,t,r){var n=v[e];if(e&&n)for(var i=0;i<n.length;++i)n[i](!1,t,r)},D=function(e,t,r){return void 0===r&&(r=!0),_(void 0,void 0,void 0,(function(){var n,i,o,u,a,c,f,l,p,y;return S(this,(function(b){switch(b.label){case 0:if(!(n=s.serializeKey(e)[0]))return[2];if("undefined"===typeof t)return[2,x(e,r)];if(h[n]=Date.now()-1,u=h[n],a=d[n],!t||"function"!==typeof t)return[3,5];b.label=1;case 1:return b.trys.push([1,3,,4]),[4,t(s.get(n))];case 2:return i=b.sent(),[3,4];case 3:return c=b.sent(),o=c,[3,4];case 4:return[3,11];case 5:if(!t||"function"!==typeof t.then)return[3,10];b.label=6;case 6:return b.trys.push([6,8,,9]),[4,t];case 7:return i=b.sent(),[3,9];case 8:return f=b.sent(),o=f,[3,9];case 9:return[3,11];case 10:i=t,b.label=11;case 11:if(u!==h[n]||a!==d[n]){if(o)throw o;return[2,i]}if("undefined"!==typeof i&&s.set(n,i,!1),l=v[n]){for(p=[],y=0;y<l.length;++y)p.push(l[y](!!r,i,o,y>0));return[2,Promise.all(p).then((function(){return s.get(n)}))]}if(o)throw o;return[2,i]}}))}))};P.Provider;var k=function(){for(var e=this,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i,o,c={};t.length>=1&&(i=t[0]),t.length>2?(o=t[1],c=t[2]):"function"===typeof t[1]?o=t[1]:"object"===typeof t[1]&&(c=t[1]);var f=s.serializeKey(i),y=f[0],b=f[1],g=f[2];c=Object.assign({},m,Object(n.useContext)(P),c),"undefined"===typeof o&&(o=c.fetcher);var O=s.get(y)||c.initialData,j=s.get(g),x=Object(n.useRef)({data:!1,error:!1,isValidating:!1}),k=Object(n.useRef)({data:O,error:j,isValidating:!1}),I=Object(n.useState)(null)[1],z=Object(n.useCallback)((function(e){var t=!1;for(var r in e)k.current[r]=e[r],x.current[r]&&(t=!0);(t||c.suspense)&&I({})}),[]),C=Object(n.useRef)(!1),T=Object(n.useRef)(y),K=Object(n.useRef)({emit:function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];C.current||c[e].apply(c,t)}}),M=Object(n.useCallback)((function(e,t){return D(y,e,t)}),[y]),W=Object(n.useCallback)((function(t){return void 0===t&&(t={}),_(e,void 0,void 0,(function(){var e,r,n,i,u,a,f;return S(this,(function(p){switch(p.label){case 0:if(!y||!o)return[2,!1];if(C.current)return[2,!1];t=Object.assign({dedupe:!1},t),e=!0,r="undefined"!==typeof l[y]&&t.dedupe,p.label=1;case 1:return p.trys.push([1,6,,7]),z({isValidating:!0}),n=void 0,i=void 0,r?(i=d[y],[4,l[y]]):[3,3];case 2:return n=p.sent(),[3,5];case 3:return l[y]&&(h[y]=Date.now()-1),c.loadingTimeout&&!s.get(y)&&setTimeout((function(){e&&K.current.emit("onLoadingSlow",y,c)}),c.loadingTimeout),l[y]=null!==b?o.apply(void 0,b):o(y),d[y]=i=Date.now(),[4,l[y]];case 4:n=p.sent(),setTimeout((function(){delete l[y],delete d[y]}),c.dedupingInterval),K.current.emit("onSuccess",n,y,c),p.label=5;case 5:return h[y]&&i<=h[y]?(z({isValidating:!1}),[2,!1]):(s.set(y,n,!1),s.set(g,void 0,!1),u={isValidating:!1},"undefined"!==typeof k.current.error&&(u.error=void 0),c.compare(k.current.data,n)||(u.data=n),z(u),r||R(y,n,void 0),[3,7]);case 6:return a=p.sent(),delete l[y],delete d[y],s.set(g,a,!1),k.current.error!==a&&(z({isValidating:!1,error:a}),r||R(y,void 0,a)),K.current.emit("onError",a,y,c),c.shouldRetryOnError&&(f=(t.retryCount||0)+1,K.current.emit("onErrorRetry",a,y,c,W,Object.assign({dedupe:!0},t,{retryCount:f}))),[3,7];case 7:return e=!1,[2,!0]}}))}))}),[y]);if(A((function(){if(y){C.current=!1;var e=k.current.data,t=s.get(y)||c.initialData;T.current===y&&c.compare(e,t)||(z({data:t}),T.current=y);var r,n=function(){return W({dedupe:!0})};(c.revalidateOnMount||!c.initialData&&void 0===c.revalidateOnMount)&&("undefined"!==typeof t&&!E&&window.requestIdleCallback?window.requestIdleCallback(n):n()),c.revalidateOnFocus&&(r=w(n,c.focusThrottleInterval),p[y]?p[y].push(r):p[y]=[r]);var i=function(e,t,r,i){void 0===e&&(e=!0),void 0===i&&(i=!0);var o={},u=!1;return"undefined"===typeof t||c.compare(k.current.data,t)||(o.data=t,u=!0),k.current.error!==r&&(o.error=r,u=!0),u&&z(o),!!e&&(i?n():W())};v[y]?v[y].push(i):v[y]=[i];var o=null;return!E&&window.addEventListener&&c.revalidateOnReconnect&&window.addEventListener("online",o=n),function(){var e,t;(z=function(){return null},C.current=!0,r&&p[y])&&((t=(e=p[y]).indexOf(r))>=0&&(e[t]=e[e.length-1],e.pop()));v[y]&&((t=(e=v[y]).indexOf(i))>=0&&(e[t]=e[e.length-1],e.pop()));!E&&window.removeEventListener&&null!==o&&window.removeEventListener("online",o)}}}),[y,W]),A((function(){var t=null;return c.refreshInterval&&(t=setTimeout((function r(){return _(e,void 0,void 0,(function(){return S(this,(function(e){switch(e.label){case 0:return k.current.error||!c.refreshWhenHidden&&!u()||!c.refreshWhenOffline&&!a()?[3,2]:[4,W({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return c.refreshInterval&&(t=setTimeout(r,c.refreshInterval)),[2]}}))}))}),c.refreshInterval)),function(){t&&clearTimeout(t)}}),[c.refreshInterval,c.refreshWhenHidden,c.refreshWhenOffline,W]),c.suspense){var F=s.get(y)||O,L=s.get(g)||j;if("undefined"===typeof F&&"undefined"===typeof L){if(l[y]||W(),l[y]&&"function"===typeof l[y].then)throw l[y];F=l[y]}if("undefined"===typeof F&&L)throw L;return{error:L,data:F,revalidate:W,mutate:M,isValidating:k.current.isValidating}}return Object(n.useMemo)((function(){var e={revalidate:W,mutate:M};return Object.defineProperties(e,{error:{get:function(){return x.current.error=!0,T.current===y?k.current.error:j},enumerable:!0},data:{get:function(){return x.current.data=!0,T.current===y?k.current.data:O},enumerable:!0},isValidating:{get:function(){return x.current.isValidating=!0,k.current.isValidating},enumerable:!0}}),e}),[W])};new Map;t.a=k}}]);
//# sourceMappingURL=0.ad7ff245.chunk.js.map
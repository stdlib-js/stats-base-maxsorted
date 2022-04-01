// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).maxsorted=t()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;var c=r,f=function(e,t,r){var c,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),_="get"in r,p="set"in r,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,t,r.get),p&&i&&i.call(e,t,r.set),e},_=t()?c:f;var p=function(e,t,r){_(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})};var d=function(e){return e!=e},b=Number.POSITIVE_INFINITY;var s=function(e){return 0===e&&1/e===b},y=d,v=s;var m=d,j=s;var N=function(e,t,r){var n,o;return e<=0?NaN:1===e||0===r?t[0]:(r<0?(n=t[(1-e)*r],o=t[0]):(n=t[0],o=t[(e-1)*r]),y(n)||y(o)?NaN:n===o?v(n)||v(o)?0:n:n>o?n:o)};return p(N,"ndarray",(function(e,t,r,n){var o,a;return e<=0?NaN:1===e||0===r?t[0]:(o=t[n],a=t[n+(e-1)*r],m(o)||m(a)?NaN:o===a?j(o)||j(a)?0:o:o>a?o:a)})),N}));
//# sourceMappingURL=bundle.js.map

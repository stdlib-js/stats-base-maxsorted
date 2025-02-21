"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var x=v(function(C,q){
var c=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-assert-is-positive-zero/dist');function Z(e,r,u,n){var a,t,i,s;return a=r.data,t=r.accessors[0],e<=0?NaN:e===1||u===0?t(a,0):(i=t(a,n),s=t(a,n+(e-1)*u),c(i)||c(s)?NaN:i===s?f(i)||f(s)?0:i:i>s?i:s)}q.exports=Z
});var o=v(function(D,p){
var d=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/math-base-assert-is-positive-zero/dist'),g=require('@stdlib/array-base-arraylike2object/dist'),j=x();function k(e,r,u,n){var a,t,i;return e<=0?NaN:(i=g(r),i.accessorProtocol?j(e,i,u,n):e===1||u===0?r[0]:(a=r[n],t=r[n+(e-1)*u],d(a)||d(t)?NaN:a===t?m(a)||m(t)?0:a:a>t?a:t))}p.exports=k
});var l=v(function(E,y){
var O=require('@stdlib/strided-base-stride2offset/dist'),R=o();function h(e,r,u){return R(e,r,u,O(e,u))}y.exports=h
});var N=v(function(F,b){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=l(),z=o();w(P,"ndarray",z);b.exports=P
});var A=N();module.exports=A;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

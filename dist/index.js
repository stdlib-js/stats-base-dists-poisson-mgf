"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=t(function(O,u){
var n=require('@stdlib/math-base-assert-is-nan/dist'),i=require('@stdlib/math-base-special-exp/dist');function v(e,r){return n(e)||n(r)||r<=0?NaN:i(r*(i(e)-1))}u.exports=v
});var a=t(function(R,o){
var p=require('@stdlib/utils-constant-function/dist'),x=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-special-exp/dist');function y(e){if(x(e)||e<=0)return p(NaN);return r;function r(q){return c(e*(c(q)-1))}}o.exports=y
});var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=s(),g=a();N(f,"factory",g);module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

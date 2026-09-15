"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var c=n(function(O,s){
var i=require('@stdlib/math-base-assert-is-nan/dist'),u=require('@stdlib/math-base-special-exp/dist');function v(e,r){return i(e)||i(r)||r<=0?NaN:u(r*(u(e)-1))}s.exports=v
});var f=n(function(R,a){
var p=require('@stdlib/utils-constant-function/dist'),x=require('@stdlib/math-base-assert-is-nan/dist'),o=require('@stdlib/math-base-special-exp/dist');function y(e){if(x(e)||e<=0)return p(NaN);return r;function r(t){return o(e*(o(t)-1))}}a.exports=y
});var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=c(),g=f();N(q,"factory",g);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

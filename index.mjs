// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function i(t,n){return s(t)||s(n)||n<=0?NaN:e(n*(e(t)-1))}function r(t){return s(t)||t<=0?n(NaN):function(s){return e(t*(e(s)-1))}}t(i,"factory",r);export{i as default,r as factory};
//# sourceMappingURL=index.mjs.map

"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./components/AppLayout/styles.js":
/*!****************************************!*\
  !*** ./components/AppLayout/styles.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"globalStyles\": function() { return /* binding */ globalStyles; }\n/* harmony export */ });\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/styles/theme */ \"./styles/theme.js\");\n/* harmony import */ var _styles_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/utils */ \"./styles/utils.js\");\n\n\nconst backgroundColor = (0,_styles_utils__WEBPACK_IMPORTED_MODULE_1__.addOPacityToColor)(_styles_theme__WEBPACK_IMPORTED_MODULE_0__.colors.primary, 0.3);\nconst _defaultExport = new String(\"div.jsx-1fafbf93a8729041{display:grid;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;justify-items:center;place-items:center;height:100vh}main.jsx-1fafbf93a8729041{background:#fff;-webkit-box-shadow:0 10px 25px rgba(0,0,0,.1);-moz-box-shadow:0 10px 25px rgba(0,0,0,.1);box-shadow:0 10px 25px rgba(0,0,0,.1);-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;width:100%;overflow-y:auto;height:100%}@media(min-width:\".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_0__.breakpoints.mobile, \"){main.jsx-1fafbf93a8729041{width:\").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_0__.breakpoints.mobile, \";height:90vh}}\"));\n_defaultExport.__hash = \"1fafbf93a8729041\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defaultExport);\nconst globalStyles = new String(\"html,body{background-image:-webkit-radial-gradient(\".concat(backgroundColor, \" 1px,transparent 1px),-webkit-radial-gradient(\").concat(backgroundColor, \" 1px,transparent 1px);background-image:-moz-radial-gradient(\").concat(backgroundColor, \" 1px,transparent 1px),-moz-radial-gradient(\").concat(backgroundColor, \" 1px,transparent 1px);background-image:-o-radial-gradient(\").concat(backgroundColor, \" 1px,transparent 1px),-o-radial-gradient(\").concat(backgroundColor, \" 1px,transparent 1px);background-image:radial-gradient(\").concat(backgroundColor, \" 1px,transparent 1px),radial-gradient(\").concat(backgroundColor, \" 1px,transparent 1px);background-position:0 0,25px 25px;-webkit-background-size:50px 50px;-moz-background-size:50px 50px;-o-background-size:50px 50px;background-size:50px 50px;padding:0;margin:0;font-family:\").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_0__.fonts.base, \";overflow:hidden;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}textarea,input{font-family:\").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_0__.fonts.base, \"}\"));\nglobalStyles.__hash = \"10b1485ab6d4923f\";\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcExheW91dC9zdHlsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJEO0FBQ0w7QUFHdEQsTUFBTUksa0JBQWtCRCxnRUFBaUJBLENBQUNGLHlEQUFjSSxFQUFFOzBoQkFvQnpDTCxPQUZJQSw2REFBa0JNLCtDQUV0Qk4sNkRBQWtCTTs7O0FBSzVCLE1BQU1DLGdGQUd5RkgsT0FBMURBLG1FQUFBQSxPQUEwREEsaUZBQUFBLE9BQTFEQSxnRUFBQUEsT0FBMERBLCtFQUFBQSxPQUExREEsOERBQUFBLE9BQTBEQSw0RUFBQUEsT0FBMURBLDJEQUtyQkYsT0FMK0VFLG9PQWMvRUYsT0FUQUEscURBQVVNLCtaQVNWTixxREFBVU0sUUFFaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQvc3R5bGVzLmpzPzZlZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnJlYWtwb2ludHMsIGNvbG9ycywgZm9udHMgfSBmcm9tICdAL3N0eWxlcy90aGVtZSdcclxuaW1wb3J0IHsgYWRkT1BhY2l0eVRvQ29sb3IgfSBmcm9tICcuLi8uLi9zdHlsZXMvdXRpbHMnXHJcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnXHJcblxyXG5jb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBhZGRPUGFjaXR5VG9Db2xvcihjb2xvcnMucHJpbWFyeSwgMC4zKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3NzYFxyXG5kaXYge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5tYWluIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjVweCByZ2JhKDAsIDAsIDAsIC4xKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRzLm1vYmlsZX0pe1xyXG4gICAgbWFpbiB7XHJcbiAgICAgICAgd2lkdGg6ICR7YnJlYWtwb2ludHMubW9iaWxlfTtcclxuICAgICAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICB9XHJcbn1gXHJcblxyXG5leHBvcnQgY29uc3QgZ2xvYmFsU3R5bGVzID0gY3NzLmdsb2JhbGBcclxuICAgIGh0bWwsXHJcbiAgICBib2R5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoJHtiYWNrZ3JvdW5kQ29sb3J9IDFweCwgdHJhbnNwYXJlbnQgMXB4KSwgcmFkaWFsLWdyYWRpZW50KCR7YmFja2dyb3VuZENvbG9yfSAgMXB4LCB0cmFuc3BhcmVudCAxcHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgMjVweCAyNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNTBweCA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAke2ZvbnRzLmJhc2V9O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgKiB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuICAgIHRleHRhcmVhLCBpbnB1dCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICR7Zm9udHMuYmFzZX1cclxuICAgIH1cclxuYFxyXG4iXSwibmFtZXMiOlsiYnJlYWtwb2ludHMiLCJjb2xvcnMiLCJmb250cyIsImFkZE9QYWNpdHlUb0NvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwicHJpbWFyeSIsIm1vYmlsZSIsImdsb2JhbFN0eWxlcyIsImJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AppLayout/styles.js\n"));

/***/ })

});
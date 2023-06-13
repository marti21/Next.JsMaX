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

/***/ "./hooks/useTimeAgo.js":
/*!*****************************!*\
  !*** ./hooks/useTimeAgo.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useTimeAgo; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\nconst DATE_UNITS = [\n    [\n        \"day\",\n        86400\n    ],\n    [\n        \"hour\",\n        3600\n    ],\n    [\n        \"minute\",\n        60\n    ],\n    [\n        \"seconds\",\n        1\n    ]\n];\nconst getDateDiffs = (timestamp)=>{\n    const now = Date.now();\n    const elapse = (timestamp - now) / 1000;\n    for (const [unit, secondsInUnit] of DATE_UNITS){\n        if (Math.abs(elapse) > secondsInUnit || unit === \"seconds\") {\n            const value = Math.round(elapse / secondsInUnit);\n            return {\n                value,\n                unit\n            };\n        }\n    }\n};\nfunction useTimeAgo(timestamp) {\n    _s();\n    const [timeago, setTimeago] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>getDateDiffs(timestamp));\n    //const rtf = new Intl.RelativeTimeFormat('es', {style: \"short\"})\n    //console.log(value, unit)\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const timeout = setInterval(()=>{\n            const newTimeAgo = getDateDiffs(timestamp);\n            setTimeago(newTimeAgo);\n        }, 1000);\n        return ()=>clearInterval(timeout);\n    }, [\n        timestamp\n    ]);\n    const rtf = new Intl.RelativeTimeFormat(navigator.language, {\n        style: \"short\"\n    });\n    const { value , unit  } = timeago;\n    return rtf.format(value, unit);\n}\n_s(useTimeAgo, \"WVS6tIhbJzdX//QEaMd9MXlp92I=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VUaW1lQWdvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7QUFFM0MsTUFBTUUsYUFBYTtJQUNmO1FBQUM7UUFBTztLQUFNO0lBQ2Q7UUFBQztRQUFRO0tBQUs7SUFDZDtRQUFDO1FBQVU7S0FBRztJQUNkO1FBQUM7UUFBVztLQUFFO0NBQ2pCO0FBRUQsTUFBTUMsZUFBZUMsQ0FBQUE7SUFDakIsTUFBTUMsTUFBTUMsS0FBS0Q7SUFDakIsTUFBTUUsU0FBUyxDQUFDSCxZQUFZQyxHQUFFLElBQUs7SUFFbkMsS0FBSyxNQUFNLENBQUNHLE1BQU1DLGNBQWMsSUFBSVAsV0FBWTtRQUM1QyxJQUFHUSxLQUFLQyxJQUFJSixVQUFVRSxpQkFBaUJELFNBQVMsV0FBVztZQUN2RCxNQUFNSSxRQUFRRixLQUFLRyxNQUFNTixTQUFTRTtZQUNsQyxPQUFPO2dCQUFFRztnQkFBT0o7WUFBSztRQUN6QjtJQUNKO0FBQ0o7QUFFZSxTQUFTTSxXQUFZVixTQUFTOztJQUN6QyxNQUFNLENBQUNXLFNBQVNDLFdBQVcsR0FBR2YsK0NBQVFBLENBQUMsSUFBTUUsYUFBYUM7SUFFMUQsaUVBQWlFO0lBQ2pFLDBCQUEwQjtJQUMxQkosZ0RBQVNBLENBQUM7UUFDTixNQUFNaUIsVUFBVUMsWUFBWTtZQUN4QixNQUFNQyxhQUFhaEIsYUFBYUM7WUFDaENZLFdBQVdHO1FBQ2YsR0FBRztRQUVILE9BQU8sSUFBTUMsY0FBY0g7SUFDL0IsR0FBRztRQUFDYjtLQUFVO0lBRWQsTUFBTWlCLE1BQU0sSUFBSUMsS0FBS0MsbUJBQW1CQyxVQUFVQyxVQUFVO1FBQUVDLE9BQU87SUFBUTtJQUM3RSxNQUFNLEVBQUNkLE1BQUssRUFBRUosS0FBSSxFQUFDLEdBQUdPO0lBRXRCLE9BQU9NLElBQUlNLE9BQU9mLE9BQU9KO0FBQzdCO0dBbEJ3Qk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlVGltZUFnby5qcz9lYmM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgREFURV9VTklUUyA9IFtcclxuICAgIFsnZGF5JywgODY0MDBdLFxyXG4gICAgWydob3VyJywgMzYwMF0sXHJcbiAgICBbJ21pbnV0ZScsIDYwXSxcclxuICAgIFsnc2Vjb25kcycsIDFdXHJcbl1cclxuXHJcbmNvbnN0IGdldERhdGVEaWZmcyA9IHRpbWVzdGFtcCA9PiB7XHJcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXHJcbiAgICBjb25zdCBlbGFwc2UgPSAodGltZXN0YW1wIC0gbm93KSAvIDEwMDBcclxuXHJcbiAgICBmb3IgKGNvbnN0IFt1bml0LCBzZWNvbmRzSW5Vbml0XSBvZiBEQVRFX1VOSVRTKSB7XHJcbiAgICAgICAgaWYoTWF0aC5hYnMoZWxhcHNlKSA+IHNlY29uZHNJblVuaXQgfHwgdW5pdCA9PT0gJ3NlY29uZHMnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gTWF0aC5yb3VuZChlbGFwc2UgLyBzZWNvbmRzSW5Vbml0KVxyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZSwgdW5pdCB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VUaW1lQWdvICh0aW1lc3RhbXApIHtcclxuICAgIGNvbnN0IFt0aW1lYWdvLCBzZXRUaW1lYWdvXSA9IHVzZVN0YXRlKCgpID0+IGdldERhdGVEaWZmcyh0aW1lc3RhbXApKVxyXG5cclxuICAgIC8vY29uc3QgcnRmID0gbmV3IEludGwuUmVsYXRpdmVUaW1lRm9ybWF0KCdlcycsIHtzdHlsZTogXCJzaG9ydFwifSlcclxuICAgIC8vY29uc29sZS5sb2codmFsdWUsIHVuaXQpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RpbWVBZ28gPSBnZXREYXRlRGlmZnModGltZXN0YW1wKVxyXG4gICAgICAgICAgICBzZXRUaW1lYWdvKG5ld1RpbWVBZ28pXHJcbiAgICAgICAgfSwgMTAwMClcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZW91dClcclxuICAgIH0sIFt0aW1lc3RhbXBdKVxyXG5cclxuICAgIGNvbnN0IHJ0ZiA9IG5ldyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdChuYXZpZ2F0b3IubGFuZ3VhZ2UsIHsgc3R5bGU6ICdzaG9ydCcgfSlcclxuICAgIGNvbnN0IHt2YWx1ZSwgdW5pdH0gPSB0aW1lYWdvXHJcblxyXG4gICAgcmV0dXJuIHJ0Zi5mb3JtYXQodmFsdWUsIHVuaXQpXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiREFURV9VTklUUyIsImdldERhdGVEaWZmcyIsInRpbWVzdGFtcCIsIm5vdyIsIkRhdGUiLCJlbGFwc2UiLCJ1bml0Iiwic2Vjb25kc0luVW5pdCIsIk1hdGgiLCJhYnMiLCJ2YWx1ZSIsInJvdW5kIiwidXNlVGltZUFnbyIsInRpbWVhZ28iLCJzZXRUaW1lYWdvIiwidGltZW91dCIsInNldEludGVydmFsIiwibmV3VGltZUFnbyIsImNsZWFySW50ZXJ2YWwiLCJydGYiLCJJbnRsIiwiUmVsYXRpdmVUaW1lRm9ybWF0IiwibmF2aWdhdG9yIiwibGFuZ3VhZ2UiLCJzdHlsZSIsImZvcm1hdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useTimeAgo.js\n"));

/***/ })

});
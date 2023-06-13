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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useTimeAgo; }\n/* harmony export */ });\nconst DATE_UNITS = [\n    [\n        \"day\",\n        86400\n    ],\n    [\n        \"hour\",\n        3600\n    ],\n    [\n        \"minute\",\n        60\n    ],\n    [\n        \"seconds\",\n        1\n    ]\n];\nconst getDateDiffs = (timestamp)=>{\n    const now = Date.now();\n    const elapse = (now - timestamp) / 1000;\n    for (const [unit, secondsInUnit] of DATE_UNITS){\n        if (elapse > secondsInUnit || unit === \"seconds\") {\n            const value = Math.round(elapse / secondsInUnit);\n            return {\n                value,\n                unit\n            };\n        }\n    }\n};\nfunction useTimeAgo(timestamp) {\n    const { value , unit  } = getDateDiffs(timestamp);\n    const rtf = new Intl.RelativeTimeFormat(navigator.language, {\n        style: \"short\"\n    });\n    //const rtf = new Intl.RelativeTimeFormat('es', {style: \"short\"})\n    rtf.format(value, unit);\n    console.log(value, unit);\n    return timestamp;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VUaW1lQWdvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxhQUFhO0lBQ2Y7UUFBQztRQUFPO0tBQU07SUFDZDtRQUFDO1FBQVE7S0FBSztJQUNkO1FBQUM7UUFBVTtLQUFHO0lBQ2Q7UUFBQztRQUFXO0tBQUU7Q0FDakI7QUFFRCxNQUFNQyxlQUFlQyxDQUFBQTtJQUNqQixNQUFNQyxNQUFNQyxLQUFLRDtJQUNqQixNQUFNRSxTQUFTLENBQUNGLE1BQU1ELFNBQVEsSUFBSztJQUVuQyxLQUFLLE1BQU0sQ0FBQ0ksTUFBTUMsY0FBYyxJQUFJUCxXQUFZO1FBQzVDLElBQUdLLFNBQVNFLGlCQUFpQkQsU0FBUyxXQUFXO1lBQzdDLE1BQU1FLFFBQVFDLEtBQUtDLE1BQU1MLFNBQVNFO1lBQ2xDLE9BQU87Z0JBQUVDO2dCQUFPRjtZQUFLO1FBQ3pCO0lBQ0o7QUFDSjtBQUVlLFNBQVNLLFdBQVlULFNBQVM7SUFDekMsTUFBTSxFQUFFTSxNQUFLLEVBQUVGLEtBQUksRUFBRSxHQUFHTCxhQUFhQztJQUNyQyxNQUFNVSxNQUFNLElBQUlDLEtBQUtDLG1CQUFtQkMsVUFBVUMsVUFBVTtRQUFFQyxPQUFPO0lBQVE7SUFDN0UsaUVBQWlFO0lBQ2pFTCxJQUFJTSxPQUFPVixPQUFPRjtJQUVsQmEsUUFBUUMsSUFBSVosT0FBT0Y7SUFDbkIsT0FBT0o7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy91c2VUaW1lQWdvLmpzP2ViYzkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgREFURV9VTklUUyA9IFtcclxuICAgIFsnZGF5JywgODY0MDBdLFxyXG4gICAgWydob3VyJywgMzYwMF0sXHJcbiAgICBbJ21pbnV0ZScsIDYwXSxcclxuICAgIFsnc2Vjb25kcycsIDFdXHJcbl1cclxuXHJcbmNvbnN0IGdldERhdGVEaWZmcyA9IHRpbWVzdGFtcCA9PiB7XHJcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXHJcbiAgICBjb25zdCBlbGFwc2UgPSAobm93IC0gdGltZXN0YW1wKSAvIDEwMDBcclxuXHJcbiAgICBmb3IgKGNvbnN0IFt1bml0LCBzZWNvbmRzSW5Vbml0XSBvZiBEQVRFX1VOSVRTKSB7XHJcbiAgICAgICAgaWYoZWxhcHNlID4gc2Vjb25kc0luVW5pdCB8fCB1bml0ID09PSAnc2Vjb25kcycpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBNYXRoLnJvdW5kKGVsYXBzZSAvIHNlY29uZHNJblVuaXQpXHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlLCB1bml0IH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVRpbWVBZ28gKHRpbWVzdGFtcCkge1xyXG4gICAgY29uc3QgeyB2YWx1ZSwgdW5pdCB9ID0gZ2V0RGF0ZURpZmZzKHRpbWVzdGFtcClcclxuICAgIGNvbnN0IHJ0ZiA9IG5ldyBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdChuYXZpZ2F0b3IubGFuZ3VhZ2UsIHsgc3R5bGU6ICdzaG9ydCcgfSlcclxuICAgIC8vY29uc3QgcnRmID0gbmV3IEludGwuUmVsYXRpdmVUaW1lRm9ybWF0KCdlcycsIHtzdHlsZTogXCJzaG9ydFwifSlcclxuICAgIHJ0Zi5mb3JtYXQodmFsdWUsIHVuaXQpXHJcblxyXG4gICAgY29uc29sZS5sb2codmFsdWUsIHVuaXQpXHJcbiAgICByZXR1cm4gdGltZXN0YW1wXHJcbn0iXSwibmFtZXMiOlsiREFURV9VTklUUyIsImdldERhdGVEaWZmcyIsInRpbWVzdGFtcCIsIm5vdyIsIkRhdGUiLCJlbGFwc2UiLCJ1bml0Iiwic2Vjb25kc0luVW5pdCIsInZhbHVlIiwiTWF0aCIsInJvdW5kIiwidXNlVGltZUFnbyIsInJ0ZiIsIkludGwiLCJSZWxhdGl2ZVRpbWVGb3JtYXQiLCJuYXZpZ2F0b3IiLCJsYW5ndWFnZSIsInN0eWxlIiwiZm9ybWF0IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useTimeAgo.js\n"));

/***/ })

});
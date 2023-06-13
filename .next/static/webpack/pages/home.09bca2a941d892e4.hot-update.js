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

/***/ "./firebase/client.js":
/*!****************************!*\
  !*** ./firebase/client.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDevit\": function() { return /* binding */ addDevit; },\n/* harmony export */   \"fetchLatestDevits\": function() { return /* binding */ fetchLatestDevits; },\n/* harmony export */   \"loginWithGitHub\": function() { return /* binding */ loginWithGitHub; },\n/* harmony export */   \"mapUserFromFirebaseAuth\": function() { return /* binding */ mapUserFromFirebaseAuth; },\n/* harmony export */   \"onAuthStateChangedUser\": function() { return /* binding */ onAuthStateChangedUser; }\n/* harmony export */ });\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ \"./node_modules/firebase/compat/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/auth */ \"./node_modules/firebase/compat/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/firestore */ \"./node_modules/firebase/compat/firestore/dist/esm/index.esm.js\");\n // Importa firebase/compat/app en lugar de 'firebase/app'\n\n\n\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyAEgbgup0gfFJePdU3laYX39oB9rVMUL0I\",\n    authDomain: \"martiappnextjs.firebaseapp.com\",\n    projectId: \"martiappnextjs\",\n    storageBucket: \"martiappnextjs.appspot.com\",\n    messagingSenderId: \"1081296308550\",\n    appId: \"1:1081296308550:web:1af33d61c3acf13937bd47\",\n    measurementId: \"G-SBYTXWWNVN\"\n};\n!firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apps.length && firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeApp(firebaseConfig);\nconst database = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].firestore();\nconst mapUserFromFirebaseAuth = (user)=>{\n    const { displayName , email , photoURL , uid  } = user;\n    return {\n        avatar: photoURL,\n        username: displayName,\n        email,\n        uid\n    };\n};\nconst onAuthStateChangedUser = (onChange)=>{\n    return firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].auth().onAuthStateChanged((user)=>{\n        const normalizedUser = user ? mapUserFromFirebaseAuth(user) : null;\n        onChange(normalizedUser);\n    });\n};\nconst loginWithGitHub = ()=>{\n    const githubProvider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].auth.GithubAuthProvider();\n    return firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].auth().signInWithPopup(githubProvider);\n// return firebase.auth().signInWithRedirect(githubProvider)\n// .then(user => {\n//  return mapUserFromFirebaseAuth(user)\n// })\n};\nconst addDevit = (param)=>{\n    let { avatar , content , userId , userName  } = param;\n    return database.collection(\"devits\").add({\n        avatar,\n        content,\n        userId,\n        userName,\n        createdAt: firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].firestore.Timestamp.fromDate(new Date()),\n        likesCount: 0,\n        sharedCount: 0\n    });\n};\nconst fetchLatestDevits = ()=>{\n    return database.collection(\"devits\").orderBy(\"createdAt\", \"desc\").get().then((param)=>{\n        let { docs  } = param;\n        return docs.map((doc)=>{\n            const data = doc.data();\n            const id = doc.id;\n            const { createdAt  } = data;\n            // const intl = new Intl.DateTimeFormat('es-ES')\n            // const date = new Date(createdAt.seconds * 1000)\n            // const normalizedCretedAt = intl.format(date)\n            // se devuelva la id del documento y con los ... se envian todos los campos del document\n            return {\n                ...data,\n                id,\n                // Esto devuelve el timestamp con el unario (+)\n                createdAt: +createdAt.toDate()\n            };\n        });\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9jbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBDLENBQUMseURBQXlEO0FBQ3ZFO0FBQ0Y7QUFDUTtBQUVuQyxtRUFBbUU7QUFDbkUsTUFBTUMsaUJBQWlCO0lBQ3JCQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztJQUNQQyxlQUFlO0FBQ2pCO0FBRUEsQ0FBQ1IsdUVBQW9CVSxJQUNqQlYseUVBQXNCVyxDQUFDVjtBQUUzQixNQUFNVyxXQUFXWixxRUFBa0JhO0FBRTVCLE1BQU1DLDBCQUEwQixDQUFDQztJQUN0QyxNQUFNLEVBQUVDLFlBQVcsRUFBRUMsTUFBSyxFQUFFQyxTQUFRLEVBQUVDLElBQUcsRUFBRSxHQUFHSjtJQUM5QyxPQUFPO1FBQ0xLLFFBQVFGO1FBQ1JHLFVBQVVMO1FBQ1ZDO1FBQ0FFO0lBQ0Y7QUFDRixFQUFDO0FBRU0sTUFBTUcseUJBQXlCLENBQUNDO0lBQ3JDLE9BQU92QixnRUFDQXdCLEdBQ0pDLG1CQUFtQlYsQ0FBQUE7UUFDbEIsTUFBTVcsaUJBQWlCWCxPQUFPRCx3QkFBd0JDLFFBQVE7UUFDOURRLFNBQVNHO0lBQ1g7QUFDSixFQUFDO0FBRU0sTUFBTUMsa0JBQWtCO0lBQzdCLE1BQU1DLGlCQUFpQixJQUFJNUIsbUZBQWdDNkI7SUFDM0QsT0FBTzdCLGdFQUNBd0IsR0FDSk0sZ0JBQWdCRjtBQUNqQiw0REFBNEQ7QUFDNUQsa0JBQWtCO0FBQ3BCLHdDQUF3QztBQUN0QyxLQUFLO0FBQ1QsRUFBQztBQUVNLE1BQU1HLFdBQVc7UUFBQyxFQUFDWCxPQUFNLEVBQUVZLFFBQU8sRUFBRUMsT0FBTSxFQUFFQyxTQUFRLEVBQUM7SUFDMUQsT0FBT3RCLFNBQVN1QixXQUFXLFVBQVVDLElBQUk7UUFDdkNoQjtRQUNBWTtRQUNBQztRQUNBQztRQUNBRyxXQUFXckMsd0ZBQXFDdUMsQ0FBQyxJQUFJQztRQUNyREMsWUFBWTtRQUNaQyxhQUFhO0lBQ2Y7QUFDRixFQUFDO0FBRU0sTUFBTUMsb0JBQW9CO0lBQy9CLE9BQU8vQixTQUFTdUIsV0FBVyxVQUFVUyxRQUFRLGFBQWEsUUFDekRDLE1BQ0FDLEtBQUs7WUFBQyxFQUFFQyxLQUFJLEVBQUU7UUFDYixPQUFPQSxLQUFLQyxJQUFJQyxDQUFBQTtZQUNkLE1BQU1DLE9BQU9ELElBQUlDO1lBQ2pCLE1BQU1DLEtBQUtGLElBQUlFO1lBQ2YsTUFBTSxFQUFFZCxVQUFTLEVBQUUsR0FBR2E7WUFFdEIsZ0RBQWdEO1lBQ2hELGtEQUFrRDtZQUNsRCwrQ0FBK0M7WUFFL0Msd0ZBQXdGO1lBQ3hGLE9BQU87Z0JBQ0wsR0FBR0EsSUFBSTtnQkFDUEM7Z0JBQ0EsK0NBQStDO2dCQUMvQ2QsV0FBVyxDQUFDQSxVQUFVZTtZQUN4QjtRQUNGO0lBQ0Y7QUFDRixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2ZpcmViYXNlL2NsaWVudC5qcz84NGYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9jb21wYXQvYXBwJyAvLyBJbXBvcnRhIGZpcmViYXNlL2NvbXBhdC9hcHAgZW4gbHVnYXIgZGUgJ2ZpcmViYXNlL2FwcCdcclxuaW1wb3J0ICdmaXJlYmFzZS9jb21wYXQvYXV0aCdcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnXHJcbmltcG9ydCAnZmlyZWJhc2UvY29tcGF0L2ZpcmVzdG9yZSc7XHJcblxyXG4vLyBGb3IgRmlyZWJhc2UgSlMgU0RLIHY3LjIwLjAgYW5kIGxhdGVyLCBtZWFzdXJlbWVudElkIGlzIG9wdGlvbmFsXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogJ0FJemFTeUFFZ2JndXAwZ2ZGSmVQZFUzbGFZWDM5b0I5clZNVUwwSScsXHJcbiAgYXV0aERvbWFpbjogJ21hcnRpYXBwbmV4dGpzLmZpcmViYXNlYXBwLmNvbScsXHJcbiAgcHJvamVjdElkOiAnbWFydGlhcHBuZXh0anMnLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6ICdtYXJ0aWFwcG5leHRqcy5hcHBzcG90LmNvbScsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6ICcxMDgxMjk2MzA4NTUwJyxcclxuICBhcHBJZDogJzE6MTA4MTI5NjMwODU1MDp3ZWI6MWFmMzNkNjFjM2FjZjEzOTM3YmQ0NycsXHJcbiAgbWVhc3VyZW1lbnRJZDogJ0ctU0JZVFhXV05WTidcclxufVxyXG5cclxuIWZpcmViYXNlLmFwcHMubGVuZ3RoICYmXHJcbiAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKVxyXG5cclxuY29uc3QgZGF0YWJhc2UgPSBmaXJlYmFzZS5maXJlc3RvcmUoKVxyXG5cclxuZXhwb3J0IGNvbnN0IG1hcFVzZXJGcm9tRmlyZWJhc2VBdXRoID0gKHVzZXIpID0+IHtcclxuICBjb25zdCB7IGRpc3BsYXlOYW1lLCBlbWFpbCwgcGhvdG9VUkwsIHVpZCB9ID0gdXNlclxyXG4gIHJldHVybiB7XHJcbiAgICBhdmF0YXI6IHBob3RvVVJMLFxyXG4gICAgdXNlcm5hbWU6IGRpc3BsYXlOYW1lLFxyXG4gICAgZW1haWwsXHJcbiAgICB1aWRcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBvbkF1dGhTdGF0ZUNoYW5nZWRVc2VyID0gKG9uQ2hhbmdlKSA9PiB7XHJcbiAgcmV0dXJuIGZpcmViYXNlXHJcbiAgICAuYXV0aCgpXHJcbiAgICAub25BdXRoU3RhdGVDaGFuZ2VkKHVzZXIgPT4ge1xyXG4gICAgICBjb25zdCBub3JtYWxpemVkVXNlciA9IHVzZXIgPyBtYXBVc2VyRnJvbUZpcmViYXNlQXV0aCh1c2VyKSA6IG51bGxcclxuICAgICAgb25DaGFuZ2Uobm9ybWFsaXplZFVzZXIpXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5XaXRoR2l0SHViID0gKCkgPT4ge1xyXG4gIGNvbnN0IGdpdGh1YlByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR2l0aHViQXV0aFByb3ZpZGVyKClcclxuICByZXR1cm4gZmlyZWJhc2VcclxuICAgIC5hdXRoKClcclxuICAgIC5zaWduSW5XaXRoUG9wdXAoZ2l0aHViUHJvdmlkZXIpXHJcbiAgICAvLyByZXR1cm4gZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhSZWRpcmVjdChnaXRodWJQcm92aWRlcilcclxuICAgIC8vIC50aGVuKHVzZXIgPT4ge1xyXG4gIC8vICByZXR1cm4gbWFwVXNlckZyb21GaXJlYmFzZUF1dGgodXNlcilcclxuICAgIC8vIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGREZXZpdCA9ICh7YXZhdGFyLCBjb250ZW50LCB1c2VySWQsIHVzZXJOYW1lfSkgPT4ge1xyXG4gIHJldHVybiBkYXRhYmFzZS5jb2xsZWN0aW9uKCdkZXZpdHMnKS5hZGQoe1xyXG4gICAgYXZhdGFyLFxyXG4gICAgY29udGVudCxcclxuICAgIHVzZXJJZCxcclxuICAgIHVzZXJOYW1lLFxyXG4gICAgY3JlYXRlZEF0OiBmaXJlYmFzZS5maXJlc3RvcmUuVGltZXN0YW1wLmZyb21EYXRlKG5ldyBEYXRlKCkpLFxyXG4gICAgbGlrZXNDb3VudDogMCxcclxuICAgIHNoYXJlZENvdW50OiAwXHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoTGF0ZXN0RGV2aXRzID0gKCkgPT4ge1xyXG4gIHJldHVybiBkYXRhYmFzZS5jb2xsZWN0aW9uKCdkZXZpdHMnKS5vcmRlckJ5KCdjcmVhdGVkQXQnLCAnZGVzYycpXHJcbiAgLmdldCgpXHJcbiAgLnRoZW4oKHsgZG9jcyB9KSA9PiB7XHJcbiAgICByZXR1cm4gZG9jcy5tYXAoZG9jID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGRvYy5kYXRhKClcclxuICAgICAgY29uc3QgaWQgPSBkb2MuaWRcclxuICAgICAgY29uc3QgeyBjcmVhdGVkQXQgfSA9IGRhdGFcclxuICAgICAgXHJcbiAgICAgIC8vIGNvbnN0IGludGwgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZXMtRVMnKVxyXG4gICAgICAvLyBjb25zdCBkYXRlID0gbmV3IERhdGUoY3JlYXRlZEF0LnNlY29uZHMgKiAxMDAwKVxyXG4gICAgICAvLyBjb25zdCBub3JtYWxpemVkQ3JldGVkQXQgPSBpbnRsLmZvcm1hdChkYXRlKVxyXG5cclxuICAgICAgLy8gc2UgZGV2dWVsdmEgbGEgaWQgZGVsIGRvY3VtZW50byB5IGNvbiBsb3MgLi4uIHNlIGVudmlhbiB0b2RvcyBsb3MgY2FtcG9zIGRlbCBkb2N1bWVudFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgLy8gRXN0byBkZXZ1ZWx2ZSBlbCB0aW1lc3RhbXAgY29uIGVsIHVuYXJpbyAoKylcclxuICAgICAgICBjcmVhdGVkQXQ6ICtjcmVhdGVkQXQudG9EYXRlKClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiZGF0YWJhc2UiLCJmaXJlc3RvcmUiLCJtYXBVc2VyRnJvbUZpcmViYXNlQXV0aCIsInVzZXIiLCJkaXNwbGF5TmFtZSIsImVtYWlsIiwicGhvdG9VUkwiLCJ1aWQiLCJhdmF0YXIiLCJ1c2VybmFtZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZFVzZXIiLCJvbkNoYW5nZSIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJub3JtYWxpemVkVXNlciIsImxvZ2luV2l0aEdpdEh1YiIsImdpdGh1YlByb3ZpZGVyIiwiR2l0aHViQXV0aFByb3ZpZGVyIiwic2lnbkluV2l0aFBvcHVwIiwiYWRkRGV2aXQiLCJjb250ZW50IiwidXNlcklkIiwidXNlck5hbWUiLCJjb2xsZWN0aW9uIiwiYWRkIiwiY3JlYXRlZEF0IiwiVGltZXN0YW1wIiwiZnJvbURhdGUiLCJEYXRlIiwibGlrZXNDb3VudCIsInNoYXJlZENvdW50IiwiZmV0Y2hMYXRlc3REZXZpdHMiLCJvcmRlckJ5IiwiZ2V0IiwidGhlbiIsImRvY3MiLCJtYXAiLCJkb2MiLCJkYXRhIiwiaWQiLCJ0b0RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase/client.js\n"));

/***/ })

});
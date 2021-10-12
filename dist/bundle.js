/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/js/app.js":
/*!**************************!*\
  !*** ./public/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./index.js */ \"./public/js/index.js\");\n\n\n//# sourceURL=webpack://teranga/./public/js/app.js?");

/***/ }),

/***/ "./public/js/index.js":
/*!****************************!*\
  !*** ./public/js/index.js ***!
  \****************************/
/***/ (() => {

eval("const app = {\n  init: function () {\n    // Recuperation des elements du DOM\n    app.responsiveBtn = document.getElementById(\"menu-nav\");\n    app.closeBtn = document.getElementById(\"menu-nav-close\");\n    app.scrollBtn = document.getElementById(\"scroll-btn\");\n    app.topUpBtn = document.getElementById(\"up-arrow\");\n\n    // Initialisation des fonctions\n    app.viewPortMobile();\n    app.handlePopUpEffect();\n\n    // Ajout des listeners\n    app.responsiveBtn.addEventListener(\"click\", app.handleResponsiveBtn);\n    app.closeBtn.addEventListener(\"click\", app.handleResponsiveBtn);\n    app.scrollBtn.addEventListener(\"click\", app.handleScrollBtn, {\n      passive: true,\n    });\n    window.addEventListener(\"scroll\", app.handleTopUpBtn, { passive: true });\n    app.topUpBtn.addEventListener(\"click\", app.handleTopUpBtnClick, {\n      passive: true,\n    });\n  },\n\n  handleResponsiveBtn: function () {\n    let scroll_btn = document.getElementById(\"scroll-btn\");\n    let responsivBtn = document.getElementById(\"menu-nav\");\n    let closeBtn = document.getElementById(\"menu-nav-close\");\n    let nav = document.getElementById(\"navbar\");\n    let headerContent = document.getElementById(\"header-content\");\n\n    if (nav.className === \"nav__elts\") {\n      scroll_btn.className += \" responsive\";\n      nav.className += \" responsive\";\n      responsivBtn.className += \" close\";\n      closeBtn.className = \"open\";\n      headerContent.classList.add(\"blurr\");\n    } else {\n      nav.className = \"nav__elts\";\n      scroll_btn.className = \"header-scroll-icon\";\n      responsivBtn.className = \"open\";\n      closeBtn.className = \"close\";\n      headerContent.classList.remove(\"blurr\");\n    }\n  },\n\n  handleScrollBtn: function () {\n    window.scroll(0, innerHeight);\n  },\n\n  handleTopUpBtn: function () {\n    document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500\n      ? (app.topUpBtn.className = \"showBtn\")\n      : (app.topUpBtn.className = \"up-arrow\");\n  },\n\n  handleTopUpBtnClick: function () {\n    document.body.scrollTop = 0;\n    document.documentElement.scrollTop = 0;\n  },\n\n  viewPortMobile: function () {\n    let vh = window.innerHeight * 0.01;\n    document.documentElement.style.setProperty(\"--vh\", `${vh}px`);\n  },\n\n  handlePopUpEffect: function () {\n    const ratio = 0.1;\n    const options = {\n      root: null,\n      rootMargin: \"0px\",\n      threshold: ratio,\n    };\n\n    let callback = function (entries, observer) {\n      entries.forEach((entry) => {\n        if (entry.intersectionRatio > ratio) {\n          entry.target.classList.add(\"reveal-visible\");\n        }\n      });\n    };\n\n    let observer = new IntersectionObserver(callback, options);\n    let target = document\n      .querySelectorAll(\"[class*=reveal-\")\n      .forEach(function (elt) {\n        observer.observe(elt);\n      });\n\n    try {\n      observer.observe(target);\n    } catch (error) {}\n  },\n};\n\naddEventListener(\"load\", app.init());\n\n\n//# sourceURL=webpack://teranga/./public/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/app.js");
/******/ 	
/******/ })()
;
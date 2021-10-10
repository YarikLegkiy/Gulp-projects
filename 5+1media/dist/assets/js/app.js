/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("// Header\r\n(() => {\r\n  const header = document.querySelector(\".header\");\r\n  window.onscroll = () => {\r\n    if (window.pageYOffset > 50) {\r\n      header.classList.add(\"active\");\r\n    } else {\r\n      header.classList.remove(\"active\");\r\n    }\r\n  };\r\n})();\r\n\r\n// Header-menu\r\n\r\n(() => {\r\n  const body = document.querySelector(\"body\");\r\n\r\n  const burger = document.querySelector(\".burger\");\r\n  const cross = document.querySelector(\".cross\");\r\n\r\n  // const plusesOpen = document.querySelectorAll(\".case__plus--open\");\r\n  // const plusesClose = document.querySelectorAll(\".case__plus--close\");\r\n  // const caseItems = document.querySelectorAll(\".case__item\");\r\n  // const openCards = document.querySelectorAll(\".open-card\");\r\n\r\n  const headerMenu = document.querySelector(\".header-menu\");\r\n  const menuLinks = document.querySelectorAll(\".header-menu__link\");\r\n\r\n  burger.addEventListener(\"click\", () => {\r\n    headerMenu.classList.add(\"active\");\r\n    body.classList.add(\"no-scroll\");\r\n  });\r\n  cross.addEventListener(\"click\", () => {\r\n    headerMenu.classList.remove(\"active\");\r\n    body.classList.remove(\"no-scroll\");\r\n  });\r\n\r\n  for (let i = 0; i < menuLinks.length; i++) {\r\n    menuLinks[i].addEventListener(\"click\", () => {\r\n      headerMenu.classList.remove(\"active\");\r\n      body.classList.remove(\"no-scroll\");\r\n    });\r\n  }\r\n\r\n  // for (let i = 0; i < plusesOpen.length; i++) {\r\n  //   for (let i = 0; i < caseItems.length; i++) {\r\n  //     for (let i = 0; i < openCards.length; i++) {\r\n  //       plusesOpen[i].addEventListener(\"click\", () => {\r\n  //         caseItems[i].classList.add(\"active\");\r\n  //         openCards[i].classList.add(\"active\");\r\n  //       });\r\n  //     }\r\n  //   }\r\n  // }\r\n\r\n  // for (let i = 0; i < plusesClose.length; i++) {\r\n  //   for (let i = 0; i < caseItems.length; i++) {\r\n  //     for (let i = 0; i < openCards.length; i++) {\r\n  //       plusesClose[i].addEventListener(\"click\", () => {\r\n  //         caseItems[i].classList.remove(\"active\");\r\n  //         openCards[i].classList.remove(\"active\");\r\n  //       });\r\n  //     }\r\n  //   }\r\n  // }\r\n})();\r\n\r\n// Scroll to anchors\r\n\r\n(() => {\r\n  const smoothScroll = function (targetEl, duration) {\r\n    const headerElHeight = document.querySelector(\".header\").clientHeight;\r\n    let target = document.querySelector(targetEl);\r\n    let targetPosition = target.getBoundingClientRect().top - headerElHeight;\r\n    let startPosition = window.pageYOffset;\r\n    let startTime = null;\r\n\r\n    const ease = function (t, b, c, d) {\r\n      t /= d / 2;\r\n      if (t < 1) return (c / 2) * t * t + b;\r\n      t--;\r\n      return (-c / 2) * (t * (t - 2) - 1) + b;\r\n    };\r\n\r\n    const animation = function (currentTime) {\r\n      if (startTime === null) startTime = currentTime;\r\n      const timeElapsed = currentTime - startTime;\r\n      const run = ease(timeElapsed, startPosition, targetPosition, duration);\r\n      window.scrollTo(0, run);\r\n      if (timeElapsed < duration) requestAnimationFrame(animation);\r\n    };\r\n    requestAnimationFrame(animation);\r\n  };\r\n\r\n  const scrollTo = function () {\r\n    const links = document.querySelectorAll(\".js-scroll\");\r\n    links.forEach((each) => {\r\n      each.addEventListener(\"click\", function () {\r\n        const currentTarget = this.getAttribute(\"href\");\r\n        smoothScroll(currentTarget, 1000);\r\n      });\r\n    });\r\n  };\r\n  scrollTo();\r\n})();\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	
/******/ })()
;
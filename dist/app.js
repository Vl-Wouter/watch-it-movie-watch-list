/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mobileInteraction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobileInteraction */ \"./src/js/mobileInteraction.js\");\n/* harmony import */ var _mobileInteraction__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mobileInteraction__WEBPACK_IMPORTED_MODULE_1__);\n/* eslint-disable no-plusplus */\n// Import scss\n\n\nfeather.replace();\nvar searchForm = document.querySelector('#searchForm');\nvar resultContainer = document.querySelector('#searchResults');\nvar _window = window,\n    localStorage = _window.localStorage;\nvar favourites; // Initialize saved list from local storage or create a new one\n\nif (localStorage.getItem('savedList')) {\n  favourites = JSON.parse(localStorage.getItem('savedList'));\n} else {\n  favourites = {\n    series: [],\n    movies: []\n  };\n} // Save list to localstorage and call update\n\n\nvar storeFavourites = function storeFavourites() {\n  localStorage.setItem('savedList', JSON.stringify(favourites)); // updateList()\n};\n\nvar createElement = function createElement(type, parent) {\n  var classes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n  var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;\n  var content = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;\n  var src = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;\n  var element = document.createElement(type);\n  classes.forEach(function (className) {\n    element.classList.add(className);\n  });\n  if (id) element.id = id;\n  if (content) element.innerHTML = content;\n  if (src) element.src = src;\n  parent.appendChild(element);\n  if (type === 'button') feather.replace();\n  return element;\n};\n\nvar addToList = function addToList(item) {\n  var Type = item.Type;\n  item.watched = false;\n  var _favourites = favourites,\n      series = _favourites.series,\n      movies = _favourites.movies;\n  if (Type === 'series') series.push(item);else movies.push(item);\n  storeFavourites();\n};\n\nvar checkDuplicate = function checkDuplicate(item) {\n  var type = item.Type;\n  var _favourites2 = favourites,\n      movies = _favourites2.movies,\n      series = _favourites2.series;\n\n  if (type === 'movie') {\n    var found = movies.find(function (movie) {\n      return movie.imdbId === item.imdbId;\n    });\n    if (found) return true;\n  } else {\n    var _found = series.find(function (seriesItem) {\n      return seriesItem.imdbId === item.imdbId;\n    });\n\n    if (_found) return true;\n  }\n\n  return false;\n};\n\nvar addResult = function addResult(movie, index) {\n  var Title = movie.Title,\n      Year = movie.Year,\n      Type = movie.Type,\n      Poster = movie.Poster;\n  var container = createElement('div', resultContainer, ['movie']);\n  createElement('img', container, ['movie__poster'], null, null, Poster);\n  var details = createElement('section', container, ['movie__details']);\n  createElement('p', details, ['text-bold'], null, Title);\n  createElement('p', details, [], null, \"\".concat(Type, \"  | \").concat(Year));\n  var button = createElement('button', container, ['btn', '-round', '-primary'], null, '<i data-feather=\"plus\"></i>'); // button.setAttribute('data-movie', index);\n\n  button.addEventListener('click', function (e) {\n    e.preventDefault();\n    var checkFavourite = checkDuplicate(movie);\n    if (!checkFavourite) addToList(movie);else console.log('This item is already favourited');\n    button.innerHTML = '<i data-feather=\"check\"></i>';\n    feather.replace();\n  });\n};\n\nvar filterResponse = function filterResponse(array) {\n  for (var i = 0; i < array.length; i++) {\n    var item = array[i];\n\n    if (item.Type === 'movie' || item.Type === 'series') {\n      if (checkDuplicate(item)) {\n        array.splice(i, 1);\n        i--;\n      }\n    } else {\n      array.splice(i, 1);\n      i--;\n    }\n  }\n\n  return array;\n};\n\nvar searchMovie = function searchMovie() {\n  // Create form data from form\n  var search = new FormData(searchForm); // Get movie title from form data\n\n  var query = search.get('movieTitle');\n  fetch(\"https://www.omdbapi.com/?apikey=c223f3f3&s=\".concat(query)).then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    var Search = data.Search;\n    var results = filterResponse(Search);\n    resultContainer.innerHTML = '';\n\n    if (results.length > 0) {\n      results.forEach(function (result, i) {\n        addResult(result, i);\n      });\n    } else {\n      createElement('p', resultContainer, [], null, \"\\\"\".concat(query, \"\\\" returned 0 results...\"));\n    }\n  });\n};\n\nsearchForm.addEventListener('submit', function (e) {\n  e.preventDefault();\n  searchMovie();\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/mobileInteraction.js":
/*!*************************************!*\
  !*** ./src/js/mobileInteraction.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var searchButton = document.querySelector('#openSearch');\nvar closeButton = document.querySelector('#closeSearch');\nvar searchContainer = document.querySelector('.search');\n\nvar openSearch = function openSearch() {\n  searchContainer.classList.remove('-out');\n};\n\nvar closeSearch = function closeSearch() {\n  searchContainer.classList.add('-out');\n};\n\nsearchButton.addEventListener('click', openSearch);\ncloseButton.addEventListener('click', closeSearch);\n\n//# sourceURL=webpack:///./src/js/mobileInteraction.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/main.scss?");

/***/ })

/******/ });
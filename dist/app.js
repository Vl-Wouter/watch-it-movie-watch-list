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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interaction */ \"./src/js/interaction.js\");\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views */ \"./src/js/views.js\");\n// import styles\n\n\n\nvar _window = window,\n    localStorage = _window.localStorage;\nvar appContainer = document.querySelector('.app');\nvar searchButton = document.querySelector('#searchBtn');\nvar listButtons = document.querySelectorAll('.header__link');\n\nif (localStorage.getItem('savedList')) {\n  console.log('Found list, creating it');\n  Object(_views__WEBPACK_IMPORTED_MODULE_2__[\"showList\"])();\n} else {\n  console.log('no list found, showing intro');\n}\n\nsearchButton.addEventListener('click', function (e) {\n  e.preventDefault();\n  Object(_interaction__WEBPACK_IMPORTED_MODULE_1__[\"toggleSearchForm\"])();\n});\nlistButtons.forEach(function (button) {\n  button.addEventListener('click', _views__WEBPACK_IMPORTED_MODULE_2__[\"showList\"]);\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/interaction.js":
/*!*******************************!*\
  !*** ./src/js/interaction.js ***!
  \*******************************/
/*! exports provided: toggleSearchForm, handleOutsideClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleSearchForm\", function() { return toggleSearchForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleOutsideClick\", function() { return handleOutsideClick; });\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ \"./src/js/search.js\");\n/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views */ \"./src/js/views.js\");\n\n\n\nvar resetFormInput = function resetFormInput() {\n  document.querySelector('.search input').value = '';\n};\n\nvar handleOutsideClick = function handleOutsideClick(e) {\n  if (!document.querySelector('.search').contains(e.target)) {\n    window.removeEventListener('click', function (e) {\n      return handleOutsideClick(e);\n    });\n    document.querySelector('.search').classList.remove('active');\n  }\n};\n\nvar toggleSearchForm = function toggleSearchForm() {\n  var form = document.querySelector('.search');\n  var inputData = new FormData(form);\n  Object(_search__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(inputData).then(function (results) {\n    resetFormInput();\n\n    if (results.length > 0) {\n      Object(_views__WEBPACK_IMPORTED_MODULE_1__[\"createSearchResults\"])(results);\n    } else {\n      Object(_views__WEBPACK_IMPORTED_MODULE_1__[\"createErrorView\"])('noResults');\n    }\n  })[\"catch\"](function (err) {\n    if (true) console.error(err);\n  });\n  window.removeEventListener('click', function (e) {\n    return handleOutsideClick(e);\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/js/interaction.js?");

/***/ }),

/***/ "./src/js/local.js":
/*!*************************!*\
  !*** ./src/js/local.js ***!
  \*************************/
/*! exports provided: saveToList, fetchList, removeFromList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveToList\", function() { return saveToList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchList\", function() { return fetchList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeFromList\", function() { return removeFromList; });\nvar _window = window,\n    localStorage = _window.localStorage;\n\nvar saveToList = function saveToList(item) {\n  var list = JSON.parse(localStorage.getItem('savedList'));\n  var movies = list.movies,\n      series = list.series;\n  var type = item.Type;\n\n  if (type === 'movie') {\n    movies.push(item);\n  } else {\n    series.push(item);\n  }\n\n  localStorage.setItem('savedList', JSON.stringify(list));\n};\n\nvar fetchList = function fetchList() {\n  return JSON.parse(localStorage.getItem('savedList'));\n};\n\nvar removeFromList = function removeFromList(type, id) {\n  var list = JSON.parse(localStorage.getItem('savedList'));\n  var movies = list.movies,\n      series = list.series;\n\n  if (type === 'movie') {\n    var item = movies.find(function (element) {\n      return element.imdbID === id;\n    });\n    var position = movies.indexOf(item);\n    movies.splice(position, 1);\n  } else {\n    var _item = series.find(function (element) {\n      return element.imdbID === id;\n    });\n\n    var _position = series.indexOf(_item);\n\n    series.splice(_position, 1);\n  }\n\n  localStorage.setItem('savedList', JSON.stringify(list));\n};\n\n\n\n//# sourceURL=webpack:///./src/js/local.js?");

/***/ }),

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _window = window,\n    localStorage = _window.localStorage;\n\nvar checkDuplicate = function checkDuplicate(item) {\n  var _JSON$parse = JSON.parse(localStorage.getItem('savedList')),\n      movies = _JSON$parse.movies,\n      series = _JSON$parse.series;\n\n  var imdbID = item.imdbID;\n  var match;\n\n  if (item.Type === 'movie') {\n    match = movies.find(function (movie) {\n      return movie.imdbID === imdbID;\n    });\n  } else {\n    match = series.find(function (serie) {\n      return serie.imdbID === imdbID;\n    });\n  }\n\n  if (match) {\n    return true;\n  }\n\n  return false;\n};\n\nvar filterResults = function filterResults(data) {\n  var typeFilter = data.filter(function (item) {\n    return item.Type === 'movie' || item.Type === 'series';\n  });\n  return typeFilter.filter(function (item) {\n    return !checkDuplicate(item);\n  });\n};\n\nvar fetchFromInput = function fetchFromInput(data) {\n  return new Promise(function (resolve, reject) {\n    var title = data.get('movieTitle');\n    fetch(\"https://www.omdbapi.com/?apikey=c223f3f3&s=\".concat(title)).then(function (response) {\n      return response.json();\n    }).then(function (res) {\n      console.log(res);\n      var search = res.Search;\n\n      if (search && search.length > 0) {\n        resolve(filterResults(search));\n      } else {\n        resolve([]);\n      }\n    })[\"catch\"](function (err) {\n      return reject(err);\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchFromInput);\n\n//# sourceURL=webpack:///./src/js/search.js?");

/***/ }),

/***/ "./src/js/views.js":
/*!*************************!*\
  !*** ./src/js/views.js ***!
  \*************************/
/*! exports provided: resetApp, createGrid, createSearchResults, createErrorView, showList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetApp\", function() { return resetApp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createGrid\", function() { return createGrid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSearchResults\", function() { return createSearchResults; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createErrorView\", function() { return createErrorView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showList\", function() { return showList; });\n/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local */ \"./src/js/local.js\");\n\nvar appContainer = document.querySelector('.app');\n\nvar resetApp = function resetApp() {\n  appContainer.innerHTML = '';\n};\n\nvar createGrid = function createGrid(type) {\n  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var element;\n\n  if (type === 'row') {\n    element = document.createElement('section');\n    element.classList.add('row');\n  }\n\n  return element;\n};\n\nvar createTitle = function createTitle(content) {\n  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  var element = document.createElement(\"h\".concat(level));\n  element.innerText = content;\n  return element;\n};\n\nvar createMovie = function createMovie(item) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'list';\n  var title = item.Title,\n      year = item.Year,\n      id = item.imdbID,\n      poster = item.Poster,\n      movieType = item.Type;\n  var movieContainer = document.createElement('article');\n  movieContainer.classList.add('col-12', 'col-md-3', 'col-lg-2', 'movie'); // Create image\n\n  var moviePoster = document.createElement('img');\n  moviePoster.src = poster;\n  moviePoster.classList.add('movie__poster');\n  movieContainer.appendChild(moviePoster);\n  var movieDetails = document.createElement('main');\n  movieDetails.classList.add('movie__details'); // Create movie title\n\n  var movieTitle = document.createElement('h6');\n  movieTitle.innerText = title;\n  movieTitle.classList.add('movie__title');\n  movieDetails.appendChild(movieTitle); // Create details\n\n  if (type === 'search') {\n    var movieContext = document.createElement('p');\n    movieContext.innerText = \"\".concat(movieType, \" | \").concat(year);\n    movieContext.classList.add('movie__extra');\n    movieDetails.appendChild(movieContext); // Add event listener\n\n    movieContainer.addEventListener('click', function () {\n      Object(_local__WEBPACK_IMPORTED_MODULE_0__[\"saveToList\"])(item);\n      showList();\n    });\n  } else {\n    var movieActions = document.createElement('section');\n    movieActions.classList.add('movie__actions');\n    var seenButton = document.createElement('button');\n    seenButton.classList.add('btn', '-fill-primary');\n    seenButton.innerHTML = 'Seen it';\n    seenButton.addEventListener('click', function () {\n      Object(_local__WEBPACK_IMPORTED_MODULE_0__[\"removeFromList\"])(movieType, id);\n      showList();\n    });\n    movieActions.appendChild(seenButton);\n    movieDetails.appendChild(movieActions);\n  }\n\n  movieContainer.appendChild(movieDetails);\n  return movieContainer;\n};\n\nvar createSearchResults = function createSearchResults(results) {\n  resetApp();\n  var title = createTitle(\"\".concat(results.length, \" results:\"), 3);\n  var description = document.createElement('p');\n  description.innerText = 'Click an item to add it to your list';\n  var resultsRow = createGrid('row'); // resultsRow.classList.add('-nowrap');\n\n  results.forEach(function (result) {\n    var movieItem = createMovie(result, 'search');\n    resultsRow.appendChild(movieItem);\n  });\n  appContainer.appendChild(title);\n  appContainer.appendChild(description);\n  appContainer.appendChild(resultsRow);\n};\n\nvar createErrorView = function createErrorView(err) {\n  resetApp();\n  var errView = {};\n\n  if (err === 'noResults') {\n    errView = {\n      // eslint-disable-next-line quotes\n      title: \"No results found...\",\n      message: 'Cannot find the movie you\\'re looking for. Maybe it\\'s already on your list?'\n    };\n  }\n\n  var title = document.createElement('h3');\n  title.innerHTML = \"<span class=\\\"iconify\\\" data-icon=\\\"twemoji:face-screaming-in-fear\\\" data-inline=\\\"true\\\"></span> \".concat(errView.title);\n  var message = document.createElement('p');\n  message.innerText = errView.message;\n  appContainer.appendChild(title);\n  appContainer.appendChild(message);\n};\n\nvar showList = function showList() {\n  resetApp();\n\n  var _fetchList = Object(_local__WEBPACK_IMPORTED_MODULE_0__[\"fetchList\"])(),\n      movies = _fetchList.movies,\n      series = _fetchList.series; // Display movies\n\n\n  var movieRow = createGrid('row');\n  movieRow.classList.add('-nowrap');\n  movies.forEach(function (movie) {\n    movieRow.appendChild(createMovie(movie, 'list'));\n  });\n  appContainer.appendChild(createTitle('Your Movies', 3));\n  appContainer.appendChild(movieRow); // Display series\n\n  var seriesRow = createGrid('row');\n  seriesRow.classList.add('-nowrap');\n  series.forEach(function (serie) {\n    seriesRow.appendChild(createMovie(serie, 'list'));\n  });\n  appContainer.appendChild(createTitle('Your Series', 3));\n  appContainer.appendChild(seriesRow);\n};\n\n\n\n//# sourceURL=webpack:///./src/js/views.js?");

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
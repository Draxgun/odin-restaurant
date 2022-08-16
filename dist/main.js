/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --purple:#541690;\n    --red: #FF4949;\n    --orange: #FF8D29;\n    --yellow: #FFCD38;\n}\n\n\n*{\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n}\n\nbody{\n    display:flex;\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    flex-direction: column;\n    background-color: var(--yellow);\n}\n\n#main{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n\n}\n\n.header{\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    padding-bottom: 5px;\n    background-color: var(--purple);\n    text-shadow: 5px 5px #fa2a2a;\n}\n\n.headerTitleContainer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 5rem;\n    gap: 10px;\n    font-weight: bold;\n    padding-bottom: 10px;\n    color: var(--red);\n}\n\n.headerTitleContainer>.material-icons{\n    font-size: 4rem;\n}\n\n.optionContainer{\n    display: flex;\n    align-items:center;\n    width: 50%;\n    justify-content: space-between;\n    padding: 10px;\n    padding-bottom: 5px;\n}\n\n.buttonFront{\n    background-color:var(--purple);\n    color: var(--red);\n    border: none;\n    font-size: 1.5rem;\n    font-weight: bold;\n    text-shadow: 1px 1px #fa2a2a;\n}\n\n.buttonFront:hover{\n    color: #fa2a2a;\n}\n\n.content{\n    flex:auto;\n    display: flex;\n    height: 75%;\n    justify-content: center;\n    align-content: center;\n    padding-top: 20px;\n}\n\n.contentContainer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 90%;\n    height: 100%;\n    padding: 10px;\n    border: none;\n    gap: 20px;\n}\n\n/* Home Info */\n.textContainer{\n    display: flex;\n    flex-direction: column;\n    height: fit-content;\n    width: 600px;\n}\n\n.mainTitle{\n    display:flex;\n    flex: 1;\n    font-size: 80px;\n    font-weight: bold;\n    color: var(--purple);\n    text-shadow: 5px 5px var(--orange);\n}\n\n.homeImage{\n    height: 70%;\n    width: auto;\n}\n\n/* Menu */\n.menuItemsContainer{\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow-y:auto;\n    gap:50px;\n\n\n\n}\n.itemContainer{\n    display: flex;\n    gap: 50px;\n    background-color: var(--purple);\n    padding: 20px;\n    border-radius: 20px;\n}\n\n\n\n.itemImage{\n    height: 200px;\n    width: 200px;\n}\n\n.itemName{\n    font-size: 50px;\n    font-weight: bold;\n    color: var(--yellow);\n    text-shadow: 5px 5px var(--orange);\n    padding-bottom: 20px;\n}\n\n.itemDescription{\n    width: 700px;\n    font-size: 20px;\n    font-weight: bold;\n    color: var(--yellow);\n    margin-bottom: 20px ;\n}\n\n.itemPrice{\n    font-size: 20px;\n    font-weight: bold;\n    color: var(--yellow);\n    margin-bottom: 20px ;\n}\n\n/* About */\n.mainTitleAbout{\n    display:flex;\n    flex: 1;\n    font-size: 90px;\n    font-weight: bold;\n    color: var(--purple);\n    text-shadow: 5px 5px var(--orange); \n}\n\n.mainTextAbout{\n    font-size: 30px;\n    font-weight: bold;\n    color: var(--purple);\n    text-shadow: 2px 2px var(--orange); \n}\n\n.aboutImage{\n    height: 70%;\n    width: auto;\n    border-radius: 20px;\n}\n\n/* contact */\n.contactTitle, .imageContainerTitle{\n    font-size: 50px;\n    font-weight: bold;\n    color: var(--purple);\n    text-shadow: 5px 5px var(--orange); \n}\n\n.contact{\n    font-size: 30px;\n    font-weight: bold;\n    color: var(--purple);\n    text-shadow: 2px 2px var(--orange); \n}\n\n.imageContainerImage{\n    border-radius: 20px;\n    width: 80%;\n    height: auto;\n}\n\n\n.footer{\n    flex:1;\n    display:flex;\n    justify-content: center;\n    align-content: center;\n    font-size: 1.5rem;\n    font-weight: bold;\n    color: #541690;\n    text-shadow: 1px 1px #47038b;\n}\n\n/* Scrollbar */\n/* width */\n::-webkit-scrollbar {\n    width: 10px;\n    border-radius: 10px;\n  }\n  \n  /* Track */\n  ::-webkit-scrollbar-track {\n     color:var(--yellow);\n  }\n  \n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background:var(--orange);\n  }\n  \n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --purple:#541690;\n    --red: #FF4949;\n    --orange: #FF8D29;\n    --yellow: #FFCD38;\n}\n\n\n*{\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n}\n\nbody{\n    display:flex;\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n    padding: 0;\n    flex-direction: column;\n    background-color: var(--yellow);\n}\n\n#main{\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n\n}\n\n.header{\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    padding-bottom: 5px;\n    background-color: var(--purple);\n    text-shadow: 5px 5px #fa2a2a;\n}\n\n.headerTitleContainer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 5rem;\n    gap: 10px;\n    font-weight: bold;\n    padding-bottom: 10px;\n    color: var(--red);\n}\n\n.headerTitleContainer>.material-icons{\n    font-size: 4rem;\n}\n\n.optionContainer{\n    display: flex;\n    align-items:center;\n    width: 50%;\n    justify-content: space-between;\n    padding: 10px;\n    padding-bottom: 5px;\n}\n\n.buttonFront{\n    background-color:var(--purple);\n    color: var(--red);\n    border: none;\n    font-size: 1.5rem;\n    font-weight: bold;\n    text-shadow: 1px 1px #fa2a2a;\n}\n\n.buttonFront:hover{\n    color: #fa2a2a;\n}\n\n.content{\n    flex:auto;\n    display: flex;\n    height: 75%;\n    justify-content: center;\n    align-content: center;\n    padding-top: 20px;\n}\n\n.contentContainer{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 90%;\n    height: 100%;\n    padding: 10px;\n    border: none;\n    gap: 20px;\n}\n\n/* Home Info */\n.textContainer{\n    display: flex;\n    flex-direction: column;\n    height: fit-content;\n    width: 600px;\n}\n\n.mainTitle{\n    display:flex;\n    flex: 1;\n    font-size: 80px;\n    font-weight: bold;\n    color: var(--purple);\n    text-shadow: 5px 5px var(--orange);\n}\n\n.homeImage{\n    height: 70%;\n    width: auto;\n}\n\n/* Menu */\n.menuItemsContainer{\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow-y:auto;\n    gap:50px;\n\n\n\n}\n.itemContainer{\n    display: flex;\n    gap: 50px;\n    background-color: var(--purple);\n    padding: 20px;\n    border-radius: 20px;\n}\n\n\n\n.itemImage{\n    height: 200px;\n    width: 200px;\n}\n\n.itemName{\n    font-size: 50px;\n    font-weight: bold;\n    color: var(--yellow);\n    text-shadow: 5px 5px var(--orange);\n    padding-bottom: 20px;\n}\n\n.itemDescription{\n    width: 700px;\n    font-size: 20px;\n    font-weight: bold;\n    color: var(--yellow);\n    margin-bottom: 20px ;\n}\n\n.itemPrice{\n    font-size: 20px;\n    font-weight: bold;\n    color: var(--yellow);\n    margin-bottom: 20px ;\n}\n\n/* About */\n.mainTitleAbout{\n    display:flex;\n    flex: 1;\n    font-size: 90px;\n    font-weight: bold;\n    color: var(--purple);\n    text-shadow: 5px 5px var(--orange); \n}\n\n.mainTextAbout{\n    font-size: 30px;\n    font-weight: bold;\n    color: var(--purple);\n    text-shadow: 2px 2px var(--orange); \n}\n\n.aboutImage{\n    height: 70%;\n    width: auto;\n    border-radius: 20px;\n}\n\n/* contact */\n.contactTitle, .imageContainerTitle{\n    font-size: 50px;\n    font-weight: bold;\n    color: var(--purple);\n    text-shadow: 5px 5px var(--orange); \n}\n\n.contact{\n    font-size: 30px;\n    font-weight: bold;\n    color: var(--purple);\n    text-shadow: 2px 2px var(--orange); \n}\n\n.imageContainerImage{\n    border-radius: 20px;\n    width: 80%;\n    height: auto;\n}\n\n\n.footer{\n    flex:1;\n    display:flex;\n    justify-content: center;\n    align-content: center;\n    font-size: 1.5rem;\n    font-weight: bold;\n    color: #541690;\n    text-shadow: 1px 1px #47038b;\n}\n\n/* Scrollbar */\n/* width */\n::-webkit-scrollbar {\n    width: 10px;\n    border-radius: 10px;\n  }\n  \n  /* Track */\n  ::-webkit-scrollbar-track {\n     color:var(--yellow);\n  }\n  \n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background:var(--orange);\n  }\n  \n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/aboutTab.js":
/*!*************************!*\
  !*** ./src/aboutTab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadAboutTab": () => (/* binding */ loadAboutTab)
/* harmony export */ });
/* harmony import */ var _costcoMaya_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./costcoMaya.jpeg */ "./src/costcoMaya.jpeg");


let loadAboutTab = () => {
    let contentContainer = document.getElementsByClassName('contentContainer')[0]

    let mainText = loadMainText()
    let imageSide = loadImageSide()


    contentContainer.appendChild(mainText)
    contentContainer.appendChild(imageSide)
}

let loadMainText = () => {

    let textContainer = document.createElement('div')
    textContainer.classList.add('textContainer')

    let mainTitle = document.createElement('div')
    mainTitle.classList.add("mainTitleAbout");
    mainTitle.textContent = 'About us'
    textContainer.appendChild(mainTitle)

    let mainText = document.createElement('div')
    mainText.classList.add("mainTextAbout");
    mainText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum cursus mauris, et tristique tellus hendrerit ac. Maecenas nec lobortis urna. Vivamus molestie porta arcu, a tincidunt nunc auctor at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod mi sit amet metus lobortis, id accumsan arcu consequat. Quisque ac velit cursus, laoreet dui eu, pharetra leo. Ut sit amet pharetra enim, id maximus neque. Etiam nec viverra mi, at bibendum dui. Phasellus ut efficitur nunc. In hac habitasse platea dictumst. Quisque congue sed nibh vel tristique. '
    textContainer.appendChild(mainText)
    
    return textContainer

} 

let loadImageSide = () => {
    let homeImage = document.createElement('img');
    homeImage.classList.add('aboutImage')
    homeImage.src = _costcoMaya_jpeg__WEBPACK_IMPORTED_MODULE_0__

    return homeImage
}





/***/ }),

/***/ "./src/clearFunction.js":
/*!******************************!*\
  !*** ./src/clearFunction.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearContent": () => (/* binding */ clearContent)
/* harmony export */ });

let clearContent = () =>{
    let contentContainer = document.getElementsByClassName('contentContainer')[0]
    contentContainer.innerHTML =''
}



/***/ }),

/***/ "./src/contactTab.js":
/*!***************************!*\
  !*** ./src/contactTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContactTab": () => (/* binding */ loadContactTab)
/* harmony export */ });
/* harmony import */ var _map_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.png */ "./src/map.png");


let loadContactTab = () => {
    let contentContainer = document.getElementsByClassName('contentContainer')[0];

    let mainText = loadMainText();
    let imageSide = loadImageSide()
    contentContainer.appendChild(mainText);
    contentContainer.appendChild(imageSide);

}

let loadMainText = () => {

    let textContainer = document.createElement('div');
    textContainer.classList.add('textContainer');

    let mainTitle = document.createElement('div');
    mainTitle.classList.add("contactTitle");
    mainTitle.textContent = 'Contact Information';
    textContainer.appendChild(mainTitle);

    let fields = ['E-mail','Phone','Instagram','Address'];
    let values = ['mashBurguer99@pop.com','915-556-582','@TheRealManshaBurguer','Privada Jamaica King Street 299'];

    let textContent = document.createElement('ul');

    for(let i = 0;i<fields.length;i++){
        let field = createContactInfo(fields[i],values[i]);
        textContent.appendChild(field);
    }

    textContainer.appendChild(textContent)
    

    return textContainer

} 

let createContactInfo = (field,value) => {
     
    let contact = document.createElement('li');
    contact.classList.add('contact');
    contact.textContent = `${field}: ${value}`;
    return contact
    
}

let loadImageSide = () => {
    
    let imageContainer = document.createElement('div');
    imageContainer.classList.add('imageContainer');
    
    let imageContainerTitle = document.createElement('div');
    imageContainerTitle.classList.add('imageContainerTitle')
    imageContainerTitle.textContent = 'Where we are located!'
    imageContainer.appendChild(imageContainerTitle)

    let imageContainerimage = document.createElement('img');
    imageContainerimage.classList.add('imageContainerImage')
    imageContainerimage.src = _map_png__WEBPACK_IMPORTED_MODULE_0__

    imageContainer.appendChild(imageContainerimage)

    return imageContainer
}






/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHomePage": () => (/* binding */ loadHomePage)
/* harmony export */ });
/*Creates homePage */
let loadHomePage =  ()  => {

    /* Checks for the content container */
    let main = document.getElementById('main')

    /* Creates the header */
    let header = createHeader()
    main.appendChild(header)

    /* Content*/
    let content = createContent()
    main.appendChild(content)

    /*Footer*/
    let footer = createFooter()
    main.appendChild(footer)

    /*Adds the header container*/
    createHeaderTitle(header)
    createTabButtons(header)

    /*Adds the content container to the content section*/
    createContentContainer(content)

    /*Adds the footer Text*/
    createFooterText(footer)

    
}

let createHeader = () =>{
        /*Header Container */
        let header = document.createElement('div');
        header.classList.add('header')
    return header
}

/* Creates the header title */
let createHeaderTitle = (header) => {

    let headerTitleContainer = document.createElement('div');
    headerTitleContainer.classList.add('headerTitleContainer')

    let hamburguerIcon = document.createElement('i');
    hamburguerIcon.classList.add('material-icons');
    hamburguerIcon.textContent = 'fastfood';
    headerTitleContainer.appendChild(hamburguerIcon)


    let headerTitle = document.createElement('div');
    headerTitle.classList.add('headerTitle')
    headerTitle.textContent = 'ManshaBurguer'
    headerTitleContainer.appendChild(headerTitle)

    header.appendChild(headerTitleContainer)
}

/* Creates the option container with the options */
let createTabButtons = (header) =>{
    
    /*Creaters the container for the buttons*/
    let optionContainer = document.createElement('div')
    optionContainer.classList.add('optionContainer')

    

    /* Creates the home button */
    let homeButton  = document.createElement('button')
    homeButton.classList.add('buttonFront')
    homeButton.textContent = 'Home'
    homeButton.setAttribute('id','home')
    optionContainer.appendChild(homeButton)

    /* Creates the Menu button */
    let menuButton  = document.createElement('button')
    menuButton.classList.add('buttonFront')
    menuButton.textContent = 'Menu'
    menuButton.setAttribute('id','menu')
    optionContainer.appendChild(menuButton)

    /* Creates the about button */
    let aboutButton  = document.createElement('button')
    aboutButton.classList.add('buttonFront')
    aboutButton.textContent = 'About'
    aboutButton.setAttribute('id','about')
    optionContainer.appendChild(aboutButton)


    /* Creates the contact button */
    let contactButton  = document.createElement('button')
    contactButton.classList.add('buttonFront')
    contactButton.textContent = 'Contact'
    contactButton.setAttribute('id','contact')
    optionContainer.appendChild(contactButton)

    header.appendChild(optionContainer)

   
}

/*Creates Content Section*/
let createContent = () => {
    let content = document.createElement('div')
    content.classList.add('content')
    return content
}

/*Create content container*/
let createContentContainer = (content) => {
    let contentContainer = document.createElement('div')
    contentContainer.classList.add('contentContainer')
    content.appendChild(contentContainer)
}

/* Creates the footer */
let createFooter = () =>{
    let footer = document.createElement('div');
    footer.classList.add('footer')
    
    return footer
}

/*Creates a footer*/
let createFooterText = (footer) => {

    let footerText = document.createElement('div');
    footerText.textContent = 'A project by Alejandro Banuelos';
    footerText.classList.add('footerText')
    footer.appendChild(footerText)

}





/***/ }),

/***/ "./src/homeTab.js":
/*!************************!*\
  !*** ./src/homeTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHomeTab": () => (/* binding */ loadHomeTab)
/* harmony export */ });
/* harmony import */ var _chefHeadMaya_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chefHeadMaya.png */ "./src/chefHeadMaya.png");



let loadHomeTab = () => {
    let contentContainer = document.getElementsByClassName('contentContainer')[0]

    let mainText = loadMainText()
    let imageSide = loadImageSide()

    contentContainer.appendChild(mainText)
    contentContainer.appendChild(imageSide)



}

let loadMainText = () => {

    let textContainer = document.createElement('div')
    textContainer.classList.add('textContainer')

    let mainTitle = document.createElement('div')
    mainTitle.classList.add("mainTitle");
    mainTitle.textContent = 'Welcome to ManshaBurguer can I get your order?'
    textContainer.appendChild(mainTitle)
    
    return textContainer

} 

let loadImageSide = () => {
    let homeImage = document.createElement('img');
    homeImage.classList.add('homeImage')
    homeImage.src = _chefHeadMaya_png__WEBPACK_IMPORTED_MODULE_0__

    return homeImage
}





/***/ }),

/***/ "./src/menuItem.js":
/*!*************************!*\
  !*** ./src/menuItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuItem": () => (/* binding */ menuItem)
/* harmony export */ });
/* Creation of the menu item */
class menuItem {
    constructor(name,description,price,photo) {
      this.name = name;
      this.description = description;
      this.price = price
      this.photo = photo
    }  
}



/***/ }),

/***/ "./src/menuTab.js":
/*!************************!*\
  !*** ./src/menuTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenuTab": () => (/* binding */ loadMenuTab)
/* harmony export */ });
/* harmony import */ var _menuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItem */ "./src/menuItem.js");
/* harmony import */ var _doubleBurger_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doubleBurger.png */ "./src/doubleBurger.png");
/* harmony import */ var _guacamoleBurger_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guacamoleBurger.png */ "./src/guacamoleBurger.png");
/* harmony import */ var _mayaChickenSandwich_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mayaChickenSandwich.png */ "./src/mayaChickenSandwich.png");
/* harmony import */ var _monster_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./monster.png */ "./src/monster.png");
/* harmony import */ var _papasBurger_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./papasBurger.png */ "./src/papasBurger.png");
/* harmony import */ var _shrimp_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shrimp.png */ "./src/shrimp.png");








let loadMenuTab = () => {
    let contentContainer = document.getElementsByClassName('contentContainer')[0]

    let menu = createMenuDOM()
    contentContainer.appendChild(menu)
}


let createMenuDOM = () => {
    let menuItems = createMenuItems()

    let menuItemsContainer = document.createElement('div')
    menuItemsContainer.classList.add('menuItemsContainer')



    menuItems.forEach(item => {

        /*Item Container */
        let itemContainer = document.createElement('div')
        itemContainer.setAttribute('id',item.name)
        itemContainer.classList.add('itemContainer')

        /*Text Side */
        let textSide = document.createElement('div')
        textSide.classList.add('textSideMenu')

        /*Name*/
        let nameItem = document.createElement('div')
        nameItem.classList.add('itemName')
        nameItem.textContent = item.name
        textSide.appendChild(nameItem)

        /*description*/
        let descriptionItem = document.createElement('div')
        descriptionItem.classList.add('itemDescription')
        descriptionItem.textContent = item.description
        textSide.appendChild(descriptionItem)

        /*price*/
        let priceItem = document.createElement('div')
        priceItem.classList.add('itemPrice')
        priceItem.textContent = `Price: ${item.price} $`
        textSide.appendChild(priceItem)

        let imageItem = document.createElement('img')
        imageItem.classList.add('itemImage')
        imageItem.src = item.photo

        itemContainer.appendChild(textSide)
        itemContainer.appendChild(imageItem)
        
        menuItemsContainer.appendChild(itemContainer)

    });
    return menuItemsContainer
}

/* Creates an array for each of the menu items */
let createMenuItems = () => {
    let names   = ['Double Mansha Burger','Guaca-ManshaBurger','Cuco Chicken Sandwich','Monster Yoshi Burger','Insane Fry Burger','Crazy Shrimp Burger']
    let descriptions = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet laoreet semper. Donec nisl felis, laoreet quis nisl pulvinar, tempus ultricies enim. Morbi non pretium eros, id convallis lectus. Quisque aliquam convallis massa non dictum. Cras at dui at augue tincidunt elementum vitae id neque. Quisque mi purus, vestibulum at.'
    let prices = [30,25,15,50,10,20]
    let images = [_doubleBurger_png__WEBPACK_IMPORTED_MODULE_1__,_guacamoleBurger_png__WEBPACK_IMPORTED_MODULE_2__,_mayaChickenSandwich_png__WEBPACK_IMPORTED_MODULE_3__,_monster_png__WEBPACK_IMPORTED_MODULE_4__,_papasBurger_png__WEBPACK_IMPORTED_MODULE_5__,_shrimp_png__WEBPACK_IMPORTED_MODULE_6__]

    let menuItems = []

    for(let i = 0;i<names.length;i++){
        menuItems.push(createMenuItem(names[i],descriptions,prices[i],images[i]))
    }

    return menuItems
}
/* Function to create a new item */
let createMenuItem = (name,description,price,photo) =>{
    return new _menuItem__WEBPACK_IMPORTED_MODULE_0__.menuItem(name,description,price,photo)
}



/***/ }),

/***/ "./src/chefHeadMaya.png":
/*!******************************!*\
  !*** ./src/chefHeadMaya.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "43c39c0ae697208a862f.png";

/***/ }),

/***/ "./src/costcoMaya.jpeg":
/*!*****************************!*\
  !*** ./src/costcoMaya.jpeg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4eea00a70b624421bc22.jpeg";

/***/ }),

/***/ "./src/doubleBurger.png":
/*!******************************!*\
  !*** ./src/doubleBurger.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a26dac8cbd6e59e436b.png";

/***/ }),

/***/ "./src/guacamoleBurger.png":
/*!*********************************!*\
  !*** ./src/guacamoleBurger.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d2e97134be3bab3eaf29.png";

/***/ }),

/***/ "./src/map.png":
/*!*********************!*\
  !*** ./src/map.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "08bdefdddec813f88369.png";

/***/ }),

/***/ "./src/mayaChickenSandwich.png":
/*!*************************************!*\
  !*** ./src/mayaChickenSandwich.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68385d35b71b7fadd7da.png";

/***/ }),

/***/ "./src/monster.png":
/*!*************************!*\
  !*** ./src/monster.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "63f437747bd70c3a62a0.png";

/***/ }),

/***/ "./src/papasBurger.png":
/*!*****************************!*\
  !*** ./src/papasBurger.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bcb3d518107f87e89cc.png";

/***/ }),

/***/ "./src/shrimp.png":
/*!************************!*\
  !*** ./src/shrimp.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3f2653f8a8ce30a391a.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _homeTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeTab */ "./src/homeTab.js");
/* harmony import */ var _aboutTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutTab */ "./src/aboutTab.js");
/* harmony import */ var _contactTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactTab */ "./src/contactTab.js");
/* harmony import */ var _menuTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menuTab */ "./src/menuTab.js");
/* harmony import */ var _clearFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clearFunction */ "./src/clearFunction.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/style.css");










console.log('Hola')

;(0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)()
;(0,_homeTab__WEBPACK_IMPORTED_MODULE_1__.loadHomeTab)()

/* Home */

let homeButton = document.getElementById('home')

homeButton.addEventListener('click',() =>{
    ;(0,_clearFunction__WEBPACK_IMPORTED_MODULE_5__.clearContent)()
    ;(0,_homeTab__WEBPACK_IMPORTED_MODULE_1__.loadHomeTab)()
})

/* Menu */

let menuButton = document.getElementById('menu')

menuButton.addEventListener('click',()=>{
    ;(0,_clearFunction__WEBPACK_IMPORTED_MODULE_5__.clearContent)()
    ;(0,_menuTab__WEBPACK_IMPORTED_MODULE_4__.loadMenuTab)()
})

/* About */
let aboutButton = document.getElementById('about')

aboutButton.addEventListener('click',()=>{
    ;(0,_clearFunction__WEBPACK_IMPORTED_MODULE_5__.clearContent)()
    ;(0,_aboutTab__WEBPACK_IMPORTED_MODULE_2__.loadAboutTab)()
})

/* Contact */
let contactButton = document.getElementById('contact')

contactButton.addEventListener('click',()=>{
    ;(0,_clearFunction__WEBPACK_IMPORTED_MODULE_5__.clearContent)()
    ;(0,_contactTab__WEBPACK_IMPORTED_MODULE_3__.loadContactTab)()
})





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFDO0FBQ0c7QUFDRTtBQUNJO0FBQ047QUFDSTtBQUN2Qjs7OztBQUlyQjs7QUFFQSxvREFBWTtBQUNaLHNEQUFXOztBQUVYOztBQUVBOztBQUVBO0FBQ0EsSUFBSSw2REFBWTtBQUNoQixJQUFJLHNEQUFXO0FBQ2YsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBLElBQUksNkRBQVk7QUFDaEIsSUFBSSxzREFBVztBQUNmLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBLElBQUksNkRBQVk7QUFDaEIsSUFBSSx3REFBWTtBQUNoQixDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDZEQUFZO0FBQ2hCLElBQUksNERBQWM7QUFDbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvYWJvdXRUYWIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2NsZWFyRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3RUYWIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2hvbWVUYWIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL21lbnVJdGVtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9tZW51VGFiLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS1wdXJwbGU6IzU0MTY5MDtcXG4gICAgLS1yZWQ6ICNGRjQ5NDk7XFxuICAgIC0tb3JhbmdlOiAjRkY4RDI5O1xcbiAgICAtLXllbGxvdzogI0ZGQ0QzODtcXG59XFxuXFxuXFxuKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbn1cXG5cXG4jbWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICAgIHRleHQtc2hhZG93OiA1cHggNXB4ICNmYTJhMmE7XFxufVxcblxcbi5oZWFkZXJUaXRsZUNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4uaGVhZGVyVGl0bGVDb250YWluZXI+Lm1hdGVyaWFsLWljb25ze1xcbiAgICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbi5vcHRpb25Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uYnV0dG9uRnJvbnR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tcHVycGxlKTtcXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAjZmEyYTJhO1xcbn1cXG5cXG4uYnV0dG9uRnJvbnQ6aG92ZXJ7XFxuICAgIGNvbG9yOiAjZmEyYTJhO1xcbn1cXG5cXG4uY29udGVudHtcXG4gICAgZmxleDphdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDc1JTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxufVxcblxcbi5jb250ZW50Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLyogSG9tZSBJbmZvICovXFxuLnRleHRDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiA2MDBweDtcXG59XFxuXFxuLm1haW5UaXRsZXtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBmb250LXNpemU6IDgwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gICAgdGV4dC1zaGFkb3c6IDVweCA1cHggdmFyKC0tb3JhbmdlKTtcXG59XFxuXFxuLmhvbWVJbWFnZXtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4vKiBNZW51ICovXFxuLm1lbnVJdGVtc0NvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTphdXRvO1xcbiAgICBnYXA6NTBweDtcXG5cXG5cXG5cXG59XFxuLml0ZW1Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuXFxuXFxuLml0ZW1JbWFnZXtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4uaXRlbU5hbWV7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbiAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCB2YXIoLS1vcmFuZ2UpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLml0ZW1EZXNjcmlwdGlvbntcXG4gICAgd2lkdGg6IDcwMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCA7XFxufVxcblxcbi5pdGVtUHJpY2V7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4IDtcXG59XFxuXFxuLyogQWJvdXQgKi9cXG4ubWFpblRpdGxlQWJvdXR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgZm9udC1zaXplOiA5MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICAgIHRleHQtc2hhZG93OiA1cHggNXB4IHZhcigtLW9yYW5nZSk7IFxcbn1cXG5cXG4ubWFpblRleHRBYm91dHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IHZhcigtLW9yYW5nZSk7IFxcbn1cXG5cXG4uYWJvdXRJbWFnZXtcXG4gICAgaGVpZ2h0OiA3MCU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4vKiBjb250YWN0ICovXFxuLmNvbnRhY3RUaXRsZSwgLmltYWdlQ29udGFpbmVyVGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCB2YXIoLS1vcmFuZ2UpOyBcXG59XFxuXFxuLmNvbnRhY3R7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCB2YXIoLS1vcmFuZ2UpOyBcXG59XFxuXFxuLmltYWdlQ29udGFpbmVySW1hZ2V7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuXFxuLmZvb3RlcntcXG4gICAgZmxleDoxO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICM1NDE2OTA7XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4ICM0NzAzOGI7XFxufVxcblxcbi8qIFNjcm9sbGJhciAqL1xcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgfVxcbiAgXFxuICAvKiBUcmFjayAqL1xcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgICBjb2xvcjp2YXIoLS15ZWxsb3cpO1xcbiAgfVxcbiAgXFxuICAvKiBIYW5kbGUgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOnZhcigtLW9yYW5nZSk7XFxuICB9XFxuICBcXG5cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLHNCQUFzQjtJQUN0QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwrQkFBK0I7SUFDL0IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDViw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQSxjQUFjO0FBQ2Q7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLE9BQU87SUFDUCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBLFNBQVM7QUFDVDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLFFBQVE7Ozs7QUFJWjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCwrQkFBK0I7SUFDL0IsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQ0FBa0M7SUFDbEMsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtBQUN4Qjs7QUFFQSxVQUFVO0FBQ1Y7SUFDSSxZQUFZO0lBQ1osT0FBTztJQUNQLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBLFlBQVk7QUFDWjtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxNQUFNO0lBQ04sWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsNEJBQTRCO0FBQ2hDOztBQUVBLGNBQWM7QUFDZCxVQUFVO0FBQ1Y7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCOztFQUVBLFVBQVU7RUFDVjtLQUNHLG1CQUFtQjtFQUN0Qjs7RUFFQSxXQUFXO0VBQ1g7SUFDRSx3QkFBd0I7RUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tcHVycGxlOiM1NDE2OTA7XFxuICAgIC0tcmVkOiAjRkY0OTQ5O1xcbiAgICAtLW9yYW5nZTogI0ZGOEQyOTtcXG4gICAgLS15ZWxsb3c6ICNGRkNEMzg7XFxufVxcblxcblxcbip7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXG59XFxuXFxuI21haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCAjZmEyYTJhO1xcbn1cXG5cXG4uaGVhZGVyVGl0bGVDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGdhcDogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuLmhlYWRlclRpdGxlQ29udGFpbmVyPi5tYXRlcmlhbC1pY29uc3tcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4ub3B0aW9uQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLmJ1dHRvbkZyb250e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXB1cnBsZSk7XFxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggI2ZhMmEyYTtcXG59XFxuXFxuLmJ1dHRvbkZyb250OmhvdmVye1xcbiAgICBjb2xvcjogI2ZhMmEyYTtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIGZsZXg6YXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA3NSU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbn1cXG5cXG4uY29udGVudENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi8qIEhvbWUgSW5mbyAqL1xcbi50ZXh0Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogNjAwcHg7XFxufVxcblxcbi5tYWluVGl0bGV7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICAgIHRleHQtc2hhZG93OiA1cHggNXB4IHZhcigtLW9yYW5nZSk7XFxufVxcblxcbi5ob21lSW1hZ2V7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLyogTWVudSAqL1xcbi5tZW51SXRlbXNDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93LXk6YXV0bztcXG4gICAgZ2FwOjUwcHg7XFxuXFxuXFxuXFxufVxcbi5pdGVtQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXB1cnBsZSk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcblxcblxcbi5pdGVtSW1hZ2V7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLml0ZW1OYW1le1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KTtcXG4gICAgdGV4dC1zaGFkb3c6IDVweCA1cHggdmFyKC0tb3JhbmdlKTtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi5pdGVtRGVzY3JpcHRpb257XFxuICAgIHdpZHRoOiA3MDBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHZhcigtLXllbGxvdyk7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHggO1xcbn1cXG5cXG4uaXRlbVByaWNle1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogdmFyKC0teWVsbG93KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCA7XFxufVxcblxcbi8qIEFib3V0ICovXFxuLm1haW5UaXRsZUFib3V0e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZvbnQtc2l6ZTogOTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgICB0ZXh0LXNoYWRvdzogNXB4IDVweCB2YXIoLS1vcmFuZ2UpOyBcXG59XFxuXFxuLm1haW5UZXh0QWJvdXR7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCB2YXIoLS1vcmFuZ2UpOyBcXG59XFxuXFxuLmFib3V0SW1hZ2V7XFxuICAgIGhlaWdodDogNzAlO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLyogY29udGFjdCAqL1xcbi5jb250YWN0VGl0bGUsIC5pbWFnZUNvbnRhaW5lclRpdGxle1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gICAgdGV4dC1zaGFkb3c6IDVweCA1cHggdmFyKC0tb3JhbmdlKTsgXFxufVxcblxcbi5jb250YWN0e1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggdmFyKC0tb3JhbmdlKTsgXFxufVxcblxcbi5pbWFnZUNvbnRhaW5lckltYWdle1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcblxcbi5mb290ZXJ7XFxuICAgIGZsZXg6MTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjNTQxNjkwO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAjNDcwMzhiO1xcbn1cXG5cXG4vKiBTY3JvbGxiYXIgKi9cXG4vKiB3aWR0aCAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIH1cXG4gIFxcbiAgLyogVHJhY2sgKi9cXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICAgY29sb3I6dmFyKC0teWVsbG93KTtcXG4gIH1cXG4gIFxcbiAgLyogSGFuZGxlICovXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZDp2YXIoLS1vcmFuZ2UpO1xcbiAgfVxcbiAgXFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY29zdGNvTWF5YSBmcm9tICcuL2Nvc3Rjb01heWEuanBlZydcblxubGV0IGxvYWRBYm91dFRhYiA9ICgpID0+IHtcbiAgICBsZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbnRlbnRDb250YWluZXInKVswXVxuXG4gICAgbGV0IG1haW5UZXh0ID0gbG9hZE1haW5UZXh0KClcbiAgICBsZXQgaW1hZ2VTaWRlID0gbG9hZEltYWdlU2lkZSgpXG5cblxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblRleHQpXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZVNpZGUpXG59XG5cbmxldCBsb2FkTWFpblRleHQgPSAoKSA9PiB7XG5cbiAgICBsZXQgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0ZXh0Q29udGFpbmVyJylcblxuICAgIGxldCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW5UaXRsZS5jbGFzc0xpc3QuYWRkKFwibWFpblRpdGxlQWJvdXRcIik7XG4gICAgbWFpblRpdGxlLnRleHRDb250ZW50ID0gJ0Fib3V0IHVzJ1xuICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblRpdGxlKVxuXG4gICAgbGV0IG1haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtYWluVGV4dC5jbGFzc0xpc3QuYWRkKFwibWFpblRleHRBYm91dFwiKTtcbiAgICBtYWluVGV4dC50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNb3JiaSBydXRydW0gY3Vyc3VzIG1hdXJpcywgZXQgdHJpc3RpcXVlIHRlbGx1cyBoZW5kcmVyaXQgYWMuIE1hZWNlbmFzIG5lYyBsb2JvcnRpcyB1cm5hLiBWaXZhbXVzIG1vbGVzdGllIHBvcnRhIGFyY3UsIGEgdGluY2lkdW50IG51bmMgYXVjdG9yIGF0LkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFZpdmFtdXMgZXVpc21vZCBtaSBzaXQgYW1ldCBtZXR1cyBsb2JvcnRpcywgaWQgYWNjdW1zYW4gYXJjdSBjb25zZXF1YXQuIFF1aXNxdWUgYWMgdmVsaXQgY3Vyc3VzLCBsYW9yZWV0IGR1aSBldSwgcGhhcmV0cmEgbGVvLiBVdCBzaXQgYW1ldCBwaGFyZXRyYSBlbmltLCBpZCBtYXhpbXVzIG5lcXVlLiBFdGlhbSBuZWMgdml2ZXJyYSBtaSwgYXQgYmliZW5kdW0gZHVpLiBQaGFzZWxsdXMgdXQgZWZmaWNpdHVyIG51bmMuIEluIGhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0LiBRdWlzcXVlIGNvbmd1ZSBzZWQgbmliaCB2ZWwgdHJpc3RpcXVlLiAnXG4gICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluVGV4dClcbiAgICBcbiAgICByZXR1cm4gdGV4dENvbnRhaW5lclxuXG59IFxuXG5sZXQgbG9hZEltYWdlU2lkZSA9ICgpID0+IHtcbiAgICBsZXQgaG9tZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaG9tZUltYWdlLmNsYXNzTGlzdC5hZGQoJ2Fib3V0SW1hZ2UnKVxuICAgIGhvbWVJbWFnZS5zcmMgPSBjb3N0Y29NYXlhXG5cbiAgICByZXR1cm4gaG9tZUltYWdlXG59XG5cblxuXG5leHBvcnR7XG4gICAgbG9hZEFib3V0VGFiXG59IiwiXG5sZXQgY2xlYXJDb250ZW50ID0gKCkgPT57XG4gICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb250ZW50Q29udGFpbmVyJylbMF1cbiAgICBjb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9Jydcbn1cblxuZXhwb3J0e1xuICAgIGNsZWFyQ29udGVudFxufSIsImltcG9ydCBtYXAgZnJvbSAnLi9tYXAucG5nJ1xuXG5sZXQgbG9hZENvbnRhY3RUYWIgPSAoKSA9PiB7XG4gICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb250ZW50Q29udGFpbmVyJylbMF07XG5cbiAgICBsZXQgbWFpblRleHQgPSBsb2FkTWFpblRleHQoKTtcbiAgICBsZXQgaW1hZ2VTaWRlID0gbG9hZEltYWdlU2lkZSgpXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluVGV4dCk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZVNpZGUpO1xuXG59XG5cbmxldCBsb2FkTWFpblRleHQgPSAoKSA9PiB7XG5cbiAgICBsZXQgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGV4dENvbnRhaW5lcicpO1xuXG4gICAgbGV0IG1haW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5UaXRsZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFRpdGxlXCIpO1xuICAgIG1haW5UaXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IEluZm9ybWF0aW9uJztcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XG5cbiAgICBsZXQgZmllbGRzID0gWydFLW1haWwnLCdQaG9uZScsJ0luc3RhZ3JhbScsJ0FkZHJlc3MnXTtcbiAgICBsZXQgdmFsdWVzID0gWydtYXNoQnVyZ3Vlcjk5QHBvcC5jb20nLCc5MTUtNTU2LTU4MicsJ0BUaGVSZWFsTWFuc2hhQnVyZ3VlcicsJ1ByaXZhZGEgSmFtYWljYSBLaW5nIFN0cmVldCAyOTknXTtcblxuICAgIGxldCB0ZXh0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBmb3IobGV0IGkgPSAwO2k8ZmllbGRzLmxlbmd0aDtpKyspe1xuICAgICAgICBsZXQgZmllbGQgPSBjcmVhdGVDb250YWN0SW5mbyhmaWVsZHNbaV0sdmFsdWVzW2ldKTtcbiAgICAgICAgdGV4dENvbnRlbnQuYXBwZW5kQ2hpbGQoZmllbGQpO1xuICAgIH1cblxuICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRlbnQpXG4gICAgXG5cbiAgICByZXR1cm4gdGV4dENvbnRhaW5lclxuXG59IFxuXG5sZXQgY3JlYXRlQ29udGFjdEluZm8gPSAoZmllbGQsdmFsdWUpID0+IHtcbiAgICAgXG4gICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBgJHtmaWVsZH06ICR7dmFsdWV9YDtcbiAgICByZXR1cm4gY29udGFjdFxuICAgIFxufVxuXG5sZXQgbG9hZEltYWdlU2lkZSA9ICgpID0+IHtcbiAgICBcbiAgICBsZXQgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWFnZUNvbnRhaW5lcicpO1xuICAgIFxuICAgIGxldCBpbWFnZUNvbnRhaW5lclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2VDb250YWluZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdpbWFnZUNvbnRhaW5lclRpdGxlJylcbiAgICBpbWFnZUNvbnRhaW5lclRpdGxlLnRleHRDb250ZW50ID0gJ1doZXJlIHdlIGFyZSBsb2NhdGVkISdcbiAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lclRpdGxlKVxuXG4gICAgbGV0IGltYWdlQ29udGFpbmVyaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZUNvbnRhaW5lcmltYWdlLmNsYXNzTGlzdC5hZGQoJ2ltYWdlQ29udGFpbmVySW1hZ2UnKVxuICAgIGltYWdlQ29udGFpbmVyaW1hZ2Uuc3JjID0gbWFwXG5cbiAgICBpbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcmltYWdlKVxuXG4gICAgcmV0dXJuIGltYWdlQ29udGFpbmVyXG59XG5cbmV4cG9ydHtcbiAgICBsb2FkQ29udGFjdFRhYlxufVxuXG5cbiIsIi8qQ3JlYXRlcyBob21lUGFnZSAqL1xubGV0IGxvYWRIb21lUGFnZSA9ICAoKSAgPT4ge1xuXG4gICAgLyogQ2hlY2tzIGZvciB0aGUgY29udGVudCBjb250YWluZXIgKi9cbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJylcblxuICAgIC8qIENyZWF0ZXMgdGhlIGhlYWRlciAqL1xuICAgIGxldCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKVxuXG4gICAgLyogQ29udGVudCovXG4gICAgbGV0IGNvbnRlbnQgPSBjcmVhdGVDb250ZW50KClcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRlbnQpXG5cbiAgICAvKkZvb3RlciovXG4gICAgbGV0IGZvb3RlciA9IGNyZWF0ZUZvb3RlcigpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChmb290ZXIpXG5cbiAgICAvKkFkZHMgdGhlIGhlYWRlciBjb250YWluZXIqL1xuICAgIGNyZWF0ZUhlYWRlclRpdGxlKGhlYWRlcilcbiAgICBjcmVhdGVUYWJCdXR0b25zKGhlYWRlcilcblxuICAgIC8qQWRkcyB0aGUgY29udGVudCBjb250YWluZXIgdG8gdGhlIGNvbnRlbnQgc2VjdGlvbiovXG4gICAgY3JlYXRlQ29udGVudENvbnRhaW5lcihjb250ZW50KVxuXG4gICAgLypBZGRzIHRoZSBmb290ZXIgVGV4dCovXG4gICAgY3JlYXRlRm9vdGVyVGV4dChmb290ZXIpXG5cbiAgICBcbn1cblxubGV0IGNyZWF0ZUhlYWRlciA9ICgpID0+e1xuICAgICAgICAvKkhlYWRlciBDb250YWluZXIgKi9cbiAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcbiAgICByZXR1cm4gaGVhZGVyXG59XG5cbi8qIENyZWF0ZXMgdGhlIGhlYWRlciB0aXRsZSAqL1xubGV0IGNyZWF0ZUhlYWRlclRpdGxlID0gKGhlYWRlcikgPT4ge1xuXG4gICAgbGV0IGhlYWRlclRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyVGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyVGl0bGVDb250YWluZXInKVxuXG4gICAgbGV0IGhhbWJ1cmd1ZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGhhbWJ1cmd1ZXJJY29uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zJyk7XG4gICAgaGFtYnVyZ3Vlckljb24udGV4dENvbnRlbnQgPSAnZmFzdGZvb2QnO1xuICAgIGhlYWRlclRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhhbWJ1cmd1ZXJJY29uKVxuXG5cbiAgICBsZXQgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdoZWFkZXJUaXRsZScpXG4gICAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSAnTWFuc2hhQnVyZ3VlcidcbiAgICBoZWFkZXJUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSlcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZUNvbnRhaW5lcilcbn1cblxuLyogQ3JlYXRlcyB0aGUgb3B0aW9uIGNvbnRhaW5lciB3aXRoIHRoZSBvcHRpb25zICovXG5sZXQgY3JlYXRlVGFiQnV0dG9ucyA9IChoZWFkZXIpID0+e1xuICAgIFxuICAgIC8qQ3JlYXRlcnMgdGhlIGNvbnRhaW5lciBmb3IgdGhlIGJ1dHRvbnMqL1xuICAgIGxldCBvcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG9wdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdvcHRpb25Db250YWluZXInKVxuXG4gICAgXG5cbiAgICAvKiBDcmVhdGVzIHRoZSBob21lIGJ1dHRvbiAqL1xuICAgIGxldCBob21lQnV0dG9uICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b25Gcm9udCcpXG4gICAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb21lJ1xuICAgIGhvbWVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsJ2hvbWUnKVxuICAgIG9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lQnV0dG9uKVxuXG4gICAgLyogQ3JlYXRlcyB0aGUgTWVudSBidXR0b24gKi9cbiAgICBsZXQgbWVudUJ1dHRvbiAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uRnJvbnQnKVxuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSAnTWVudSdcbiAgICBtZW51QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdtZW51JylcbiAgICBvcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbilcblxuICAgIC8qIENyZWF0ZXMgdGhlIGFib3V0IGJ1dHRvbiAqL1xuICAgIGxldCBhYm91dEJ1dHRvbiAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGFib3V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbkZyb250JylcbiAgICBhYm91dEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBYm91dCdcbiAgICBhYm91dEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnYWJvdXQnKVxuICAgIG9wdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dEJ1dHRvbilcblxuXG4gICAgLyogQ3JlYXRlcyB0aGUgY29udGFjdCBidXR0b24gKi9cbiAgICBsZXQgY29udGFjdEJ1dHRvbiAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uRnJvbnQnKVxuICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGFjdCdcbiAgICBjb250YWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdjb250YWN0JylcbiAgICBvcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbilcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChvcHRpb25Db250YWluZXIpXG5cbiAgIFxufVxuXG4vKkNyZWF0ZXMgQ29udGVudCBTZWN0aW9uKi9cbmxldCBjcmVhdGVDb250ZW50ID0gKCkgPT4ge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKVxuICAgIHJldHVybiBjb250ZW50XG59XG5cbi8qQ3JlYXRlIGNvbnRlbnQgY29udGFpbmVyKi9cbmxldCBjcmVhdGVDb250ZW50Q29udGFpbmVyID0gKGNvbnRlbnQpID0+IHtcbiAgICBsZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250ZW50Q29udGFpbmVyJylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpXG59XG5cbi8qIENyZWF0ZXMgdGhlIGZvb3RlciAqL1xubGV0IGNyZWF0ZUZvb3RlciA9ICgpID0+e1xuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJylcbiAgICBcbiAgICByZXR1cm4gZm9vdGVyXG59XG5cbi8qQ3JlYXRlcyBhIGZvb3RlciovXG5sZXQgY3JlYXRlRm9vdGVyVGV4dCA9IChmb290ZXIpID0+IHtcblxuICAgIGxldCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9ICdBIHByb2plY3QgYnkgQWxlamFuZHJvIEJhbnVlbG9zJztcbiAgICBmb290ZXJUZXh0LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlclRleHQnKVxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KVxuXG59XG5cblxuXG5leHBvcnR7XG4gICAgbG9hZEhvbWVQYWdlXG59IiwiaW1wb3J0IGNoZWZIZWFkTWF5YSBmcm9tICcuL2NoZWZIZWFkTWF5YS5wbmcnXG5cblxubGV0IGxvYWRIb21lVGFiID0gKCkgPT4ge1xuICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29udGVudENvbnRhaW5lcicpWzBdXG5cbiAgICBsZXQgbWFpblRleHQgPSBsb2FkTWFpblRleHQoKVxuICAgIGxldCBpbWFnZVNpZGUgPSBsb2FkSW1hZ2VTaWRlKClcblxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblRleHQpXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZVNpZGUpXG5cblxuXG59XG5cbmxldCBsb2FkTWFpblRleHQgPSAoKSA9PiB7XG5cbiAgICBsZXQgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0ZXh0Q29udGFpbmVyJylcblxuICAgIGxldCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1haW5UaXRsZS5jbGFzc0xpc3QuYWRkKFwibWFpblRpdGxlXCIpO1xuICAgIG1haW5UaXRsZS50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIE1hbnNoYUJ1cmd1ZXIgY2FuIEkgZ2V0IHlvdXIgb3JkZXI/J1xuICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpblRpdGxlKVxuICAgIFxuICAgIHJldHVybiB0ZXh0Q29udGFpbmVyXG5cbn0gXG5cbmxldCBsb2FkSW1hZ2VTaWRlID0gKCkgPT4ge1xuICAgIGxldCBob21lSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBob21lSW1hZ2UuY2xhc3NMaXN0LmFkZCgnaG9tZUltYWdlJylcbiAgICBob21lSW1hZ2Uuc3JjID0gY2hlZkhlYWRNYXlhXG5cbiAgICByZXR1cm4gaG9tZUltYWdlXG59XG5cblxuXG5leHBvcnR7XG4gICAgbG9hZEhvbWVUYWJcbn0iLCIvKiBDcmVhdGlvbiBvZiB0aGUgbWVudSBpdGVtICovXG5jbGFzcyBtZW51SXRlbSB7XG4gICAgY29uc3RydWN0b3IobmFtZSxkZXNjcmlwdGlvbixwcmljZSxwaG90bykge1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgIHRoaXMucHJpY2UgPSBwcmljZVxuICAgICAgdGhpcy5waG90byA9IHBob3RvXG4gICAgfSAgXG59XG5cbmV4cG9ydHtcbiAgICBtZW51SXRlbVxufSIsImltcG9ydCB7IG1lbnVJdGVtIH0gZnJvbSBcIi4vbWVudUl0ZW1cIjtcbmltcG9ydCBkb3VibGUgZnJvbSAnLi9kb3VibGVCdXJnZXIucG5nJ1xuaW1wb3J0IGd1YWNhbW9sZSBmcm9tICcuL2d1YWNhbW9sZUJ1cmdlci5wbmcnXG5pbXBvcnQgY2hpY2tlblNhbmR3aWNoIGZyb20gJy4vbWF5YUNoaWNrZW5TYW5kd2ljaC5wbmcnXG5pbXBvcnQgbW9uc3RlciBmcm9tICcuL21vbnN0ZXIucG5nJ1xuaW1wb3J0IHBhcGFzIGZyb20gJy4vcGFwYXNCdXJnZXIucG5nJ1xuaW1wb3J0IHNocmltcCBmcm9tICcuL3NocmltcC5wbmcnXG5cbmxldCBsb2FkTWVudVRhYiA9ICgpID0+IHtcbiAgICBsZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbnRlbnRDb250YWluZXInKVswXVxuXG4gICAgbGV0IG1lbnUgPSBjcmVhdGVNZW51RE9NKClcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUpXG59XG5cblxubGV0IGNyZWF0ZU1lbnVET00gPSAoKSA9PiB7XG4gICAgbGV0IG1lbnVJdGVtcyA9IGNyZWF0ZU1lbnVJdGVtcygpXG5cbiAgICBsZXQgbWVudUl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51SXRlbXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1zQ29udGFpbmVyJylcblxuXG5cbiAgICBtZW51SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcblxuICAgICAgICAvKkl0ZW0gQ29udGFpbmVyICovXG4gICAgICAgIGxldCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgaXRlbUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJyxpdGVtLm5hbWUpXG4gICAgICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXRlbUNvbnRhaW5lcicpXG5cbiAgICAgICAgLypUZXh0IFNpZGUgKi9cbiAgICAgICAgbGV0IHRleHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGV4dFNpZGUuY2xhc3NMaXN0LmFkZCgndGV4dFNpZGVNZW51JylcblxuICAgICAgICAvKk5hbWUqL1xuICAgICAgICBsZXQgbmFtZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBuYW1lSXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtTmFtZScpXG4gICAgICAgIG5hbWVJdGVtLnRleHRDb250ZW50ID0gaXRlbS5uYW1lXG4gICAgICAgIHRleHRTaWRlLmFwcGVuZENoaWxkKG5hbWVJdGVtKVxuXG4gICAgICAgIC8qZGVzY3JpcHRpb24qL1xuICAgICAgICBsZXQgZGVzY3JpcHRpb25JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGVzY3JpcHRpb25JdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW1EZXNjcmlwdGlvbicpXG4gICAgICAgIGRlc2NyaXB0aW9uSXRlbS50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb25cbiAgICAgICAgdGV4dFNpZGUuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JdGVtKVxuXG4gICAgICAgIC8qcHJpY2UqL1xuICAgICAgICBsZXQgcHJpY2VJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJpY2VJdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW1QcmljZScpXG4gICAgICAgIHByaWNlSXRlbS50ZXh0Q29udGVudCA9IGBQcmljZTogJHtpdGVtLnByaWNlfSAkYFxuICAgICAgICB0ZXh0U2lkZS5hcHBlbmRDaGlsZChwcmljZUl0ZW0pXG5cbiAgICAgICAgbGV0IGltYWdlSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGltYWdlSXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtSW1hZ2UnKVxuICAgICAgICBpbWFnZUl0ZW0uc3JjID0gaXRlbS5waG90b1xuXG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQodGV4dFNpZGUpXG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VJdGVtKVxuICAgICAgICBcbiAgICAgICAgbWVudUl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpXG5cbiAgICB9KTtcbiAgICByZXR1cm4gbWVudUl0ZW1zQ29udGFpbmVyXG59XG5cbi8qIENyZWF0ZXMgYW4gYXJyYXkgZm9yIGVhY2ggb2YgdGhlIG1lbnUgaXRlbXMgKi9cbmxldCBjcmVhdGVNZW51SXRlbXMgPSAoKSA9PiB7XG4gICAgbGV0IG5hbWVzICAgPSBbJ0RvdWJsZSBNYW5zaGEgQnVyZ2VyJywnR3VhY2EtTWFuc2hhQnVyZ2VyJywnQ3VjbyBDaGlja2VuIFNhbmR3aWNoJywnTW9uc3RlciBZb3NoaSBCdXJnZXInLCdJbnNhbmUgRnJ5IEJ1cmdlcicsJ0NyYXp5IFNocmltcCBCdXJnZXInXVxuICAgIGxldCBkZXNjcmlwdGlvbnMgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gRG9uZWMgYWxpcXVldCBsYW9yZWV0IHNlbXBlci4gRG9uZWMgbmlzbCBmZWxpcywgbGFvcmVldCBxdWlzIG5pc2wgcHVsdmluYXIsIHRlbXB1cyB1bHRyaWNpZXMgZW5pbS4gTW9yYmkgbm9uIHByZXRpdW0gZXJvcywgaWQgY29udmFsbGlzIGxlY3R1cy4gUXVpc3F1ZSBhbGlxdWFtIGNvbnZhbGxpcyBtYXNzYSBub24gZGljdHVtLiBDcmFzIGF0IGR1aSBhdCBhdWd1ZSB0aW5jaWR1bnQgZWxlbWVudHVtIHZpdGFlIGlkIG5lcXVlLiBRdWlzcXVlIG1pIHB1cnVzLCB2ZXN0aWJ1bHVtIGF0LidcbiAgICBsZXQgcHJpY2VzID0gWzMwLDI1LDE1LDUwLDEwLDIwXVxuICAgIGxldCBpbWFnZXMgPSBbZG91YmxlLGd1YWNhbW9sZSxjaGlja2VuU2FuZHdpY2gsbW9uc3RlcixwYXBhcyxzaHJpbXBdXG5cbiAgICBsZXQgbWVudUl0ZW1zID0gW11cblxuICAgIGZvcihsZXQgaSA9IDA7aTxuYW1lcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgbWVudUl0ZW1zLnB1c2goY3JlYXRlTWVudUl0ZW0obmFtZXNbaV0sZGVzY3JpcHRpb25zLHByaWNlc1tpXSxpbWFnZXNbaV0pKVxuICAgIH1cblxuICAgIHJldHVybiBtZW51SXRlbXNcbn1cbi8qIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhIG5ldyBpdGVtICovXG5sZXQgY3JlYXRlTWVudUl0ZW0gPSAobmFtZSxkZXNjcmlwdGlvbixwcmljZSxwaG90bykgPT57XG4gICAgcmV0dXJuIG5ldyBtZW51SXRlbShuYW1lLGRlc2NyaXB0aW9uLHByaWNlLHBob3RvKVxufVxuXG5leHBvcnR7XG4gICAgbG9hZE1lbnVUYWJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtsb2FkSG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBsb2FkSG9tZVRhYiB9IGZyb20gXCIuL2hvbWVUYWJcIjtcbmltcG9ydCB7IGxvYWRBYm91dFRhYiB9IGZyb20gXCIuL2Fib3V0VGFiXCI7XG5pbXBvcnQgeyBsb2FkQ29udGFjdFRhYiB9IGZyb20gXCIuL2NvbnRhY3RUYWJcIjtcbmltcG9ydCB7IGxvYWRNZW51VGFiIH0gZnJvbSBcIi4vbWVudVRhYlwiO1xuaW1wb3J0IHtjbGVhckNvbnRlbnR9IGZyb20gJy4vY2xlYXJGdW5jdGlvbidcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5cblxuY29uc29sZS5sb2coJ0hvbGEnKVxuXG5sb2FkSG9tZVBhZ2UoKVxubG9hZEhvbWVUYWIoKVxuXG4vKiBIb21lICovXG5cbmxldCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKVxuXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PntcbiAgICBjbGVhckNvbnRlbnQoKVxuICAgIGxvYWRIb21lVGFiKClcbn0pXG5cbi8qIE1lbnUgKi9cblxubGV0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpXG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgY2xlYXJDb250ZW50KClcbiAgICBsb2FkTWVudVRhYigpXG59KVxuXG4vKiBBYm91dCAqL1xubGV0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0JylcblxuYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgY2xlYXJDb250ZW50KClcbiAgICBsb2FkQWJvdXRUYWIoKVxufSlcblxuLyogQ29udGFjdCAqL1xubGV0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpXG5cbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgY2xlYXJDb250ZW50KClcbiAgICBsb2FkQ29udGFjdFRhYigpXG59KVxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
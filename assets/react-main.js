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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./react-app/app/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./react-app/app/main.js":
/*!*******************************!*\
  !*** ./react-app/app/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/photon/Downloads/Codes/project-management-application/react-app/app/main.js: Unexpected token (17:4)\\n\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m\\u001b[90m// Root Level of the Single Page App\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39mrender(\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 17 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33mProvider\\u001b[39m store\\u001b[33m=\\u001b[39m{store}\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 18 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 19 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mProvider\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 20 | \\u001b[39m    document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m'react-app'\\u001b[39m)\\u001b[0m\\n    at Parser.raise (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:3831:17)\\n    at Parser.unexpected (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:5143:16)\\n    at Parser.parseExprAtom (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:6283:20)\\n    at Parser.parseExprSubscripts (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:5862:23)\\n    at Parser.parseMaybeUnary (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:5842:21)\\n    at Parser.parseExprOps (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:5729:23)\\n    at Parser.parseMaybeConditional (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:5702:23)\\n    at Parser.parseMaybeAssign (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:5647:21)\\n    at Parser.parseExprListItem (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:6940:18)\\n    at Parser.parseCallExpressionArguments (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:6070:22)\\n    at Parser.parseSubscript (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:5965:29)\\n    at Parser.parseSubscripts (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:5882:19)\\n    at Parser.parseExprSubscripts (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:5872:17)\\n    at Parser.parseMaybeUnary (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:5842:21)\\n    at Parser.parseExprOps (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:5729:23)\\n    at Parser.parseMaybeConditional (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:5702:23)\\n    at Parser.parseMaybeAssign (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:5647:21)\\n    at Parser.parseExpression (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:5595:23)\\n    at Parser.parseStatementContent (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:7378:23)\\n    at Parser.parseStatement (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:7243:17)\\n    at Parser.parseBlockOrModuleBlockBody (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:7810:25)\\n    at Parser.parseBlockBody (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:7797:10)\\n    at Parser.parseTopLevel (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:7181:10)\\n    at Parser.parse (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:8658:17)\\n    at parse (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/parser/lib/index.js:10658:38)\\n    at parser (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\\n    at normalizeFile (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\\n    at runSync (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at runAsync (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/core/lib/transformation/index.js:35:14)\\n    at process.nextTick (/home/photon/Downloads/Codes/project-management-application/node_modules/@babel/core/lib/transform.js:34:34)\\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\\n    at process._tickCallback (internal/process/next_tick.js:180:9)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFjdC1hcHAvYXBwL21haW4uanMuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./react-app/app/main.js\n");

/***/ })

/******/ });
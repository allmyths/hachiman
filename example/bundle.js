(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _hachiman = _interopRequireDefault(require("../lib/hachiman"));

var _dom = require("../lib/dom");

function Title() {
  return _hachiman.default.create("h1", null, "Título");
}

var App = () => {
  return _hachiman.default.create("section", {
    className: "app"
  }, _hachiman.default.create(Title, null), _hachiman.default.create("div", null, _hachiman.default.create("button", null, "Ok")));
};

(0, _dom.render)(_hachiman.default.create(App, null), document.querySelector('[data-js="main"]'));

},{"../lib/dom":2,"../lib/hachiman":3,"@babel/runtime/helpers/interopRequireDefault":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;

function createHTMLElement(vNode) {
  if (typeof vNode === "string" || typeof vNode === "number") {
    return document.createTextNode("".concat(vNode));
  }

  var $domElement = document.createElement(vNode.tagName);
  vNode.props.children.forEach(vChild => {
    var child = createHTMLElement(vChild);
    $domElement.appendChild(child);
  });
  return $domElement;
}

function render(initialVirtualTree, $domRoot) {
  // console.log(JSON.stringify(initialVirtualTree, null, 4));
  var $appHTML = createHTMLElement(initialVirtualTree);
  $domRoot.appendChild($appHTML);
}
},{}],3:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function create(elementType, props) {
  if (!elementType) throw new TypeError("elementType undefined");

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  var virtualProps = _objectSpread(_objectSpread({}, props), {}, {
    children
  });

  if (typeof elementType === "function") {
    return elementType(virtualProps);
  }

  return {
    tagName: elementType,
    props: virtualProps
  };
}

var Hachiman = {
  create
};
var _default = Hachiman;
exports.default = _default;
},{"@babel/runtime/helpers/defineProperty":4,"@babel/runtime/helpers/interopRequireDefault":5}],4:[function(require,module,exports){
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
},{}],5:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}]},{},[1]);

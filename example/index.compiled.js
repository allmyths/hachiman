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

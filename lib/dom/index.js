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
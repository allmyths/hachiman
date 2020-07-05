function createHTMLElement(vNode) {
  if (typeof vNode === "string" || typeof vNode === "number") {
    return document.createTextNode(`${vNode}`);
  }

  const $domElement = document.createElement(vNode.tagName);

  vNode.props.children.forEach((vChild) => {
    const child = createHTMLElement(vChild);
    $domElement.appendChild(child);
  });

  return $domElement;
}

export function render(initialVirtualTree, $domRoot) {
  // console.log(JSON.stringify(initialVirtualTree, null, 4));

  const $appHTML = createHTMLElement(initialVirtualTree);
  $domRoot.appendChild($appHTML);
}

export function create(elementType, props, ...children) {
  if (!elementType) throw new TypeError("elementType undefined");

  const virtualProps = {
    ...props,
    children,
  };

  if (typeof elementType === "function") {
    return elementType(virtualProps);
  }

  return {
    tagName: elementType,
    props: virtualProps,
  };
}

const Hachiman = {
  create,
};

export default Hachiman;

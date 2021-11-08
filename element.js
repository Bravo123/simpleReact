function PElement(tagName, props, children) {
  this.tagName = tagName;
  this.props = props;
  this.children = children;
}

PElement.prototype.render = function () {
  let el = document.createElement(this.tagName);
  let props = this.props
  let children = this.children || [];

  for (const propsName in props) {
    if (Object.prototype.hasOwnProperty.call(props, propsName)) {
      const propsVal = props[propsName];
      el.setAttribute(propsName, propsVal);
    }
  }

  children.forEach((child) => {
    let childEl = (child instanceof PElement) ? child.render() : document.createTextNode(child);
    el.appendChild(childEl);
  })

  return el;
}

export default function (tagName, props, children) {
  return new PElement(tagName, props, children);
}
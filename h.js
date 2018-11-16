const is = (type, value) => {
  if (value == null) {
    return false;
  }

  if (value instanceof type) {
    return true;
  }

  if (value.constructor === type) {
    return true;
  }

  if (value.constructor.name === type.name) {
    return true;
  }

  return false;
};

const alwaysArray = (x) =>
  Array.isArray(x) ? x : [x];

const isAttributes = (x) => (
  !is(String, x) && !Array.isArray(x)
)

export const h = (tag = 'div', ...args) => {
  let attributes;
  let children;

  const firstArg = args[0];
  const secondArg = args[1];

  if (isAttributes(firstArg)) {
    attributes = firstArg || {};
    children = secondArg || [];
  } else {
    attributes = {};
    children = firstArg || [];
  }

  const element = document.createElement(tag);

  Object.keys(attributes).forEach((key) => {
    element.setAttribute(key, attributes[key]);
  });

  alwaysArray(children).forEach((child) => {
    if (is(String, child)) {
      element.insertAdjacentHTML('beforeend', child);
    } else {
      element.appendChild(child);
    }
  });

  return element;
};

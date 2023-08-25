export class Component {
  constructor(options = {}) {
    const {
      tagName,
      className,
      id,
      html = {
        position: null,
        text: null,
      },
      textContent,
      children = [],
      events = [],
      ...attrs
    } = options;
    const element = document.createElement(tagName);
    element.className = className;
    element.id = id;

    const hasHTML = html.position && html.text;

    hasHTML && element.insertAdjacentHTML(html.position, html.text);
    if (textContent) element.textContent = textContent;

    for (let key in attrs) {
      const value = attrs[key];
      element[key] = value;
    }
    children && element.append(...children);

    return element;
  }
}

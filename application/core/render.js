export const render = (parent, element) => {
  parent.append(element);
};

export const insert = (parent, html) => {
  parent.innerHTML = html;
};

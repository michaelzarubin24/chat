import { Component } from "./core/component.js";
import { render, insert } from "./core/render.js";

const chat = new Component({
  tagName: "div",
  id: "chat",
  children: [
    new Component({
      tagName: "div",
      className: "screen",
      style: "background: darkmagenta;",
    }),
    new Component({ tagName: "div", className: "keyboard" }),
    new Component({ tagName: "div", className: "gif" }),
  ],
});
const mainKeyboard = new Component({
  tagName: "div",
  className: "main-keyboard",
});

render(document.body, chat);
render(document.body, mainKeyboard);

console.log([chat], "chat");

import Hachiman from "../lib/hachiman";
import { render } from "../lib/dom";

function Title() {
  return Hachiman.create("h1", null, "Título");
}

const App = () => {
  return Hachiman.create(
    "section",
    {
      className: "app",
    },
    Hachiman.create(Title, null),
    Hachiman.create("div", null, Hachiman.create("button", null, "Ok"))
  );
};

render(Hachiman.create(App, null), document.querySelector('[data-js="main"]'));

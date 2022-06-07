import Reef from "./reef/reef.es.min.js";
import template from "./templates.js";
import { getData, setData } from "./storage.js";

//
// Variables
//

const data = { items: getData() };
const app = new Reef("#app", { data, template });

//
// Functions
//

function handleSubmit(event) {
  event.preventDefault();

  const input = event.target.elements["to-do"];
  if (!input) return;

  const value = input.value.trim();
  if (!value) return;

  const toDo = { name: value, done: false };
  app.data.items.push(toDo);

  input.value = "";
}

function handleClick(event) {
  const { action } = event.target.dataset;
  if (action !== "clear") return;

  const message = "Are you sure you want to clear your to-do list?";
  const confirmClear = window.confirm(message);
  if (!confirmClear) return;

  app.data.items = [];
}

function handleChange(event) {
  const { index } = event.target.dataset;
  if (!index) return;

  app.data.items[index].done = event.target.checked;
}

function handleRender() {
  setData(app.data.items);
}

//
// Inits & Event Listeners
//

app.render();

app.elem.addEventListener("click", handleClick);
app.elem.addEventListener("change", handleChange);
app.elem.addEventListener("submit", handleSubmit);
app.elem.addEventListener("reef:render", handleRender);

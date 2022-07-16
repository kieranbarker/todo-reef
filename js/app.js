import { store, component } from "./reef/reef.es.min.js";
import template from "./templates.js";
import { getToDos, setToDos } from "./storage.js";

//
// Constants
//

const toDos = store(getToDos());
const app = document.querySelector("#app");

//
// Functions
//

function handleSubmit(event) {
  event.preventDefault();

  const input = event.target.elements.newToDo;
  if (!input) return;

  const value = input.value.trim();
  if (!value) return;

  const toDo = { name: value, done: false };
  toDos.push(toDo);

  input.value = "";
}

function handleClick(event) {
  const { action } = event.target.dataset;
  if (action !== "clear") return;

  const message = "Are you sure you want to clear your to-do list?";
  const confirmClear = window.confirm(message);
  if (!confirmClear) return;

  while (toDos.length > 0) {
    toDos.pop();
  }
}

function handleChange(event) {
  const { index } = event.target.dataset;
  if (!index) return;

  const toDo = toDos[index];
  toDo.done = event.target.checked;
}

function handleRender() {
  setToDos(toDos);
}

//
// Inits & Event Listeners
//

component(app, template.bind(null, toDos));

app.addEventListener("click", handleClick);
app.addEventListener("change", handleChange);
app.addEventListener("submit", handleSubmit);
app.addEventListener("reef:render", handleRender);

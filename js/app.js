import { store, component } from "./reef/reef.es.js";
import { nanoid } from "./nanoid/nanoid.js";
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

  const toDo = { id: nanoid(), name: value, done: false };
  toDos.push(toDo);

  input.value = "";
}

function handleClick(event) {
  const { action } = event.target.dataset;
  if (action !== "delete") return;

  const listItem = event.target.closest(".toDo");
  if (!listItem) return;

  const { name, index } = listItem.dataset;
  if (!name || !index) return;

  const message = `Are you sure you want to delete '${name}'?`;

  const confirmDelete = window.confirm(message);
  if (!confirmDelete) return;

  toDos.splice(index, 1);
}

function handleChange(event) {
  const listItem = event.target.closest(".toDo");
  if (!listItem) return;

  const { index } = listItem.dataset;
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

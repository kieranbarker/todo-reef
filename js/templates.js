import { htmlSpecialChars } from "./utilities.js";

function template(toDos) {
  const prompt = /*html*/ `
    <p>
      <em>Add some to-dos...</em>
    </p>
  `;

  const toDoList = /*html*/ `
    <ul role="list">
      ${toDos.map(toDo).join("")}
    </ul>
  `;

  return `
    ${form()}
    ${toDos.length < 1 ? prompt : toDoList}
  `;
}

function form() {
  const inputId = "newToDo";

  return /*html*/ `
    <form class="form">
      <p>
        <label for="${inputId}">What do you need to do?</label>
        <input id="${inputId}" type="text" required />
      </p>
      <p>
        <button type="submit">Add to-do</button>
      </p>
    </form>
  `;
}

function toDo(toDo, index) {
  const inputId = `toDo-${index}`;
  const checked = toDo.done ? "checked" : "";

  return /*html*/ `
    <li
      id="${toDo.id}"
      class="toDo"
      data-name="${toDo.name}"
      data-index="${index}"
    >
      <input id="${inputId}" type="checkbox" ${checked} />
      <label for="${inputId}">${htmlSpecialChars(toDo.name)}</label>
      <button
        type="button"
        data-action="delete"
        aria-label="Delete '${toDo.name}'"
      >
        Delete
      </button>
    </li>
  `;
}

export { template as default, form, toDo };

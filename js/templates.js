import { htmlSpecialChars } from "./utilities.js";

function template({ toDos }) {
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
    ${form(toDos.length)}
    ${toDos.length < 1 ? prompt : toDoList}
  `;
}

function form(numItems = 0) {
  const inputId = "to-do";

  const clearButton = /*html*/ `
    <button type="button" data-action="clear">
      Clear list
    </button>
  `;

  return /*html*/ `
    <form>
      <p>
        <label for="${inputId}">What do you need to do?</label>
        <input id="${inputId}" type="text" required />
      </p>
      <p>
        <button type="submit">Add to-do</button>
        ${numItems > 0 ? clearButton : ""}
      </p>
    </form>
  `;
}

function toDo(toDo, index) {
  const id = `todo-${index}`;
  const checked = toDo.done ? "checked" : "";

  return /*html*/ `
    <li>
      <input type="checkbox" id="${id}" data-index="${index}" ${checked} />
      <label for="${id}">${htmlSpecialChars(toDo.name)}</label>
    </li>
  `;
}

export { template as default, form, toDo };

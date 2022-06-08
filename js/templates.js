import { htmlSpecialChars } from "./utilities.js";

function template({ toDos }) {
  const Prompt = `
    <p>
      <em>Add some to-dos...</em>
    </p>
  `;

  const ToDoList = `
    <ul role="list">
      ${toDos.map(ToDo).join("")}
    </ul>
  `;

  return `
    ${Form(toDos.length)}
    ${toDos.length < 1 ? Prompt : ToDoList}
  `;
}

function Form(numItems = 0) {
  const inputId = "to-do";

  const ClearButton = `
    <button type="button" data-action="clear">
      Clear list
    </button>
  `;

  return `
    <form>
      <p>
        <label for="${inputId}">What do you need to do?</label>
        <input id="${inputId}" type="text" required />
      </p>
      <p>
        <button type="submit">Add to-do</button>
        ${numItems > 0 ? ClearButton : ""}
      </p>
    </form>
  `;
}

function ToDo(toDo, index) {
  const id = `todo-${index}`;
  const checked = toDo.done ? "checked" : "";

  return `
    <li>
      <input type="checkbox" id="${id}" data-index="${index}" ${checked} />
      <label for="${id}">${htmlSpecialChars(toDo.name)}</label>
    </li>
  `;
}

export { template as default, Form, ToDo };

import { htmlSpecialChars } from "./utilities.js";

function template({ items }) {
  const prompt = `
    <p>
      <em>Add some to-dos...</em>
    </p>
  `;

  const toDoList = `
    <ul role="list">
      ${items.map(listItem).join("")}
    </ul>
  `;

  return `
    ${form(items.length)}
    ${items.length < 1 ? prompt : toDoList}
  `;
}

function form(numItems = 0) {
  const clearButton = `
    <button type="button" data-action="clear">
      Clear list
    </button>
  `;

  return `
    <form>
      <p>
        <label for="to-do">What do you need to do?</label>
        <input id="to-do" type="text" required />
      </p>
      <p>
        <button type="submit">Add to-do</button>
        ${numItems > 0 ? clearButton : ""}
      </p>
    </form>
  `;
}

function listItem(toDo, index) {
  const id = `todo-${index}`;
  const checked = toDo.done ? "checked" : "";

  return `
    <li>
      <input type="checkbox" id="${id}" data-index="${index}" ${checked} />
      <label for="${id}">${htmlSpecialChars(toDo.name)}</label>
    </li>
  `;
}

export { template as default, form, listItem };

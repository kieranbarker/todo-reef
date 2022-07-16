const storageKey = "todo-reef";

function getToDos() {
  const toDos = localStorage.getItem(storageKey);

  if (toDos) {
    return JSON.parse(toDos);
  }

  return [];
}

function setToDos(data) {
  localStorage.setItem(storageKey, JSON.stringify(data));
}

export { getToDos, setToDos };

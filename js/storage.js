const storageKey = "todo-reef";

function getToDos() {
  const toDos = localStorage.getItem(storageKey);

  if (toDos) {
    return JSON.parse(toDos);
  }

  return [];
}

function setToDos(toDos = []) {
  localStorage.setItem(storageKey, JSON.stringify(toDos));
}

export { getToDos, setToDos };

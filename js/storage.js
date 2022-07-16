const storageKey = "todo-reef";

function getToDos() {
  const data = localStorage.getItem(storageKey);

  if (data) {
    return JSON.parse(data);
  }

  return [];
}

function setToDos(data) {
  localStorage.setItem(storageKey, JSON.stringify(data));
}

export { getToDos, setToDos };

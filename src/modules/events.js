function setTodos() {
  fetch("./data.json")
    .then(response => response.json())
    .then(data => {
      if (!localStorage.todos) {
        localStorage.todos = JSON.stringify(data);
        location.reload();
      } else {
        localStorage.clear();
      }
    })
    .catch(err => {
      console.log(err);
    });
}

function isCompleted(li, btn_checked, todo, todos, e) {
  const new_todo = todo;
  if (todo.completed) {
    new_todo.completed = !todo.completed;
    todos.splice(todos.indexOf(todo), 1, new_todo);
    localStorage.todos = JSON.stringify(todos);
    btn_checked.className = "button is-danger is-pulled-right is-small";
    location.reload();
  } else {
    new_todo.completed = !todo.completed;
    todos.splice(todos.indexOf(todo), 1, new_todo);
    localStorage.todos = JSON.stringify(todos);
    btn_checked.className = "button is-success is-pulled-right is-small";
    location.reload();
  }
}

function updateTodo(element, input, todo, todos, event) {
  if (event.keyCode === 13) {
    const new_todo = todo;

    if (!input.value == "") {
      new_todo.title = input.value;

      todos.splice(todos.indexOf(todo), 1, new_todo);
      localStorage.todos = JSON.stringify(todos);
      location.reload();
    }
  }
}

function deleteTodo(todo, todos) {
  todos.splice(todos.indexOf(todo), 1);
  localStorage.todos = JSON.stringify(todos);
  location.reload();
}

function editTodo(element, input, todo, todos) {
  // console.log(todo);
  input.value = todo.title;
  input.style.display = "";
  element.style.display = "none";
  todo.title = input.value;
}

function cancelTodo(element, input) {
  element.style.display = "";
  input.style.display = "none";
}

module.exports = {
  updateTodo,
  deleteTodo,
  editTodo,
  cancelTodo,
  setTodos,
  isCompleted
};

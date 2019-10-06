const set_todos = document.getElementById("set_todos");

// Event listenners
set_todos.addEventListener("click", setTodos);

// Functions
function setTodos() {
  fetch("./data.json")
    .then(response => response.json())
    .then(data => {
      if (localStorage.todos) {
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

function deleteTodo(todo, todos, e) {
  todos.splice(todos.indexOf(todo), 1);
  localStorage.todos = JSON.stringify(todos);
  location.reload();
}

function editTodo(element, input, todo, todos) {
  //   console.log(todo);
  //   console.log(todos);
  input.setAttribute("style", 'display: ""');
  element.setAttribute("style", "display: none");
}

(function() {
  if (localStorage.todos) {
    const ul = document.getElementById("ul");

    const todos = JSON.parse(localStorage.todos);

    for (const todo of todos) {
      const li = document.createElement("li");
      const btn_delete = document.createElement("button");
      const input = document.createElement("input");

      li.setAttribute("class", "list-item");
      li.textContent = todo.title;

      input.setAttribute("class", "input");
      input.setAttribute("style", "display: none");
      input.value = todo.title;

      li.addEventListener(
        "dblclick",
        editTodo.bind(null, li, input, todo, todos)
      );

      btn_delete.textContent = "Delete Me";
      btn_delete.setAttribute(
        "class",
        "button is-danger is-small is-pulled-right"
      );
      btn_delete.addEventListener("click", deleteTodo.bind(null, todo, todos));

      li.appendChild(btn_delete);
      ul.appendChild(input);
      ul.appendChild(li);
    }
  }
})();

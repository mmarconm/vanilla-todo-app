const events = require("./modules/events");

const set_todos = document.getElementById("set_todos");

set_todos.addEventListener("click", events.setTodos);

(function() {
  if (localStorage.todos) {
    const ul = document.getElementById("ul");

    const todos = JSON.parse(localStorage.todos);

    for (const todo of todos) {
      // create all elements
      const li = document.createElement("li");
      const btn_delete = document.createElement("button");
      const input = document.createElement("input");

      li.className = "list-item";
      li.textContent = todo.title;
      li.addEventListener(
        "dblclick",
        events.editTodo.bind(null, li, input, todo, todos)
      );

      input.id = "input";
      input.className = "input is-success is-loading";
      input.style.display = "none";
      input.addEventListener("blur", events.cancelTodo.bind(null, li, input));
      input.addEventListener(
        "keypress",
        events.updateTodo.bind(null, li, input, todo, todos)
      );
      input.value = todo.title;

      btn_delete.textContent = "Remover";
      btn_delete.className = "button is-danger is-small is-pulled-right margin";
      btn_delete.addEventListener(
        "click",
        events.deleteTodo.bind(null, todo, todos)
      );

      li.appendChild(btn_delete);
      ul.appendChild(input);
      ul.appendChild(li);
    }
  }
})();

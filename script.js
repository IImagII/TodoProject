let todos = [];

function addTodo(text) {
   const todo = {
      text,
      isDone: false,
      id: `${Math.floor(Math.random() * 100) + 1}`,
   };
   todos.push(todo);
}

function deleteTodo(id) {
   todos.forEach((todo) => {
      if (todo.id === id) {
         todo.isDone = true;
      }
   });
}

function render() {
   console.log(todos);
}
addTodo('пробная');
render();

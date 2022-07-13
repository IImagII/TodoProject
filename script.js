let todos = [];

function addTodo(text) {
   const todo = {
      text,
      isDone: false,
      id: `${Math.floor(Math.random() * 100) + 1}`,
   };
   todos.push(todo);
}
console.log(todos);

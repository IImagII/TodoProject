let todos = [];
const todoNode = document.querySelector('.task__render');

function addTodo(text) {
   const todo = {
      text,
      isDone: false,
      isShowDone: 'не сделано',
      id: `${Math.floor(Math.random() * 1000) + 1}`,
   };
   todos.push(todo);
}

function deleteTodo(id) {
   todos.forEach((todo) => {
      if (todo.id === id) {
         todo.isDone = true;
         todo.isShowDone = 'cделано';
      }
   });
}

function render() {
   let html = '';
   todos.forEach((todo) => {
      if (todo.isDone) {
         return;
      }
      html += `<div>${todo.text}-${todo.isShowDone}</div>`;
   });
   todoNode.innerHTML = html;
}

addTodo('первый на вывод');
render();

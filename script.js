let todos = [];
const todoNode = document.querySelector('.task__render');
const getText = document.querySelector('.task__text');
const addText = document.querySelector('.task__button');

addText.addEventListener('click', function () {
   let text = getText.value;

   addTodo(text);
   render();
   getText.value = '';
});

todoNode.addEventListener('click', function (e) {
   if (e.target.tagName !== 'BUTTON') {
      return;
   }
   const id = e.target.dataset.id;
   deleteTodo(id);
   render();
});

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
      html += `<div>
      ${todo.text}-${todo.isShowDone}
      <button data-id='${todo.id}'>сделано</button>
      </div>`;
   });
   todoNode.innerHTML = html;
}

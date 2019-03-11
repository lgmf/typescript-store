import { Store, AddTodo } from "../store/index";
import { Todo, Keyboard } from "../models/index";

export default (store: Store) => {
  const listElement: HTMLUListElement = document.querySelector('#todo-list');
  const addBtn: HTMLButtonElement = document.querySelector('#add-todo');
  const inputLabel: HTMLInputElement = document.querySelector('#input-label');
  const emptyState = '<li class="-empty">Congrats! All todos are completed</li>';

  const addTodo = () => {
    const label = inputLabel.value.trim();
    const newTodo: Todo = { label, complete: false };

    if (!label) return;

    inputLabel.value = '';
    store.dispatch(new AddTodo(newTodo));
  }

  document.body.addEventListener('keypress', ({ keyCode }) => {
    if (keyCode === Keyboard.Enter) {
      addTodo();
    }
  });

  addBtn.addEventListener('click', addTodo);

  store.subscribe(({ todos }) => {
    const todoList = todos.data;
    const template = (!todoList.length)
      ? emptyState
      : todoList.map(t => `<li class="${t.complete ? '-done' : ''}">${t.label}</li>`).join('')

    listElement.innerHTML = template;
  });
}

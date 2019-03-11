import { Todo } from "../models/todo";
import { Store, AddTodo } from "../store/index";

const listElement: HTMLUListElement = document.querySelector('#todo-list');
const addBtn: HTMLButtonElement = document.querySelector('#add-todo');
const inputLabel: HTMLInputElement = document.querySelector('#input-label');
const emptyState = '<li class="-empty">Congrats! All todos are completed</li>';

export default (store: Store) => {
  addBtn.addEventListener('click', () => {
    const label = inputLabel.value.trim();
    const newTodo: Todo = { label, complete: false };

    if (!label) return;

    store.dispatch(new AddTodo(newTodo));
  });


  store.subscribe(({ todos }) => {
    const todoList = todos.data;
    const template = (!todoList.length)
      ? emptyState
      : todoList.map(t => `<li class="${t.complete ? '-done' : ''}">${t.label}</li>`).join('')

    listElement.innerHTML = template;
  });
}

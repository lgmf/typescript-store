import { State } from './models/state';
import { Todo } from './models/todo';
import { Store, todoReducer, AddTodo } from './store';

const todoList: HTMLUListElement = document.querySelector('#todo-list');
const addBtn: HTMLButtonElement = document.querySelector('#add-todo');
const inputLabel: HTMLInputElement = document.querySelector('#input-label');
const emptyState = '<li class="-empty">Congrats! All todos are completed</li>';

const initialState: State = {
  todos: []
};

const store = new Store<State>(initialState, [{ 'todos': todoReducer }]);

store.subscribe<Todo[]>('todos', todos => {
  const template = (!todos.length)
    ? emptyState
    : todos.map(t => `<li class="${t.complete ? '-done' : ''}">${t.label}</li>`).join('')

  todoList.innerHTML = template;
})

store.subscribe<Todo[]>('todos', todos => {
  console.log(todos.map(t => t.label));
});

addBtn.addEventListener('click', () => {
  const label = inputLabel.value.trim();
  const newTodo: Todo = { label, complete: false };

  if (!label) return;

  store.dispatch(new AddTodo(newTodo));
});

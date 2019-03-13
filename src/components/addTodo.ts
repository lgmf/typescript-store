import { Todo } from '../models/todo';
import { AddTodo } from '../store/actions';
import { Store } from '../store/store';
import { render } from '../utils/render';

export default (store: Store) => {
  const template = `
    <input
      id="todo-label"
      type="text"
      placeholder="What to do next?">
        
    <button id="add">Add Todo</button>
  `;

  const onInit = () => {
    const addBtn = document.querySelector('#add') as HTMLButtonElement;

    addBtn.addEventListener('click', () => {
      const { value } = document.querySelector('#todo-label') as HTMLInputElement;

      const newTodo: Todo = {
        label: value,
        complete: false
      }

      store.dispatch(new AddTodo(newTodo));
    });
  }

  render(template, '#add-todo', onInit);
}


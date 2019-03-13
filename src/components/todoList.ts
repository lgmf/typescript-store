import { Store } from '../store/store';
import { render } from '../utils/render';

export default (store: Store) => {
  store.subscribe(({ todos }) => {
    const todoList = todos.data;
    const template = (!todoList.length)
      ? '<li class="-empty">Congrats! All todos are completed</li>'
      : todoList.map(t => `<li class="${t.complete ? '-done' : ''}">${t.label}</li>`).join('')

    render(template, '#todo-list');
  });
}

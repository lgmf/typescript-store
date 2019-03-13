// Components
import TodoList from './components/todoList';
import AddTodo from './components/addTodo';

// Store
import { Reducers } from './store/models/index';
import { todoReducer } from './store/reducers';
import { Store } from './store/store';

// Styles
import './style.css';

const reducers: Reducers = [
  { 'todos': todoReducer },
  // { 'counter': counterReducer }
];

const store = new Store(reducers);

TodoList(store);
AddTodo(store);

// Counter(store);

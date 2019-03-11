import Counter from './components/counter';
import TodoList from './components/todoList';
import { counterReducer, Reducers, Store, todoReducer } from './store/index';

const reducers: Reducers = [
  { 'todos': todoReducer },
  { 'counter': counterReducer }
];

const store = new Store(reducers);

Counter(store);
TodoList(store);

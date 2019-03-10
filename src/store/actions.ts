import { Action } from './store';
import { Todo } from '../models/todo';

export const ADD_TODO = 'Add Todo';

export class AddTodo implements Action {
  type = ADD_TODO;

  constructor(public payload: Todo) {
    this.payload = payload;
  }
}
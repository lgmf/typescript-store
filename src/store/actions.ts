import { Action } from './store';
import { Todo } from '../models/todo';

export const ADD_TODO = 'Add Todo';
export const INCREMENT = 'Increment';

export class AddTodo implements Action {
  type = ADD_TODO;

  constructor(public payload: Todo) {
    this.payload = payload;
  }
}
export class Increment implements Action {
  type = INCREMENT;
}
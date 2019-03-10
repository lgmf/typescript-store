
import { Action } from './store';
import { ADD_TODO } from './actions';

export const todoReducer = (state: any, action: Action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload
        ]
      }; 
    }
    default:
      return state;
  }
}

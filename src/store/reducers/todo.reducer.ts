
import { TodoState } from '../../models/state';
import { ADD_TODO } from '../actions';
import { Action } from '../models/index';


const initialState: TodoState = {
  data: []
};

export function todoReducer(state: TodoState = initialState, action: Action) {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        data: [
          ...state.data,
          action.payload
        ]
      };
    }
  }

  return state;
}

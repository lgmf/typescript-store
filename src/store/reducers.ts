
import { Action } from './store';
import { ADD_TODO, INCREMENT } from './actions';
import { TodoState } from '../models/state';

const initialState: TodoState = {
  data: []
};

export function todoReducer(state = initialState, action: Action) {
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

export function counterReducer(state = { count: 0 }, action: Action) {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        count: state.count + 1
      }
    }
  }

  return state;
}
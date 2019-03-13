
import { CounterState } from '../../models/state';
import { INCREMENT } from '../actions';
import { Action } from '../models/index';

const initialState: CounterState = {
  count: 0
}

export function counterReducer(state: CounterState = initialState, action: Action) {
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

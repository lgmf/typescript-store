import { Action } from './action';

export type Reducer = { [key: string]: (state: any, action: Action) => any };
export type Reducers = Reducer[];

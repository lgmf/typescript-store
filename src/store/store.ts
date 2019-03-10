export interface Action {
  type: string;
  payload: any;
}

type Reducer = [
  { [key: string]: (state: any, action: Action) => any }
];

type Subscriber = { 
  [key: string]: Function[]
};

export class Store<T> {

  private subscribers: Subscriber = {};
  private reducers: Reducer;
  private _state: T;

  constructor(initialState: T, reducers: Reducer) { 
    this._state = initialState;
    this.reducers = reducers;
  }

  get state(): T {
    return this._state;
  }

  subscribe<S>(key: string, fn: (value: S) => any) {
    const value = this.state[key] as S;
    const subs = this.subscribers[key] || [];

    fn(value);

    this.subscribers = {
      ...this.subscribers,
      [key]: [ ...subs, fn ]
    }
  }

  dispatch(action: Action) {
    this.reducers.forEach(reducer => {
      const channel = Object.keys(reducer)[0];
      const fn = Object.values(reducer)[0];
      const newState = fn(this.state, action);

      this._state = Object.assign({}, this._state, newState);
      this.notify(channel);
    });
  }

  private notify(channel: string) {
    const subs = this.subscribers[channel] || [];
    const value = this.state[channel];

    subs.forEach(s => s(value));
  }

}

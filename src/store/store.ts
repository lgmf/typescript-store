import { Subscribers, Reducers, Subscriber, Subscription, Action } from './models/index';

export class Store {
  private subscribers: Subscribers = [];
  private reducers: Reducers;
  private _state: any;

  constructor(reducers: Reducers) {
    this.reducers = reducers;
    this.reduce({}, { type: null });
  }

  get state() {
    return this._state;
  }

  subscribe(subscriber: Subscriber): Subscription {
    this.subscribers = [...this.subscribers, subscriber];
    subscriber(this.state);

    return {
      unsubscribe: () => this.unsubscribe(subscriber)
    }
  }

  dispatch(action: Action) {
    this.reduce(this.state, action);
  }

  private reduce(state, action) {
    this.reducers.forEach(reducer => {
      const channel = Object.keys(reducer)[0];
      const fn = Object.values(reducer)[0];
      const newState = fn(state[channel], action);

      this._state = Object.assign({}, this._state, { [channel]: newState });
      this.notify();
    });
  }

  private notify() {
    this.subscribers.forEach(s => s(this.state));
  }

  private unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter(s => s !== subscriber)
  }

}

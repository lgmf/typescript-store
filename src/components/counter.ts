import { Store } from "../store/store";
import { Increment } from "../store/index";

export default (store: Store) => {
  const incrementBtn: HTMLButtonElement = document.querySelector('#increment-count');
  const countResult = document.querySelector('#count-result');

  incrementBtn.addEventListener('click', () => {
    store.dispatch(new Increment());
    console.log(store.state);
  });

  const subscription = store.subscribe(({ counter }) => {
    const { count } = counter;
    countResult.textContent = `Count: ${count}`;

    if (count === 5) {
      subscription.unsubscribe();
    }
  });
}




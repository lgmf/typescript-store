export const render = (template: string, container: string, onInit?: Function) => {
  const node = document.querySelector(container);

  if (!node) return;

  node.innerHTML = template;

  if (!!onInit) {
    onInit();
  }
}

export default class Section {
  constructor({ renderer }, selector) {
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  renderItems(data) {
    this._renderer(data);
  }

  addItem(item) {
    this._container.prepend(item);
  }
}

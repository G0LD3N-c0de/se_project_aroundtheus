export default class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  renderItems() {
    this._items.forEach((item) => {
      const markup = this._renderer(item);
      this.addItem(markup);
    });
  }

  addItem(markup) {
    this._container.append(markup);
  }
}

export default class UserInfo {
  constructor({ nameSelector, descriptionSelector }) {
    this._name = document.querySelector(nameSelector);
    this._description = document.querySelector(descriptionSelector);
  }

  getUserInfo() {
    const name = this._name.textContent;
    const description = this._description.textContent;
    return { name, description };
  }

  setUserInfo(data) {
    this._name.textContent = data.title;
    this._description.textContent = data.subtitle;
  }
}

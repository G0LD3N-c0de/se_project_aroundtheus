export default class UserInfo {
  constructor({ nameSelector, descriptionSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._description = document.querySelector(descriptionSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const name = this._name.textContent;
    const description = this._description.textContent;
    return { name, description };
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._description.textContent = data.about;
  }

  setAvatar(data) {
    this._avatar.src = data.avatar;
  }
}

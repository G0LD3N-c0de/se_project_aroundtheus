export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._authorization = headers.authorization;
    this._contentType = headers["content-type"];
  }

  getUserInformation() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._authorization,
        "content-type": this._contentType,
      },
    }).then(this._handleServerResponse);
  }

  editUserInformation(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "content-type": this._contentType,
      },
      body: JSON.stringify({
        name: data.title,
        about: data.subtitle,
      }),
    }).then(this._handleServerResponse);
  }

  addNewCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this._authorization,
        "content-type": this._contentType,
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._handleServerResponse);
  }

  handleDeleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/` + cardId, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
        "content-type": this._contentType,
      },
    }).then(this._handleServerResponse);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._authorization,
        "content-type": this._contentType,
      },
    }).then(this._handleServerResponse);
  }

  handleSubmitLike(cardID) {
    return fetch(`${this._baseUrl}/cards/likes/` + cardID, {
      method: "PUT",
      headers: {
        authorization: this._authorization,
        "content-type": this._contentType,
      },
    }).then(this._handleServerResponse);
  }

  handleDeleteLike(cardID) {
    return fetch(`${this._baseUrl}/cards/likes/` + cardID, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
        "content-type": this._contentType,
      },
    }).then(this._handleServerResponse);
  }

  updateProfilePicture(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "content-type": this._contentType,
      },
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._handleServerResponse);
  }

  _handleServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }
}

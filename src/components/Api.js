export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._authorization = headers.authorization;
    this._contentType = headers["content-type"];
  }

  getUserInformation() {
    return fetch(this._baseUrl + "/users/me", {
      headers: {
        authorization: this._authorization,
        "content-type": this._contentType,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    });
  }

  editUserInformation(data) {
    return fetch(this._baseUrl + "/users/me", {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "content-type": this._contentType,
      },
      body: JSON.stringify({
        name: data.title,
        about: data.subtitle,
      }),
    });
  }

  addNewCard(data) {
    return fetch(this._baseUrl + "/cards", {
      method: "POST",
      headers: {
        authorization: this._authorization,
        "content-type": this._contentType,
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    });
  }

  handleDeleteCard(cardId) {
    return fetch(this._baseUrl + "/cards/" + cardId, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
        "content-type": this._contentType,
      },
    });
  }

  getInitialCards() {
    return fetch(this._baseUrl + "/cards", {
      headers: {
        authorization: this._authorization,
        "content-type": this._contentType,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    });
  }

  handleSubmitLike(cardID) {
    return fetch(this._baseUrl + "/cards/likes/" + cardID, {
      method: "PUT",
      headers: {
        authorization: this._authorization,
        "content-type": this._contentType,
      },
    });
  }

  handleDeleteLike(cardID) {
    return fetch(this._baseUrl + "/cards/likes/" + cardID, {
      method: "DELETE",
      headers: {
        authorization: this._authorization,
        "content-type": this._contentType,
      },
    });
  }

  // submit the like on positive click
  // remove the like on negative click

  promiseAll(promises) {
    return Promise.all(promises);
  }
}

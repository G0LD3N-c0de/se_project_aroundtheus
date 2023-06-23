export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseButton = this._popupElement.querySelector(".modal__close");
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    this._popupElement.addEventListener("click", this._handleRemoteClose);
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    this._popupElement.removeEventListener("click", this._handleRemoteClose);
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  renderLoadingMessage(data) {
    this._saveButton.textContent = data;
  }

  resetSaveButton(data) {
    this._saveButton.textContent = data;
  }

  _handleRemoteClose = (evt) => {
    if (evt.target.classList.contains("modal")) {
      this.close();
    }
  };

  setEventListeners() {
    this._popupCloseButton.addEventListener("click", () => {
      this.close();
    });
  }
}

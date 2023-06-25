import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._saveButton = this._popupForm.querySelector(".modal__save");
  }

  setSubmitAction(action) {
    // this._popupForm.addEventListener("submit", () => {});
    this._submitAction = action;
  }

  setButtonText(data) {
    this._saveButton.textContent = data;
  }

  setEventListeners() {
    super.setEventListeners();
    // set submit submit
    // with this._submitAction as its handler
    this._popupForm.addEventListener("submit", (e, action) => {
      e.preventDefault();
      this._submitAction(action);
    });
  }
}

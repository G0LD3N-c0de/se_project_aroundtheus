import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._previewImage = this._popupElement.querySelector(".modal__picture");
    this._previewCaption = this._popupElement.querySelector(
      ".modal__image-description"
    );
  }

  open(data) {
    super.open();
    this._previewImage.src = data.link;
    this._previewImage.alt = data.name;
    this._previewCaption.textContent = data.name;
  }
}

export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _setEventListeners() {
    // handle like button
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeButton();
      });
    // remove card
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
  }

  _handleLikeButton() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
  }

  getView() {
    this._cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    const _cardTitle = this._cardElement.querySelector(".card__title");
    const _cardImage = this._cardElement.querySelector(".card__image");
    //get card view
    _cardTitle.textContent = this._name;
    _cardImage.alt = this._name;
    _cardImage.src = this._link;
    //set event listeners
    this._setEventListeners();
    //return card
    return this._cardElement;
  }
}

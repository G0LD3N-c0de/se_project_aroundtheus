export default class Card {
  constructor(
    data,
    templateSelector,
    handleImageClick,
    handleDeleteCard,
    handleSubmitLike,
    handleDeleteLike,
    getUserId
  ) {
    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id;
    this._cardId = data._id;
    this._likes = data.likes;
    this._templateSelector = templateSelector;
    this._handleImageClick = handleImageClick;
    this._handleSubmitLike = handleSubmitLike;
    this._handleDeletelike = handleDeleteLike;
    this._handleDeleteCard = handleDeleteCard;
    this._getUserId = getUserId;
  }

  _setEventListeners() {
    // handle like button
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton();
    });
    // remove card
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCard(this);
    });
    // open image popup
    this._cardImage.addEventListener("click", () =>
      this._handleImageClick({ name: this._name, link: this._link })
    );
  }

  _handleLikeButton() {
    if (this._likeButton.classList.contains("card__like-button_active")) {
      this._likeButton.classList.remove("card__like-button_active");
      this._handleDeletelike(this._cardId);
    } else {
      this._likeButton.classList.add("card__like-button_active");
      this._handleSubmitLike(this._cardId);
    }
  }

  deleteCard() {
    this._card.remove();
    this._card = null;
  }

  updateLikes(likes) {
    // set instance variable
    this._likes = likes;
    this._renderLikes();
  }

  isLiked() {}

  _renderLikes(data) {
    this._likeNumber.textContent = this._likes.length;

    this._likeNumber.textContent = data;
  }

  getView() {
    this._card = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    this._cardTitle = this._card.querySelector(".card__title");
    this._cardImage = this._card.querySelector(".card__image");
    this._likeButton = this._card.querySelector(".card__like-button");
    this._deleteButton = this._card.querySelector(".card__delete-button");
    this._likeNumber = this._card.querySelector(".card__like-number");
    //get card view
    if (this._ownerId !== this._userId) {
      this._deleteButton.remove();
    }

    this._likes.forEach((like) => {
      if (like._id === "266cf6456a61fda35af1736f") {
        this._likeButton.classList.add("card__like-button_active");
      }
    });

    this._likeNumber.textContent = this._likes.length;

    this._cardTitle.textContent = this._name;
    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;
    //set event listeners
    this._setEventListeners();
    //return card
    return this._card;
  }
}

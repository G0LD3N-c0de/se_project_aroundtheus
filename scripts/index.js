let initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

// Elements

let modal = document.querySelector(".modal");
let editButton = document.querySelector(".profile__rectangle");
let modalCloseButton = document.querySelector(".modal__close");
let profileTitle = document.querySelector(".profile__title");
let profileDescription = document.querySelector(".profile__description");
let modalTitle = document.querySelector(".modal__input-title");
let modalDescription = document.querySelector(".modal__input-description");
let modalForm = modal.querySelector(".modal__form");
let cardTemplate =
  document.querySelector(".card__template").content.firstElementChild;
let cardList = document.querySelector(".gallery__cards");

// Functions

function closePopup() {
  modal.classList.remove("modal__opened");
}

function getCardElement(data) {
  let cardElement = cardTemplate.cloneNode(true);
  let cardTitleEl = cardElement.querySelector(".card__title");
  let cardImageEl = cardElement.querySelector(".card__image");
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardTitleEl.textContent = data.name;
  return cardElement;
}

// Event Listeners

editButton.addEventListener("click", function () {
  modal.classList.add("modal__opened");
  modalTitle.value = profileTitle.textContent;
  modalDescription.value = profileDescription.textContent;
});

modalCloseButton.addEventListener("click", function () {
  closePopup();
});

modalForm.addEventListener("submit", function (e) {
  e.preventDefault();
  profileTitle.textContent = modalTitle.value;
  profileDescription.textContent = modalDescription.value;
  closePopup();
});

// Handler

initialCards.forEach((data) => {
  cardElement = getCardElement(data);
  cardList.prepend(cardElement);
});

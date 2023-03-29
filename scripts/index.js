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
let modalTitle = document.querySelector("#modal__form-title");
let modalDescription = document.querySelector("#modal__form-description");
let modalForm = modal.querySelector(".modal__form");
let cardTemplate =
  document.querySelector(".card__template").content.firstElementChild;
let cardList = document.querySelector(".gallery__cards");

// Functions

function closePopup() {
  modal.classList.remove("modal_opened");
}

function openPopup() {
  modal.classList.add("modal_opened");
  modalTitle.value = profileTitle.textContent;
  modalDescription.value = profileDescription.textContent;
}

function submitPopup(e) {
  e.preventDefault();
  profileTitle.textContent = modalTitle.value;
  profileDescription.textContent = modalDescription.value;
  closePopup();
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

editButton.addEventListener("click", openPopup);

modalCloseButton.addEventListener("click", closePopup);

modalForm.addEventListener("submit", submitPopup);

// Handler

initialCards.forEach((data) => {
  cardElement = getCardElement(data);
  cardList.prepend(cardElement);
});

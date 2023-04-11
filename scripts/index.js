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

/* -----------
Elements
----------- */

let cardTemplate =
  document.querySelector(".card__template").content.firstElementChild;
let cardList = document.querySelector(".gallery__cards");

// Edit Profile Modal Elements

let editProfileModal = document.querySelector("#modal__edit-profile");
let editProfileButton = document.querySelector(".profile__rectangle");
let editProfileModalCloseButton = document.querySelector(".modal__close");
let profileTitle = document.querySelector(".profile__title");
let profileDescription = document.querySelector(".profile__description");
let modalTitle = document.querySelector("#modal__form-title");
let modalDescription = document.querySelector("#modal__form-description");
let editProfileModalForm = editProfileModal.querySelector(".modal__form");

// Add Pictures Modal Elements
let newItemModalOpen = document.querySelector(".profile__add-button");
let newItemModal = document.querySelector("#modal__new-item");
const newItemModalClose = newItemModal.querySelector(".modal__close");
const newItemModalForm = newItemModal.querySelector(".modal__form");
const newItemTitle = newItemModal.querySelector("#modal__new-item-title");
const newItemURL = newItemModal.querySelector("#modal__new-item-url");

/* ------------
Functions 
------------ */

function closePopup(modal) {
  modal.classList.remove("modal_opened");
}

function openPopup(modal) {
  modal.classList.add("modal_opened");
}

function submitEditPopup(e) {
  e.preventDefault();
  profileTitle.textContent = modalTitle.value;
  profileDescription.textContent = modalDescription.value;
  closePopup(editProfileModal);
}

function submitNewItemPopup(e) {
  e.preventDefault();
  const name = newItemTitle.value;
  const link = newItemURL.value;
  const cardElement = getCardElement({
    name,
    link,
  });
  cardList.prepend(cardElement);
  closePopup(newItemModal);
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

/* -------------
Event Listeners
------------- */

editProfileButton.addEventListener("click", () => {
  modalTitle.value = profileTitle.textContent;
  modalDescription.value = profileDescription.textContent;
  openPopup(editProfileModal);
});
editProfileModalCloseButton.addEventListener("click", () =>
  closePopup(editProfileModal)
);
editProfileModalForm.addEventListener("submit", submitEditPopup);

newItemModalOpen.addEventListener("click", () => openPopup(newItemModal));
newItemModalClose.addEventListener("click", () => closePopup(newItemModal));
newItemModalForm.addEventListener("submit", submitNewItemPopup);

/* -----------
Handler
----------- */

initialCards.forEach((data) => {
  cardElement = getCardElement(data);
  cardList.prepend(cardElement);
});

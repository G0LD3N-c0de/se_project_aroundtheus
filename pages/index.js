import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import * as utils from "../utils/utils.js";

const initialCards = [
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
Card Elements
----------- */

const cardList = document.querySelector(".gallery__cards");
const templateSelector = ".card__template";
const picturePopupModal = document.querySelector("#modal__picture-popup");
const picturePopup = document.querySelector(".modal__picture");
const pictureDescription = picturePopupModal.querySelector(
  ".modal__image-description"
);

function renderCard(cardData, templateSelector) {
  const cardElement = new Card(cardData, templateSelector, (data) => {
    utils.openPopup(picturePopupModal);
    picturePopup.src = data.link;
    picturePopup.alt = data.name;
    pictureDescription.textContent = data.name;
  });
  cardList.prepend(cardElement.getView());
}

initialCards.forEach((data) => renderCard(data, templateSelector));

// Edit Profile Modal Elements

const editProfileModal = document.querySelector("#modal__edit-profile");
const editProfileButton = document.querySelector(".profile__rectangle");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const modalTitle = document.querySelector("#modal__form-title");
const modalDescription = document.querySelector("#modal__form-description");
const editProfileModalForm = document.forms["profile-form"];

// Add Pictures Modal Elements

const newItemModalOpen = document.querySelector(".profile__add-button");
const newItemModal = document.querySelector("#modal__new-item");
const newItemModalForm = document.forms["card-form"];
const newItemTitle = newItemModal.querySelector("#modal__new-item-title");
const newItemURL = newItemModal.querySelector("#modal__new-item-url");

/* ------------
Functions 
------------ */

function submitEditPopup(e) {
  e.preventDefault();
  profileTitle.textContent = modalTitle.value;
  profileDescription.textContent = modalDescription.value;
  utils.closePopup(editProfileModal);
}

function submitNewItemPopup(e) {
  e.preventDefault();
  const name = newItemTitle.value;
  const link = newItemURL.value;
  renderCard({ name, link }, templateSelector);
  utils.closePopup(newItemModal);
  newItemModalForm.reset();
  newItemFormValidator.disableSubmitButton();
}

function fillProfileForm() {
  modalTitle.value = profileTitle.textContent;
  modalDescription.value = profileDescription.textContent;
}

function openEditProfileModal() {
  fillProfileForm();
  utils.openPopup(editProfileModal);
  editFormValidator.enableSubmitButton();
}

/* -------------
Event Listeners
------------- */

editProfileButton.addEventListener("click", openEditProfileModal);

editProfileModalForm.addEventListener("submit", submitEditPopup);

newItemModalOpen.addEventListener("click", () => utils.openPopup(newItemModal));

newItemModalForm.addEventListener("submit", submitNewItemPopup);

const closeButtons = document.querySelectorAll(".modal__close");
closeButtons.forEach((button) => {
  const popup = button.closest(".modal");
  button.addEventListener("click", () => utils.closePopup(popup));
});

// ----------------- FORM VALIDATION ------------------- //

const options = {
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__save_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const editFormValidator = new FormValidator(options, editProfileModalForm);
editFormValidator.enableValidation();
const newItemFormValidator = new FormValidator(options, newItemModalForm);
newItemFormValidator.enableValidation();

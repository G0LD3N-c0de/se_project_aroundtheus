import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import * as utils from "../utils/utils.js";
import PopupWithForm from "../components/PopupWithForm.js";

const initialCards = [
  {
    name: "Colorado Springs",
    link: "https://images.unsplash.com/photo-1612898825929-3ee87a36087b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
  },
  {
    name: "Ojai",
    link: "https://images.unsplash.com/photo-1609960722436-e90e5304d46b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  },
  {
    name: "Lake Powell",
    link: "https://images.unsplash.com/photo-1566909790006-9d3a0d9343a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  },
  {
    name: "Denver",
    link: "https://images.unsplash.com/photo-1618342835315-56f47616bf34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Redlands",
    link: "https://images.unsplash.com/photo-1625639192747-89e7979474d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  },
  {
    name: "Tennessee Mountains",
    link: "https://images.unsplash.com/photo-1633622674885-11dc5a783ab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
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

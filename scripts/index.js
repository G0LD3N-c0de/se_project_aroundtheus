import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";

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

function renderCard(cardData, templateSelector) {
  const cardElement = new Card(cardData, templateSelector);
  cardList.prepend(cardElement.getView());
}

initialCards.forEach((data) => renderCard(data, templateSelector));

// Edit Profile Modal Elements

const editProfileModal = document.querySelector("#modal__edit-profile");
const editProfileButton = document.querySelector(".profile__rectangle");
const editProfileModalCloseButton =
  editProfileModal.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const modalTitle = document.querySelector("#modal__form-title");
const modalDescription = document.querySelector("#modal__form-description");
const editProfileModalForm = editProfileModal.querySelector(".modal__form");

// Add Pictures Modal Elements
const newItemModalOpen = document.querySelector(".profile__add-button");
const newItemModal = document.querySelector("#modal__new-item");
const newItemModalClose = newItemModal.querySelector(".modal__close");
const newItemModalForm = newItemModal.querySelector(".modal__form");
const newItemTitle = newItemModal.querySelector("#modal__new-item-title");
const newItemURL = newItemModal.querySelector("#modal__new-item-url");

// Picture Popup Modal Elements
const picturePopupModal = document.querySelector("#modal__picture-popup");
const picturePopup = document.querySelector(".modal__picture");
const pictureDescription = picturePopupModal.querySelector(
  ".modal__image-description"
);
const picturePopupCloseButton =
  picturePopupModal.querySelector(".modal__close");

/* ------------
Functions 
------------ */

function closePopup(modal) {
  modal.classList.remove("modal_opened");
  modal.removeEventListener("mousedown", closeModalOnRemoteClick);
  document.removeEventListener("keydown", closeModalByEscape);
}

function openPopup(modal) {
  modal.classList.add("modal_opened");
  modal.addEventListener("mousedown", closeModalOnRemoteClick);
  document.addEventListener("keydown", closeModalByEscape);
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
  renderCard({ name, link }, templateSelector);
  closePopup(newItemModal);
  newItemModalForm.reset();

  const newItemInputs = [
    ...newItemModalForm.querySelectorAll(".modal__form-input"),
  ];
  const newItemButton = newItemModalForm.querySelector(".modal__save");
  toggleButtonState(newItemInputs, newItemButton, options);
}

// function getCardElement(data) {
//   const cardElement = cardTemplate.cloneNode(true);
//   const cardTitleEl = cardElement.querySelector(".card__title");
//   const cardImageEl = cardElement.querySelector(".card__image");
//   const likeButton = cardElement.querySelector(".card__like-button");
//   const deleteButton = cardElement.querySelector(".card__delete-button");

//   deleteButton.addEventListener("click", () => {
//     cardElement.remove();
//   });

//   likeButton.addEventListener("click", () => {
//     likeButton.classList.toggle("card__like-button_active");
//   });

//   cardImageEl.src = data.link;
//   cardImageEl.alt = data.name;
//   cardTitleEl.textContent = data.name;

//   cardImageEl.addEventListener("click", () => {
//     openPopup(picturePopupModal);
//     picturePopup.src = cardImageEl.src;
//     picturePopup.alt = cardTitleEl.textContent;
//     pictureDescription.textContent = cardTitleEl.textContent;
//   });

//   return cardElement;
// }

function fillProfileForm() {
  modalTitle.value = profileTitle.textContent;
  modalDescription.value = profileDescription.textContent;
}

function openEditProfileModal() {
  fillProfileForm();
  openPopup(editProfileModal);
}

/* -------------
Event Listeners
------------- */

editProfileButton.addEventListener("click", openEditProfileModal);
editProfileModalCloseButton.addEventListener("click", () =>
  closePopup(editProfileModal)
);
editProfileModalForm.addEventListener("submit", submitEditPopup);

newItemModalOpen.addEventListener("click", () => openPopup(newItemModal));
newItemModalClose.addEventListener("click", () => closePopup(newItemModal));
newItemModalForm.addEventListener("submit", submitNewItemPopup);

picturePopupCloseButton.addEventListener("click", () =>
  closePopup(picturePopupModal)
);

/* -----------
Close Popup UX Design Functions
Functions added to open popup and close popup functions
----------- */

function closeModalOnRemoteClick(evt) {
  if (evt.target.classList.contains("modal")) {
    closePopup(evt.target);
  }
}

function closeModalByEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closePopup(openedModal);
  }
}
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

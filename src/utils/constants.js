export const initialCards = [
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

// Profile Elements

export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const profileImage = document.querySelector(".profile__avatar");
export const updateImage = document.querySelector(".profile__avatar-container");

// Edit Profile Modal Elements

export const editProfileButton = document.querySelector(".profile__rectangle");
export const modalTitle = document.querySelector("#modal__form-title");
export const modalDescription = document.querySelector(
  "#modal__form-description"
);
export const editProfileModalForm = document.forms["profile-form"];

// Add Pictures Modal Elements

export const newItemModalOpen = document.querySelector(".profile__add-button");
export const newItemModalForm = document.forms["card-form"];

// Delete Card Elements

export const deleteCardButton = document.querySelectorAll(
  ".card__delete-button"
);

/* -----------
Card Elements
----------- */

export const cardList = ".gallery__cards";
export const templateSelector = ".card__template";

// ----- Form Validator Options ----- //

export const options = {
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__save_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

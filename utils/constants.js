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

// Edit Profile Modal Elements

export const editProfileButton = document.querySelector(".profile__rectangle");
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);
export const modalTitle = document.querySelector("#modal__form-title");
export const modalDescription = document.querySelector(
  "#modal__form-description"
);
export const editProfileModalForm = document.forms["profile-form"];

// Add Pictures Modal Elements

export const newItemModalOpen = document.querySelector(".profile__add-button");
export const newItemModal = document.querySelector("#modal__new-item");
export const newItemModalForm = document.forms["card-form"];
export const newItemTitle = newItemModal.querySelector(
  "#modal__new-item-title"
);
export const newItemURL = newItemModal.querySelector("#modal__new-item-url");

/* -----------
Card Elements
----------- */

export const cardList = document.querySelector(".gallery__cards");
export const templateSelector = ".card__template";
export const picturePopupModal = document.querySelector(
  "#modal__picture-popup"
);
export const picturePopup = document.querySelector(".modal__picture");
export const pictureDescription = picturePopupModal.querySelector(
  ".modal__image-description"
);

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  editProfileButton,
  editProfileModalForm,
  modalTitle,
  modalDescription,
  newItemModalOpen,
  newItemModalForm,
  cardList,
  templateSelector,
  options,
} from "../utils/constants.js";
import "./index.css";

// ----- SECTIONS ----- //

function createCard(item) {
  const cardElement = new Card(item, templateSelector, (data) => {
    previewPicturePopup.open(data);
  });
  return cardElement.getView();
}

const cardSection = new Section(
  {
    renderer: (item) => {
      const cardEl = createCard(item);
      cardSection.addItem(cardEl);
    },
  },
  cardList
);
cardSection.renderItems(initialCards);

// ----- POPUPS ----- //

const userInformation = new UserInfo({
  nameSelector: ".profile__title",
  descriptionSelector: ".profile__description",
});

const editProfilePopup = new PopupWithForm("#modal__edit-profile", (data) => {
  userInformation.setUserInfo(data);
});
editProfilePopup.setEventListeners();

editProfileButton.addEventListener("click", () => {
  editProfilePopup.open();
  const { description, name } = userInformation.getUserInfo();
  modalTitle.value = name;
  modalDescription.value = description;
  editFormValidator.resetValidation();
});

const newItemPopup = new PopupWithForm("#modal__new-item", (data) => {
  cardSection.renderItems([data]);
});
newItemPopup.setEventListeners();
newItemModalOpen.addEventListener("click", () => {
  newItemPopup.open();
  newItemFormValidator.resetValidation();
});

const previewPicturePopup = new PopupWithImage("#modal__picture-popup");
previewPicturePopup.setEventListeners();

// ----- FORM VALIDATION ----- //

const editFormValidator = new FormValidator(options, editProfileModalForm);
editFormValidator.enableValidation();
const newItemFormValidator = new FormValidator(options, newItemModalForm);
newItemFormValidator.enableValidation();

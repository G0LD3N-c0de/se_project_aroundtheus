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
} from "../utils/constants.js";
import "./index.css";

// ----- SECTIONS ----- //

const cardSection = new Section(
  {
    renderer: (item) => {
      const cardEl = new Card(item, templateSelector, (data) => {
        previewPicturePopup.open(data);
      });
      cardSection.addItem(cardEl.getView());
    },
  },
  cardList
);
initialCards.forEach((data) => {
  cardSection.renderItems(data);
});

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
  modalTitle.value = userInformation.getUserInfo().name;
  modalDescription.value = userInformation.getUserInfo().description;
  editFormValidator.enableSubmitButton();
});

const newItemPopup = new PopupWithForm("#modal__new-item", (data) => {
  cardSection.renderItems(data);
});
newItemPopup.setEventListeners();
newItemModalOpen.addEventListener("click", () => {
  newItemPopup.open();
});

const previewPicturePopup = new PopupWithImage("#modal__picture-popup");
previewPicturePopup.setEventListeners();

// ----- FORM VALIDATION ----- //

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

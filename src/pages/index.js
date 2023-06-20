import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/API.js";
import {
  editProfileButton,
  editProfileModalForm,
  modalTitle,
  modalDescription,
  newItemModalOpen,
  newItemModalForm,
  cardList,
  templateSelector,
  options,
  profileTitle,
  profileImage,
  profileDescription,
} from "../utils/constants.js";
import "./index.css";

// ----- APIs ----- //

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "02a3c077-82c6-4270-8df6-e8c1f2fec9e8",
    "content-type": "application/json",
  },
});

api
  .getUserInformation()
  .then((data) => {
    profileTitle.textContent = data.name;
    profileDescription.textContent = data.about;
    profileImage.src = data.avatar;
  })
  .catch((err) => console.error(err));

api
  .getInitialCards()
  .then((data) => {
    cardSection.renderItems(data.reverse());
  })
  .catch((err) => console.error(err));

api.getInitialCards().then((cards) => {
  cards.forEach((card) => {
    console.log(card.owner.name);
  });
});
// ----- SECTIONS ----- //

function createCard(item) {
  const cardElement = new Card(
    item,
    templateSelector,
    (data) => {
      previewPicturePopup.open(data);
    },
    () => {
      deleteCardPopup.open();
    }
  );
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

// ----- POPUPS ----- //

const userInformation = new UserInfo({
  nameSelector: ".profile__title",
  descriptionSelector: ".profile__description",
});

const editProfilePopup = new PopupWithForm("#modal__edit-profile", (data) => {
  userInformation.setUserInfo(data), api.editUserInformation(data);
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
  cardSection.renderItems([data]), api.addNewCard(data);
});
newItemPopup.setEventListeners();
newItemModalOpen.addEventListener("click", () => {
  newItemPopup.open();
  newItemFormValidator.resetValidation();
});

const previewPicturePopup = new PopupWithImage("#modal__picture-popup");
previewPicturePopup.setEventListeners();

const deleteCardPopup = new PopupWithForm("#modal__delete-picture");
deleteCardPopup.setEventListeners();

// ----- FORM VALIDATION ----- //

const editFormValidator = new FormValidator(options, editProfileModalForm);
editFormValidator.enableValidation();
const newItemFormValidator = new FormValidator(options, newItemModalForm);
newItemFormValidator.enableValidation();

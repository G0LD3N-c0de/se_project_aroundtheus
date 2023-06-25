import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../utils/Api.js";
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
  updateAvatarContainer,
  updateAvatarForm,
} from "../utils/constants.js";
import "./index.css";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

//////////////////////
// ----- APIs ----- //
//////////////////////

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "02a3c077-82c6-4270-8df6-e8c1f2fec9e8",
    "content-type": "application/json",
  },
});

let userId;
Promise.all([api.getUserInformation(), api.getInitialCards()])
  .then(([user, cards]) => {
    userInformation.setUserInfo(user);
    userId = user._id;
    cardSection.renderItems(cards.reverse());
  })
  .catch((err) => console.error(err));

//////////////////////////
// ----- SECTIONS ----- //
//////////////////////////

function createCard(item) {
  const card = new Card(
    item,
    templateSelector,
    (data) => {
      previewPicturePopup.open(data);
    },
    (data) => {
      deleteCardPopup.open();
      deleteCardPopup.setSubmitAction(() => {
        deleteCardPopup.setButtonText("Deleting...");
        api
          .handleDeleteCard(data._cardId)
          .then(() => {
            card.deleteCard();
            deleteCardPopup.close();
          })
          .finally(() => {
            deleteCardPopup.setButtonText("Yes");
          })
          .catch((err) => console.error(err));
      });
    },
    (data) => {
      if (card.isLiked()) {
        api
          .handleDeleteLike(data)
          .then((response) => card.updateLikes(response.likes))
          .catch((err) => console.error(err));
      } else {
        api
          .handleSubmitLike(data)
          .then((response) => card.updateLikes(response.likes))
          .catch((err) => console.error(err));
      }
    },
    userId
  );
  return card.getView();
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

////////////////////////
// ----- POPUPS ----- //
////////////////////////

const userInformation = new UserInfo({
  nameSelector: ".profile__title",
  descriptionSelector: ".profile__description",
  avatarSelector: ".profile__avatar",
});

const editProfilePopup = new PopupWithForm("#modal__edit-profile", (data) => {
  editProfilePopup.setButtonText("Saving...");
  api
    .editUserInformation(data)
    .then((data) => {
      userInformation.setUserInfo(data);
      editProfilePopup.close();
    })
    .finally(() => {
      editProfilePopup.setButtonText("Save");
    })
    .catch((err) => console.error(err));
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
  newItemPopup.setButtonText("Creating...");
  api
    .addNewCard(data)
    .then((data) => {
      cardSection.renderItems([data]);
      newItemPopup.close();
    })
    .finally(() => {
      newItemPopup.setButtonText("Create");
    })
    .catch((err) => console.error(err));
});
newItemPopup.setEventListeners();
newItemModalOpen.addEventListener("click", () => {
  newItemPopup.open();
  newItemFormValidator.resetValidation();
});

const editAvatarPopup = new PopupWithForm("#modal__update-avatar", (data) => {
  editAvatarPopup.setButtonText("Saving...");
  api.updateProfilePicture(data).then((data) => {
    api
      .getUserInformation(data)
      .then((data) => {
        userInformation.setAvatar(data);
        editAvatarPopup.close();
      })
      .finally(() => {
        editAvatarPopup.setButtonText("Save");
      })
      .catch((err) => console.error(err));
  });
});
editAvatarPopup.setEventListeners();
updateAvatarContainer.addEventListener("click", () => {
  editAvatarPopup.open();
});

const deleteCardPopup = new PopupWithConfirmation("#modal__delete-picture");
deleteCardPopup.setEventListeners();

const previewPicturePopup = new PopupWithImage("#modal__picture-popup");
previewPicturePopup.setEventListeners();

/////////////////////////////////
// ----- FORM VALIDATION ----- //
/////////////////////////////////

const editFormValidator = new FormValidator(options, editProfileModalForm);
editFormValidator.enableValidation();
const newItemFormValidator = new FormValidator(options, newItemModalForm);
newItemFormValidator.enableValidation();
const updateAvatarFormValidator = new FormValidator(options, updateAvatarForm);
updateAvatarFormValidator.enableValidation();

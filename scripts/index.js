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

let modal = document.querySelector(".modal");
let editButton = document.querySelector(".profile__rectangle");
let modalCloseButton = document.querySelector(".modal__close");

editButton.addEventListener("click", function () {
  modal.classList.add("modal__opened");
});
modalCloseButton.addEventListener("click", function () {
  modal.classList.remove("modal__opened");
});

let modalTitle = document.querySelector(".modal__input-title");
let modalDescription = document.querySelector(".modal__input-description");

modalTitle.value = document.querySelector(".profile__title").textContent;
modalDescription.value =
  document.querySelector(".profile__subtitle").textContent;

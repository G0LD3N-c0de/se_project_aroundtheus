const options = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

function showInputError(formEl, inputEl, options) {
  const { inputErrorClass } = options;
  const { errorClass } = options;
  const inputError = formEl.querySelector(`#${inputEl.id}-error`);

  inputEl.classList.add(inputErrorClass);
  inputError.textContent = inputEl.validationMessage;
  inputError.classList.add(errorClass);
}

function hideInputError(formEl, inputEl, options) {
  const { inputErrorClass } = options;
  const inputError = formEl.querySelector(`#${inputEl.id}-error`);

  inputEl.classList.remove(inputErrorClass);
  inputError.textContent = "";
}

function checkInputValidity(formEl, inputEl, options) {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, options);
  } else {
    hideInputError(formEl, inputEl, options);
  }
}

function setEventListeners(formEl, options) {
  const { inputSelector } = options;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];

  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", () => {
      checkInputValidity(formEl, inputEl, options);
    });
  });
}

function enableValidation(options) {
  const { formSelector } = options;
  const formList = [...document.querySelectorAll(formSelector)];

  formList.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(formEl, options);
  });
}

enableValidation(options);

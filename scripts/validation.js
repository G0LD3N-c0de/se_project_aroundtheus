const options = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__save_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

function showInputError(formEl, inputEl, options) {
  const { inputErrorClass, errorClass } = options;
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

const checkFormValidity = (inputs) => {
  return inputs.every((input) => input.validity.valid);
};

function disableSubmitButton(submitButton, options) {
  const { inactiveButtonClass } = options;
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
}
function enableSubmitButton(submitButton, options) {
  const { inactiveButtonClass } = options;
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
}

function toggleButtonState(inputEls, submitButton, options) {
  const isFormValid = checkFormValidity(inputEls);

  if (!isFormValid) {
    disableSubmitButton(submitButton, options);
  } else {
    enableSubmitButton(submitButton, options);
  }
}

function setEventListeners(formEl, options) {
  const { inputSelector, submitButtonSelector } = options;
  const inputEls = [...formEl.querySelectorAll(inputSelector)];
  const submitButton = formEl.querySelector(submitButtonSelector);

  toggleButtonState(inputEls, submitButton, options);

  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", () => {
      checkInputValidity(formEl, inputEl, options);
      toggleButtonState(inputEls, submitButton, options);
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

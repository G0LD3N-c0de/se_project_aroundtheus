class FormValidator {
  constructor(options, form) {
    this._inputSelector = options.inputSelector;
    this._submitButtonSelector = options.submitButtonSelector;
    this._inactiveButtonClass = options.inactiveButtonClass;
    this._inputErrorClass = options.inputErrorClass;
    this._errorClass = options.errorClass;

    this._form = form;
  }

  _showInputError(inputEl) {
    const inputError = this._form.querySelector(`#${inputEl.id}-error`);

    inputEl.classList.add(this._inputErrorClass);
    inputError.textContent = inputEl.validationMessage;
    inputError.classList.add(this._errorClass);
  }

  _hideInputError(inputEl) {
    const inputError = this._form.querySelector(`#${inputEl.id}-error`);

    inputEl.classList.remove(this._inputErrorClass);
    inputError.textContent = "";
  }

  _checkInputValidity(inputEl) {
    if (!inputEl.validity.valid) {
      this._showInputError(inputEl);
    } else {
      this._hideInputError(inputEl);
    }
  }

  _checkFormValidity(inputs) {
    return inputs.every((input) => input.validity.valid);
  }

  disableSubmitButton() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  enableSubmitButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  resetValidation() {
    this._toggleButtonState();

    this._inputEls.forEach((inputEl) => {
      this._hideInputError(inputEl);
    });
  }

  _toggleButtonState() {
    const isFormValid = this._checkFormValidity(this._inputEls);

    if (!isFormValid) {
      this.disableSubmitButton();
    } else {
      this.enableSubmitButton();
    }
  }

  _setEventListeners() {
    this._inputEls = [...this._form.querySelectorAll(this._inputSelector)];
    this._submitButton = this._form.querySelector(this._submitButtonSelector);

    this._inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", () => {
        this._checkInputValidity(inputEl);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
    this._toggleButtonState();
  }
}

export default FormValidator;

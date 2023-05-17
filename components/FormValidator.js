class FormValidator {
  constructor(options, form) {
    this._inputSelector = options.inputSelector;
    this._submitButtonSelector = options.submitButtonSelector;
    this._inactiveButtonClass = options.inactiveButtonClass;
    this._inputErrorClass = options.inputErrorClass;
    this._errorClass = options.errorClass;

    this._form = form;
  }

  _showInputError(formEl, inputEl) {
    const inputError = formEl.querySelector(`#${inputEl.id}-error`);

    inputEl.classList.add(this._inputErrorClass);
    inputError.textContent = inputEl.validationMessage;
    inputError.classList.add(this._errorClass);
  }

  _hideInputError(formEl, inputEl) {
    const inputError = formEl.querySelector(`#${inputEl.id}-error`);

    inputEl.classList.remove(this._inputErrorClass);
    inputError.textContent = "";
  }

  _checkInputValidity(formEl, inputEl) {
    if (!inputEl.validity.valid) {
      this._showInputError(formEl, inputEl);
    } else {
      this._hideInputError(formEl, inputEl);
    }
  }

  _checkFormValidity(inputs) {
    return inputs.every((input) => input.validity.valid);
  }

  _disableSubmitButton(submitButton) {
    submitButton.classList.add(this._inactiveButtonClass);
    submitButton.disabled = true;
  }

  enableSubmitButton() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  _toggleButtonState(inputEls, submitButton) {
    const isFormValid = this._checkFormValidity(inputEls);

    if (!isFormValid) {
      this._disableSubmitButton(submitButton);
    } else {
      this.enableSubmitButton();
    }
  }

  _setEventListeners() {
    this._inputEls = [...this._form.querySelectorAll(this._inputSelector)];
    this._submitButton = this._form.querySelector(this._submitButtonSelector);

    this._inputEls.forEach((inputEl) => {
      inputEl.addEventListener("input", () => {
        this._checkInputValidity(this._form, inputEl);
        this._toggleButtonState(this._inputEls, this._submitButton);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
    this._toggleButtonState(this._inputEls, this._submitButton);
  }
}

export default FormValidator;

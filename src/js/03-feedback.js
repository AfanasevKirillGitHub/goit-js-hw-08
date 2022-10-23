import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('[name="email"]');
const textAreaEl = document.querySelector('[name="message"]');
const storageKey = 'feedback-form-state';
formEl.addEventListener('input', throttle(onFormInputChange, 500));
formEl.addEventListener('submit', onFormSubmit);

const formData = {};

localeSaveDataForm();

function onFormSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(storageKey)));
  localStorage.removeItem(storageKey);
  event.currentTarget.reset();
}

function onFormInputChange(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

function localeSaveDataForm() {
  const formDataValue = localStorage.getItem(storageKey);
  const savedFormDataValue = JSON.parse(formDataValue);

  if (formDataValue) {
    if (savedFormDataValue.email) {
      emailEl.value = savedFormDataValue.email;
    } else {
      emailEl.value = '';
    }

    if (savedFormDataValue.message) {
      textAreaEl.value = savedFormDataValue.message;
    } else {
      textAreaEl.value = '';
    }

    formData.email = savedFormDataValue.email;
    formData.message = savedFormDataValue.message;
  }
}

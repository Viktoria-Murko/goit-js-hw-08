import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

formEl.addEventListener('input', throttle(handleFofmElInput, 500));
formEl.addEventListener('submit', handleFofmElSubmit);
fillFormEl();

function handleFofmElInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function handleFofmElSubmit(evt) {
  evt.preventDefault();

  if (formEl.email.value === '' || formEl.message.value === '') {
    return alert('Всі поля мають бути заповнені !');
  }

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function fillFormEl() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    formEl.email.value = savedData.email;
    formEl.message.value = savedData.message;
  }
}

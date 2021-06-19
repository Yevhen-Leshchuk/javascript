
import '../sass/feedback-form.scss';

// const settings = {
//   theme: 'dark',
//   fontSize: 14,
// };

// localStorage.setItem('test', 'my test value');
// localStorage.setItem('settings', JSON.stringify(settings));

// -----------------------
// const savedSettings = localStorage.getItem('settings');
// console.log(savedSettings);

// const parsedSettings = JSON.parse(savedSettings);

// console.log(parsedSettings);
// console.log(parsedSettings.theme);

// // -----------------------
// localStorage.removeItem('settings');
// // localStorage.clear();

// // -----------------------
// const savedSettings = localStorage.getItem('settings');

// if (savedSettings) {
//   const parsedSettings = JSON.parse(savedSettings);
//   console.log(parsedSettings);
// } else {
//   console.log('Ключ не найден в localStorage!');
// }

// // -----------------------
const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form  textarea'),
};

populateMessage();

refs.form.addEventListener('submit', handleFormSubmit);
refs.textarea.addEventListener('input', handleTextareaInput);

// Делегирование:
refs.form.addEventListener('input', e => {
  // console.log(e);
});

function handleFormSubmit(event) {
  event.preventDefault();

  console.log('Отправляем отзыв на бекенд!');
  localStorage.removeItem('feedback-message');
  event.currentTarget.reset();
}

function handleTextareaInput(event) {
  // console.log(event);
  const message = event.currentTarget.value;
  localStorage.setItem('feedback-message', message);
}

function populateMessage() {
  const savedMessage = localStorage.getItem('feedback-message');

  if (savedMessage) {
    // console.log(savedMessage);
    refs.textarea.value = savedMessage;
  }
}
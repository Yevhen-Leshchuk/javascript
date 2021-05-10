/*
 * Событие submit
 * Действия браузера по умолчанию
 * Свойство elements
 * Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const formRef = document.querySelector(".js-register-form");

formRef.addEventListener("submit", (event) => {
  event.preventDefault();

  // console.log(event);
  // console.dir(event.target.elements);
  // console.log("Submit");

  // const formElements = event.target.elements;
  // console.log(formElements.subscription.value); // pro

  const formRef = event.target;
  const formData = new FormData(formRef);

  // console.log(formData);

  const submittedData = {};

  formData.forEach((value, key) => {
    console.log("value:", value);
    console.log("key:", key);

    submittedData[key] = value;
  });

  console.log(submittedData);
  console.log(formRef.elements);
});
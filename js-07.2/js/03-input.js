/*
 * События input и change
 * Чекбоксы и свойство checked
 */

const btnRef = document.querySelector(".js-button");
const inputRef = document.querySelector(".js-input");
const nameLabelRef = document.querySelector(".js-button > span");
const licenseRef = document.querySelector(".js-license");

// -----------------------
// Не юзать!
// inputRef.addEventListener("change", (e) => {
//   console.log(e.target.value);
//   console.log("Hello!");

//   nameLabelRef.textContent = e.target.value;
// });

// -----------------------
// inputRef.addEventListener("input", (e) => {
//   nameLabelRef.textContent = e.target.value;
// });

// -----------------------
// licenseRef.addEventListener("change", (e) => {
//   console.log(e);

//   btnRef.disabled = !e.target.checked;
// });

// -----------------------
// inputRef.addEventListener("focus", () => {
//   console.log("Получил фокус!");
// });

// inputRef.addEventListener("blur", () => {
//   console.log("Потерял фокус!");
// });

// -----------------------
// v2:
inputRef.addEventListener("focus", handleInputFocus);
inputRef.addEventListener("blur", handleInputBlur);
inputRef.addEventListener("input", handleInputChange);
licenseRef.addEventListener("change", handleLicenseChange);

function handleInputFocus() {
  console.log("Получил фокус!");
}

function handleInputBlur() {
  console.log("Потерял фокус!");
}

function handleInputChange(e) {
  nameLabelRef.textContent = e.target.value;
}

function handleLicenseChange(e) {
  btnRef.disabled = !e.target.checked;
}
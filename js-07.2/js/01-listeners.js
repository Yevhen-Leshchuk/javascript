/*
 * События. Создание и удаление слушателей
 * Ссылочная идентичность колбеков
 * Объект события
 */

const targetBtnRef = document.querySelector(".js-target-btn");
const addListenerBtnRef = document.querySelector(".js-add-listener");
const removeListenerBtnRef = document.querySelector(".js-remove-listener");

// -----------------------
// targetBtnRef.addEventListener("click", () => {
//   console.log(Date.now());
// });

// targetBtnRef.addEventListener("click", () => {
//   console.log("Hello!");
// });

// -----------------------
// Колбэк-функции - () => { console.log("Click!") } не равны!!!
// addListenerBtnRef.addEventListener("click", () => {
//   targetBtnRef.addEventListener("click", () => {
//     console.log("Click!");
//   });
// });

// removeListenerBtnRef.addEventListener("click", () => {
//   targetBtnRef.removeEventListener("click", () => {
//     console.log("Click!");
//   });
// });

// -----------------------
// const doStuffOnClick = () => {
//   console.log("Click!");
// };

// addListenerBtnRef.addEventListener("click", () => {
//   targetBtnRef.addEventListener("click", doStuffOnClick);
// });

// removeListenerBtnRef.addEventListener("click", () => {
//   targetBtnRef.removeEventListener("click", doStuffOnClick);
// });

// -----------------------
targetBtnRef.addEventListener("click", (event) => {
  console.dir(event.target);
});
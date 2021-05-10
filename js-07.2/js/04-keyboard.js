
/*
 * Типы событий: keypress, keydown, keyup
 * Ограничения keypress
 * Свойства обьекта события клавиатуры
 */

// window.addEventListener("keypress", (e) => {
//   console.log(e);
// });

// -----------------------
// window.addEventListener("keydown", (e) => {
//   console.log("event.key:", e.key); // g или п
//   console.log("event.code:", e.code); // KeyG

//   if (e.code === "Escape") {
//     console.log("Был нажат ESC!");
//   }
// });

// -----------------------
const outputRef = document.querySelector(".js-output");
const clearBtnRef = document.querySelector(".js-clear");

// window.addEventListener("keypress", (e) => {
//   outputRef.textContent += e.key;
// });

// clearBtnRef.addEventListener("click", () => {
//   outputRef.textContent = "";
// });

// -----------------------
// v2:
window.addEventListener("keypress", onKeypress);
clearBtnRef.addEventListener("click", onClearOutput);

function onKeypress(e) {
  outputRef.textContent += e.key;
}

function onClearOutput() {
  outputRef.textContent = "";
}
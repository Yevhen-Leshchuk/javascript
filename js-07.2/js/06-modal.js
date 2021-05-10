/*
 * Открыть и закрыть по кнопке
 * Закрыть по клику в бекдроп
 * Закрыть по ESC
 */

const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const closeModalBtn = document.querySelector(
  'button[data-action="close-modal"]'
);
const backdropRef = document.querySelector(".js-backdrop");

// openModalBtn.addEventListener("click", () => {
//   document.body.classList.add("show-modal");
// });

// closeModalBtn.addEventListener("click", () => {
//   document.body.classList.remove("show-modal");
// });

// backdropRef.addEventListener("click", (e) => {
//   console.log("e.target:", e.target);
//   console.log("e.currentTarget:", e.currentTarget);

//   if (e.target === e.currentTarget) {
//     console.log("Кликнули по темному фону!");
//     document.body.classList.remove("show-modal");
//   }
// });

// -----------------------
// v2:
openModalBtn.addEventListener("click", onOpenModal);
closeModalBtn.addEventListener("click", onCloseModal);
backdropRef.addEventListener("click", onBackDropClick);

// function onOpenModal() {
//   // Невозможно снять слушатель с (e)!
//   window.addEventListener("keydown", (e) => {
//     if (e.code === "Escape") {
//       console.log("Нужно закрыть, нажали ESC!");
//       onCloseModal();
//     }
//   });

//   document.body.classList.add("show-modal");
// }

function onOpenModal() {
  window.addEventListener("keydown", onPressEscape);
  document.body.classList.add("show-modal");
}

function onCloseModal() {
  window.removeEventListener("keydown", onPressEscape);
  document.body.classList.remove("show-modal");
}

function onBackDropClick(e) {
  if (e.target === e.currentTarget) {
    onCloseModal();
  }
}

function onPressEscape(e) {
  if (e.code === "Escape") {
    console.log("Нужно закрыть, нажали ESC!");
    onCloseModal();
  }
}
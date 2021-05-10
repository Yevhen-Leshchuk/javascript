/*
 * mouseenter и mouseleave
 * mouseover и mouseout
 * mousemove (chatty event - болтливое событие)
 * Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 */

const boxRef = document.querySelector(".js-box");

boxRef.addEventListener("mouseenter", (e) => {
  console.log(e);
  const box = e.target;

  box.classList.add("box--active");
});

boxRef.addEventListener("mouseleave", (e) => {
  const box = e.target;

  box.classList.remove("box--active");
});

// -----------------------
// boxRef.addEventListener("mouseover", (e) => {
//   console.log("Over!");
//   const box = e.target;

//   box.classList.add("box--active");
// });

// -----------------------
// boxRef.addEventListener("mousemove", (e) => {
//   console.log(e);
// });
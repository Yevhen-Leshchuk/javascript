const titleRef = document.querySelector(".js-title");
console.dir(document.querySelector(".js-title"));

titleRef.textContent = "Работа с DOM это ерунда! Кликни на текст! 🐷";

titleRef.addEventListener("click", function () {
  console.log("Хватит меня кликать! :)");
});
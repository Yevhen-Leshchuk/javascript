// Собираем ввод пользователя и что-то с ним делаем :)

// const numbers = [1, 2, 3];

// numbers.push(4, 5, 6);
// console.log(numbers); // [1, 2, 3, 4, 5, 6]

// numbers.pop();
// console.log(numbers); // [1, 2, 3, 4, 5]

// numbers.pop();
// numbers.pop();
// console.log(numbers); // [1, 2, 3]

// -----------------------
const valueInputRef = document.querySelector(".js-value");
const addValueBtn = document.querySelector(".js-add-value");
const calcBtn = document.querySelector(".js-calculate");
const numbers = [];
let total = 0;

addValueBtn.addEventListener("click", function () {
  const value = Number(valueInputRef.value);

  numbers.push(value);
  valueInputRef.value = "";

  console.log(numbers);
});

calcBtn.addEventListener("click", function () {
  for (const number of numbers) {
    console.log(number);
    total += number;
  }

  console.log("Total: ", total);
});
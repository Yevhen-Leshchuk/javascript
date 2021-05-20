// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
//   < div id = "counter" >
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </ div >

//Решение 1.

const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const valueRef = document.querySelector('#value');

incrementBtnRef.addEventListener('click', incrementValue);

decrementBtnRef.addEventListener('click', decrementValue);

let counterValue = 0;

function incrementValue() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

function decrementValue() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

//Решение 2.

// const decrementBtnRef = document.querySelector(
//   'button[data-action="decrement"]'
// );

// const incrementBtnRef = document.querySelector(
//   'button[data-action="increment"]'
// );

// const valueRef = document.querySelector("#value");

// let counterValue = 0;

// const handleIncrement = () => {
//   counterValue += 1;
//   valueRef.textContent = counterValue;
// };

// const handleDecrement = () => {
//   counterValue = counterValue - 1 >= 0 ? counterValue - 1 : counterValue;
//   valueRef.textContent = counterValue;
// };

// incrementBtnRef.addEventListener("click", handleIncrement);
// decrementBtnRef.addEventListener("click", handleDecrement);


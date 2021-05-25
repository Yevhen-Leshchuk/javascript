// Задание 8
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// < div id = "controls" >
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </ >

//   <div id="boxes"></div>

const controlsRef = document.querySelector("#controls");
const inputRef = document.querySelector('input[type="number"]');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

renderBtnRef.addEventListener("click", () => {
  const amount = inputRef.value;
  createBoxes(amount);
});

destroyBtnRef.addEventListener("click", () => {
  destroyBoxes();
});


let width = 30;
let height = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    const containerRef = document.createElement('div');
    containerRef.style.backgroundColor = `rgb(${red},${green},${blue})`;
    containerRef.style.width = `${width}px`;
    containerRef.style.height = `${height}px`;
    boxesRef.appendChild(containerRef);
    width += 10;
    height += 10;
  }
  inputRef.value = "";
}

function destroyBoxes() {
  console.dir(boxesRef);
  boxesRef.innerHTML = "";
  width = 30;
  height = 30;
  inputRef.value = "";
}
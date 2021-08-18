// Переключатель цветов
// Есть массив цветов в hex-формате и кнопки Start и Stop.

// <button type="button" data-action="start">Start</button>
// <button type="button" data-action="stop">Stop</button>
// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };


const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  bodyRef: document.querySelector('body'),
};

let min = 0;
let max = colors.length - 1;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.bodyRef.style.transition = `0.8s ease-in-out`;

const switcher = {
  intervalId: null,
  isActive: false,

  start() {
    refs.startBtn.disabled = !this.isActive;
    refs.stopBtn.disabled = this.isActive;

    this.intervalId = setInterval(() => {
      refs.bodyRef.style.backgroundColor =
        colors[randomIntegerFromInterval(min, max)];
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);

    refs.startBtn.disabled = this.isActive;
    refs.stopBtn.disabled = !this.isActive;
  },
};

refs.startBtn.addEventListener('click', switcher.start.bind(switcher));
refs.stopBtn.addEventListener('click', switcher.stop.bind(switcher));

refs.stopBtn.disabled = true;
// const date = new Date();
// console.log(date); // Wed Mar 31 2021 17:06:13 GMT+0300 (Восточная Европа, летнее время)
// console.dir(date);
// console.log(date.getMinutes()); // 6

// -----------------------
// const date = new Date(1000);
// console.log(date); // Thu Jan 01 1970 03:00:01 GMT+0300 (Восточная Европа, стандартное время)

// -----------------------
// const date = Date.now();
// console.log(date); // 1617199873808

// -----------------------
// const date = new Date(5000000);
// console.log(date.getTime());

// const currentDate = Date.now();
// console.log(currentDate);

// const deltaTime = currentDate - date.getTime();
// console.log(deltaTime);

// -----------------------
// setInterval(() => {
//   console.log(new Date());
// }, 1000);

// -----------------------
const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

const timer = {
  intervalId: null,
  isActive: false,
  start() {
    // console.log(this);

    if (this.isActive) {
      return;
    }

    this.isActive = true;
    const startTime = Date.now();
    updateClockface(0);

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      // console.log('startTime:', startTime);

      const deltaTime = currentTime - startTime;
      // console.log(deltaTime);

      updateClockface(deltaTime);
    }, 1000);
  },
  stop() {
    // console.log(this);
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActive = false;
    updateClockface(0);
  },
};

// timer.start();
refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockface(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  // console.log(`${hours}:${mins}:${secs}`);
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0'); // 1 -> "1" -> "01"; 2 - кол-во знаков, "0" - добавляеться в начало
}
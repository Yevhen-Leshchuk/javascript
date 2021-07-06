/*
 * Метод setTimeout()
 */

// setTimeout(() => {
//   console.log('Лог при вызове callback-функции, через 2 секунды!');
// }, 2000);

// -----------------------
// const log = () => {
//   console.log('Лог при вызове callback-функции, через 3 секунды!');
// };

// setTimeout(log, 3000);

// -----------------------
/*
 * Асинхронность кода
 */

// const log = () => {
//   console.log('Лог при вызове callback-функции, через 3 секунды!');
// };

// console.log('До вызова setTimeout!');

// // setTimeout(log, 3000);
// setTimeout(log, 0);

// console.log('После вызова setTimeout!');

// -----------------------
/*
 * Очистка таймаута с clearTimeout()
 */

// const log = () => {
//   console.log('Лог при вызове callback-функции, через 3 секунды!');
// };

// const logger = time => {
//   console.log(`Лог через ${time}ms, потому что не отменили таймаут!`);
// };

// const timerId = setTimeout(logger, 2000, 2000); // logger - вызов fn, 2000 - setTimeout, 2000 - time
// console.log(timerId); // 1 - номер таймера + Лог...

// clearTimeout(timerId); // 1

// -----------------------
const log = () => {
  console.log('Лог при вызове callback-функции, через 3 секунды!');
};

const logger = time => {
  console.log(`Лог через ${time}ms, потому что не отменили таймаут!`);
};

const timerId = setTimeout(logger, 2000, 2000); // logger - вызов fn, 2000 - setTimeout, 2000 - time
const shouldCancelTimer = Math.random() > 0.3;

console.log(shouldCancelTimer); // true - сработает clearTimeout(timerId) or false - Лог...

if (shouldCancelTimer) {
  clearTimeout(timerId);
}
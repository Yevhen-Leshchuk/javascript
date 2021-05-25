// const add = function (a, b) {
//   return a + b;
// };

/*
 * Синтаксис стрелочной функции:
 * - с параметрами
 * - с одним параметром
 * - без параметров
 */

// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(2, 3));

// -----------------------
// const logMessage = (message) => {
//   console.log(message);
// };

// logMessage("Hello!");

// -----------------------
// const greet = () => {
//   console.log("Hello!");
// };

// greet();

// -----------------------
/*
 * Явный возврат - cо {}:
 */

// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(2, 3)); // 5

// -----------------------
/*
 * Неявный возврат - без {}:
 */

// const add = (a, b) => a + b;

// console.log(add(2, 3)); // 5

// -----------------------
/*
 * Псевдомассив arguments:
 */

const add = (...args) => {
  // rest
  console.log(args);
};

add(1, 2, 3, 4, 5, 6, 7);
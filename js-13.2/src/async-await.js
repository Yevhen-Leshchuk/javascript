/* eslint-disable no-unreachable */
/* eslint-disable no-throw-literal */
/*
 * Асинхронные функции возвращают promise
 */

// async function methodName(arguments) {
//   // body
// }

// -----------------------
// const getFruit = async (name) => {
//   const fruits = {
//     apple: "🍎",
//     peach: "🍑",
//     grapes: "🍇",
//   };

//   return fruits[name];
// };

// console.log(getFruit("apple"));
// getFruit("apple").then((fruit) => console.log(fruit));

// -----------------------
/*
 * Избегаем promise hell и чейнинг с ошибкой параллельного выполнения
 */

// const getFruit = async (name) => {
//   const fruits = {
//     apple: "🍎",
//     peach: "🍑",
//     grapes: "🍇",
//   };

//   return fruits[name];
// };

// const makePromiseSmoothie = () => {
//   return getFruit("apple").then((apple) => {
//     return getFruit("peach").then((peach) => {
//       return [apple, peach];
//     });
//   });
// };

// makePromiseSmoothie().then((smoothie) => console.log(smoothie));

// -----------------------
// const getFruit = async (name) => {
//   const fruits = {
//     apple: "🍎",
//     peach: "🍑",
//     grapes: "🍇",
//   };

//   return fruits[name];
// };

// const makeAsyncSmoothie = async () => {
//   console.log("1"); // 1
//   const apple = await getFruit("apple");
//   console.log("apple"); // 2
//   console.log("2"); // 3
//   const peach = await getFruit("peach");
//   console.log("peach"); // 4
//   console.log("3"); // 5

//   return [apple, peach];
// };

// makeAsyncSmoothie().then((smoothie) => console.log(smoothie)); // 6

// -----------------------
/*
 * Исправляем ошибку параллельного исполнения
 */

// const delay = (ms) => {
//   return new Promise((resolve) => setTimeout(() => resolve(""), ms));
// };

// const getFruit = async (name) => {
//   const fruits = {
//     apple: "🍎",
//     peach: "🍑",
//     grapes: "🍇",
//   };

//   await delay(1000);

//   return fruits[name];
// };

// const makeAsyncSmoothie = async () => {
//   console.time("Время на резолв промисов");

//   const apple = getFruit("apple");
//   const peach = getFruit("peach");
//   const grapes = getFruit("grapes");
//   const smoothie = await Promise.all([apple, peach, grapes]); // параллельное исполнение

//   console.timeEnd("Время на резолв промисов");

//   return smoothie;
// };

// makeAsyncSmoothie().then((smoothie) => console.log(smoothie));

// -----------------------
/*
 * Обработка ошибок
 */

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(() => resolve(""), ms));
};

const getFruit = async (name) => {
  const fruits = {
    apple: "🍎",
    peach: "🍑",
    grapes: "🍇",
  };

  await delay(1000);

  return fruits[name];
};

const makeAsyncSmoothie = async () => {
  try {
    const apple = getFruit("apple");
    const peach = getFruit("peach");

    const smoothie = await Promise.all([apple, peach]);

    throw "Поломалось 💩";

    return smoothie;
  } catch (error) {
    console.log("throw " + error); // throw
    throw error;
  }
};

makeAsyncSmoothie()
  .then((smoothie) => console.log(smoothie))
  .catch((error) => console.log(error)); // throw

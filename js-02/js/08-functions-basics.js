
// Функциональные выражения и объявление функции
// Аргументы и параметры, параметры по умолчанию
// Возврат значения

// const add = function (a, b) {
//   // параметры
//   console.log("a", a);
//   console.log("b", b);

//     //   return 100;  // прерывает выполнение fn

//   const result = a + b;

//   // console.log(result);

//   return result; // если нет return - будет undefined в clg
// };

// const r1 = add(2, 5); // аргументы
// console.log(r1);

// const r2 = add(10, 20);
// console.log(r2);

// const r3 = add(100, 250);
// console.log(r3);

// -----------------------

const fnA = function () {
  console.log("Начала выполняться [fnA]");
  fnB();
  console.log("Продолжила выполняться [fnA] после выхода из [fnB]");
};

const fnB = function () {
  console.log("Выполняется [fnB]");
};

console.log("Начал выполнение [main]");
fnA();
console.log("Продолжил выполняться [main] после выхода из [fnA]");

/*
 * Начал выполнение [main]
 * Начала выполняться [fnA]
 * Выполняется [fnB]
 * Продолжила выполняться [fnA] после выхода из [fnB]
 * Продолжил выполняться [main] после выхода из [fnA]
 */
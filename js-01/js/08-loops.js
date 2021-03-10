// Циклы

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// -----------------------

// Цикл for

// let value = 5;

// // value = value + 5;
// value += 5;
// console.log(value); // 10

// -----------------------

// console.log('Before');

// for (let count = 0; count < 5; count += 1) {
//     console.log(`Count ${count}`);
// }
// console.log('After');

// -----------------------

// for (let i = 10; i > 0; i -= 1) {
//   console.log(`i ${i}`);
// }

// -----------------------

// Введите число

// let userInput = prompt('Введите число');
// userInput = Number(userInput);
// let total = 0;


// for (let i = 1; i <= userInput; i += 1) {
//     total += i;
// }

// console.log(`Total= ${total}` );


// -----------------------

// Цикл while


// const number = 3;
// let total = 0;
// let i = 1;

// // i = 1
// // total 0 + 1 = 1

// // i = 2
// // total 1 + 2 = 3

// // i = 3
// // total 3 + 3 = 6

// // i = 4

// while (i <= number) {
//     total += i;
//     i += 1;
// }

// console.log(`Total= ${total}`);

// -----------------------

// Цикл do ... while

// let userInput;

// do {
//     userInput = prompt('Введи 5');

//     if (userInput === null) {
//         break;
//     }

//     userInput = Number(userInput);
// } while (userInput !== 5);

// -----------------------

// for (let i = 0; i < 10; i += 1) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// -----------------------
// Задание 6
// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.
// let input;
// let total = 0;

// Алгоритм

// 1 - создать цикл который спрашивает пользователя ввести число
// 2 - если ввели null остановить
// 3 - если вели не null преобразовать в число и добавить к total
// 4 - после цикла вывести общую сумму введеннх чисел
 


// let input;

// do {

//     let input = prompt('Введи число'); // null 

//     input = Number(input);  //0

// } while (input !== null); // бесконечный цикл


// -----------------------

// let total = 0;

// do {

//     let input = prompt('Введи число');

//     if (input === null) {
//         break;
//     }
//     input = Number(input);
//     total += input;

// } while (true);

// console.log(`Общая сумма ${total}`);

// -----------------------

let total = 0;

while (true) {
  let input = prompt("Введи число!");

  if (input === null) {
    console.log("Отменено пользователем!");
    break;
  }

  input = Number(input); // NaN

  const notANumber = Number.isNaN(input); // true

  if (notANumber) {
    console.log("Было введено не число, пропускаем текущую итерацию!");
    continue;
  }

  total += input;
}

console.log(`Общая сумма ${total}`);



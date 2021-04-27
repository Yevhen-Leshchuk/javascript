/*
 * Array.prototype.filter()
 * Поэлементно перебирает оригинальный массив (до конца)
 * Возвращает новый массив, если не нашли, вернет пустой массив
 * Добавляет в возвращаемый массив элементы которые удовлетворяют условию
 */

// const numbers = [5, 10, 15, 20, 25];
// const filteredNumbers = numbers.filter(function (number) {
//   console.log(number);
//   return number > 15; // возвращает true или false
// });

// console.log(filteredNumbers);

// -----------------------
// TASK 1:
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
// ];

// // 1. Получаем массив всех онлайн игроков:
// const onlinePlayers = players.filter(function (player) {
//   return player.online;
// });
// console.table(onlinePlayers);

// // 2. Получаем массив всех оффлайн игроков:
// const offlinePlayers = players.filter(function (player) {
//   return !player.online;
// });
// console.table(offlinePlayers);

// // 3. Получаем список хардкорных игроков с временем больше 250:
// const hardcorePlayers = players.filter(function (player) {
//   return player.timePlayed > 250;
// });
// console.table(hardcorePlayers);

/*
 * Пишем filter своими руками:
 */

// - создает новый массив и возаращает его
// - колбек для каждого элемента
// - если колбек вернул true пишет элемент в новый массив

// const numbers = [5, 10, 15, 20, 25];

// const filter = function (array, callback) {
//   const newArray = [];

//   for (let i = 0; i < array.length; i += 1) {
//     // console.log(array[i]);
//     const passed = callback(array[i], i, array);

//     if (passed) {
//       newArray.push(array[i]);
//     }
//   }

//   return newArray;
// };

// const filteredNumbers = filter(numbers, function (number, index, array) {
//   // console.log("number:", number);
//   // console.log("index:", index);
//   // console.log(array);

//   return number > 15;
// });

// console.log(filteredNumbers); // [20, 25]

// -----------------------
/*
 * Пишем filter руками на Array.prototype.filter (Не использовать!!!):
 */

const numbers = [5, 10, 15, 20, 25];

Array.prototype.filter = function (callback) {
  const newArray = [];

  console.log("This из Array.prototype.filter", this); // [5, 10, 15, 20, 25];

  for (let i = 0; i < this.length; i += 1) {
    const passed = callback(this[i], i, this);

    if (passed) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

const filteredNumbers = numbers.filter(function (number) {
  return number > 15;
});

console.log(filteredNumbers); // [20, 25]
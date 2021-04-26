/*
 * Array.prototype.map()
 * Поэлементно перебирает оригинальный массив
 * Возвращает новый массив такой же длины
 */

// const numbers = [5, 10, 15, 20, 25];
// const mappedNumbers = numbers.map(function (element, index, array) {
//   console.log("element:", element);
//   console.log("index:", index);
//   console.log(array);

//   return element * 2; // [10, 20, 30, 40, 50]
// });

// console.log("numbers:", numbers);
// console.log("mappedNumbers:", mappedNumbers);

// -----------------------
// TASK 1:
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// // 1. Получаем массив имен всех игроков:
// const playerNames = players.map(function (player) {
//   return player.name;
// });

// console.log(playerNames);

// // 2. Увеличиваем кол-во поинтов каждого игрока:
// const updatedAllPlayers = players.map(function (player) {
//   // console.log(player);
//   return {
//     ...player,
//     points: player.points + player.points * 0.1,
//   };
// });

// console.table(players);
// console.table(updatedAllPlayers);

// // 3. Увеличиваем кол-во часов игрока по id:
// const playerIdToUpdate = "player-3";
// const updatedPlayers = players.map(function (player) {
//   // console.log(player.id);

//   if (player.id === playerIdToUpdate) {
//     // console.log("Нашли нужного!");
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 50,
//     };
//   }

//   return player;
// });

// console.table(updatedPlayers);

// -----------------------
/*
 * Пишем map своими руками:
 */

// - создает и возвращает новый массив
// - перебирает оригинальный массив
// - вызывает колбек для каждого элемента и кидает туда аргументы
// - записывает результат вызова функции в новый массив

// const numbers = [5, 10, 15, 20, 25];

// const map = function (array, callback) {
//   const newArray = [];

//   for (let i = 0; i < array.length; i += 1) {
//     // console.log(array[i]);

//     const result = callback(array[i], i, array);
//     newArray.push(result);
//   }

//   return newArray;
// };

// const doubledNumbers = map(numbers, function (number, index, array) {
//   console.log("number:", number);
//   console.log("index:", index);
//   console.log(array);

//   return number * 2;
// });

// console.log(doubledNumbers);

// -----------------------
/*
 * Пишем map руками на Array.prototype.map (Не использовать!!!):
 */

const numbers = [5, 10, 15, 20, 25, "some number"];

Array.prototype.map = function (callback) {
  const newArray = [];

  console.log("This из Array.prototype.map", this); // [5, 10, 15, 20, 25, "some number"];

  for (let i = 0; i < this.length; i += 1) {
    const result = callback(this[i], i, this);

    newArray.push(result);
  }

  return newArray;
};

const doubled = numbers.map(function (number) {
  return number * 2;
});

console.log(doubled); // [10, 20, 30, 40, 50, NaN]
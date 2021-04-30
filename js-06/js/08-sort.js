/*
 * Array.prototype.sort()
 * Сортирует и ИЗМЕНЯЕТ оригинальный массив
 */

// const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log(numbers); // [1, 2, 3, 6, 9]

// -----------------------
// const numbers = [1, 9, 6, 2, 3];
// numbers.sort(function (prev, next) {
//   return prev - next;
// });
// console.log(numbers); // [1, 2, 3, 6, 9];

// -----------------------
// const numbers = [1, 9, 6, 2, 3];
// numbers.sort(function (prev, next) {
//   return next - prev;
// });
// console.log(numbers); // [9, 6, 3, 2, 1]

// -----------------------
// const letters = ["b", "B", "a", "A"];
// letters.sort();
// console.log(letters); // ["A", "B", "a", "b"]

// console.log("a".charCodeAt(0)); // 97
// console.log("A".charCodeAt(0)); // 65
// 0 = index

// -----------------------
/*
 * Как сделать копию массива чтобы не сортировать оригинальный
 */

// const numbers = [1, 9, 6, 2, 3];
// const copy = numbers.slice();
// console.log(copy === numbers); // false

// const copy1 = copy.sort();
// console.log(copy1); // [1, 2, 3, 6, 9]

// // или:
// const copy2 = [...numbers].sort();
// console.log(copy2); // [1, 2, 3, 6, 9]

// console.log(numbers); // [1, 9, 6, 2, 3]

// -----------------------
/*
 * Кастомная сложных типов
 */

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

// 1. Сортировка по убыванию значения свойства
const sortedByTopPlayers = [...players].sort(function (prevPlayer, nextPlayer) {
  return nextPlayer.timePlayed - prevPlayer.timePlayed;
});

console.table(sortedByTopPlayers);

// 2. Сортировка по возрастанию значения свойства
const sortedByWorstPlayers = [...players].sort(function (
  prevPlayer,
  nextPlayer
) {
  return prevPlayer.timePlayed - nextPlayer.timePlayed;
});

console.table(sortedByWorstPlayers);
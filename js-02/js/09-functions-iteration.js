/*
 * Функция logItems для перебора массива
 */

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// const numbers = [1, 2, 3, 4, 5];

// for (const friend of friends) {
//   console.log(friend);
// }

// for (const number of numbers) {
//   console.log(number);
// }

// -----------------------

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// const numbers = [1, 2, 3, 4, 5];

// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };

// logItems(friends);
// logItems(numbers);
// logItems([100, 200, 300]);

// -----------------------

/*
 * Функция findFriend для поиска друзей
 */

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// const nameToFind = "Poly";

// const findFriend = function (allFriends, name) {
//   console.log("allFriends:", allFriends);
//   console.log("name:", name);

//   for (const friend of allFriends) {
//     if (name === friend) {
//       // message = "Нашли такого друга!";
//       // console.log("Нашли такого друга!");
//       return "Нашли такого друга!";
//     }
//   }

//   // console.log("ДРУГ НЕ НАЙДЕН! :(");
//   return "ДРУГ НЕ НАЙДЕН! :(";
// };

// const r1 = findFriend(friends, "Poly");
// console.log(r1);

// const r2 = findFriend(friends, "Chelsy");
// console.log(r2);

// -----------------------

const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
const nameToFind1 = "Poly";

const findFriend = function (allFriends, name) {
  const isInFriends = allFriends.includes(name);

  // if (isInFriends) {
  //   return "Нашли такого друга!";
  // } else {
  //   return "ДРУГ НЕ НАЙДЕН! :(";
  // }

  // return isInFriends;
  return isInFriends ? "Нашли такого друга!" : "ДРУГ НЕ НАЙДЕН! :(";
};

const r1 = findFriend(friends, "Poly");
console.log(r1);

const r2 = findFriend(friends, "Chelsy");
console.log(r2);
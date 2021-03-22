/*
 * Функция findSmallestNumber поиска самого маленького элемента массива
 */

// const numbers = [67, 45, -3, 1, 78, 90, 2];
// let smallestNumber = numbers[0];

// for (let i = 1; i < numbers.length; i += 1) {
//   // console.log("numbers[i]:", numbers[i]);
//   // console.log("findSmallestNumber:", smallestNumber);

//   if (numbers[i] < smallestNumber) {
//     smallestNumber = numbers[i];
//   }
// }

// console.log(smallestNumber); // 2

// -----------------------
const numbers = [67, 45, -3, 1, 78, 90, 2];

const findSmallestNumber = function (items) {
  let smallestNumber = items[0];

  for (let i = 1; i < items.length; i += 1) {
    // console.log("items[i]:", items[i]);
    // console.log("findSmallestNumber:", smallestNumber);

    if (items[i] < smallestNumber) {
      smallestNumber = items[i];
    }
  }

  return smallestNumber;
};

const r1 = findSmallestNumber(numbers);

console.log(r1);

console.log(findSmallestNumber([5, 34, 67, 9, 67, 4]));
console.log(findSmallestNumber([7, 4, -7, 0, 91, 1]));
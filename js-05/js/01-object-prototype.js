
// const objB = {
//   z: 10,
// };

// const objA = {
//   x: 1,
//   y: 2,
// };

// console.log(objA);

// -----------------------
// const objB = {
//   z: 10,
// };

// const objA = Object.create(objB);

// console.log(objA);
// console.log(objA.z); // 10 from __proto__

// -----------------------
// const objB = {
//   z: 10,
// };

// const objA = Object.create(objB);

// objA.x = 1;
// objA.y = 2;
// console.log(objA);

// -----------------------
// Правило поиска свойства в цепочке прототипов
const objB = {
  z: 10,
};

const objA = Object.create(objB);

objA.x = 1;
objA.y = 2;

console.log(objA);
console.log(objA.z); // 10

objA.z = 1000;
console.log(objA.z); // 1000
console.log(objA.qwerty); // undefined
console.log(objA.hasOwnProperty("x")); // true

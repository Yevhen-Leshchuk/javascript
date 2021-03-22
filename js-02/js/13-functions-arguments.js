
/*
 * Псевдомассив arguments и Array.from и ...
 */

// const fn = function () {
//   console.log([]);
//   console.log(arguments);
// };

// fn(1, 2, 3, 4, 5, 6, 7);

// -----------------------
/*
 * Функция сложения произвольного количества элементов
 */

// const add = function () {
//   console.log(arguments);

//   for (let i = 0; i < arguments.length; i += 1) {
//     console.log(arguments[i]);
//   }
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

// -----------------------
// v1
// const add = function () {
//   const args = Array.from(arguments);
//   console.log("arguments:", arguments);
//   console.log("args:", args);

//   for (let i = 0; i < args.length; i += 1) {
//     console.log(args[i]);
//   }
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

// -----------------------
// v2
// const add = function (...args) {
//   // rest
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   // return // undefined
//   return total;
// };

// console.log(add(1, 2, 3)); // 6
// console.log(add(1, 2, 4, 5, 6)); // 18

// -----------------------
/*
 * Функция прикрепления тега к строке
 */
// const posts = ["post-1", "post-2", "post-3", "post-4"];
// const tag = "#jqueryrules";

// const postsWithTag = [];

// for (const post of posts) {
//   postsWithTag.push(`${post}${tag}`);
// }

// console.log(postsWithTag);

// -----------------------
const posts = ["post-1", "post-2", "post-3", "post-4"];
const tag = "#jqueryrules";

const addTag = function (tag, ...args) {
  // console.log(tag);
  // console.log(args);
  const postsWithTag = [];

  for (const arg of args) {
    postsWithTag.push(`${arg}${tag}`);
  }

  return postsWithTag;
};

console.log(addTag("#jqueryrules", "post-1", "post-2"));
console.log(addTag("#react", "post-1", "post-2", "post-3"));
console.log(addTag("#redux", "post-1", "post-2", "post-3", "post-4"));
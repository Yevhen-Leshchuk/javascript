/*
 * Разница по производительности map vs reduce:
 */

const array = new Array(5000);
// console.log(array);

console.time("map");
array.map((el) => el);
console.timeEnd("map");

console.time("dirty reduce");
array.reduce((acc, el) => acc.push(el), []);
console.timeEnd("dirty reduce");

console.time("clean reduce");
array.reduce((acc, el) => [...acc, el], []);
console.timeEnd("clean reduce");
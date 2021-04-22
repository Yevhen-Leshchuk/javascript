// const Manager = function (name, sales) {
//   this.name = name;
//   this.sales = sales;

//   this.sell = function () {
//     this.sales += 1;
//   };
// };

// const mango = new Manager("Mango", 5);
// console.log(mango);

// mango.sell();
// console.log(mango);

// const poly = new Manager("Poly", 10);
// console.log(poly);

// -----------------------
// const Manager = function (name, sales) {
//   this.name = name;
//   this.sales = sales;
// };

// Manager.prototype.sell = function () {
//   this.sales += 1;
// };

// Manager.prototype.changeName = function (name) {
//   this.name = name;
// };

// console.dir(Manager);

// const mango = new Manager("Mango", 5);
// console.log(mango);

// mango.sell();
// console.log(mango);

// const poly = new Manager("Poly", 10);
// console.log(poly);

// console.log(poly.hasOwnProperty("y")); // false

// poly.changeName("Rob");
// console.log(poly);

// -----------------------
// console.log(
//   "mango.__proto__ === Manager.prototype: ",
//   mango.__proto__ === Manager.prototype
// ); // true

// -----------------------
const a = {};
console.log(a.__proto__ === Object.prototype); // true

const b = [];
console.log(b.__proto__ === Array.prototype); // true
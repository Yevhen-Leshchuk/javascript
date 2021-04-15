
// const showTag = function () {
//   console.log("this: ", this);
//   console.log("this.tag: ", this.tag);
// };

// const mango = {
//   tag: "Mango",
//   showTag,
// };

// const poly = {
//   tag: "Poly",
//   showTag,
// };

// mango.showTag();
// poly.showTag();

// -----------------------
// call
// const showTag = function () {
//   console.log("this", this);
//   console.log("this.tag", this.tag);
// };

// const mango = {
//   tag: "Mango",
// };

// const poly = {
//   tag: "Poly",
// };

// // showTag.call();
// showTag.call(mango);
// showTag.call(poly);

// -----------------------
// call
// const showTag = function (arg1, arg2, arg3) {
//   console.log(arg1, arg2, arg3);
//   console.log("this", this);
//   console.log("this.tag", this.tag);
// };

// const mango = {
//   tag: "Mango",
// };

// const poly = {
//   tag: "Poly",
// };

// showTag.call(mango, 1, 2, 3);
// showTag.call(poly, 5, 10, 15);

// -----------------------
// apply
// const showTag = function (arg1, arg2, arg3) {
//   console.log(arg1, arg2, arg3);
//   console.log("this", this);
//   console.log("this.tag", this.tag);
// };

// const mango = {
//   tag: "Mango",
// };

// const poly = {
//   tag: "Poly",
// };

// showTag.apply(mango, [1, 2, 3]);
// showTag.apply(poly, [5, 10, 15]);

// -----------------------
// bind;
// const showTag = function (arg1, arg2, arg3) {
//   console.log(arg1, arg2, arg3);
//   console.log("this", this);
//   console.log("this.tag", this.tag);
// };

// const mango = {
//   tag: "Mango",
// };

// const poly = {
//   tag: "Poly",
// };

// const showMangoTag = showTag.bind(mango);
// const showPolyTag = showTag.bind(poly);

// showMangoTag(1, 2, 3);
// showPolyTag(5, 10, 15);

// -----------------------
const mango = {
  tag: "Mango",
  showTag() {
    console.log("this", this);
  },
};

const poly = {
  tag: "Poly",
};

mango.showTag();
mango.showTag.call(poly);

const showPolyTag = mango.showTag.bind(poly);
showPolyTag();
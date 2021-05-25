/*
 * Контекст стрелки.
 * Контекст внутри стрелки определяется местом ее объявления, а не вызова,
 * и ссылается на контекст родительской функции.
 */

// const showThis = () => {
//   console.log("this in showThis:", this);
// };

// showThis(); // this in showThis: undefined or window

// const user = { name: "Mango" };
// user.showContext = showThis;

// user.showContext(); // this in showThis: undefined or window

// -----------------------
// const user = {
//   fullName: "Mango",
//   showName() {
//     console.log("this:", this);
//     console.log("this.fullName:", this.fullName);

//     const inner1 = function () {
//       console.log("this in inner:", this); // undefined
//     };

//     inner1();

//     const inner2 = () => {
//       console.log("this in inner:", this); // {fullName: "Mango", showName: ƒ}
//     };

//     inner2();
//   },
// };

// user.showName();

// -----------------------
/*
 * 💩 Не используется!!! Стрелки как методы объекта:
 */
// const user = {
//   fullName: "Mango",
//   showName: () => {
//     console.log("this:", this); // undefined
//     console.log("this.fullName:", this.fullName);
//   },
// };

// 💩
// user.showName();

// -----------------------
/*
 *  💩 Не используется!!! Стрелка-конструктор:
 */
// const User = (name) => {
//   this.name = name;
// };

// console.log(new User("Mango"));

// -----------------------
/*
 * 💩 Еще разок, стрелка как метод обьекта:
 */

const objA = {
  x: 5,
  showX() {
    console.log("this в objA.showX:", this); // this в objA.showX: {x: 5, showX: ƒ}
    console.log(this.x); // 5

    const objB = {
      y: 10,
      // 💩
      showThis: () => {
        console.log("this в objB.showThis:", this); // this в objA.showX: {x: 5, showX: ƒ}
        console.log(this.y); // undefined
      },
    };

    objB.showThis();
  },
};

objA.showX();
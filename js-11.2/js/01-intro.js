// const promise = new Promise((resolve, reject) => {
//   // resolve('Успех');
//   reject('Ошибка');
// });

// console.log(promise);

// -----------------------
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = Math.random() > 0.5;
//     // console.log(success);

//     if (success) {
//       resolve('Успех!');
//     }

//     reject('Ошибка!');
//   }, 1000);
// });

// // promise.then(
// //   result => console.log(result), // первый колбек для resolve
// //   error => console.log(error), // второй колбек для reject
// // );

// // или:
// // promise.then(result => console.log(result)).catch(error => console.log(error));

// // тоже самое со стилями:
// console.log('До'); // 1

// let isLoading = false;

// isLoading = true;

// promise
//   .then(result => {
//     console.log(`%c${result}`, 'color: green; font-size: 16px'); // 3
//     console.log('Внутри колбека'); // 4
//   })
//   .catch(error => {
//     console.log(`%c${error}`, 'color: red; font-size: 16px');
//   })
//   .finally(() => {
//     console.log('Something for both of them');
//     isLoading = false;
//   });

// console.log('После'); // 2

// -----------------------
// Чейнинг:

const promise = new Promise(resolve => {
  resolve(5);
});

promise
  .then(x => {
    console.log('x:', x);

    return x * 2;
  })
  .then(y => {
    console.log('y:', y);

    return y + 50;
  })
  .then(z => {
    console.log('z:', z);
  })
  .catch(error => console.log(error));
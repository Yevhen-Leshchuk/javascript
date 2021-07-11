// const fetchUser = userName => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = Math.random() > 0.3;

//       if (success) {
//         const user = { name: userName, age: 26, posts: 74 };
//         resolve(user);
//       }

//       const error = 'Произошла ошибка :(';
//       reject(error);
//     }, 1000);
//   });
// };

// fetchUser('Mango').then(onFetchUserSuccess).catch(onFetchUserError);

// function onFetchUserSuccess(user) {
//   console.log(user);
// }

// function onFetchUserError(error) {
//   console.log(`%c ${error}`, 'color: red; font-size: 16px;');
// }

// -----------------------
// const fetchTodo = id => {
//   return fetch(`https://jsonplaceholder.cypress.io/todos/${id}`).then(res =>
//     res.json(),
//   );
// };

// fetchTodo(4).then(console.log).catch(console.log);
// fetchTodo(9).then(console.log).catch(console.log);
// fetchTodo(100).then(console.log).catch(console.log);

// -----------------------
// const makePromise = delay => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(delay);
//     }, delay);
//   });
// };

// makePromise(4000).then(console.log); // 3
// makePromise(2000).then(console.log); // 2
// makePromise(1000).then(console.log); // 1
// makePromise(5000).then(console.log); // 4

// -----------------------
// const log = value => console.log(value); // 15
// const add = (a, b, callback) => callback(a + b);

// add(5, 10, log);

// -----------------------
const log = value => console.log(value); // 15
const add = (a, b) => Promise.resolve(a + b);

add(5, 10).then(log);
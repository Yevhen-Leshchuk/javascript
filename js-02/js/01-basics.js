// Массивы

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// console.log(friends);
// console.log(friends[2]);

// friends[2] = 'Chelsey';

// console.log(friends);
// console.log(friends[2]);

// console.log(friends.length);

// friends[4] = 'Kongo';

// console.log(friends);

// friends[355] = 'Kongo';

// console.log(friends);
// console.log(friends.length);

// console.log(friends[300]);

// -----------------------

// Итерация по массиву

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];


// for (let i = 0; i < friends.length; i += 1) {
    
//     console.log(i);
//     console.log(friends[i]);
// }

// for......of

// for (const friend of friends) {
//     console.log(friend);
// }

// -----------------------

// Логика с break и continue


// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const nameToFind = 'Poly';
// let message;

// for (let i = 0; i < friends.length; i += 1) {
//     const friend = friends[i];

//     if (nameToFind === friend) {
//           console.log(`Нашли такого друга : '${nameToFind}'`);
//     }
// }

// or

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const nameToFind = 'Poly';
// let message;

// for (const friend of friends) {

//     if (nameToFind === friend) {
//         message = `Нашли такого друга : '${nameToFind}'`;
//         break;
//     } 
//         message = 'такого друга нет';
    
// }
// console.log(message);

// or

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
const nameToFind = 'Poly';
let message = 'такого друга нет';

for (const friend of friends) {

    if (nameToFind === friend) {
        message = `Нашли такого друга : '${nameToFind}'`;
        break;
    } 
}
console.log(message);

// -----------------------

// Матрица "Крестики нолики"

const board = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(board[0]); // [1, 2, 3]
console.log(board[0][1]); // 2
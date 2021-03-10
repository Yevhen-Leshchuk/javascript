// Тернарный оператор

// let category;
// const age = 17;

// if (age >= 18) {
//     category = 'adult';
// } else {
//     category = 'child';
// }

// console.log(category);

// const category = условие ? значение1 : значение2;
// const age = 16;
// const category = age >= 18 ? 'adult' : 'child';
// console.log(category);

// -----------------------


// switch

// const stars = 2;

// if (stars === 1) {
//     console.log('1');
// } else if (stars === 2) {
//     console.log('2');
// } else if (stars === 3) {
//     console.log('3');
// } else if (stars === 4) {
//     console.log('4');
// } else if (stars === 5) {
//     console.log('5');
// } else {
//     console.log('Неверный ввод');
// }

// -----------------------

// const stars = 5;

// switch (stars) {
//   case 1:
//     console.log("1");
//     break;
//   case 2:
//     console.log("2");
//     break;
//   case 3:
//     console.log("3");
//     break;
//   case 4:
//     console.log("4");
//     break;
//   case 5:
//     console.log("5");
//     break;
// }

// -----------------------


// const stars = 6;
// let result;

// switch (stars) {
//     case 1:
//         result = 'case1';
//         break;
    
//  case 2:
//         result = 'case2';
//         break;
    
//      case 31:
//         result = 'case3';
//         break;
    
//      case 4:
//         result = 'case4';
//         break;
    
//      case 5:
//         result = 'case5';
//         break;
    
//     default:
//         result = 'Неверный ввод';
// }

//         console.log(result);

// -----------------------
// 1 - 20$
// 2-3-4- 50$
// 5 - 100$

const stars = 4;
let price = 0;

switch (stars) {
    case 1:
        price = 20;
        break;
    case 2:
    case 3:
    case 4:
        price = 50;
        break;
    case 5:
        price = 100;
        break;
    default:
        console.log('Такого кол-ва звезд нет');
}
console.log(price);
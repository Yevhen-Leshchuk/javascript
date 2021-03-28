// Проверяем наличие работника на месте
// Сначала через for, потом includes

const staff = ['Mango', 'Poly', 'Ajax', 'Kiwi'];
const query = 'Ajax';
// let result = 'Сотрудника нет!';

// for (const employee of staff) {
//     console.log(employee);

//     if (query === employee) {
//         result = 'Сотрудник на работе!';
//         break;
//     }
// }
// console.log(result);

// -----------------------

console.log(staff.includes('Poly')); // true - если такой элемент есть // folse - если такого элемента нет.

const result = staff.includes(query)
    ? 'Сотрудник на работе!'
    : 'Сотрудника нет';

console.log(result);


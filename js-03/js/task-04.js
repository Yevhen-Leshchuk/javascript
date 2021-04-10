// Задание 4
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму запрплаты работников и возращает ее.Каждое поле объекта,
//   передаваемого в функцию, имеет вид "имя": "зарплата".

// Моё решение
// const countTotalSalary = function (employees) {
//   const keys = Object.keys(employees);

//   let totalSalary = 0;

//   for (const key of keys) {
//     totalSalary += employees[key];
//   }
//   return totalSalary;
// };

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400

//------------------

//Лучшее решение

const countTotalSalary = function (employees) {
  const values = Object.values(employees);
  let totalSalary = 0;

  for (const value of values) {

    totalSalary += value;
  }
  return totalSalary;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400

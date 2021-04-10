// Задание 6
// Напиши функцию calculateTotalPrice(allProdcuts, productName),
// которая получает массив объектов и имя продукта(значение свойства name).
// Возвращает общую стоимость продукта(цена * количество).
// Вызовы функции для проверки работоспособности твоей реализации.

//Решение 1. 
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProducts, productName) {

//   let totalPrice = 0;

//   for (const product of allProducts) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   return totalPrice;
// };

// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

//----------------

// Решение 2. (Деструктуризация - обычная).
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProducts, productName) {
//   let totalPrice = 0;
//   for (const product of allProducts) {
//     const { name, price, quantity } = product;

//     if (name === productName) {
//       totalPrice = price * quantity;
//     }
//   }
//   return totalPrice;
// };

// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

//----------------

// Решение 3. (Деструктуризация - глубокая).
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProducts, productName) {
  let totalPrice = 0;
  for (const { name, price, quantity } of allProducts) {
    if (name === productName) {
      totalPrice = price * quantity;
    }
  }
  return totalPrice;
};

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
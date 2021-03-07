// Парс числа. Объект Math. Возведение в степень

// NaN

// const value = 'sdfsfe';

// const number = Number(value);
// console.log(number); // NaN

// // Парс числа.

// const blockWidth = '300px';

// const width = Number.parseInt(blockWidth);

// console.log(width); // 300
// console.log(typeof width); // number


// const blockWidth1 = '300.5px';

// const width1 = Number.parseFloat(blockWidth1);

// console.log(width1); // 300.5

// Объект Math

let number = prompt('Введите число');
number = Number(number);

let power = prompt('Введите степень');
power = Number(power);

console.log(number); // 2
console.log(power); // 5

const result = Math.pow(number, power);
console.log(result); // 32

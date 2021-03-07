// Шаблонные строки. Методы строк
const firstName = 'Chelsy';
const lastName = 'Emerald';
const room = 716;
const type = 'VIP';
// Гость х у поселяется в z номер q

const fullName = firstName + ' ' + lastName;
console.log(fullName); // Chelsy Emerald

console.log(5 + '5'); // 55
console.log(5 + 5 + '5'); // 10 + 5 = '105'

// const message =
//     'Гость ' +
//     firstName +
//     ' ' + lastName +
//     ' поселяется в ' +    
//     type +
//     ' номер ' +
//     room;
// console.log(message);

// Шаблонная строка
const message = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
console.log(message);
console.log(message.length);  // Длина строки


const superValue = 'qwerty';
 
const userInput = prompt('Введи то что надо');
console.log('userinput before: ', userInput);

const normalizedInput = userInput.toLowerCase();
console.log('userinput after: ', userInput);
console.log('normalizedinput: ', normalizedInput);

console.log(superValue === userInput); // false
console.log(superValue === normalizedInput); // true




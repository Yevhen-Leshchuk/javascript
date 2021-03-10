// Ввод пользовователя

// const shouldRenew = confirm('Хотите продлить подписку?');
// console.log(shouldRenew);

// const userInput = prompt('Введите число 10');
// console.log(typeof userInput);
// console.log(userInput === 10);

// let userInput = prompt('Введите число 10');
// userInput = Number(userInput);
// console.log(typeof userInput);
// console.log(userInput === 10);

// console.log(5 > 2);
// console.log(5 < 4);

// console.log('5' === 5);
// console.log(true === 1);

// -----------------------

// Эксперемент

// console.log(document);

const numberInputRef = document.querySelector('input[name="number"]');
const powerInputRef = document.querySelector('input[name="power"]');
const buttonRef = document.querySelector('button');

buttonRef.addEventListener('click', function () {
    console.log('numberInputRef.value: ', numberInputRef.value);
    console.log('powerInputRef.value: ', powerInputRef.value);

    const number = Number(numberInputRef.value);
    const power = Number(powerInputRef.value);

    const result = Math.pow(number, power);
    console.log(result);
})
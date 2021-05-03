// ТЗ
// Напиши функции которые с помощью перебирающих методов массива(никаких for, splice и т.д.)
// выполняют следующие операции над массивом объектов пользователей из файла users.js.
import users from "./users.js";
console.log("users :", users);

// Задание 7
// Получить общую сумму баланса(поле balance) всех пользователей.

const calculateTotalBalance = users => {

  const total = users.reduce((acc, user) => {
    return acc + user.balance;
  }, 0);
  return total;
};

console.log(calculateTotalBalance(users)); // 20916


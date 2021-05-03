// ТЗ
// Напиши функции которые с помощью перебирающих методов массива(никаких for, splice и т.д.)
// выполняют следующие операции над массивом объектов пользователей из файла users.js.
import users from "./users.js";
console.log("users :", users);

// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет(поле age).

const getUsersWithAge = (users, min, max) => {
  const names = users.filter(user => user.age > min && user.age < max);

  return names;
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
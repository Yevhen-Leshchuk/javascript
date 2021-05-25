// ТЗ
// Напиши функции которые с помощью перебирающих методов массива(никаких for, splice и т.д.)
// выполняют следующие операции над массивом объектов пользователей из файла users.js.
import users from "./users.js";
console.log("users :", users);

// Задание 3
// Получить массив имен пользователей по полу(поле gender).

const getUsersWithGender = (users, gender) => {
  const names = users
    .filter(user => user.gender === gender)
    .map(user => user.name);

  return names;
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
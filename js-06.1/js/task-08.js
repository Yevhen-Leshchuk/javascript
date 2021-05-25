// ТЗ
// Напиши функции которые с помощью перебирающих методов массива(никаких for, splice и т.д.)
// выполняют следующие операции над массивом объектов пользователей из файла users.js.
import users from "./users.js";
console.log("users :", users);

// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  const foundFriends = users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
  return foundFriends;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
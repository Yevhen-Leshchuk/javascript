// ТЗ
// Напиши функции которые с помощью перебирающих методов массива(никаких for, splice и т.д.)
// выполняют следующие операции над массивом объектов пользователей из файла users.js.
import users from "./users.js";
console.log("users :", users);

// Задание 9
// Массив имен(поле name) людей,
// отсортированных в зависимости от количества их друзей(поле friends)

const getNamesSortedByFriendsCount = users => {
  const nameArray = users
    .sort((prevFriends, nextFriends) =>
      prevFriends.friends.length - nextFriends.friends.length)
    .map(user => user.name);
  return nameArray;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
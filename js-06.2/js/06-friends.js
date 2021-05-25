// hw 6.8
import users from "./users.js";
console.log("users :", users);

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(({ friends }) => friends.includes(friendName))
    .map(({ name }) => name);
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
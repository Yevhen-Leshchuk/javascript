// Собственные свойства и for...in
// Метод hasOwnProperty()

const objA = {
  q: 5,
  z: 6,
};

const objB = Object.create(objA);

objB.x = 1;
objB.y = 2;

console.log(objB.hasOwnProperty("z")); // false

for (const key in objB) {
  console.log("all keys", key); // x, y, q, z

  if (objB.hasOwnProperty(key)) {
    console.log("own keys", key); // x, y
  }
}

console.log(Object.keys(objB)); // ["x", "y"]
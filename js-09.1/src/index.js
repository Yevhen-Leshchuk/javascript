// const express = require('express')
const validator = require('validator');
const greeter = require("./greeter");

greeter("Hello, friends!");

const validateEmail = email => {
  return validator.isEmail(email);
};

console.log(
  'Is mango@mail.com a valid email?: ',
  validateEmail('mango@mail.com'),
);

console.log(
  'Is Mangozedog.com a valid email?: ',
  validateEmail('Mangozedog.com'),
);

// const app = express();

// app.get("/", (req, res) => {
//   res.send("<h1>Hello world</h1>");
// });

// app.listen(5000, () => {
//   console.log("App is running on port 5000");
// });

// -----------------------
// const app = express();
// app.get("/", (req, res) => {
//   res.send({
//     message: "Node is AMAZING!",
//   });
// });

// app.listen(3000, () => {
//   console.log("App is running on port 3000");
// });

// -----------------------

class User {
  static hello = "aloha";
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this.name;
  }
}

const mango = new User("Mango");

console.log(mango.name);
// Добавялем работников в штат

const oldStaff = ["Mango", "Poly", "Ajax"];
const newStaff = ["Chelsy", "Kiwi"];

const staff = oldStaff.concat(newStaff);

// console.log("oldStaff:", oldStaff); // ["Mango", "Poly", "Ajax"];
// console.log("newStaff:", newStaff); // ["Chelsy", "Kiwi"];
// console.log(staff);

// -----------------------
console.log([...oldStaff, ...newStaff]); // ["Mango", "Poly", "Ajax", "Chelsy", "Kiwi"]

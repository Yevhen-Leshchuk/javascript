import cart from "./03-cart.js";

// console.log(cart);

document.querySelector(".js-show-cart").addEventListener("click", () => {
  console.table(cart.getItems());
  console.log("Total:", cart.countTotalPrice());
});

document
  .querySelector('button[data-product="🍎"]')
  .addEventListener("click", cart.add.bind(cart, { name: "🍎", price: 50 }));
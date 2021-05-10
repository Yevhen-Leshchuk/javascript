// const titleRef = document.createElement("h1");

// titleRef.textContent = "Динамически созданный заголовок! Вау!";
// titleRef.classList.add("site-title");
// titleRef.id = "title";
// console.log(titleRef);

// -----------------------
const product = {
  name: "Сервоприводы",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.",
  price: 2000,
  available: true,
};

// Шаг 1:
const containerRef = document.createElement("div");
containerRef.classList.add("product-card");
// console.log(containerRef);

const titleRef = document.createElement("h2");
titleRef.textContent = product.name;
titleRef.classList.add("product-card__name");
// console.log(titleRef);

const descrRef = document.createElement("p");
descrRef.textContent = product.description;
// console.log(descrRef);

const priceRef = document.createElement("p");
priceRef.textContent = `Цена: ${product.price} кредитов`;
// console.log(priceRef);

// Шаг 2:
// containerRef.appendChild(titleRef);
// containerRef.appendChild(descrRef);
// containerRef.appendChild(priceRef);

// или:
containerRef.append(titleRef, descrRef, priceRef);
console.log(containerRef);

// Шаг 3:
const cardRootRef = document.querySelector("#root");
cardRootRef.appendChild(containerRef);

// -----------------------
const nav = document.querySelector(".nav");
console.log(nav);

const listItemRef = document.createElement("li");
listItemRef.textContent = "New Item";
console.log(nav.firstElementChild); // первый li

// nav.appendChild(listItemRef); // последний item
// nav.prepend(listItemRef); // первый item
nav.insertBefore(listItemRef, nav.firstElementChild); // первый item
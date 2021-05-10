// console.dir(window.document);
// console.dir(document);

// -----------------------
const titleRef = document.querySelector(".page-title");
console.dir(titleRef);
titleRef.textContent = "Привет, добро пожаловать!";

// -----------------------
const linkRef = document.querySelector(".nav__link");
console.log(linkRef);

// -----------------------
const linksRef = document.querySelectorAll(".nav__link");
console.log(linksRef);

// -----------------------
const imageRef = document.querySelector(".hero-image");
console.dir(imageRef);

console.log(imageRef.src);
console.log(imageRef.alt);

imageRef.src =
  "https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480";

imageRef.alt = "Это моя фотка!";

console.log(imageRef.getAttribute("src"));
console.log(imageRef.getAttribute("alt"));

// -----------------------
// или v2:
// imageRef.setAttribute(
//   "src",
//   "https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480"
// );

// imageRef.setAttribute("alt", "Это моя фотка!");

// -----------------------
const activeLinkRef = document.querySelector(".nav__link--active");
console.dir(activeLinkRef);

activeLinkRef.href = "/blog";
activeLinkRef.style.color = "palevioletred";

console.log(activeLinkRef.classList);
console.log(activeLinkRef.classList.contains("red")); // false
console.log(activeLinkRef.classList.contains("nav__link--primary")); // true

activeLinkRef.classList.add("nav__link--new"); // true
activeLinkRef.classList.remove("nav__link--primary");
// Задание 3
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// < ul id = "gallery" ></ >
// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css - классы.
// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//Решение 1.

// const galleryRef = document.querySelector('#gallery');

// const createGallery = (image => {

//   const itemRef = document.createElement('li');
//   itemRef.classList.add('gallery__item');

//   const imageRef = document.createElement('img');
//   imageRef.src = image.url;
//   imageRef.alt = image.alt;

//   itemRef.appendChild(imageRef);

//   return itemRef;
// });

// const arrayImages = images.map(image => createGallery(image));

// galleryRef.append(...arrayImages);

// console.log(galleryRef);

//Решение 2.

const galleryRef = document.querySelector("#gallery");
const fragment = document.createDocumentFragment();

images.forEach((el) => {
  const itemRef = document.createElement("li");

  itemRef.insertAdjacentHTML(
    "afterbegin",
    `<img src = ${el.url} alt = ${el.alt} width = "420", height = "250">`
  );

  console.log(itemRef);
  fragment.append(itemRef);
});

galleryRef.appendChild(fragment);
galleryRef.style.listStyle = "none";
galleryRef.style.display = "flex";
galleryRef.style.flexWrap = "wrap";
galleryRef.style.justifyContent = "space-between";
import gallery from "./gallery-items.js";
console.log("gallery :", gallery);


const galleryRef = document.querySelector('.js-gallery');
// console.log(galleryRef);
const fragment = document.createDocumentFragment();

gallery.forEach((el) => {
  // console.log(el);
  const itemRef = document.createElement("li");
  itemRef.classList.add('gallery__item');
  const linkRef = document.createElement("a");
  linkRef.classList.add('gallery__link');
  linkRef.href = el.preview;
  // console.log(linkRef);
  const imgRef = document.createElement("img");
  imgRef.classList.add('gallery__image');
  imgRef.src = el.original;
  imgRef.setAttribute("data-source", el.original);
  imgRef.alt = el.description;
  // console.log(imgRef);
  linkRef.appendChild(imgRef);
  itemRef.appendChild(linkRef);
  // console.log(itemRef);
  fragment.appendChild(itemRef);
});

galleryRef.appendChild(fragment);

console.log(galleryRef);

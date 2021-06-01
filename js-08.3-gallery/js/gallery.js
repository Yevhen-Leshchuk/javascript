import gallery from "./gallery-items.js";
console.log("gallery :", gallery);


const galleryRef = document.querySelector('.js-gallery');
const openModalRef = document.querySelector('.js-lightbox');
const closeModalRef = document.querySelector('button[data-action="close-lightbox"]');
const lightboxImageRef = document.querySelector('.lightbox__image');
const lightboxRef = document.querySelector('.lightbox__overlay');

const fragment = document.createDocumentFragment();

galleryRef.addEventListener('click', onOpenModal);
closeModalRef.addEventListener('click', onCloseModal);
lightboxRef.addEventListener('click', onLightboxClick);

gallery.forEach((el) => {
  const itemRef = document.createElement("li");
  itemRef.classList.add('gallery__item');

  const linkRef = document.createElement("a");
  linkRef.classList.add('gallery__link');
  linkRef.href = el.preview;

  const galleryImgRef = document.createElement("img");
  galleryImgRef.classList.add('gallery__image');
  galleryImgRef.src = el.original;
  galleryImgRef.setAttribute("data-source", el.original);
  galleryImgRef.alt = el.description;

  linkRef.appendChild(galleryImgRef);
  itemRef.appendChild(linkRef);

  fragment.appendChild(itemRef);
});

galleryRef.appendChild(fragment);


function onOpenModal(event) {
  window.addEventListener('keydown', onPressEscape);
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const imageRef = event.target;
  const largeImageURL = imageRef.dataset.source;
  lightboxImageRef.src = largeImageURL;
  openModalRef.classList.add('is-open');
}

function onCloseModal() {
  window.removeEventListener('keydown', onPressEscape);
  lightboxImageRef.src = '';
  openModalRef.classList.remove('is-open');
}

function onLightboxClick(e) {
  if (e.target === e.currentTarget) {
    onCloseModal();
  }
}

function onPressEscape(e) {
  if (e.code === "Escape") {
    onCloseModal();
  }
}


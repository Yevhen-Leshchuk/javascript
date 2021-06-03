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

gallery.forEach((el, index) => {
  const itemRef = document.createElement("li");
  itemRef.classList.add('gallery__item');

  const linkRef = document.createElement("a");
  linkRef.classList.add('gallery__link');
  linkRef.href = el.preview;

  const galleryImgRef = document.createElement("img");
  galleryImgRef.classList.add('gallery__image');
  galleryImgRef.src = el.original;
  galleryImgRef.setAttribute("data-source", el.original);
  galleryImgRef.setAttribute("data-index", index);
  galleryImgRef.alt = el.description;
  linkRef.appendChild(galleryImgRef);
  itemRef.appendChild(linkRef);

  fragment.appendChild(itemRef);
});

galleryRef.appendChild(fragment);

let activeIndex = [];

function onOpenModal(event) {

  window.addEventListener('keydown', onPressEscape);
  window.addEventListener('keydown', onPressArrowRight);
  window.addEventListener('keydown', onPressArrowLeft);

  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const imageRef = event.target;
  const largeImageURL = imageRef.dataset.source;
  lightboxImageRef.src = largeImageURL;
  activeIndex = [imageRef.dataset.index];

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

function onPressArrowRight(e) {

  if (e.code === 'ArrowRight') {
    activeIndex = [+activeIndex + +1];
    if (activeIndex < 0 || activeIndex > gallery.length - 1) {
      return;
    }
    lightboxImageRef.src = gallery[activeIndex].original;
  }
}

function onPressArrowLeft(e) {

  if (e.code === 'ArrowLeft') {
    activeIndex = [activeIndex - 1];
    if (activeIndex < 0 || activeIndex > gallery.length - 1) {
      return;
    }
    lightboxImageRef.src = gallery[activeIndex].original;
  }
}
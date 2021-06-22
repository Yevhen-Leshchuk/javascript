import gallery from './gallery-items.js';
console.log('gallery :', gallery);

const refs = {
  galleryRef: document.querySelector('.js-gallery'),
  openModalRef: document.querySelector('.js-lightbox'),
  closeModalRef: document.querySelector('button[data-action="close-lightbox"]'),
  lightboxImageRef: document.querySelector('.lightbox__image'),
  lightboxRef: document.querySelector('.lightbox__overlay'),
};
console.log(refs);

const fragment = document.createDocumentFragment();

refs.galleryRef.addEventListener('click', onOpenModal);
refs.closeModalRef.addEventListener('click', onCloseModal);
refs.lightboxRef.addEventListener('click', onLightboxClick);

gallery.forEach((el, index) => {
  const itemRef = document.createElement('li');

  itemRef.classList.add('gallery__item');
  itemRef.insertAdjacentHTML(
    'afterbegin',
    `<a class="gallery__link" href="${el.original}">
      <img class="gallery__image" src="${el.preview}" data-source="${el.original}" data-index="${index}" alt="${el.description}">
    </a>`
  );

  fragment.append(itemRef);
});

refs.galleryRef.appendChild(fragment);

function onOpenModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const imageRef = event.target;
  const largeImageURL = imageRef.dataset.source;
  let indexImageURL = imageRef.dataset.index;
  indexImageURL = Number(indexImageURL);

  refs.openModalRef.classList.add('is-open');
  refs.lightboxImageRef.src = largeImageURL;
  refs.lightboxImageRef.index = indexImageURL;

  window.addEventListener('keydown', onKeyPress);
}

function onCloseModal() {
  refs.openModalRef.classList.remove('is-open');
  refs.lightboxImageRef.src = '';
  refs.lightboxImageRef.alt = '';

  window.removeEventListener('keydown', onKeyPress);
}

function onLightboxClick(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}

function onKeyPress(event) {
  const key = event.code;

  switch (key) {
    case 'Escape':
      onCloseModal();
      break;

    case 'ArrowRight':
      onPressArrowRight();
      break;

    case 'ArrowLeft':
      onPressArrowLeft();
      break;

    default:
      console.log('Вы кликнули не туда :');
  }
}

function onPressArrowRight() {

  if (refs.lightboxImageRef.index + 1 === gallery.length) {
    refs.lightboxImageRef.index = 0;
  } else {
    refs.lightboxImageRef.index++;
  }

  refs.lightboxImageRef.src = gallery[refs.lightboxImageRef.index].original;
  refs.lightboxImageRef.alt = gallery[refs.lightboxImageRef.index].description;
}

function onPressArrowLeft() {
  console.log(refs.lightboxImageRef.index);

  if (refs.lightboxImageRef.index - 1 < 0) {
    refs.lightboxImageRef.index = gallery.length - 1;
  } else {
    refs.lightboxImageRef.index--;
  }

  refs.lightboxImageRef.src = gallery[refs.lightboxImageRef.index].original;
  refs.lightboxImageRef.alt = gallery[refs.lightboxImageRef.index].description;

  console.log('left', refs.lightboxImageRef.src);
}
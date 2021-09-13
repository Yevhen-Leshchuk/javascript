//import bootstrap from 'bootstrap';
import refs from './js/refs.js';
import apiService from './js/apiService';
import updateImagesMarkup from './js/update-images-markup';
import 'material-icons/iconfont/material-icons.css';
import './sass/styles.scss';

const loadMoreBtn = {
  enable() {
    refs.loadMoreBtn.disabled = false;
    refs.loadMoreBtnLabel.textContent = 'Load More';
    refs.loadMoreBtnSpinner.classList.add('is-hidden');
  },
  disable() {
    refs.loadMoreBtn.disabled = true;
    refs.loadMoreBtnLabel.textContent = 'Loading...';
    refs.loadMoreBtnSpinner.classList.remove('is-hidden');
  },
  show() {
    refs.loadMoreBtn.classList.remove('is-hidden');
  },
};


refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', fetchImages);


function searchFormSubmitHandler(event) {
  event.preventDefault();
  if (!event.currentTarget.elements.query.value) {
    return;
  };

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  clearContainer();
  apiService.resetPage();
  fetchImages();
  form.reset();
}


function fetchImages() {
  loadMoreBtn.disable();

  apiService.fetchImages().then(hits => {
    updateImagesMarkup(hits);
    loadMoreBtn.show();
    loadMoreBtn.enable();
    scrollContainer();
  });
}


function clearContainer() {
  refs.imagesContainer.innerHTML = '';
}

const galleryImg = document.getElementById('gallery');


function scrollContainer() {
  galleryImg.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}
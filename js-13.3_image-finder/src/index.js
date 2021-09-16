import refs from './js/refs';
import apiService from './js/apiService';
import updateImagesMarkup from './js/update-images-markup';
import LoadMoreBtn from './js/components/load-more-button';
import getImages from './js/components/modal';
import { showMessageIncorrectInput } from './js/components/notification';
import 'material-icons/iconfont/material-icons.css';
import './sass/styles.scss';

const loadMoreBtn = new LoadMoreBtn({
  selector: 'button[data-action="load-more"]',
  hidden: true,
});

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
loadMoreBtn.refs.button.addEventListener('click', fetchImages);


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
    showMessageIncorrectInput(hits);
    if (hits.length === 0) {
      loadMoreBtn.hide();
      return;
    };
    loadMoreBtn.show();
    loadMoreBtn.enable();
    scrollContainer();

    const lightbox = document.querySelectorAll('.photo-card__image');
    getImages(lightbox);

  });
}

function clearContainer() {
  refs.imagesContainer.innerHTML = '';
}

function scrollContainer() {
  refs.galleryImg.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}
import refs from './js/refs';
import apiService from './js/apiService';
import updateImagesMarkup from './js/update-images-markup';
import getImages from './js/components/modal';
import { showMessageIncorrectInput, showMessageNoInput } from './js/components/notification';
import 'material-icons/iconfont/material-icons.css';
import './sass/styles.scss';

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);

function searchFormSubmitHandler(event) {
  // Колбэк для события input.
  event.preventDefault(); // Метод, предотвращает перезагрузку страницы.

  if (!event.currentTarget.elements.query.value) {
    // Проверка ввода значения в input.
    showMessageNoInput();
    return;
  }

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  clearContainer(); // Очистка контента.
  apiService.resetPage(); // Метод, очищает page после ввода следующего запроса.
  fetchImages();
  form.reset(); // Очищает форму после "submit".
}

function fetchImages() {
  // Функционал.

  apiService.fetchImages().then(hits => {
    // Получает ответ от АPI.
    updateImagesMarkup(hits); // Парсит разметку на страницу.

    if (hits.length === 0) {
      showMessageIncorrectInput(hits); // Запускает notification (Фото не найдены).
      return;
    }

    const imagesRef = document.querySelectorAll('.photo-card__image');
    getImages(imagesRef); // Передает массив элементов для modal.

    const lastImagesRef = document.querySelectorAll('.gallery > li:last-child');
    getLastImagesRef(lastImagesRef); // Передает элемент для observer.
  });
}

function clearContainer() {
  refs.imagesContainer.innerHTML = ''; // Очистка контента.
}

//----------------- intersection-observer
const options = {
  rootMargin: '20px',
};

const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    if (refs.modalRef) return; // Проверка, если открыта модалка выходим.

    if (entry.isIntersecting) {
      fetchImages();
      const image = entry.target;
      observer.unobserve(image); // Остановка наблюдения.
    }
  });
};

const io = new IntersectionObserver(onEntry, options); // Экземпляр класса IntersectionObserver.

function getLastImagesRef(lastImagesRef) {
  // Получает элемент, перебирает.
  lastImagesRef.forEach(image => io.observe(image)); // Вешаем observer на каждый элемент.
}

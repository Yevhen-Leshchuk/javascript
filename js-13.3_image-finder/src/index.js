import refs from './js/refs';
import apiService from './js/apiService';
import updateImagesMarkup from './js/update-images-markup';
// import LoadMoreBtn from './js/components/load-more-button';
import getImages from './js/components/modal';
import { showMessageIncorrectInput } from './js/components/notification';
import 'material-icons/iconfont/material-icons.css';
import './sass/styles.scss';


// const loadMoreBtn = new LoadMoreBtn({
//   selector: 'button[data-action="load-more"]', //экземпляр класса loadMoreBtn.
//   hidden: true,
// });


refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
// loadMoreBtn.refs.button.addEventListener('click', fetchImages); 


function searchFormSubmitHandler(event) { // Колбэк для события input.
  event.preventDefault(); // Метод, предотвращает перезагрузку страницы.

  if (!event.currentTarget.elements.query.value) { // Проверка ввода значения в input.
    return;
  };

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  clearContainer(); // Очистка контента.
  apiService.resetPage(); // Метод, очищает page после ввода следующего запроса.
  fetchImages();
  form.reset(); // Очищает форму после "submit".
}


function fetchImages() { // Функционал.
  // loadMoreBtn.disable(); // Метод конопки LoadMoreBtn - показывает спиннер, показывает текст на кнопке "Loading...".

  apiService.fetchImages().then(hits => { // Получает ответ от АPI. 
    updateImagesMarkup(hits); // Парсит разметку на страницу.
    showMessageIncorrectInput(hits); // Запускает notification (Фото не найдены).

    // if (hits.length === 0) { // Проверка, если от АPI пришел пустой массив - 
    //   loadMoreBtn.hide();    // запускает метод hide() который прячет кнопку.
    //   return;
    // };

    // loadMoreBtn.show(); // Метод конопки LoadMoreBtn - показывает кнопку.
    // loadMoreBtn.enable(); // Метод конопки LoadMoreBtn - прячет спиннер, показывает текст на кнопке "Load More".
    // scrollContainer(); // Прокрутка контента в конец viewport.

    const imagesRef = document.querySelectorAll('.photo-card__image');
    getImages(imagesRef); // Передает массив элементов для modal.

    const lastImagesRef = document.querySelectorAll('.gallery > li:last-child');
    getLastImagesRef(lastImagesRef); // Передает элемент для observer.
  });
}


function clearContainer() {
  refs.imagesContainer.innerHTML = ''; // Очистка контента.
}


function scrollContainer() {
  refs.imagesContainer.scrollIntoView({ //Прокрутка контента в конец viewport
    behavior: 'smooth',
    block: 'end',
  });
}

//----------------- intersection-observer

const options = {
  rootMargin: "20px",
};

const onEntry = (entries, observer) => {

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      fetchImages();
      const image = entry.target;
      observer.unobserve(image); // Остановка наблюдения.
    }
  });
};

const io = new IntersectionObserver(onEntry, options); // Экземпляр класса IntersectionObserver.

function getLastImagesRef(lastImagesRef) { // Получает элемент, перебирает.
  lastImagesRef.forEach((image) => io.observe(image)); // Вешаем observer на каждый элемент.
}
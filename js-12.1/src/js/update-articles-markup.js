import articlesTpl from '../templates/articles.hbs';
import refs from './refs';

function updateArticlesMarkup(articles) {
    const markup = articlesTpl(articles);
    // console.log(markup);

    refs.articlesContainer.insertAdjacentHTML('beforeend', markup); // Используем insertAdjacentHTML, он добавляет новую разметку к старой, а не перерисовывает все заново
}

export default updateArticlesMarkup;
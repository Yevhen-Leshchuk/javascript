import itemsTemplate from '../templates/gallery-items.hbs';
import countries from '../countries.json';
import '../sass/gallery.scss';

// console.log(countries);


// const tech = ['HTML', 'CSS', 'JS', 'React'];
// const galleryRef = document.querySelector('.js-gallery');

// const element = '<li><a href ="">Hello</a></li>';

// galleryRef.innerHTML = element; // нельзя записывать внутрь innerHTML.
// При записи будет удалена вся предыдущая разметка из текущего элемента и пресоздана заново

// const markup = tech
//   .map(
//     el =>
//       `<li>
//         <a href="#">${el}</a>
//       </li>`,
//   )
//   .join('');

// console.log(markup);
// galleryRef.insertAdjacentHTML('beforeend', markup);

// -----------------------
// console.log(itemsTemplate);
// console.log(countries);

const markup = itemsTemplate(countries);
// console.log(markup);

const galleryRef = document.querySelector('.js-gallery');
galleryRef.insertAdjacentHTML('beforeend', markup);
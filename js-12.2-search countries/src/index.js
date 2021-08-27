import debounce from 'lodash.debounce';
import newsService from './js/news-service';
import { updateCountriesMarkup, updateCountryMarkup } from './js/update-countries-markup';
import { showMessageIncorrectInput, showMessageSpecificQuery } from './js/components/notification';
import refs from './js/refs';
import './sass/styles.scss';

const inputHandler = debounce((event) => {
  event.preventDefault();

  if (!event.target.value) {
    return;
  };

  newsService.query = event.target.value;
  clearCountryContainer();
  clearCountriesContainer();
  fetchCountries();
}, 1000);

function fetchCountries() {
  newsService.fetchCountries().then(countries => {
    showMessageIncorrectInput(countries);
    showMessageSpecificQuery(countries);
    checkCountries(countries);
  });
}

function checkCountries(countries) {
  if (countries.length >= 2 && countries.length <= 10) {
    updateCountriesMarkup(countries);

  } else if (countries.length === 1) {
    updateCountryMarkup(countries);
    refs.inputRef.value = '';
  };
}

function clearCountryContainer() {
  refs.countryContainer.innerHTML = '';
}

function clearCountriesContainer() {
  refs.countriesContainer.innerHTML = '';
}

refs.inputRef.addEventListener('input', inputHandler);
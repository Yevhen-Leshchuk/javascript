import countriesTpl from '../templates/countries.hbs';
import countryTpl from '../templates/country.hbs';

const countryContainer = document.querySelector('.js-country');
const countriesContainer = document.querySelector('.js-countries-list');

export function updateCountryMarkup(country) {
    const markup = countryTpl(country);
    console.log(markup);

    countryContainer.insertAdjacentHTML('beforeend', markup);
}

export function updateCountriesMarkup(countries) {
    const markup = countriesTpl(countries);
    console.log(markup);

    countriesContainer.insertAdjacentHTML('beforeend', markup);
}

export function clearCountryContainer() {
    countryContainer.innerHTML = '';
}

export function clearCountriesContainer() {
    countriesContainer.innerHTML = '';
}

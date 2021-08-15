import debounce from 'lodash.debounce';
import { updateCountriesMarkup, updateCountryMarkup, clearCountryContainer, clearCountriesContainer } from './js/update-countries-markup';
import { error, info } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import 'material-design-icons/iconfont/material-icons.css';
import './sass/styles.scss';

//console.log(debounce);
const inputRef = document.querySelector('#searchQuery');

const inputHandler = debounce((event) => {
    event.preventDefault();
    const input = event.target.value;
    console.log(event);
    const url = `https://restcountries.eu/rest/v2/name/${input}`;
    fetch(url)
        .then(response => response.json())
        .then(countries => {
            console.log(countries);
            event.target.value = '';
            clearCountryContainer();
            clearCountriesContainer();
            if (countries.status === 404) {
                return error({
                    text: 'Country not found! Incorrect input!',
                    width: '370px',
                })
            };

            if (countries.length > 10) {
                return error({
                    text: 'Too many matches found. Please enter a more specific query!',
                    width: '370px',
                })
            };

            if (countries.length >= 2 && countries.length <= 10) {
                updateCountriesMarkup(countries);
                console.log('Hello');

            } else if (countries.length = 1) {
                updateCountryMarkup(countries);
            };
        });
}, 1000);

inputRef.addEventListener('input', inputHandler);
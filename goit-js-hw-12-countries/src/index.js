import './styles.css';
import cardTemplate from './templates/countrie.hbs';
import cardListTemplate from './templates/many-countries.hbs';
import API from './js/fetchCountries';
import getRefs from './js/get-refs';
import debounce from 'lodash.debounce';


//  var debounce = require('lodash.debounce');
  console.log(debounce);
// console.log(cardListTemplate);


const refs = getRefs();

   
refs.inputEl.addEventListener('input', debounce(onInputSearch,5000));


function onInputSearch(e) {
    const input = e.currentTarget;
            const searchQuery = input.value;
             console.log(searchQuery);

    API.fetchCountries(searchQuery)
        .then(renderCounriesCard)
        .catch(onFetchError)
         .finally(() => { 
                 setTimeout(() => {input.value = " " },2000)
         });
    
}



function renderCounriesCard(country) {
    console.log(country.length);
    // if (country.length === 1) {
         const markup = cardTemplate(country);
    // const markup = cardListTemplate(country);
        // console.log(markup);
        refs.cardContainerEl.insertAdjacentHTML('beforeend', markup);
    // }
    // else if (country.length <= 10) {
    //     markup = cardListTemplate(country);
    //    refs.cardContainerEl.insertAdjacentHTML('beforeend', markup);
    // }

    
}

function onFetchError(error) {
     alert('ой-ой, что то не так') ;
}
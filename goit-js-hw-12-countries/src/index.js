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

refs.inputEl.addEventListener(
  'input',
  debounce(e => onInputSearch(e), 500),
);


function onInputSearch(e) {
    clearContainer();
 
    const input = e.target;
  const searchQuery = input.value;
  console.log(searchQuery);
   
    API.fetchCountries(searchQuery)
         .then(renderCounriesCard)
          .catch(onFetchError)
    
}


function renderCounriesCard(country) {
    console.log(country.length);
     if (country.length === 1) {
         const markup = cardTemplate(country);
                      
        refs.cardContainerEl.insertAdjacentHTML('beforeend', markup);
    }
           if (country.length >2 && country.length <10) {
       const  markup = cardListTemplate(country);
        
       refs.cardContainerEl.insertAdjacentHTML('beforeend', markup);
     }
     
       else {
          onFetchError();
      }
   
    };

function onFetchError(error) {
     alert('ой-ой, что то не так') ;
}

function clearContainer(){
    refs.cardContainerEl.innerHTML = ' ';
};


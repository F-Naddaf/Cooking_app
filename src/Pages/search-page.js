'use strict';

import { createSearchElement } from '../views/init-view.js';
import { getMealList } from './result-page.js';

export const initPage = () => {
  const userInterface = document.getElementById('user-interface');
  userInterface.innerHTML = '';

  const searchOfDish = createSearchElement();
  userInterface.appendChild(searchOfDish);

  const img = document.querySelector('img');
  img.src = './public/Images/cooking-logo.png';

  const title = document.querySelector('.title');
  title.textContent = 'Find Meals For Your Ingredients';

  const description = document.querySelector('.description');
  description.textContent =
    "Real food doesn't have ingredients, real food is ingredients.";

  const companyName = document.getElementById('company-name');
  companyName.textContent = 'Delectable Recipe';

  const searchButton = document.getElementById('search-btn');
  searchButton.onclick = function (e) {
    let searchInputTxt = document.getElementById('search-input').value;
    if (searchInputTxt !== '') {
      getMealList();
    } else {
      const mealsView = document.querySelector('.meals-view');
      const failedSearchMessage = document.createElement('h3');
      failedSearchMessage.innerHTML = "Sorry, you didn't type anything!";
      failedSearchMessage.classList.add('failed-search');
      mealsView.appendChild(failedSearchMessage);
      // const searchButton = document.getElementById('search-btn')
      // searchButton.setAttribute("disabled", "true");
    }
  };
};

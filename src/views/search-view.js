'use strick';

import { initPage } from '../Pages/search-page.js';

const initPage = initPage();
export const createSearchResult = () => {
  const element = document.createElement('div');
  element.innerHTML = `
  <div class="meal-result">
    <h2 class="title">Your Search Results:</h2>
    <div id="meal">
      <div class="meal-item">
        <div class="meal-img">
          <img src="food.jpg" alt="food">
        </div>
        <div class="meal-name">
          <h3>Potato Chips</h3>
          <a href="#" class="recipe-btn">Get Recipe</a>
        </div>
      </div>
    </div>
    <div class = "meal-result">
    <h2 class = "title"></h2>
  </div>
  </div>`;
  return element;
};

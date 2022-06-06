'use strict';

export const createSearchElement = () => {
  const element = document.createElement('div');
  element.innerHTML = `
  <div id="topper"></div>
  <div class="logo-container">
      <div id="logo">
        <img class = "logo-1" alt="cooking logo" height="120px"/>
      </div>
      <h1 id="company-name"></h1>
  </div>
  <div class="container">
    <div class="meal-wrapper">
      <div class="meal-search"> 
        <h2 class="title"><h2>
        <span class="description"></span>  
        <div class="meal-search-box">
          <input type="text" class="search-control" placeholder="Enter an ingredient" id="search-input"/>
          <button type="submit" class="search-button" id="search-btn">
            <i class="fas fa-search"></i>
          </button> 
        </div>
      </div>
    </div>
  </div>
  <div class = "meals-view">
    <div class="meals-container"></div>
  </div>
  `;
  return element;
};

export const createMeal = (meal) => {
  const element = document.createElement('div');
  element.innerHTML = `
  <div class = "meal-item" data-id = "${meal.idMeal}">
    <div class = "meal-img">
    <img src = "${meal.strMealThumb}" alt = "food">
    </div>
    <div class = "meal-name">
    <h3>${meal.strMeal}</h3>
    <div class = "recipe-btn">Get Recipe</div>
    </div>
    </div>
    `;
  return element;
};

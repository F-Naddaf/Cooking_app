'use strict';

export const mealRecipeModal = (meal) => {
  const element = document.createElement('div');
  element.classList.add('showRecipe')
  element.innerHTML = `
  <div class = "view-recipe">
    <button id = "close-btn">close</button>
    <h2 class = "recipe-title">${meal.strMeal}</h2>
    <p class = "recipe-category">${meal.strCategory}</p>
    <div class = "recipe-instruct">
      <h3>Instructions:</h3>
      <p>${meal.strInstructions}</p>
    </div>
    <div class = "recipe-meal-img">
      <img src = "${meal.strMealThumb}" alt = "recipe image">
    </div>
    <div class = "recipe-link">
      <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
    </div>
  </div>  
    `;
  return element;
};

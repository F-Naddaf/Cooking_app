'use strict';
import { mealRecipeModal } from '../views/recipe-view.js';

export async function getMealRecipe(id) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    const data = await response.json();
    const userInterface = document.getElementById('user-interface');
    const createRecipePopup = mealRecipeModal(data.meals[0]);
    userInterface.appendChild(createRecipePopup);
    const closeRecipe = document.querySelector('#close-btn');
    closeRecipe.addEventListener('click', () => {
      createRecipePopup.remove();
    });
  } catch (errors) {
    console.log(errors);
  }
}

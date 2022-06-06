'use strict';
import { mealRecipeModal } from '../views/recipe-view.js';

export async function getMealRecipe() {
  let mealItem = mealRecipeModal(meal);
  try {
    await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`,
    );
    const response = await response.json();
    const data = mealRecipeModal(response.meal);
  } catch (errors) {
    console.log(errors);
  }
}

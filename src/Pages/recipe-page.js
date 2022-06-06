'use strict';
import { mealRecipeModal } from '../views/recipe-view.js';
// import { createMeal } from '../views/init-view.js';

export async function getMealRecipe() {
      let mealItem = mealRecipeModal(meal);
      try {
        await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        const response = await response.json();
        const data = mealRecipeModal(data.meal)
      } catch (errors) {
        console.log(errors);
    }
  }

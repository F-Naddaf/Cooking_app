import { initPage } from '../Pages/search-page.js';

const initPage = initPage();

export async function getMealList() {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`).then(async (response) => {
    try {
      const jsonResponse = await response.json();
      if (response.ok) {
        if (data.meals) {
          data.meals.forEach((meal) => {
            html += `
                  <div class = "meal-item" data-id = "${meal.idMeal}">
                      <div class = "meal-img">
                          <img src = "${meal.strMealThumb}" alt = "food">
                      </div>
                      <div class = "meal-name">
                          <h3>${meal.strMeal}</h3>
                          <a href = "#" class = "recipe-btn">Get Recipe</a>
                      </div>
                  </div>
              `;
          });
          mealList.classList.remove('notFound');
        }
        return jsonResponse;
      }
      throw new Error('Failed');
    } catch (errors) {
      html = "Sorry, we didn't find any meal!";
      mealList.classList.add('notFound');
    }
    mealList.innerHTML = html;
  });
}

window.addEventListener('load', getMealList);

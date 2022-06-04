'use strict';

import { createSearchElement } from "../views/init-view.js";
import { getMealList } from "result-page.js"


export const initPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const searchOfDish = createSearchElement();
  userInterface.appendChild(searchOfDish)

  const img = document.createElement('img')
  img.src = '../public/images/cooking-logo.png'

  const companyName = document.getElementById('company-name')
  companyName.textContent = "Delectable Recipe"
  logoContainer.appendChild(companyName)
}

const searchButton = document.getElementById('search-btn')
searchButton.addEventListener('click', getMealList);

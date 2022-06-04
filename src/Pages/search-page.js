'use strict';


export const initPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const topper = document.createElement('div');
  topper.classList.add('topper');
  userInterface.appendChild(topper)

  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container')

  const logo = document.createElement('div');
  logo.classList.add('logo')
  logoContainer.appendChild(logo)

  const img = document.createElement('img')
  img.setAttribute('height', '120px');
  img.src = '../public/images/cooking-logo.png'
  logoContainer.appendChild(img)

  const companyName = document.createElement('h1')
  companyName.textContent = "Delectable Recipe"
  logoContainer.appendChild(companyName)

}

const searchBtn = document.getElementById('search-btn');
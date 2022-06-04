'use strict';

export const createSearchElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
  <div id="topper"></div>
  <div class="logo-container">
      <div id="logo">
        <img src="../public/images/cooking-logo.png" alt="cooking logo" height="120px"/>
      </div>
      <h1 class="company-name">Delectable Recipe</h1>
  </div>
  <div class="container">
      <div class="meal-wrapper">
        <div class="meal-search"> 
          <h2 class="title"><h2>
          <span class="description"></span>  
          <div class="meal-search-box">
            <input type="text" class="search-control" placeholder="Enter an ingredient" id="search-input"/>
            <button type="submit" class="search-btn btn" id="search-btn">
              <i class="fas fa-search"></i>
            </button> 
          </div>
        </div>
      </div>
  </div>`;
  return element;
};

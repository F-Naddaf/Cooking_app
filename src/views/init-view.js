'use strict';

export const createSearchElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
  <div id="topper"></div>
  <div class="logo-container">
      <div id="logo">
        <img alt="cooking logo" height="120px"/>
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
  </div>`;
  return element;
};

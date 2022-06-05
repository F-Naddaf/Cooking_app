'use strict';

import { initPage } from "../src/Pages/search-page.js";

const loadApp = () => {
  initPage();
};

window.addEventListener('load', loadApp);

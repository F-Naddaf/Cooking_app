'use strict';

import { initPage } from './Pages/search-page.js';

const loadApp = () => {
  initPage();
};

window.addEventListener('load', loadApp);

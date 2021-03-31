import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';

// Utils
// ---------------------------------

ieFix();
iosVhFix();
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Modules
// ---------------------------------

initModals();

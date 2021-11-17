import { makeAdMark } from './map.js';
import { showErrorLoadMessage } from './show-messages.js';
import { activateFilters } from './toggle-page-state.js';

const MAX_MARKS_ON_MAP = 10;
const ads = [];

fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if (response.ok) {
      return response;
    }
    throw new Error(showErrorLoadMessage('Данные не получены. Сервер не отвечает.'));
  })
  .then((response) => response.json())
  .then((data) => data.splice(0, MAX_MARKS_ON_MAP))
  .then((data) => ads.push.apply(ads, data))
  .then(() => ads.forEach(
    (adItem) => makeAdMark(adItem, false),
  ))
  .then(() => activateFilters())
  .catch((err) => showErrorLoadMessage(`Данные не получены. Причина: ${err}`));

export { ads };

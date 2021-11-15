import { makeAdMark } from './map.js';
import {showErrorLoadMessage} from './show-messages.js';

fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => {
    if (response.ok) {
      return response;
    }
    throw new Error(showErrorLoadMessage('Данные не получены. Сервер не отвечает.'));
  })
  .then((response) => response.json())
  .then((ads) => ads.forEach(
    (adItem) => makeAdMark(adItem, false)))
  .catch((err) => showErrorLoadMessage(`Данные не получены. Причина: ${err}`));

import {showErrorSendMessage, showSuccessSendMessage} from './show-messages.js';
import {resetMap} from './map.js';

function sendData(data, evt) {

  fetch('https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: data,
    })
    .then((response) => {
      if (response.ok) {
        showSuccessSendMessage();
        evt.target.reset();
        resetMap();
      }
    })
    .catch(() => {
      showErrorSendMessage();
    });
}

export {sendData};

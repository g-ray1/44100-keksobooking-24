import {getAdsItem} from './get-ads-item.js';

function getAdsList() {

  const adsList = [];

  // eslint-disable-next-line id-length
  for (let i = 0; i < 10; i++) {
    adsList.push(getAdsItem());
  }

  return adsList;
}

export {getAdsList};

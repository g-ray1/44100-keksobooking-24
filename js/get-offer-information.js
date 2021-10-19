/* eslint-disable no-unused-vars */
import getRandomPositiveInteger from './utils/get-random-positive-integer.js';

function getOfferInformation(location) {

  const offerInformation = {
    title : 'Заголовок',
    adress : `${location.lat  }, ${  location.lng}`,
    price : Number(Math.random().toFixed(7).substring(2)),
    type : ['palace', 'flat', 'house', 'bungalow', 'hotel'][getRandomPositiveInteger(0, 4)],
    rooms : Number(Math.random().toFixed(1).substring(2)),
    guests : Number(Math.random().toFixed(1).substring(2)),
    checkin : ['12:00', '13:00', '14:00'][getRandomPositiveInteger(0, 2)],
    checkout : ['12:00', '13:00', '14:00'][getRandomPositiveInteger(0, 2)],
    features : ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'].splice(getRandomPositiveInteger(0, 4), getRandomPositiveInteger(1, 5)),
    description : 'описание',
    photos : ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg','https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'].splice(getRandomPositiveInteger(0, 2), getRandomPositiveInteger(1, 3)),
  };

  return offerInformation;
}

export {getOfferInformation};

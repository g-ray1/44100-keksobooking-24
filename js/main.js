function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const avatarsNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

function getAuthorAvatar() {

  const AuthorAvatar = {
    avatar : `img/avatars/user${  avatarsNumbers.splice(getRandomPositiveInteger(0, avatarsNumbers.length - 1), 1)  }.png`,
  };

  return AuthorAvatar;
}

function getOfferInformation(location) {

  const OfferInformation = {
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
    photos : ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'].splice(getRandomPositiveInteger(0, 2), getRandomPositiveInteger(1, 3)),
  };

  return OfferInformation;
}

function getLocationCoordinates() {

  const LocationCoordinates = {
    lat : getRandomPositiveFloat(35.65000, 35.70000, 5),
    lng : getRandomPositiveFloat(139.70000, 139.80000, 5),
  };

  return LocationCoordinates;
}

function getAdsItem() {

  const location = getLocationCoordinates();

  const adsItem = {
    author : getAuthorAvatar(),
    location : location,
    offer : getOfferInformation(location),
  };

  return adsItem;
}

function getAdsList() {

  const adsList = [];

  // eslint-disable-next-line id-length
  for (let i = 0; i < 10; i++) {
    adsList.push(getAdsItem());
  }

  return adsList;
}

getAdsList();

import { getAdsList } from './get-ads-list';

const adsList = getAdsList();
const cardTemplate = document.querySelector('#card').content;

function getAdsLayout(counter) {

  const clonedCardTemplate = cardTemplate.cloneNode(true);

  const title = clonedCardTemplate.querySelector('.popup__title');
  title.textContent = adsList[counter].offer.title;

  const adress = clonedCardTemplate.querySelector('.popup__text--address');
  adress.textContent = adsList[counter].offer.adress;

  const price = clonedCardTemplate.querySelector('.popup__text--price');
  price.textContent = `${adsList[counter].offer.price}₽/ночь`;

  const type = clonedCardTemplate.querySelector('.popup__type');
  switch (adsList[counter].offer.type) {
    case 'flat':
      type.textContent = 'Квартира';
      break;
    case 'bungalow':
      type.textContent = 'Бунгало';
      break;
    case 'house':
      type.textContent = 'Дом';
      break;
    case 'palace':
      type.textContent = 'Дворец';
      break;
    case 'hotel':
      type.textContent = 'Отель';
      break;
  }

  const capacity = clonedCardTemplate.querySelector('.popup__text--capacity');
  capacity.textContent = `${adsList[counter].offer.rooms} комнаты для ${adsList[counter].offer.guests} гостей`;

  const inOutTime = clonedCardTemplate.querySelector('.popup__text--time');
  inOutTime.textContent = `Заезд после ${adsList[counter].offer.checkin}}, выезд до ${adsList[counter].offer.checkout}}`;


  const allFeatures = clonedCardTemplate.querySelector('.popup__features');
  allFeatures.forEach((feature) => {
    const isAvailable = adsList[counter].offer.features.some(
      (adsFeature) => feature.classList.contains(`popup__features--${adsFeature}`),
    );

    if (!isAvailable) {
      feature.remove();
    }
  });

  const description = clonedCardTemplate.querySelector('.popup__description');
  description.textContent = adsList[counter].offer.description;

  const photosList = clonedCardTemplate.querySelector('.popup__photos');
  adsList[counter].offer.photos.forEach(
    (photo) => {
      const imgItem = photosList[0].cloneNode(true);
      imgItem.src = photo;
      imgItem.append(photosList);
    },
  );
  photosList[0].remove;

  const avatar = clonedCardTemplate.querySelector('.popup__avatar');
  avatar.src = adsList[counter].author.avatar;
}

export {getAdsLayout};

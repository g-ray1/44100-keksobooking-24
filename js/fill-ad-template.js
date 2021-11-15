const fillAdTemplate = (adItem) => {

  const cardTemplate = document.querySelector('#card').content;
  const clonedCardTemplate = cardTemplate.querySelector('.popup').cloneNode(true);

  const title = clonedCardTemplate.querySelector('.popup__title');
  title.textContent = adItem.offer.title;

  const address = clonedCardTemplate.querySelector('.popup__text--address');
  address.textContent = adItem.offer.address;

  const price = clonedCardTemplate.querySelector('.popup__text--price');
  price.textContent = `${adItem.offer.price} ₽/ночь`;

  const type = clonedCardTemplate.querySelector('.popup__type');
  switch (adItem.offer.type) {
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
  capacity.textContent = `${adItem.offer.rooms} комнаты для ${adItem.offer.guests} гостей`;

  const inOutTime = clonedCardTemplate.querySelector('.popup__text--time');
  inOutTime.textContent = `Заезд после ${adItem.offer.checkin}, выезд до ${adItem.offer.checkout}`;

  if (adItem.offer.features) {
    const featuresList = clonedCardTemplate.querySelectorAll('.popup__feature');
    featuresList.forEach((listItem) => {
      const isAvailable = adItem.offer.features.some(
        (feature) => listItem.classList.contains(`popup__feature--${feature}`),
      );

      if (!isAvailable) {
        listItem.remove();
      }
    });
  }

  const description = clonedCardTemplate.querySelector('.popup__description');
  description.textContent = adItem.offer.description;

  const photosList = clonedCardTemplate.querySelector('.popup__photos');
  const photoTemplate = photosList.querySelector('.popup__photo');
  if (adItem.offer.photos) {
    adItem.offer.photos.forEach(
      (photo) => {
        const imgItem = photoTemplate.cloneNode(true);
        imgItem.src = photo;
        photosList.append(imgItem);
      });
  }
  photoTemplate.remove();

  const avatar = clonedCardTemplate.querySelector('.popup__avatar');
  avatar.src = adItem.author.avatar;

  return clonedCardTemplate;
};

export {fillAdTemplate};

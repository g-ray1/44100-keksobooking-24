import { ads } from './get-data.js';
import { debounce } from './utils/debounce.js';
import { makeAdMark, deleteMarks } from './map.js';

const filtersForm = document.querySelector('.map__filters');
const typeSelect = filtersForm.querySelector('#housing-type');
const priceSelect = filtersForm.querySelector('#housing-price');
const roomsSelect = filtersForm.querySelector('#housing-rooms');
const guestsSelect = filtersForm.querySelector('#housing-guests');

const priceFork = {
  low: 10000,
  middle: 50000,
};

const priceName = {
  low: 'low',
  middle: 'middle',
  high: 'high',
};

const type = (ad) => ad.offer.type === typeSelect.value || typeSelect.value === 'any';

const price = (ad) => priceSelect.value === 'any' ||
  ad.offer.price < priceFork.low && priceSelect.value === priceName.low ||
  ad.offer.price >= priceFork.low && ad.offer.price < priceName.high && priceSelect.value === priceName.middle ||
  ad.offer.price >=  priceFork.high && priceSelect.value === priceName.high;

const rooms = (ad) => ad.offer.rooms === +roomsSelect.value || roomsSelect.value === 'any';

const guests = (ad) => ad.offer.guests === +guestsSelect.value || guestsSelect.value === 'any';

const features = (ad) => {
  const featuresItems = Array.from(filtersForm.querySelectorAll('.map__checkbox:checked'));
  const featuresValues = featuresItems.map((it) => it.value);
  if (!ad.offer.features) {
    return false;
  }
  return featuresValues.every((value) => ad.offer.features.includes(value));
};

// eslint-disable-next-line no-shadow
const filtration = (ads) => {
  filtersForm.addEventListener('change', debounce(() => {
    const filteredAds = ads.filter((ad) =>
      type(ad) && price(ad) && rooms(ad) && guests(ad) && features(ad));
    deleteMarks();
    filteredAds.forEach((ad) => makeAdMark(ad, false));
  }));
};

filtration(ads);

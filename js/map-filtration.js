import { ads } from './get-data.js';
import { debounce } from './utils/debounce.js';
import { makeAdMark, deleteMarks } from './map.js';

const filtersForm = document.querySelector('.map__filters');
const typeSelect = filtersForm.querySelector('#housing-type');
const priceSelect = filtersForm.querySelector('#housing-price');
const roomsSelect = filtersForm.querySelector('#housing-rooms');
const guestsSelect = filtersForm.querySelector('#housing-guests');

const PRICE_FORK = {
  low: 10000,
  middle: 50000,
};

const PRICE_NAME = {
  low: 'low',
  middle: 'middle',
  high: 'high',
};

const filtrationType = (ad) => ad.offer.type === typeSelect.value || typeSelect.value === 'any';

const filtrationPrice = (ad) => priceSelect.value === 'any' ||
  ad.offer.price < PRICE_FORK.low && priceSelect.value === PRICE_NAME.low ||
  ad.offer.price >= PRICE_FORK.low && ad.offer.price < PRICE_NAME.high && priceSelect.value === PRICE_NAME.middle ||
  ad.offer.price >=  PRICE_FORK.middle && priceSelect.value === PRICE_NAME.high;

const filtrationRooms = (ad) => ad.offer.rooms === +roomsSelect.value || roomsSelect.value === 'any';

const filtrationGuests = (ad) => ad.offer.guests === +guestsSelect.value || guestsSelect.value === 'any';

const filtrationFeatures = (ad) => {
  const featuresItems = Array.from(filtersForm.querySelectorAll('.map__checkbox:checked'));
  const featuresValues = featuresItems.map((it) => it.value);
  if (!ad.offer.features) {
    return false;
  }
  return featuresValues.every((value) => ad.offer.features.includes(value));
};

// eslint-disable-next-line no-shadow
const setFiltration = (ads) => {
  filtersForm.addEventListener('change', debounce(() => {
    const filteredAds = ads.filter((ad) =>
      filtrationType(ad) && filtrationPrice(ad) && filtrationRooms(ad) && filtrationGuests(ad) && filtrationFeatures(ad));
    deleteMarks();
    filteredAds.forEach((ad) => makeAdMark(ad, false));
  }));
};

setFiltration(ads);

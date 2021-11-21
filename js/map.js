import { diactivatePage, activatePage } from './toggle-page-state.js';
import {fillAdTemplate} from './fill-ad-template.js';

diactivatePage();

//настройка карты
const DEFAULT_LAT_LNG = {
  lat : 35.673718093446034,
  lng : 139.74557876586917,
};

const DEFAULT_ZOOM = 13;

const map = L.map('map-canvas').setView({
  lat : DEFAULT_LAT_LNG.lat,
  lng : DEFAULT_LAT_LNG.lng,
}, DEFAULT_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

//дефолтная метка
const defaultIcon = L.icon({
  iconUrl : '/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const defaultMark = L.marker({
  lat : DEFAULT_LAT_LNG.lat,
  lng : DEFAULT_LAT_LNG.lng,
},
{
  draggable : true,
  icon : defaultIcon,
});

defaultMark.addTo(map);

//передача координат метки
const addressInput = document.querySelector('#address');
addressInput.value = `${DEFAULT_LAT_LNG.lat}, ${DEFAULT_LAT_LNG.lng}`;

defaultMark.on('moveend', (evt) => {
  const markAdress = evt.target.getLatLng();
  addressInput.value = `${markAdress.lat}, ${markAdress.lng}`;
});

//активация страницы
map.on('load', activatePage());

const marksGroup = L.layerGroup().addTo(map);

//функция отрисовки меток
const makeAdMark = (adItem, draggable) => {
  const newAdIcon = L.icon({
    iconUrl : '/img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const adMark = L.marker({
    lat : adItem.location.lat,
    lng : adItem.location.lng,
  },
  {
    icon : newAdIcon,
    draggable : draggable,
  });

  adMark.addTo(marksGroup);
  adMark.bindPopup(fillAdTemplate(adItem));
};

//функция удаления меток
const deleteMarks = () => {
  marksGroup.clearLayers();
};

//функция возвращения к исходной точке
const resetMap = () => {

  defaultMark.setLatLng({
    lat: DEFAULT_LAT_LNG.lat,
    lng: DEFAULT_LAT_LNG.lng,
  });

  map.setView({
    lat: DEFAULT_LAT_LNG.lat,
    lng: DEFAULT_LAT_LNG.lng,
  }, DEFAULT_ZOOM);

  map.closePopup();

  document.querySelector('#address').value = `${DEFAULT_LAT_LNG.lat}, ${DEFAULT_LAT_LNG.lng}`;
};

export {makeAdMark, resetMap, deleteMarks};

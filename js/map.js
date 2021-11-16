import { diactivatePage, activatePage } from './toggle-page-state.js';
import {fillAdTemplate} from './fill-ad-template.js';

diactivatePage();

//настройка карты
const defaultLatLng = {
  lat : 35.673718093446034,
  lng : 139.74557876586917,
};

const map = L.map('map-canvas').setView({
  lat : defaultLatLng.lat,
  lng : defaultLatLng.lng,
}, 13);

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
  lat : defaultLatLng.lat,
  lng : defaultLatLng.lng,
},
{
  draggable : true,
  icon : defaultIcon,
});

defaultMark.addTo(map);

//передача координат метки
const addressInput = document.querySelector('#address');
addressInput.value = `${defaultLatLng.lat}, ${defaultLatLng.lng}`;

defaultMark.on('moveend', (evt) => {
  const markAdress = evt.target.getLatLng();
  addressInput.value = `${markAdress.lat}, ${markAdress.lng}`;
});

//активация страницы
map.on('load', activatePage());

const marksGroup = L.layerGroup().addTo(map);

//функция отрисовки меток
function makeAdMark(adItem, draggable) {
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
}

//функция удаления меток
function deleteMarks() {
  marksGroup.clearLayers();
}

//функция возвращения к исходной точке
function resetMap() {

  defaultMark.setLatLng({
    lat: defaultLatLng.lat,
    lng: defaultLatLng.lng,
  });

  map.setView({
    lat: defaultLatLng.lat,
    lng: defaultLatLng.lng,
  }, 13);

  map.closePopup();

  document.querySelector('#address').value = `${defaultLatLng.lat}, ${defaultLatLng.lng}`;
}

export {makeAdMark, resetMap, deleteMarks};

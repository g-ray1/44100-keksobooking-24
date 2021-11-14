export { diactivatePage, activatePage} from './toggle-page-state.js';
import { getAdsList } from './get-ads-list.js';
import { makeAdMark } from './make-ad-mark.js';
import { diactivatePage, activatePage } from './toggle-page-state.js';

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

//отрисовка сгенерированных объявлений
const adsList = (getAdsList());
adsList.forEach((adItem) => makeAdMark(adItem, false, map));

map.on('load', activatePage());

import {fillAdTemplate} from './fill-ad-template.js';

function makeAdMark(adItem, draggable, map) {
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

  adMark.addTo(map);
  adMark.bindPopup(fillAdTemplate(adItem));
}

export {makeAdMark};

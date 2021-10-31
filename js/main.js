import { fillAdsTemplate } from './fill-ads-template.js';

const mapCanvas = document.querySelector('#map-canvas');
const newCard = fillAdsTemplate(0);
mapCanvas.append(newCard);


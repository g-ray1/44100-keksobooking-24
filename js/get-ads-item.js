import {getAuthorAvatar} from './get-author-avatar.js';
import {getOfferInformation} from './get-location-coordinates.js';
import {getLocationCoordinates} from './get-location-coordinates.js';

function getAdsItem() {

  const location = getLocationCoordinates();

  const adsItem = {
    author : getAuthorAvatar(),
    location : location,
    offer : getOfferInformation(location),
  };

  return adsItem;
}

export {getAdsItem};

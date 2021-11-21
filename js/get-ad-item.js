import {getAuthorAvatar} from './get-author-avatar.js';
import {getOfferInformation} from './get-offer-information.js';
import {getLocationCoordinates} from './get-location-coordinates.js';

const getAdItem = () => {

  const location = getLocationCoordinates();

  const adsItem = {
    author : getAuthorAvatar(),
    location : location,
    offer : getOfferInformation(location),
  };

  return adsItem;
};

export {getAdItem};

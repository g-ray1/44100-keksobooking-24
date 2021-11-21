import {getRandomPositiveFloat} from './utils/get-random-positive-float.js';

const getLocationCoordinates = () => {

  const locationCoordinates = {
    lat : getRandomPositiveFloat(35.65000, 35.70000, 5),
    lng : getRandomPositiveFloat(139.70000, 139.80000, 5),
  };

  return locationCoordinates;
};

export {getLocationCoordinates};

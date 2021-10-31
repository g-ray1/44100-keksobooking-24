/* eslint-disable no-unused-vars */
import {getRandomPositiveInteger} from './utils/get-random-positive-integer.js';

const avatarsNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];

function getAuthorAvatar() {

  const authorAvatar = {
    avatar : `img/avatars/user${  avatarsNumbers.splice(getRandomPositiveInteger(0, avatarsNumbers.length - 1), 1)  }.png`,
  };

  return authorAvatar;
}

export {getAuthorAvatar};

function isPositiveNumbers(min, max) {
  return min >= 0 && max >= 0;
}

function isIntExist(min, max) {
  return Number.isInteger(min) || Number.isInteger(max);
}

function getRandomIntInclusive(min, max) {
  if (!isIntExist(min, max) || !isPositiveNumbers(min, max)) {
    return 'Не корректный диапазон';
  }

  if (min === max) {
    return min;
  }

  if (min > max) {
    max = Math.ceil(max);
    min = Math.floor(min);
    return Math.floor(Math.random() * (min - max + 1)) + max;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloatInclusive(min, max,  num) {
  if (!isPositiveNumbers(min, max)) {
    return 'Не корректный диапазон';
  }

  if (min === max) {
    return min;
  }

  if (min > max) {
    return (Math.random() * (min - max) + max).toFixed(num);
  }

  return (Math.random() * (max - min) + min).toFixed(num);
}

getRandomIntInclusive(0, 10);
getRandomFloatInclusive(0, 10);

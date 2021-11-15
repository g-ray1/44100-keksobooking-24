import {sendData} from './send-data.js';
import {resetMap} from './map.js';

const adForm = document.querySelector('.ad-form');
const roomsSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');
const capacitySelectOptions = capacitySelect.querySelectorAll('option');
const typeSelect = document.querySelector('#type');
const priceInput = document.querySelector('#price');
const timeInSelect = document.querySelector('#timein');
const timeOutSelect = document.querySelector('#timeout');
const timeOutSelectOptions = timeOutSelect.querySelectorAll('option');
const resetButton = document.querySelector('.ad-form__reset');

const allTypes = {
  bungalow : 0,
  flat : 1000,
  hotel : 3000,
  house : 5000,
  palace : 10000,
};

//комнаты и гости
roomsSelect.addEventListener('change', (evt) => {
  capacitySelectOptions.forEach((option) => {
    if (+evt.target.value < +option.value) {
      option.disabled = true;
    } else {
      option.disabled = false;
      option.setAttribute('selected', true);
    }
  });
});

//тип апартаментов
typeSelect.addEventListener('click', (evt) => {
  const selectType = evt.target.value;
  priceInput.min = allTypes[selectType];
  priceInput.placeholder = allTypes[selectType];
});

// время въезда/выезда
timeInSelect.addEventListener('change', (evt) => {
  timeOutSelectOptions.forEach((option) => {
    if (option.value === evt.target.value) {
      option.selected = true;
      option.disabled = false;
    } else {
      option.selected = false;
      option.disabled = true;
    }
  });
});

// кнопка отправки
adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  sendData(formData, evt);
});

// кнопка сброса
resetButton.addEventListener(('click'), (evt) => {
  evt.preventDefault();
  adForm.reset();
  resetMap();
});
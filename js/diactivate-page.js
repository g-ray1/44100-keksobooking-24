const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');

adForm.classList.add('ad-form--disabled');
adFormFieldsets.forEach((fieldset) => {
  fieldset.disabled = true;
});

const mapFilter = document.querySelector('.map__filters');
const mapFilterSelects = mapFilter.querySelectorAll('select');
const mapFilterFieldsets = mapFilter.querySelectorAll('fieldset');

mapFilter.classList.add('map__filters--disabled');
mapFilterSelects.forEach((select) => {
  select.disabled = true;
});
mapFilterFieldsets.forEach((fieldset) => {
  fieldset.disabled = true;
});

const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const mapFilterSelects = mapFilter.querySelectorAll('select');
const mapFilterFieldsets = mapFilter.querySelectorAll('fieldset');

function diactivatePage() {
  adForm.classList.add('ad-form--disabled');
  adFormFieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });

  mapFilter.classList.add('map__filters--disabled');
  mapFilterSelects.forEach((select) => {
    select.disabled = true;
  });
  mapFilterFieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });
}

function activatePage() {
  adForm.classList.remove('ad-form--disabled');
  adFormFieldsets.forEach((fieldset) => {
    fieldset.disabled = false;
  });
}

function activateFilters() {
  mapFilter.classList.remove('map__filters--disabled');
  mapFilterSelects.forEach((select) => {
    select.disabled = false;
  });
  mapFilterFieldsets.forEach((fieldset) => {
    fieldset.disabled = false;
  });
}

export {diactivatePage, activatePage, activateFilters};

const roomsSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');
const capacitySelectOptions = capacitySelect.querySelectorAll('option');

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

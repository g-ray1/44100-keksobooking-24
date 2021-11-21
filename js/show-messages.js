const body = document.querySelector('body');
const errorTemplate = document.querySelector('#error').content;
const successTemplate = document.querySelector('#success').content;

const showErrorLoadMessage = (text) => {

  const errorMessage = document.createElement('p');
  const messageContainer = document.querySelector('.map__filters-container');
  errorMessage.textContent = text;
  errorMessage.style.fontSize = '20px';
  errorMessage.style.textAlign = 'center';
  errorMessage.style.color = 'white';
  messageContainer.append(errorMessage);
  setTimeout(() => {
    errorMessage.remove();
  }, 5000);
};

const showErrorSendMessage = () => {
  const errorMessage = errorTemplate.querySelector('.error').cloneNode(true);
  document.querySelector('body').append(errorMessage);

  document.addEventListener('click', () => {
    const newMessage = body.querySelector('.error');
    body.removeChild(newMessage);
  }, {once: true});

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      const newMessage = body.querySelector('.error');
      body.removeChild(newMessage);
    }
  }, {once: true});
};

const showSuccessSendMessage = () => {
  const successMessage = successTemplate.querySelector('.success').cloneNode(true);
  body.append(successMessage);

  document.addEventListener('click', () => {
    const newMessage = body.querySelector('.success');
    body.removeChild(newMessage);
  }, {once: true});

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      const newMessage = body.querySelector('.success');
      body.removeChild(newMessage);
    }
  }, {once: true});
};

export {
  showErrorLoadMessage,
  showErrorSendMessage,
  showSuccessSendMessage
};

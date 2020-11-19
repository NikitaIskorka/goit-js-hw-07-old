const fieldRef = document.getElementById('validation-input');

const validValue = fieldRef.dataset.length;
fieldRef.addEventListener('change', event => {
  event.target.value.length === +validValue
    ? fieldRef.setAttribute('class', 'valid')
    : fieldRef.setAttribute('class', 'invalid');
});

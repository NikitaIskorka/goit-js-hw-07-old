// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const addListenerBtnRef = document.querySelector('.add');
const listenerBtnRef = document.querySelector('.listener');
const deleteListenerBtnRef = document.querySelector('.delete');
const counterRef = document.querySelector('#counter');
let valueRef = document.querySelector('#value');

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

valueRef.textContent = 15;

console.log(valueRef.textContent);
console.dir(valueRef.textContent);

const doStuffOnClick = () => {
  console.log('hi');
};

const decrement = () => {
  valueRef.textContent > 0
    ? (valueRef.textContent = valueRef.textContent - 1)
    : 0;
};
const increment = () => {
  valueRef.textContent = Number(valueRef.textContent) + 1;
};
addListenerBtnRef.addEventListener('click', () => {
  listenerBtnRef.addEventListener('click', doStuffOnClick);
});

deleteListenerBtnRef.addEventListener('click', () => {
  listenerBtnRef.removeEventListener('click', doStuffOnClick);
});

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

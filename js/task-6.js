// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и
// изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const sliderRef = document.querySelector('#font-size-control');
const outputRef = document.querySelector('#text');

console.dir(sliderRef);
console.dir(outputRef);

sliderRef.addEventListener('input', () => {
  outputRef.style.fontSize = sliderRef.value + 'px';
});

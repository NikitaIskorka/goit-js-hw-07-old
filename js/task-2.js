// Напиши скрипт, который для каждого элемента
// массива ingredients создаст отдельный li, после чего вставит
//  все li за одну операцию в список ul.ingredients. Для создания
//  DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('#ingredients');
console.log(listRef);
const makeProductList = ingridients => {
  const makeList = document.createElement('li');
  makeList.textContent = ingridients;
  return makeList;
};
const ingredientsList = ingredients.map(makeProductList);
listRef.append(...ingredientsList);

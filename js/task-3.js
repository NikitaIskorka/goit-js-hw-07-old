// Используй массив объектов images для создания тегов img вложенных в li. Для создания 
// разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.



const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryContainerRef = document.querySelector('#gallery')
const makeGallery = ({url,alt}) => {
  const makeImg = document.createElement('img')
 
  return `<li class=class"list">
  <img class="image" src=${url} alt=${alt}>
  </li>`
}

const gallery = images.map(makeGallery)
galleryContainerRef.insertAdjacentHTML("afterbegin",gallery)






// const galleryEl = document.querySelector('#gallery');
// console.log(galleryEl);

// const makeGallery = ({ url, alt }) => {
//   const imageEl = document.createElement('img');
//   // imageEl.src = `${url}`;
//   // imageEl.alt = `${alt}`;

//   return `
//   <li class="list">
//   <img class="image-gallery" src='${url}' alt='${alt}'>
//   </li>
//   `;
// };

// const arrImages = images.map(makeGallery);

// galleryEl.insertAdjacentHTML('afterbegin', arrImages);
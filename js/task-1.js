const listLengthRef = document.querySelectorAll('h2').length
console.log(`В списке ${listLengthRef} категории.`);


// =======================================
const listOfItems = document.querySelectorAll('.item',)
// console.log(listOfItems);
listOfItems.forEach(item =>{console.log(`Категория: 
${item.firstElementChild.textContent}
Количество элементов: 
${item.lastElementChild.children.length} `);})
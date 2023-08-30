// const categoriesEl = document.querySelector('#categories');
// console.log(categoriesEl);
const categoriesDetEl = document.querySelectorAll('.item');
// console.log(categoriesDetEl);
let count = 0;
categoriesDetEl.forEach(() => {
  count++;
});

console.log('Number of categories:', count);
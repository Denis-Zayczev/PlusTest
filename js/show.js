let btn1 = document.querySelector('.effectiveness-card1__btn');
let btn2 = document.querySelector('.effectiveness-card2__btn');
let product = document.querySelector('.product');
let sales = document.querySelector('.sales');
let promotion = document.querySelector('.promotion');

product.style.display = 'none'
sales.style.display = 'none'
promotion.style.display = 'none'

btn1.addEventListener("click", () => {
  if (sales.style.display == 'none') {
    sales.style.display = 'block'
    promotion.style.display = 'block'
    product.style.display = 'none'
  } else {
    sales.style.display = 'none'
    promotion.style.display = 'none'
  }
});

btn2.addEventListener("click", () => {
  if (product.style.display == 'none') {
    product.style.display = 'block';
    promotion.style.display = 'none'
    sales.style.display = 'none'
  }
  else product.style.display = 'none'
});
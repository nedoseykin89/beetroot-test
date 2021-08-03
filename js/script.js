///////modal
document.addEventListener("DOMContentLoaded", function () {
  let scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  document.querySelector('[href="#openModal"]').addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close"]').addEventListener('click', function () {
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal').style.marginLeft = '0px';
  });
});

////////////////////////filters

 let products = document.getElementById("products"), 
      catsSel = document.getElementById("cats"), 
      priceSel = document.getElementById("price");
document.addEventListener('change', handleChange); 
render(defaultData.products); 

function handleChange({ target }) {
  if ((target.id !== 'cats') && (target.id !== 'price')) return;
  const selectedCat = +catsSel.value, 
        selectedPrice = +priceSel.value; 
  render(defaultData.products.filter(item => (
    (selectedCat <= 0 || item.cid === selectedCat) &&
    (selectedPrice <= 0 || item.price <= selectedPrice)
  )));
}

function render(data) {
  products.innerHTML = data.map(
    (item) =>
      `<div class="product-box__item">
    <h3 class="product-box__title">${item.title}</h3>
    <div class="product-box__img">
    ${item.im}
    </div>
    <div class="product-box__meta">
        <p class="item-price">${item.price} грн</p>
        <div class="qty">
        <input class="qty__item" type="number" value="0"> Кол
        </div>
        <button class="product-box__btn" >Добавить</button>

    </div>
</div>`

  )
    .join("");
  }
    //////////////////////////////// Products & Price

let button = document.getElementsByClassName('product-box__btn');
let input = document.getElementById('total__prods');
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function(e) {
        input.innerHTML = e.target.closest('.product-box__meta').querySelectorAll('.qty__item')[i].value;
    });
}
let cost = document.getElementById('total__price');
for (let i = 0; i < cost.innerText; i++) {
    button[i].addEventListener('click', function(e) {
      cost.innerHTML = e.target.closest('.product-box__meta').querySelectorAll('.qty__item')[i].value;
    });
}
let initItem = input.innerHTML;
let w = document.getElementById('total__prods');
let initPrice = w.innerHTML;

///////////// form
const form = document.getElementById('form');
const email = document.getElementById('email');
const name2 = document.getElementById('form-name');
form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  if(!name2.value.trim().length) {
    alert('Поле имя не заполнено');
    name2.style.border='1px solid red'
    return;
  }
  if(!email.value.trim().length) {
    alert('Поле email не заполнено');
    email.style.border='1px solid red'
    return;
  } else {
    alert ('Спасибо за покупки')
     return w.innerHTML = initItem; 
     
  }
  
});
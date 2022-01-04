let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec => {
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
        navLinks.forEach(links =>{
          links.classList.remove('active');
          document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
        });
      };
    });
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,

  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints:{
      0:{
        slidesPerView: 1,
      },
      640:{
        slidesPerView: 2,
      },
      768:{
        slidesPerView: 2,
      },
      1024:{
        slidesPerView: 3,
      }
    }

  });


function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;




let carts = document.querySelectorAll('.add-cart');

let products = [
  {
    name: 'Veggie Pizza',
    tag: 'pizza',
    price: 12,
    incart: 0
  },
  {
    name: 'Veg burger',
    tag: 'burger',
    price: 10,
    incart: 0
  },
  {
    name: 'Veggie Pizza',
    tag: 'pizza',
    price: 12,
    incart: 0
  },
  {
    name: 'Veggie Pizza',
    tag: 'pizza',
    price: 12,
    incart: 0
  },
  {
    name: 'Veggie Pizza',
    tag: 'pizza',
    price: 12,
    incart: 0
  },
  {
    name: 'Veggie Pizza',
    tag: 'pizza',
    price: 12,
    incart: 0
  },
  {
    name: 'Veggie Pizza',
    tag: 'pizza',
    price: 12,
    incart: 0
  },
]

for (let i = 0; i<carts.length; i++){
    carts[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
        
    })
}

function onLoadCartNumbers(){
  let productNumbers = localStorage.getItem('cartNumbers');

  if(productNumbers){
    document.querySelector('.fa-shopping-cart span').textContent = productNumbers;
  }

}

function cartNumbers(products){
  //console.log("The product clicked is", products);
  let productNumbers = localStorage.getItem('cartNumbers');

  productNumbers = parseInt(productNumbers);
  if(productNumbers){
    localStorage.setItem('cartNumbers', productNumbers+1);
    document.querySelector('.fa-shopping-cart span').textContent = productNumbers + 1;
  }
  else{
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.fa-shopping-cart span').textContent = 1;
  }

  setItems(products);
} 

function setItems(products){
  let cartItem = localStorage.getItem('productsInCart');
  cartItem = JSON.parse(cartItem);
  console.log("My cartItems are ", cartItem);
  products.incart = 1;

  let cartItems = {
    [products.tag]: products
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

onLoadCartNumbers()







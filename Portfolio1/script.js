//for search bar display
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick= () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}
//for cart display
let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    
}
//for login form display
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
        loginForm.classList.toggle('active');
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        navbar.classList.remove('active');
}
//for navigation bar
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
}
//while scrolling hides the bars
window.onscroll = () => {
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
}

var swiper = new Swiper(".products-slider", {
        loop: true,
        spaceBetween: 20,
        autoplay: {
                delay: 7500,
                disableOnInteraction: false,
        },
        centerOnScroll: true,
        breakpoints: {
        0: {
            slidesPerView: 1,
        }, 
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
        },
    });
    
var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1020: {
        slidesPerView: 3,
    },
    },
});
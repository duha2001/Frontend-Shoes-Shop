let formBtn=document.querySelector('.fa-user');
let loginForm=document.querySelector('.login-form-container');
let navbar = document.querySelector('.navbar');
let formClose=document.querySelector('#form-close');
let slides=document.querySelectorAll('.slide-container');
let menu = document.querySelector('#menu-bar');
let index=0;


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
  
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
})

formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active')
;})
function next(){
    slides[index].classList.remove('active');
    index = (index + 1)%slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index=(index - 1 + slides.length)%slides.length;
    slides[index].classList.add('active');
    console.log(index);
}

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
    image_1.addEventListener('click',()=>{
        var src=image_1.getAttribute('src');
        document.querySelector('.big-image-1').src=src;
    });
});

document.querySelectorAll('.featured-image-2').forEach(image_2=>{
    image_2.addEventListener('click',()=>{
        var src=image_2.getAttribute('src');
        document.querySelector('.big-image-2').src=src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_3=>{
    image_3.addEventListener('click',()=>{
        var src =image_3.getAttribute('src');
        document.querySelector('.big-image-3').src=src;
    })
})
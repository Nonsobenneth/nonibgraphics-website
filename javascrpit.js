

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}




var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
   centeredSlide: true,
    autoplay:{
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
   loop:true,
   
  });
  
  

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
   centeredSlide: true,
    autoplay:{
      delay: 7500,
      disableOnInteraction: false,
    },
    
   loop:true,
   
  breakpoints: {
    540: {
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
  
  





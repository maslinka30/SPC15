let swiper;

const swiperInit = function(){
  if(!swiper){
swiper = new Swiper('.swiper', {
  
  direction: "horizontal",
  slidesPerView: "auto",
  loop: true,
  effect: 'coverflow',

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
}
};

const widthTablet = window.matchMedia('(max-width: 767px)');

const destroySwiper = function (event){
  if (!event.matches && swiper) {
    swiper.destroy();
    swiper = undefined;
  } else if (event.matches) {
    swiperInit();
  }
};

destroySwiper(widthTablet);
widthTablet.addEventListener('change',destroySwiper);



document.addEventListener('DOMContentLoaded', function () {
const button = document.querySelector('.catalog__button');
const buttonText = document.querySelector('.button__text');
const catalogItems = document.querySelectorAll('.catalog__item');


const isTablet = () => window.matchMedia('(min-width: 768px) and (max-width: 1124px)').matches;
const isDesktop = () => window.matchMedia('(min-width: 1125px)').matches;


const toggleCards = () => {
  catalogItems.forEach((item, index) => {
  if (isTablet() && index >= 6) { 
    item.style.display = 'flex';
  } else if (isDesktop() && index >= 8) { 
    item.style.display = 'flex'; 
  }
});

      
  if (buttonText.textContent === 'Показать все') {
    buttonText.textContent = 'Скрыть';
  } else {
    buttonText.textContent = 'Показать все';
    initCatalog(); 
  }
  };

 
const initCatalog = () => {
  if (isTablet()) {
  catalogItems.forEach((item, index) => {
  if (index >= 6) {
    item.style.display = 'none';
  } else {
    item.style.display = 'flex';
  }
});
   button.style.display = 'flex'; 
   buttonText.textContent = 'Показать все';
  } else if (isDesktop()) {
         
  catalogItems.forEach((item, index) => {
  if (index >= 8) {
    item.style.display = 'none';
  } else {
    item.style.display = 'flex';
  }
});
   button.style.display = 'flex'; 
   buttonText.textContent = 'Показать все';
  } else {
           
  catalogItems.forEach(item => {
    item.style.display = 'flex';
});
  button.style.display = 'none';       
  } 
};

 
  button.addEventListener('click', toggleCards);
  window.addEventListener('resize', initCatalog);
  initCatalog();
});

  
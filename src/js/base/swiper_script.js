
/*****************************----Swiper----*************************************/
const brendSlider = document.querySelector('#brends .slider-container');
const typeSlider = document.querySelector('#types .slider-container');
const priceSlider = document.querySelector('#price .slider-container');

let brendSwiper;
let typeSwiper;
let priceSwiper;

function brendMobileSlider() {
  if (window.innerWidth <= 767 && brendSlider.dataset.mobile == 'false') {
    brendSwiper = new Swiper(brendSlider, {
      pagination: {
        el: '.pg1',
        type: 'bullets',
      },
      slidesPerView: 'auto', 
      spaceBetween: 16,
      slideClass: 'swiper-box',
    });

    brendSlider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 767) {
    brendSlider.dataset.mobile = 'false';
    if (brendSwiper) {
      brendSwiper.destroy();
    }
  }
}

function typeMobileSlider() {
  if (window.innerWidth <= 767 && typeSlider.dataset.mobile == 'false') {
    typeSwiper = new Swiper(typeSlider, {
      pagination: {
        el: '.pg2',
        type: 'bullets',
      },
      slidesPerView: 'auto', 
      spaceBetween: 16,
      slideClass: 'type-box',
      wrapperClass: 'types-wrapper',
    });

    typeSlider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 767) {
    typeSlider.dataset.mobile = 'false';
    if (typeSwiper) {
      typeSwiper.destroy();
    }
  }
}

function priceMobileSlider() {
  if (window.innerWidth <= 767 && priceSlider.dataset.mobile == 'false') {
    priceSwiper = new Swiper(priceSlider, {
      pagination: {
        el: '.pg3',
        type: 'bullets',
      },
      slidesPerView: 'auto', 
      spaceBetween: 16,
      slideClass: 'price-box',
      wrapperClass: 'price-wrapper',
    });

    priceSlider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 767) {
    priceSlider.dataset.mobile = 'false';
    if (priceSwiper) {
      priceSwiper.destroy();
    }
  }
}



brendMobileSlider();
window.addEventListener('resize', () => {
  brendMobileSlider();
});

typeMobileSlider();
window.addEventListener('resize', () => {
  typeMobileSlider();
});

priceMobileSlider();
window.addEventListener('resize', () => {
  priceMobileSlider();
});
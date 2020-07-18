/*****************************----Media-query`s----*******************************/
const check = window.matchMedia('(min-width: 768px)');

export let handleMatchMedia = function (mediaQuery) {
  let swipCont = document.querySelector('.swiper-container');
  let logo = document.querySelector('.logo-container');
  if (mediaQuery.matches) {
    swipCont.style.display = 'none';
    logo.classList.remove('visible');
  } else {
    swipCont.style.display = 'flex';
    logo.classList.add('visible');
  }
}

handleMatchMedia(check);
check.addListener(handleMatchMedia);

/*****************************----Read more----**********************************/
/*
let readButton = document.querySelector('.logo__show');
console.log('finded')
readButton.addEventListener('click', function () {
  let block = document.querySelector('.logo-wrapper');
  block.classList.toggle('logo-wrapper--opend');
})
/*****************************----Swiper----*************************************/

const slider = document.querySelector('.swiper-container');

export let swiper = new Swiper(slider, {
    pagination: {
      el: '.swiper-pagination',
      //type: 'bullets',
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
})

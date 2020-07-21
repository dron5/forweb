let readButton = document.querySelector('.logo__show');

function showMe () {
    let block = document.querySelector('.swiper-wrapper');
    block.classList.toggle('swiper-wrapper--opend');
}
readButton.addEventListener('click', showMe);

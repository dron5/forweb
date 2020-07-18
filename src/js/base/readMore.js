let readButton = document.querySelector('.logo__show');
console.log('finded');
function showMe () {
    let block = document.querySelector('.logo-wrapper');
    block.classList.toggle('logo-wrapper--opend');
}
readButton.addEventListener('click', showMe);

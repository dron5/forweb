
const buttons = document.querySelectorAll('.logo__show');
const readMoreButton = document.querySelector('.main__read-more');

for (let button of buttons) {
    button.addEventListener('click', () => {
        let name ='.' + String(button.parentNode.firstElementChild.classList[0]);
        let block = document.querySelector(name);
        block.classList.toggle('wrapper--opend');
    })
}
/*******************************************************/


readMoreButton.addEventListener('click', () => {
    let block = document.querySelector('.main__description');
    block.classList.toggle('main__description--opend');
});
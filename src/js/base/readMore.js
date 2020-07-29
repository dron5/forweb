
const buttons = document.querySelectorAll('.logo__show');

for (let button of buttons) {
    button.addEventListener('click', () => {
        let name ='.' + String(button.parentNode.firstElementChild.classList[0]);
        let block = document.querySelector(name);
        block.classList.toggle('wrapper--opend');
    })
}
/*******************************************************/


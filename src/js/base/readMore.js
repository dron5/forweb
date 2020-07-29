
let readMoreButton = document.querySelector('.main__read-more');

readMoreButton.addEventListener('click', () => {
    let block = document.querySelector('.main__description');
    block.classList.toggle('main__description--opend');
    readMoreButton.classList.toggle('logo__show--more');
    readMoreButton.classList.toggle('logo__show--less');
    if (readMoreButton.classList.contains('logo__show--more')){
        readMoreButton.textContent = 'Показать всё';
    }else{
        readMoreButton.textContent = 'Скрыть';
    }
});

/*******************************************************/

const buttons = document.querySelectorAll('.logo__show');

for (let button of buttons) {
    button.addEventListener('click', () => {
        let name ='.' + String(button.parentNode.firstElementChild.classList[0]);
        let block = document.querySelector(name);
        block.classList.toggle('wrapper--opend');
        
        button.classList.toggle('logo__show--more');
        button.classList.toggle('logo__show--less');
        if (button.classList.contains('logo__show--more')){
            button.textContent = 'Показать всё';
        }else{
            button.textContent = 'Скрыть';
        }
        
    })
}

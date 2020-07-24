 /****************************создание-объектов-для-кнопок******************************/
 let openBurger = document.querySelector('.header__burger');
 let closeBurger = document.querySelector('.mobile-menu__burger');
 let openRecallHeader = document.querySelector('.header__call');
 let openFeedbackHeader = document.querySelector('.header__feedback');
 let openRecallMobile = document.querySelector('.mobile-menu__recall');
 let openFeedbackMobile = document.querySelector('.mobile-menu__feedback');
 let closeFeedback = document.querySelector('.feedback__burger');
 let closeRecall = document.querySelector('.recall__burger');
/******************************поиск-объектов-меню********************************/
 let contMenu = document.querySelector('.mobile-menu-container');
 let contRecall = document.querySelector('.recall');
 let contFeedback = document.querySelector('.feedback');
 let whiteSpace = document.querySelector('.white');

 let buttons = [contMenu, contRecall, contFeedback];
/******************************вызов-меню*************************************/
 openBurger.addEventListener('click', () => {
    contMenu.classList.toggle('visible');
    whiteSpace.classList.toggle('visibleWhite');
 });
 closeBurger.addEventListener('click', () => {
    contMenu.classList.toggle('visible');
    whiteSpace.classList.toggle('visibleWhite');
 });
/******************************вызов-модалок-из-меню***************************/
 openRecallMobile.addEventListener('click', () => {
   contMenu.classList.toggle('visible');
   contRecall.classList.toggle('visible');
});
 openFeedbackMobile.addEventListener('click', () => {
   contMenu.classList.toggle('visible');
   contFeedback.classList.toggle('visible');
});
/*********************вызов-меню-из-заголовка,закрытие-модалок*****************/
 openRecallHeader.addEventListener('click', () => {
   contRecall.classList.toggle('visible');
   whiteSpace.classList.toggle('visibleWhite');
});
 closeRecall.addEventListener('click', () => {
   contRecall.classList.toggle('visible');
   whiteSpace.classList.toggle('visibleWhite');
});

 openFeedbackHeader.addEventListener('click', () => {
   contFeedback.classList.toggle('visible');
   whiteSpace.classList.toggle('visibleWhite');
});
 closeFeedback.addEventListener('click', () => {
   contFeedback.classList.toggle('visible');
   whiteSpace.classList.toggle('visibleWhite');
});
/**************************обработчик-"молока"**********************************/
 whiteSpace.addEventListener('click', () => {
    whiteSpace.classList.toggle('visibleWhite');
    buttons.forEach(el => {
        if(el.classList.contains('visible')){
            el.classList.toggle('visible');
        }
    });
 });
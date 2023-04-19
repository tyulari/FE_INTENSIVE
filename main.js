//взять массив линков
const MENU_LINKS = document.querySelectorAll('.header__menu-link');

//для каждого линка по клику
MENU_LINKS.forEach((link) => link.addEventListener('click', event => {
    event.preventDefault();//отменить действие по умолчанию

    const section = document.querySelector(link.getAttribute('href'));//найти секцию к которой перейти
    //проскроллить
    section.scrollIntoView({
        behavior:"smooth"
    })
}));
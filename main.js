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

/*аккордеон*/
const HERO_DOTS = document.querySelectorAll('.hero__dot');
const HERO_IMG = document.querySelector('.hero__image');
const HERO_TITLE = document.querySelector('.hero__title');
const HERO_SUBTITLE = document.querySelector('.hero__subtitle');

const TITLE = [
    'Разработано 2000+ приложений',
    'Бесплатные приложения',
    'Тысячи довольных клиентов'
];

const SUBTITLE = [
    "Для вашего удобства мы разработали множество приложений для вашего бизнеса и команды, которые доступны в любое время суток",
    'К любому сервисному обслуживанию мы подключим советы по управлению компанией совершенно бесплатно',
    'Накопленный нами опыт позволяет предлагать клиентам обширный спектр качественных приложений и сервисов'
]

HERO_DOTS.forEach((dot, index) => dot.addEventListener('click', () => {
   //убрать класс active
    HERO_DOTS.forEach(el => el.classList.remove('active'));
    // добавить к нажатой
    dot.classList.add('active');
    
    HERO_IMG.src = `assets/hero_${index+1}.jpg`;
    HERO_TITLE.textContent = TITLE[index];
    HERO_SUBTITLE.textContent = SUBTITLE[index];
}));



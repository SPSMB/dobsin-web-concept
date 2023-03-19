// Nav
const nav = document.querySelector('.nav');
const navLinks = document.querySelector('.nav__links');
const navToggle = document.querySelector('.nav__toggleBx');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('navActive');
    document.body.classList.toggle('noScroll');

    if(nav.classList.contains('navActive')) navLinks.style.animation = "fadeIn 250ms ease-in-out forwards";
    else navLinks.style.animation = "fadeOut 250ms ease-in-out forwards";
})
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


// Nav Scroll Animation
window.addEventListener('scroll', () => {
    if(window.pageYOffset > 30){
        nav.classList.remove('start-nav');
        nav.classList.add('scroll-nav');
    }
    else{
        nav.classList.add('start-nav');
        nav.classList.remove('scroll-nav');
    }

    document.documentElement.style.setProperty('--nav-height', `${nav.clientHeight}px`);
})


// Nav Scroll Offset
window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--nav-height', `${nav.clientHeight}px`);
})

// Onload
window.addEventListener('load', async () => {
    document.documentElement.style.setProperty('--nav-height', `${nav.clientHeight}px`);
})
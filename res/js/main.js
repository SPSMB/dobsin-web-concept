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


// Weather API
window.addEventListener('load', async () => {
    await weatherApi();

    document.documentElement.style.setProperty('--nav-height', `${nav.clientHeight}px`);
})


const weatherIcon = document.querySelector('.status__icon');
const weatherStatus = document.querySelector('.statusWeather');
const tempStatus = document.querySelector('.statusTemp');
const humidStatus = document.querySelector('.statusHumid');

async function weatherApi(){
    try{
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=dobšín&units=metric&lang=cz&appid=7bfeaeea8782e7eb6ed72fb2b8b7cabb`;

        const nonParsed = await fetch(weatherUrl);
        const data = await nonParsed.json();

        const currWeather = {
            temp: Math.round(data.main.temp),
            humidity: data.main.humidity,
            weatherDesc: data.weather[0].description,
            weatherIcon: data.weather[0].icon.slice(0, -1)
        };

        weatherIcon.src = `./res/img/weather/${currWeather.weatherIcon}.png`;
        weatherStatus.innerText = currWeather.weatherDesc;
        tempStatus.innerText = currWeather.temp;
        humidStatus.innerText = currWeather.humidity;
    }
    catch(err){
        console.log(err);
    }
}
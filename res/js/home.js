// Weather API
window.addEventListener('load', async () => {
    await weatherApi();
})


const weatherIcon = document.querySelector('.status__icon');
const weatherStatus = document.querySelector('.statusWeather');
const tempStatus = document.querySelector('.statusTemp');
const humidStatus = document.querySelector('.statusHumid');

async function weatherApi(){
    try{
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=50.489527643619034&lon=15.038305142032598&units=metric&lang=cz&appid=7bfeaeea8782e7eb6ed72fb2b8b7cabb`;

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
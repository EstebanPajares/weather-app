import weather from '../data/current-weather.js' //importando data del clima

function setCurrentCity($el, city){ //contenedor y ciudad
    $el.textContent = city
}

function configCurrentWeather(weather){
    //loader
    //dayWeather
    //city
    const $currentWeatherCity = document.querySelector('#current-weather-city')
    const city = weather.name

    setCurrentCity($currentWeatherCity, city)
    
    //const $currentWeatherCity = document.querySelector('#current-weather-city')
    //$currentWeatherCity.textContent = weather.name
    debugger
    //temp
    //background
}
export default function currentWeather(){
    //GEO //API - weather //config
    configCurrentWeather(weather)
    console.log(weather)

}
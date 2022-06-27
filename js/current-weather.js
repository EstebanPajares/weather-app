import weather from '../data/current-weather.js' //importando data del clima

function setCurrentCity($element, city){ //container and city
    $element.textContent = city
}

function configCurrentWeather(weather){
    //loader
    //dayWeather
    //city
    const $currentWeatherCity = document.querySelector('#current-weather-city')
    const city = weather.name
    setCurrentCity($currentWeatherCity, city)
        
    //debugger
    //temp
    //background
}
export default function currentWeather(){
    //GEO //API - weather //config
    configCurrentWeather(weather)
    console.log(weather)

}
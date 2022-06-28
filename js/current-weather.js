import weather from '../data/current-weather.js' //importando data del clima
import {formatDate} from './utils/format-data.js'

function setCurrentCity($element, city){ //container, city
    $element.textContent = city
}


function setCurrentDate($element){
    const date = new Date() //Object
    const formattedDate = formatDate(date)
    $element.textContent = formattedDate
}
function configCurrentWeather(weather){
    //loader
    //Date
    const $currentWeatherDate = document.querySelector('#current-weather-date')
    setCurrentDate($currentWeatherDate)

    //city
    const $currentWeatherCity = document.querySelector('#current-weather-city')
    const city = weather.name
    setCurrentCity($currentWeatherCity, city)
    //temp
    //background
}
export default function currentWeather(){
    //GEO //API - weather //config
    configCurrentWeather(weather)
    console.log(weather)

}
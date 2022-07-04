import weather from '../data/current-weather.js' //importando data del clima
import { formatDate, formatTemp } from './utils/format-data.js'
import { weatherConditionsCodes } from './constants.js'

//weatherConditionsCodes[]

function setCurrentCity($element, city){ //container, city
    $element.textContent = city
}


function setCurrentDate($element){
    const date = new Date() //Object
    const formattedDate = formatDate(date)
    $element.textContent = formattedDate
}

function setCurrentTemp($element, temp){
    $element.textContent = formatTemp(temp)
}

function solarStatus(sunriseTime, sunsetTime ){
    const currentHours = new Date().getHours()
    const sunriseHours = sunriseTime.getHours()
    const sunsetHours = sunsetTime.getHours()

    if (currentHours < sunriseHours || currentHours > sunsetHours){
        return 'night'
    }
    return 'morning'
}

function setBackground($element, conditionCode, solarStatus){
    const weatherType = weatherConditionsCodes[conditionCode]
    $element.style.backgroundImage = `url(./images/${solarStatus}-${weatherType}.jpg)`
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
    const $currentWeatherTemp = document.querySelector('#current-weather-temp')
    const temp = weather.main.temp
    setCurrentTemp($currentWeatherTemp, temp)
    
    //background
    const sunriseTime  = new Date(weather.sys.sunrise * 1000) //Amanece
    const sunsetTime = new Date(weather.sys.sunset * 1000) //Anochese
    const $app = document.querySelector('#app')
    const conditionCode = String(weather.weather[0].id).charAt(0)
    setBackground($app, conditionCode, solarStatus(sunriseTime, sunsetTime))

}
export default function currentWeather(){
    //GEO //API - weather //config
    configCurrentWeather(weather)
    console.log(weather)

}
/* import weather from '../data/current-weather.js' */ //importando data del clima - datos de prueba
import { formatDate, formatTemp } from './utils/format-data.js'
import { weatherConditionsCodes } from './constants.js'
import {getLatLon} from './geolocation.js'
import { getCurrentWeather } from './services/weather.js'

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
    
    //If ternario ---->  true ? '@2x' : ' '
    const size = window.matchMedia('(-webkit-min-device-pixel-ratio: 2)').matches ? '@2x' : ''
    /* let size = ''
    if(window.matchMedia('(-webkit-min-device-pixel-ratio: 3)').matches){
        size = '@2x'
    } */
    $element.style.backgroundImage = `url(./images/${solarStatus}-${weatherType}${size}.jpg)`
}

function showCurrentWeather($app, $loading){
    $app.hidden = false,
    $loading.hidden = true

}

function configCurrentWeather(weather){
    const $app = document.querySelector('#app')
    const $loading = document.querySelector('#loading')
    //loader
    showCurrentWeather($app, $loading)

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
    
    const conditionCode = String(weather.weather[0].id).charAt(0)
    setBackground($app, conditionCode, solarStatus(sunriseTime, sunsetTime))

}
export default async function currentWeather(){
    //GEO //API - weather //config
    //console.log('Esto es ANTES DE  getCurrentPosition')
    const  { lat, lon, isError } =  await getLatLon()
    if (isError) return console.log('Ha ocurrido un error ubicandote')
    /* console.log(lat, lon) */
    /* try{
        const  { lat, lon } =  await getLatLon()
        console.log(lat, lon)
    } catch (err){
        console.log(err)
    } */

    /* getCurrentPosition()
    //Si devuelve resolve
    .then((data)=>{
        console.log('Hemos triunfado', data)
    })
    //Si devuelve reject
    .catch((message) => {
        console.log(message)
    }) */
    /* console.log('Esto es DESPUES DE  getCurrentPosition')
    configCurrentWeather(weather)
    console.log(weather) */
    
    //Desestructurar un objeto
    const { isError: currentWeatherError, data: weather} = await getCurrentWeather(lat, lon)
    if (currentWeatherError) return console.log('Oh! ha ocurrido un error trayendo los datos del clima')
    configCurrentWeather(weather)
}
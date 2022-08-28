//Pedir información del API
import { getWeeklyWetaher } from "./services/weather.js";
import {getLatLon} from './geolocation.js'
import { formatWeekList } from './utils/format-data.js'

function configWeeklyWeather(weeklist){
    const $container = document.querySelector('.weeklyWeather')
    weeklist.forEach((item)=>{
        const $el = document.createElement('h2')
        $el.textContent = 'Hola Mundo'
        $container.append($el)
    })

}

// Prediccion de clima semanal
export default async function weeklyWeather(){
    const  { lat, lon, isError } =  await getLatLon()
    if (isError) return console.log('Ha ocurrido un error ubicandote')
    
    const { isError: weeklyWeatherError, data: weather} = await getWeeklyWetaher(lat, lon)
    if (weeklyWeatherError) return console.log('Oh! ha ocurrido un error trayendo los datos del pronóstico del clima')
    const weeklist = formatWeekList(weather.list)
    configWeeklyWeather(weeklist)
}
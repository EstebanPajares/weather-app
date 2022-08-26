// Prediccion de clima semanal
import { getWeeklyWetaher } from "./services/weather.js";
import {getLatLon} from './geolocation.js'

function configWeeklyWeather(){

}

export default async function weeklyWeather(){
    const  { lat, lon, isError } =  await getLatLon()
    if (isError) return console.log('Ha ocurrido un error ubicandote')
    
    const { isError: weeklyWeatherError, data: weather} = await getWeeklyWetaher(lat, lon)
    if (weeklyWeatherError) return console.log('Oh! ha ocurrido un error trayendo los datos del pronóstico del clima')
    debugger
    configWeeklyWeather(weather)
}
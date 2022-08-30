//Pedir información del API
import { getWeeklyWetaher } from "./services/weather.js";
import {getLatLon} from './geolocation.js'
import { formatWeekList } from './utils/format-data.js'
import { createDOM } from './utils/dom.js'

//Renderizando los tabPanels
function tabPanelTemplate(id){
   return `
    <div class="tabPanel" tabindex="0" aria-labelledby="tab-${id}">
    <div class="dayWeather" id="dayWeather-${id}">
      <ul style = "color:white" class="dayWeather-list" id="dayWeather-list-${id}">
       Tab Panel ${id}
      </ul>
    </div>
  </div>
    `
}

function createTabPanel(id){
    const $panel = createDOM(tabPanelTemplate(id))
    if (id > 0){
        $panel.hidden = true
    }
    return $panel
}

function configWeeklyWeather(weeklist){
    const $container = document.querySelector('.weeklyWeather')
    weeklist.forEach((day, index)=>{
        //const $el = document.createElement('h2')
        //$el.textContent = 'Hola Mundo'
        //$container.append($el) */
        const $panel = createTabPanel(index)
        $container.append($panel)
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
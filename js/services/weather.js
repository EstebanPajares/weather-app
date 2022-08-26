import { BASE_API, API_KEY } from '../constants.js'


// fetch API - conectando el servicio externo con nuestra aplicación
export async function getCurrentWeather(lat, lon){
    const response = await fetch(`${BASE_API}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`) // url
    if (!response.ok) return {
        isError: true, 
        data: null,
    }
    const data = await response.json()
    return {
        isError: false,
        data,
    }
    
}
//Prediccion semanal del clima
export async function getWeeklyWetaher(lat, lon){
    const response = await fetch(`${BASE_API}forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`) // url
    if (!response.ok) return {
        isError: true, 
        data: null,
    }
    const data = await response.json()
    return {
        isError: false,
        data,
    }
    
}


import { BASE_API, API_KEY } from '../constants.js'


// fetch API
export async function getCurrentWeather(lat, lon){
    const response = await fetch(`${BASE_API}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    if (!response.ok) return {
        isError: true, 
        data: null,
    }
    const data = await response.json()
    return {
        isError: false,
        data,
    }
    debugger
}







/* fetch('url',{
    method: 'GET', // Por defecto utiliza el metodo GET
    method: 'POST', // Guarda los datos dentro de un formulario dentro de la DB
    body: FormData, // Instancia o un JSON.stringify({})
    method: 'PUT', // Actualizar datos dentro de un form en la BD
    method: 'DELETE',// Eliminar datos
}) */

/* .then()
.catch()

function fetch(){
    return Promise()
} */
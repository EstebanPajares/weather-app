// fetch API

export async function getCurrentWeather(){
    
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=-12.0464&lon=-77.0428&appid=c5df892d0d507fe5c6896981e9745004', {
        debugger
    })
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
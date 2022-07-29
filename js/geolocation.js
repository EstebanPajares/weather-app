
function geolocationSupport(){
   /*  if ('geolocation' in navigator){
        return true
    }
    return false */

    return 'geolocation' in navigator
}

//Configuration
const defaultOptions = {
    enableHighAccuracy : true,
    timeout : 5000,
    maximumAge : 1000000,
}

export function getCurrentPosition(options = defaultOptions){
    if(!geolocationSupport()) throw new Error('No hay soporte de geolocalización en tu navegador')

    //Instancia de Promesa // Recibe los metodos ---- .then, .catch
    
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position)=>{ //Primer parámetro
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            resolve({
                lat,
                lon
            })
            /* console.log(lat, lon)
            console.log('Esto es getCurrentPosition') */
        }, () =>{ //Segundo parámetro --- método reject
            reject('No hemos podido obtener tu ubicación')
        }, options)//Tercer parámetro -- Objeto de config
    })
   
}
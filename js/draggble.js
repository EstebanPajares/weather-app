const defaultConfig = {
    open:true,
    debug: true,
    animatable: true
}
export default function draggble($element, config = defaultConfig){
    if (!($element instanceof HTMLElement)){
        return console.warn(`Elemento invalido, se esperaba un HTMLElement y se recibio ${$element}`)
    }
    
    //Validando los mensajes
    function logger(message){
        if(config.debug){
            console.info(message)
        }
    }
}


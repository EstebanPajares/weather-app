const defaultConfig = {
    open:false,
    debug: true,
    animatable: true
}
export default function draggble($element, config = defaultConfig){
    if (!($element instanceof HTMLElement)){
        return console.warn(`Elemento invalido, se esperaba un HTMLElement y se recibio ${$element}`)
    }
    
    let isOpen = config.open
    const elementRect = $element.getBoundingClientRect()
    const ELEMENT_BLOCK_SIZE = elementRect.height
    
    const $marker = $element.querySelector('[data-marker]')
    const MARKER_BLOCK_SIZE = $marker.getBoundingClientRect().height
    
    const VISIBLE_Y_POSITION = 0
    const HIDDEN_Y_POSITION = ELEMENT_BLOCK_SIZE - MARKER_BLOCK_SIZE
    let widgetPosition = VISIBLE_Y_POSITION
    
    isOpen ? open() : close() //Op ternario

    //Validando los mensajes
    function logger(message){
        if(config.debug){
            console.info(message)
        }
    }

    function open(){
        logger('Abrir widget')
        isOpen = true
        widgetPosition = VISIBLE_Y_POSITION
        setWidgetPosition(widgetPosition)
    }

    function close(){
        logger('Cerrar widget')
        isOpen = false
        widgetPosition = HIDDEN_Y_POSITION
        setWidgetPosition(widgetPosition)
    }

    //Definiendo el estado inicial del widget
    function setWidgetPosition(value){
        $element.style.marginBottom = `-${value}px` //movemos el elemento en negativo Y
    }
}


const defaultConfig = {
    open:true,
    debug: true,
    animatable: true
}
export default function draggble($element, config = defaultConfig){
    if (!($element instanceof HTMLElement)){
        return console.warn(`Elemento invalido, se esperaba un HTMLElement y se recibio ${$element}`)
    }
    
    let isOpen = config.open
    let isDragging = false // Arrastrando
    const elementRect = $element.getBoundingClientRect() // Nos muestra las dimensiones del elemento contenedor 
    const ELEMENT_BLOCK_SIZE = elementRect.height //Altura del elemento contenedor.
    
    const $marker = $element.querySelector('[data-marker]')
    const MARKER_BLOCK_SIZE = $marker.getBoundingClientRect().height
    
    const VISIBLE_Y_POSITION = 0
    const HIDDEN_Y_POSITION = ELEMENT_BLOCK_SIZE - MARKER_BLOCK_SIZE
    let widgetPosition = VISIBLE_Y_POSITION
    
    isOpen ? open() : close() //Op ternario

    let startY = 0

    //Eventos a escuchar dentro del marker
    $marker.addEventListener('click', handleClick)
    $marker.addEventListener('pointerdown', handlePointerDown)
    $marker.addEventListener('pointerup', handlePointerUp)
    $marker.addEventListener('pointerout', handlePointerOut)
    $marker.addEventListener('pointercancel', handlePointerCancel)
    $marker.addEventListener('pointermove', handlePointerMove)

    function handlePointerDown(event){
        logger('Pointer DOWN')
        startDrag(event)
    }
    function handlePointerUp(){
        logger('Pointer UP')
        
    }
    function handlePointerOut(){
        logger('Pointer OUT')
        
    }
    function handlePointerCancel(){
        logger('Pointer Cancel')
        
    }
    function handlePointerMove(event){
        logger('Pointer Move')
        drag(event)

    }

    function handleClick(event){
        logger('CLICK')
        toggle()
    }

    function pageY(event){
        return event.pageY || event.touches[0].pageY // Para el touch 
    }

    function startDrag(event){
        isDragging = true
        startY = pageY(event)
    }

    function toggle(){
        if (!isDragging){
            if(!isOpen){
                return open()
            }
            return close()
        }
    }

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
    
    function drag(event){
        const cursorY = pageY(event)
        const movementY = cursorY - startY
        widgetPosition = widgetPosition + movementY
        logger(movementY)
        startY = cursorY
        setWidgetPosition(widgetPosition)
    }
}

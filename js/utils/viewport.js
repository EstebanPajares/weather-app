
export function setViewportSize($el){
  const ViewportBlockSize = getViewport()
  $el.style.blockSize = `${ViewportBlockSize}px`

}

//Obteniendo el area visible del navegador
export function getViewport(){
  return window.innerHeight  //Retorna el alto del área visible del navegador 
}

//O
export function onViewporResize(callback){
  window.addEventListener('resize', callback)
  
}
export function offViewporResize(){
  window.removeEventListener('resize', callback)
}

export function viewportSize($el){
  setViewportSize($el)

  onViewporResize(()=> setViewportSize($el))

}
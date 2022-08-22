console.log('Renderizando días de la semana')

const $tabContainer = document.querySelector('#tabs')

const $tabList = $tabContainer.querySelectorAll('.tab')

const today = new Date()
let weekday = today.getDay()

const week = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes', 
    'Sábado'
]

function nextDay(day){
    if(day === 6){
        return 0
    }
    return day + 1
}

$tabList.forEach(($tab, index)=>{
    $tab.addEventListener('click', handleSelectTabClick)

    if (index === 0){
        $tab.textContent = 'Hoy'
        weekday = nextDay(weekday)
        return false
    }
    $tab.textContent = week[weekday]
    weekday = nextDay(weekday)

})

function handleSelectTabClick(event){
    const $tabSelect = event.target
    const $tabActive = document.querySelector('.tab[aria-selected="true"]')
    $tabActive.removeAttribute('aria-selected')
    $tabSelect.setAttribute('aria-selected', true)
    
    const id = $tabSelect.id
    const $tabPanel = document.querySelector(`[aria-labelledby=${id}]`)
    const $tabPanelSelected = document.querySelector(`.tabPanel:not([hidden])`)
    $tabPanel.hidden = false
    $tabPanelSelected.hidden = true
}
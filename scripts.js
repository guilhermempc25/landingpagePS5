const prevButton = document.getElementById('prev')
const prevNext = document.getElementById('next')
const items = document.querySelectorAll('.item')
const pontos = document.querySelectorAll('.ponto')
const lista = document.querySelector('.lista')

let active = 0;
const total = items.length
let timer;


function update(direction) {

    document.querySelector('.item.active').classList.remove('active')
    document.querySelector('.ponto.active').classList.remove('active')

    if(direction > 0){
        active = active + 1

        if(active === total){
            active = 0 
        }
    } 
    
    
    else if(direction < 0){
        active = active -1

        if(active <0){
            active = total -1
        }
    }

    items[active].classList.add('active')
    pontos[active].classList.add('active')

}

clearInterval(timer)
timer = setInterval(() => {
    update(1)
}, 7000);



prevButton.addEventListener('click', () => {
    update(-1)
})

prevNext.addEventListener('click', () => {
    update(1)
})
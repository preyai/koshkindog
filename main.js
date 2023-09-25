import * as bootstrap from 'bootstrap'
import './styles/style.scss'
import './font/stylesheet.scss'

document.querySelectorAll('.varible').forEach(el=> {
    el.addEventListener('click', event=> {
        el.classList.toggle('active')
    })
})
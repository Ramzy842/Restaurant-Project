import home from './home.js'
import menu from "./menu.js"
import contact from "./contact.js"



let container = document.querySelector('.content_container')

window.addEventListener('DOMContentLoaded', ()=>{
    homeTab.style.background = '#e4123f'
    home()
});

const homeTab = document.querySelector('.home');
const menuTab = document.querySelector('.menu'); 
const contactTab = document.querySelector('.contact');

homeTab.addEventListener('click', ()=>{
    homeTab.style.background = '#e4123f'
    menuTab.style.background = 'none'
    contactTab.style.background = 'none'
    container.innerHTML = '';
    home()
})
menuTab.addEventListener('click', ()=>{
    menuTab.style.background = '#e4123f'
    homeTab.style.background = 'none'
    contactTab.style.background = 'none'
    container.innerHTML = '';
    menu()
})
contactTab.addEventListener('click', ()=>{
    contactTab.style.background = '#e4123f'
    homeTab.style.background = 'none'
    menuTab.style.background = 'none'
    container.innerHTML = '';
    contact()
})


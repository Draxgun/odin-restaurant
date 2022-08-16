import {loadHomePage } from "./home";
import { loadHomeTab } from "./homeTab";
import { loadAboutTab } from "./aboutTab";
import { loadContactTab } from "./contactTab";
import { loadMenuTab } from "./menuTab";
import {clearContent} from './clearFunction'
import './style.css';



console.log('Hola')

loadHomePage()
loadHomeTab()

/* Home */

let homeButton = document.getElementById('home')

homeButton.addEventListener('click',() =>{
    clearContent()
    loadHomeTab()
})

/* Menu */

let menuButton = document.getElementById('menu')

menuButton.addEventListener('click',()=>{
    clearContent()
    loadMenuTab()
})

/* About */
let aboutButton = document.getElementById('about')

aboutButton.addEventListener('click',()=>{
    clearContent()
    loadAboutTab()
})

/* Contact */
let contactButton = document.getElementById('contact')

contactButton.addEventListener('click',()=>{
    clearContent()
    loadContactTab()
})





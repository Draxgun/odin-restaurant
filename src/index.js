import {loadHomePage } from "./home";
import { loadHomeTab } from "./homeTab";
import { loadAboutTab } from "./aboutTab";
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


/* About */
let aboutButton = document.getElementById('about')

aboutButton.addEventListener('click',()=>{
    clearContent()
    loadAboutTab()
})




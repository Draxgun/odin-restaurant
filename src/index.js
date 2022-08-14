import { loadHomePage } from "./home";

let mainDiv = document.querySelector('#content')

console.log('jamon')

let header = loadHomePage()

document.body.appendChild(header)
import {loadHomePage } from "./home";

let content = document.getElementById('content')

console.log('test')

let header =loadHomePage()

content.appendChild(header)


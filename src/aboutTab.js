import chefHeadMaya from './chefHeadMaya.png'

let loadAboutTab = () => {
    let contentContainer = document.getElementsByClassName('contentContainer')[0]

    let mainText = loadMainText()

    contentContainer.appendChild(mainText)
}

let loadMainText = () => {

    let textContainer = document.createElement('div')
    textContainer.classList.add('textContainer')

    let mainTitle = document.createElement('div')
    mainTitle.classList.add("mainTitleAbout");
    mainTitle.textContent = 'About us'
    textContainer.appendChild(mainTitle)

    let mainText = document.createElement('div')
    mainText.classList.add("mainTextAbout");
    mainText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum cursus mauris, et tristique tellus hendrerit ac. Maecenas nec lobortis urna. Vivamus molestie porta arcu, a tincidunt nunc auctor at.'
    textContainer.appendChild(mainText)
    
    return textContainer

} 

let loadImageSide = () => {
    let homeImage = document.createElement('img');
    homeImage.classList.add('homeImage')
    homeImage.src = chefHeadMaya

    return homeImage
}



export{
    loadAboutTab
}
import costcoMaya from './costcoMaya.jpeg'

let loadAboutTab = () => {
    let contentContainer = document.getElementsByClassName('contentContainer')[0]

    let mainText = loadMainText()
    let imageSide = loadImageSide()


    contentContainer.appendChild(mainText)
    contentContainer.appendChild(imageSide)
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
    mainText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum cursus mauris, et tristique tellus hendrerit ac. Maecenas nec lobortis urna. Vivamus molestie porta arcu, a tincidunt nunc auctor at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod mi sit amet metus lobortis, id accumsan arcu consequat. Quisque ac velit cursus, laoreet dui eu, pharetra leo. Ut sit amet pharetra enim, id maximus neque. Etiam nec viverra mi, at bibendum dui. Phasellus ut efficitur nunc. In hac habitasse platea dictumst. Quisque congue sed nibh vel tristique. '
    textContainer.appendChild(mainText)
    
    return textContainer

} 

let loadImageSide = () => {
    let homeImage = document.createElement('img');
    homeImage.classList.add('aboutImage')
    homeImage.src = costcoMaya

    return homeImage
}



export{
    loadAboutTab
}

let loadHomeTab = () => {
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
    mainTitle.classList.add("mainTitle");
    mainTitle.textContent = 'Welcome to ManshaBurguer can I get your order?'
    textContainer.appendChild(mainTitle)

    let order = document.createElement('button')
    order.classList.add('orderButton')
    textContainer.appendChild(order)

    return textContainer

} 

let loadImageSide = () => {
    let homeImage = document.createElement('img');
    homeImage.classList.add('homeImage')

    return homeImage
}

export{
    loadHomeTab
}
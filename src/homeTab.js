
let loadHomeTab = () => {
    let contentContainer = document.getElementsByClassName('contentContainer')[0]

    let mainText = loadMainText()
    contentContainer.appendChild(mainText)


}

let loadMainText = () => {

    let textContainer = document.createElement('div')
    textContainer.classList.add('textContainer')

    let mainTitle = document.createElement('div')
    mainTitle.classList.add("mainTitle");
    mainTitle.textContent = 'Hello Welcome to ManshaBurguer can I get your order?'
    textContainer.appendChild(mainTitle)

    return textContainer

}

export{
    loadHomeTab
}
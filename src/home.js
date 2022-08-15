/*Creates homePage */
let loadHomePage =  ()  => {

    /* Checks for the content container */
    let content = document.getElementById('content')

    /*Header Container */
    let header = document.createElement('div');
    header.classList.add('header')

    /*Adds the header to the main container */
    content.appendChild(header)

    createHeaderTitle(header)
    createTabButtons(header)

    
}

/* Creates the header title */
let createHeaderTitle = (header) => {
    let headerTitle = document.createElement('div');
    headerTitle.classList.add('headerTitle')
    headerTitle.textContent = 'ManshaBurguer'
    header.appendChild(headerTitle)
}

/* Creates the option container with the options */
let createTabButtons = (header) =>{
    
    /*Creaters the container for the buttons*/
    let optionContainer = document.createElement('div')
    optionContainer.classList.add('optionContainer')

    

    /* Creates the home button */
    let homeButton  = document.createElement('button')
    homeButton.classList.add('buttonFront')
    homeButton.textContent = 'Home'
    optionContainer.appendChild(homeButton)

    /* Creates the Menu button */
    let menuButton  = document.createElement('button')
    menuButton.classList.add('buttonFront')
    menuButton.textContent = 'Menu'
    optionContainer.appendChild(menuButton)

    /* Creates the about button */
    let aboutButton  = document.createElement('button')
    aboutButton.classList.add('buttonFront')
    aboutButton.textContent = 'About'
    optionContainer.appendChild(aboutButton)


    /* Creates the contact button */
    let contactButton  = document.createElement('button')
    contactButton.classList.add('buttonFront')
    contactButton.textContent = 'Contact'
    optionContainer.appendChild(contactButton)

    header.appendChild(optionContainer)

   
}

export{
    loadHomePage
}
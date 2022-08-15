/*Creates homePage */
let loadHomePage =  ()  => {

    /* Checks for the content container */
    let main = document.getElementById('main')

    /* Creates the header */
    let header = createHeader()
    main.appendChild(header)

    /* Content*/
    let content = createContent()
    main.appendChild(content)

    /*Footer*/
    let footer = createFooter()
    main.appendChild(footer)

    /*Adds the header container*/
    createHeaderTitle(header)
    createTabButtons(header)

    /*Adds the content container to the content section*/
    createContentContainer(content)

    /*Adds the footer Text*/
    createFooterText(footer)

    
}

let createHeader = () =>{
        /*Header Container */
        let header = document.createElement('div');
        header.classList.add('header')
    return header
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

/*Creates Content Section*/
let createContent = () => {
    let content = document.createElement('div')
    content.classList.add('content')
    return content
}

/*Create content container*/
let createContentContainer = (content) => {
    let contentContainer = document.createElement('div')
    contentContainer.classList.add('contentContainer')
    content.appendChild(contentContainer)
}

/* Creates the footer */
let createFooter = () =>{
    let footer = document.createElement('div');
    footer.classList.add('footer')
    
    return footer
}

/*Creates a footer*/
let createFooterText = (footer) => {


    let footerText = document.createElement('div');
    footerText.textContent = 'A project by Alejandro Banuelos';
    footerText.classList.add('footerText')
    footer.appendChild(footerText)

}



export{
    loadHomePage
}
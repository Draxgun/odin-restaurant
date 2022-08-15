

let loadHomePage =  ()  => {
    console.log('hola')
    /*Header Container */
    let header = document.createElement('div');
    header.classList.add('header')

    let headerTitle = document.createElement('div');
    headerTitle.classList.add('headerTitle')
    headerTitle.textContent = 'Restaurante'
    header.appendChild(headerTitle)

    return header
}

export{
    loadHomePage
}
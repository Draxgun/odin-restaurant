import map from './map.png'

let loadContactTab = () => {
    let contentContainer = document.getElementsByClassName('contentContainer')[0];

    let mainText = loadMainText();
    let imageSide = loadImageSide()
    contentContainer.appendChild(mainText);
    contentContainer.appendChild(imageSide);

}

let loadMainText = () => {

    let textContainer = document.createElement('div');
    textContainer.classList.add('textContainer');

    let mainTitle = document.createElement('div');
    mainTitle.classList.add("contactTitle");
    mainTitle.textContent = 'Contact Information';
    textContainer.appendChild(mainTitle);

    let fields = ['E-mail','Phone','Instagram','Address'];
    let values = ['mashBurguer99@pop.com','915-556-582','@TheRealManshaBurguer','Privada Jamaica King Street 299'];

    let textContent = document.createElement('ul');

    for(let i = 0;i<fields.length;i++){
        let field = createContactInfo(fields[i],values[i]);
        textContent.appendChild(field);
    }

    textContainer.appendChild(textContent)
    

    return textContainer

} 

let createContactInfo = (field,value) => {
     
    let contact = document.createElement('li');
    contact.classList.add('contact');
    contact.textContent = `${field}: ${value}`;
    return contact
    
}

let loadImageSide = () => {
    
    let imageContainer = document.createElement('div');
    imageContainer.classList.add('imageContainer');
    
    let imageContainerTitle = document.createElement('div');
    imageContainerTitle.classList.add('imageContainerTitle')
    imageContainerTitle.textContent = 'Where we are located!'
    imageContainer.appendChild(imageContainerTitle)

    let imageContainerimage = document.createElement('img');
    imageContainerimage.classList.add('imageContainerImage')
    imageContainerimage.src = map

    imageContainer.appendChild(imageContainerimage)

    return imageContainer
}

export{
    loadContactTab
}



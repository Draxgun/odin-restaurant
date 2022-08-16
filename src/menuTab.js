import { menuItem } from "./menuItem";
import double from './doubleBurger.png'
import guacamole from './guacamoleBurger.png'
import chickenSandwich from './mayaChickenSandwich.png'
import monster from './monster.png'
import papas from './papasBurger.png'
import shrimp from './shrimp.png'

let loadMenuTab = () => {
    let contentContainer = document.getElementsByClassName('contentContainer')[0]

    let menu = createMenuDOM()
    contentContainer.appendChild(menu)
}


let createMenuDOM = () => {
    let menuItems = createMenuItems()

    let menuItemsContainer = document.createElement('div')
    menuItemsContainer.classList.add('menuItemsContainer')



    menuItems.forEach(item => {

        /*Item Container */
        let itemContainer = document.createElement('div')
        itemContainer.setAttribute('id',item.name)
        itemContainer.classList.add('itemContainer')

        /*Text Side */
        let textSide = document.createElement('div')
        textSide.classList.add('textSideMenu')

        /*Name*/
        let nameItem = document.createElement('div')
        nameItem.classList.add('itemName')
        nameItem.textContent = item.name
        textSide.appendChild(nameItem)

        /*description*/
        let descriptionItem = document.createElement('div')
        descriptionItem.classList.add('itemDescription')
        descriptionItem.textContent = item.description
        textSide.appendChild(descriptionItem)

        /*price*/
        let priceItem = document.createElement('div')
        priceItem.classList.add('itemPrice')
        priceItem.textContent = item.price
        textSide.appendChild(priceItem)

        let imageItem = document.createElement('img')
        imageItem.classList.add('itemImage')
        imageItem.src = item.photo

        itemContainer.appendChild(textSide)
        itemContainer.appendChild(imageItem)
        
        menuItemsContainer.appendChild(itemContainer)

    });
    return menuItemsContainer
}

/* Creates an array for each of the menu items */
let createMenuItems = () => {
    let names   = ['Double Mansha Burger','Guaca-ManshaBurger','Cuco Chicken Sandwich','Monster Yoshi Burger','Insane Fry Burger','Crazy Shrimp Burger']
    let descriptions = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet laoreet semper. Donec nisl felis, laoreet quis nisl pulvinar, tempus ultricies enim. Morbi non pretium eros, id convallis lectus. Quisque aliquam convallis massa non dictum. Cras at dui at augue tincidunt elementum vitae id neque. Quisque mi purus, vestibulum at.'
    let prices = [30,25,15,50,10,20]
    let images = [double,guacamole,chickenSandwich,monster,papas,shrimp]

    let menuItems = []

    for(let i = 0;i<names.length;i++){
        menuItems.push(createMenuItem(names[i],descriptions,prices[i],images[i]))
    }

    return menuItems
}
/* Function to create a new item */
let createMenuItem = (name,description,price,photo) =>{
    return new menuItem(name,description,price,photo)
}

export{
    loadMenuTab
}
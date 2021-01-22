'use strict'


let redLentils = [
    ['price', '10'],
    ['name', 'Red Lentils'],
    ['subtitle', 'Red Lentils with curry and marmelade'],
    ['description', 'Red Lentils, very exquisite and delicious for everyone with curry and marmelade'],
    ['img', 'assets/css/img/red_lentil_dal.jpg'],
    ['quantity', '0'],
];

let bakedChili = [
    ['price', '12'],
    ['name', 'Backed Chili Jacket'],
    ['subtitle', 'With frijoles and hot sauce'],
    ['description', 'Backed Chili Jacket, very exquisite and delicious for everyone With frijoles and hot sauce, curry and marmelade'],
    ['img', 'assets/css/img/baked-chilli-jacket-potatoes-6e7b8d5.jpg'],
    ['quantity', '0'],
];

let spinachLasagna = [
    ['price', '13'],
    ['name', 'Spinach Lasagna'],
    ['subtitle', 'A worldwide Hit'],
    ['description', 'Homemade pasta and authentic parmiggiano reggiano'],
    ['img', 'assets/css/img/spinach_lasagna.jpg'],
    ['quantity', '0'],
];

let pizzas = [];
let soups = [];
let meat = [];
let veggie = [
    redLentils,
    bakedChili,
    spinachLasagna
];
let dessert = [];
let vegan = [];

let menu = [pizzas, soups, meat, veggie, dessert, vegan];

// show list of menu options

function showMenuOptions() {
console.log(menu);
const menuNav = document.getElementById("navImages");

    menu.forEach(function(item, index, arra) {
        
        menuNav.innerHTML += `
        <div class="menuOptions"><img class="dishClassMenuImg" src="${menu[item[4]]}"><p class="menuOptionsName">${menu[item]}</p></div>
        `;
    })
}
showMenuOptions();
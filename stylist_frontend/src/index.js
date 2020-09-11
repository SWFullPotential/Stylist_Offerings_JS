/*
    add URLs, fetch data, create cards to populate the stylist and services in. 

*/
const BASE_URL = "http://localhost:3000"
const HAIRSTYLIST_URL = `${BASE_URL}/hairstylists`
const SERVICES_URL = `${BASE_URL}/hairservices`

const main = document.querySelector('main')

document.addEventListener('DOMContentLoaded', (e) => {
    fetchStylists()
});

//should be called after DOMContentLoads...
function fetchStylists() {
    fetch(HAIRSTYLIST_URL)
    .then(resp => resp.json())
    .then(object => object.forEach(stylistCards))
};

//where in HTML do we want this--MAIN --set main const....consts at top
//how do you want card to look....
function stylistCards(){
    let div = document.createElement('div')
        div.className = "card"
        div.id = hairstylist.id
        div.setAttribute("data-id", hairstylist.id)
    let stylistName = document.createElement('h3')
        stylistName.textContent = hairstylist.name 
    let ul = document.createElement('ul')
        servicesLi(hairstylist, ul)
    let addBtn = document.createElement('button')
        addBtn.className = "add"
    //will need to add collapsable form here...
    div.appendChild(stylistName)
    div.appendChild(addBtn)
    div.appendChild(ul)
    main.appendChild(div)
};


function servicesLi(){

};

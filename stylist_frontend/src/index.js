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
    .then(object => {
        Hairstylist.createStylist(object)
        Hairstylist.displayStylist();
    })
};


//where in HTML do we want this--MAIN --set main const....consts at top
//how do you want card to look....
// function stylistCards(hairstylist){
//     let div = document.createElement('div')
//     div.className = "card"
//     div.id = hairstylist.id
//     div.setAttribute("data-id", hairstylist.id)
//     let stylistName = document.createElement('h3')
//         stylistName.textContent = hairstylist.name 
//     let ul = document.createElement('ul')
//         servicesLi(hairstylist, ul)
//     let addBtn = document.createElement('button')
//         addBtn.className = "add"
//         addBtn.innerText = "Add Service"
//     //will need to add collapsable form here...when working on the next feature...
//     div.appendChild(stylistName)
//     div.appendChild(addBtn)
//     div.appendChild(ul)
//     main.appendChild(div)
// };

// //build out list for services. 
// function servicesLi(hairstylist, ul){
//     ul.innerHTML = ""
//     hairstylist.hairservices.forEach(hairservice => {
//         let li = document.createElement('li')
//         let deleteBtn = document.createElement('button')
//         let editBtn = document.createElement('button')
//         li.textContent = `${hairservice.service_name} $(${hairservice.price})`
//         deleteBtn.className = "delete"
//         deleteBtn.setAttribute("data-service-id", hairservice.id);
//         deleteBtn.innerText = "Delete Service"
//         //add event listener. 
//         deleteBtn.addEventListener('click', () =>{
//             deleteService(deleteBtn.getAttribute("data-service-id"))
//         })
//         editBtn.className = "edit"
//         editBtn.setAttribute("edit-service-id", hairservice.id);
//         editBtn.innerText = "Edit Service"
//         //add event listener. 
//         li.appendChild(deleteBtn)
//         li.appendChild(editBtn)
//         ul.appendChild(li)
//     })
// };

function deleteService(id){
    this.id 
    this.parentNode 
    let serviceId = `${SERVICES_URL}/${id}`
    fetch(serviceId, {
        method: "DELETE", 
        })
    .then(resp => {
        return resp.json();
    })
    .then(object => {
        let card = document.getElementById(object.id)
        let ul = card.querySelector('ul')
        stylistCards(object, ul)
    })
    // .catch(function(error){
    //     alert("An Error has Occured");
    //     debugger
    //     console.log(error.message);
    // });
};



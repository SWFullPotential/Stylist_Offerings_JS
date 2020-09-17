const BASE_URL = "http://localhost:3000"
const HAIRSTYLIST_URL = `${BASE_URL}/hairstylists`
const SERVICES_URL = `${BASE_URL}/hairservices`

const main = document.querySelector('main')
const sName = () => document.querySelector('input#service_name')
const sPrice = () => document.querySelector('input#price')

document.addEventListener('DOMContentLoaded', (e) => {
    fetchStylists()
});

function fetchStylists() {
    fetch(HAIRSTYLIST_URL)
    .then(resp => resp.json())
    .then(object => object.forEach(stylist => {
        let hairStylist = Hairstylist.create(stylist.id, stylist.name, stylist.year_licensed, stylist.hairservices)
        // debugger
        stylistCards(hairStylist)
    }))
};

function stylistCards(hairstylist){
    let div = document.createElement('div')
    div.className = "card"
    div.id = hairstylist.id
    div.setAttribute("data-id", hairstylist.id)
    let stylistName = document.createElement('h2')
    stylistName.textContent = `Hairstylist: ${hairstylist.name}, licensed since ${hairstylist.year_licensed}.` 
    let servicesOffered = document.createElement('h3')
    servicesOffered.textContent = "Services Offered:"
    let ul = document.createElement('ul')
    servicesLi(hairstylist, ul)
    let serviceDiv = document.createElement('div')
    serviceDiv.id = "service-form"
    serviceDiv.setAttribute("stylist-id", hairstylist.id)
    div.appendChild(stylistName)
    div.appendChild(serviceDiv)
    div.appendChild(servicesOffered)
    div.appendChild(ul)
    main.appendChild(div)
    createServiceForm(hairstylist)
};

function servicesLi(hairstylist, ul){
    ul.innerHTML = ""
    hairstylist.hairservices.forEach(hairservice => {
        let li = document.createElement('li')
        let deleteBtn = document.createElement('button')
        let editBtn = document.createElement('button')
        li.textContent = `${hairservice.service_name} $${hairservice.price}`
        deleteBtn.className = "delete"
        deleteBtn.setAttribute("data-service-id", hairservice.id);
        deleteBtn.innerText = "Delete Service" 
        deleteBtn.addEventListener('click', () =>{
            deleteService(deleteBtn.getAttribute("data-service-id"))
        })
        li.appendChild(deleteBtn)
        ul.appendChild(li)
    })
};
function createServiceForm(hairstylist){
    let serviceDiv = document.getElementById("service-form")
    serviceDiv.innerHTML +=
    `
    <h4>Add Service:</h4>
    <form id="add-service-form">
        Service Name: <input type="text" id="service_name"> <br>
        Price: $<input type="integer" id="price"><br>
        <input type="hidden" id="hairstylist_id" value="${hairstylist.id}"><br>            
        <input type="submit" value="Add Service">
    </form>
    <br>
    `
    let serviceForm = document.getElementById("add-service-form")
    serviceForm.addEventListener('submit', serviceFormSubmission)
}

function serviceFormSubmission(e){
    e.preventDefault()
    let name = document.getElementById("service_name").value
    let price = document.getElementById("price").value 
    let hairstylist_id = document.getElementById("hairstylist_id").value 
    let service = {
        hairservice: {
            service_name: name, 
            price: price, 
            hairstylist_id: hairstylist_id
        }
    }
    fetch(SERVICES_URL, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        
        body: JSON.stringify(service)
    })
    .then(resp => resp.json())
    .then(service => {
            let hs = Hairservice.create(service.id, service.service_name, service.price, service.hairstylist_id)
            let hairstylist = Hairstylist.all.find(stylist => stylist.id == service.hairstylist_id)
            hairstylist.hairservices.push(hs)
            let div = document.getElementById(`${hairstylist.id}`)
            let ul = div.querySelector(`ul`)

            servicesLi(hairstylist, ul);
            resetInputs();
    })
}

function deleteService(id){
    let serviceId = `${SERVICES_URL}/${id}`
    fetch(serviceId, {
        method: "DELETE", 
        headers:{
            "Content-Type": "application/json", 
            "Accept": "application/json"
        }
    })
    .then(function(resp){
        return resp.json();
    })
    .then(function(object){
        let service = document.getElementById(object.id)
    })
    this.location.reload();
};

function resetInputs() {
    sName().value = "";
    sPrice().value = "";
  }

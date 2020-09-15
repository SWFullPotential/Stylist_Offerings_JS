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
    // .then(object => object.forEach(hairstylist => stylistCards(hairstylist)))
    .then(object => object.forEach(stylist => {
        let hairStylist = Hairstylist.create(stylist.id, stylist.name, stylist.year_licensed)
        stylistCards(hairStylist)
    }))
    // .then(object => 
    //     {
        //     for(const hairstylist of hairstylists){
            //         let stylist = Hairstylist.create(hairstylist.id, hairstylist.name, hairstylist.year_licensed)
            //         stylist.stylistCards()
            //     }
            // })
            // object.forEach(hairstylist => {stylist = Hairstylist.create(object.id, object.name, object.year_licensed)
            // stylistCards(hairstylist)}))
};

function stylistCards(hairstylist){
    let div = document.createElement('div')
    div.className = "card"
    div.id = hairstylist.id
    div.setAttribute("data-id", hairstylist.id)
    let stylistName = document.createElement('h3')
    stylistName.textContent = `${hairstylist.id} - ${hairstylist.name}` 
    let ul = document.createElement('ul')
    servicesLi(hairstylist, ul)
    let serviceDiv = document.createElement('div')
    serviceDiv.id = "service-form"
    serviceDiv.setAttribute("stylist-id", hairstylist.id)
    //will need to add collapsable form here...when working on the next feature...
    div.appendChild(stylistName)
    div.appendChild(serviceDiv)
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
        //add event listener. 
        deleteBtn.addEventListener('click', () =>{
            deleteService(deleteBtn.getAttribute("data-service-id"))
        })
        // editBtn.className = "edit"
        // editBtn.setAttribute("edit-service-id", hairservice.id);
        // editBtn.innerText = "Edit Service"
        li.appendChild(deleteBtn)
        // li.appendChild(editBtn)
        ul.appendChild(li)
    })
};

function createServiceForm(hairstylist){
    let serviceDiv = document.getElementById("service-form")
    // debugger
    serviceDiv.innerHTML +=
    `
    <h1>Add Service:</h1>
    <form id="add-service-form">
        Service Name: <input type="text" id="service_name"> <br>
        Price: $<input type="integer" id="price"><br>
        Stylist Id: <input type="integer" id="hairstylist_id" value="${hairstylist.id}" disabled><br>            
        <input type="submit" value="Add Service">
    </form>
    <br>
    `
    let serviceForm = document.getElementById("add-service-form")
    serviceForm.addEventListener('submit', serviceFormSubmission)
}
//serviceFormSubmission needs help 
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
            Hairservice.create(service.id, service.service_name, service.price, service.hairstylist_id)
            let hairstylist = Hairstylist.all.find(stylist => stylist.id == service.hairstylist_id)
            // debugger
            stylistCards(hairstylist)






        // .then(program => {
        //     debugger;
        //     Program.create(program.id, program.title, program.split, program.length, program.goal, program.weeklyVolume, program.workoutsPerWeek, program.startdate)
        //     displayProgram(Program.all.last)
        // })
        // debugger
        // let s = new Hairservice(service.id, service.service_name, service.price, service.hairstylist_id)
        // debugger
        // let hairstylist = Hairstylist.find(s.hairstylist_id)
        // console.log(stylistCards(Hairstylist.all));
        // this.location.reload();
    })
    // console.log("hey there", this)
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

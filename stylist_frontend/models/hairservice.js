class Hairservice {
  static all = [];

  constructor(id, service_name, price, hairstylist_id){
      this.id = id;
      this.service_name = service_name;
      this.price = price;
      this.hairstylist_id = hairstylist_id;
  }

   serviceList(hairstylist, ul){
    ul.innerHTML = ""
    hairstylist.hairservices.forEach(hairservice => {
        let li = document.createElement('li')
        let deleteBtn = document.createElement('button')
        let editBtn = document.createElement('button')
        li.textContent = `${hairservice.service_name} $(${hairservice.price})`
        deleteBtn.className = "delete"
        deleteBtn.setAttribute("data-service-id", hairservice.id);
        deleteBtn.innerText = "Delete Service"
        //add event listener. 
        deleteBtn.addEventListener('click', () =>{
            deleteService(deleteBtn.getAttribute("data-service-id"))
        })
        editBtn.className = "edit"
        editBtn.setAttribute("edit-service-id", hairservice.id);
        editBtn.innerText = "Edit Service"
        //add event listener. 
        li.appendChild(deleteBtn)
        li.appendChild(editBtn)
        ul.appendChild(li)
        })
    }


//class closing bracket
}


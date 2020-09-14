class Hairstylist {

    static all = [];

    constructor(id, name, year_licensed){
        this.id = id;
        this.name = name;
        this.year_licensed = year_licensed;
    }

    displayStylist() {
        const div = document.createElement('div')
        div.className = "card"
        div.id = this.id;
        div.setAttribute("data-id", this.id)
        const stylistName = document.createElement('h3')
        stylistName.textContent = this.name
        const ul = document.createElement('ul') 
        serviceList(this, ul);
        const addBtn = document.createElement('button')
        addBtn.className = "add"
        addBtn.innerText = "Add Service"

        div.appendChild(stylistName);
        div.appendChild(addBtn);
        div.appendChild(ul);
        main.appendChild(div);   
    };

static createStylist(stylistData){
    stylistData.forEach(data => Hairstylist.newStylist(data.id, data.name, data.year_licensed));
};

static newStylist(id, name, year_licensed){
    let stylist = new Hairstylist(id, name, year_licensed );

    Hairstylist.all.push(stylist);

    return stylist;

}


}

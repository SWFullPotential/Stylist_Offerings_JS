class Hairservice {
    static all = [];
    constructor(id, service_name, price, hairstylist_id){
        this.id = id;
        this.service_name = service_name;
        this.price = price;
        this.hairstylist_id = hairstylist_id;
    }

    static create(id, service_name, price, hairstylist_id){
        let service = new Hairservice(id, service_name, price, hairstylist_id)
            Hairservice.all.push(service)
            return service
    }
    
    removeService() {
        let hairstylist = Hairstylist.all.find(stylist => stylist.id == this.hairstylist_id)
        hairstylist.hairservices = hairstylist.hairservices.filter(service => service.id != this.id)
        Hairservice.all = Hairservice.all.filter(service => service.id != this.id)

    }

}ß

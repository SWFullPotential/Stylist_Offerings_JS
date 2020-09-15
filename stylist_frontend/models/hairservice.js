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

}

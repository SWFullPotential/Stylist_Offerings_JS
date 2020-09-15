class Hairstylist {

    static all = [];

    constructor(id, name, year_licensed, hairservices){
        this.id = id; //1
        this.name = name; //Samantha
        this.year_licensed = year_licensed; //2013
        this.hairservices = hairservices.map(hairservice => Hairservice.create(hairservice.id, hairservice.service_name, hairservice.price, hairservice.hairstylist_id))
        // debugger
        Hairstylist.all.push(this)
    }

    static create(id, name, year_licensed, hairservices){
        let stylist = new Hairstylist(id, name, year_licensed, hairservices)
            Hairstylist.all.push(stylist)
            return stylist
    }

}

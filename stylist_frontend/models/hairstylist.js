class Hairstylist {

    static all = [];

    constructor(id, name, year_licensed){
        this.id = id;
        this.name = name;
        this.year_licensed = year_licensed;
        Hairstylist.all.push(this)
    }

    static create(id, name, year_licensed){
        let stylist = new Hairstylist(id, name, year_licensed)
            Hairstylist.all.push(stylist)
            return this
    }

}

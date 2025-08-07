const {Flight} = require("../models");
const CrudRepository =  require("./CRUD-REPOSITORY");

class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight);
    }
}

module.exports = FlightRepository;
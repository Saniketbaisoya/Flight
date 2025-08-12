
const {Flight} = require("../models");
const CrudRepository =  require("./CRUD-REPOSITORY");

class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight);
    }

    async getAllFlight(filter){
        const response = await Flight.findAll({
            where : filter
        });
        return response;
    }
}


module.exports = FlightRepository;
const {Airpot} = require("../models");
const CrudRepository =  require("./CRUD-REPOSITORY");

class AirpotRepository extends CrudRepository{
    constructor(){
        super(Airpot)
    }
}

module.exports = AirpotRepository;
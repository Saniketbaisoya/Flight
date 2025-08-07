const {Airplane} = require("../models");
const CrudRepository =  require("./CRUD-REPOSITORY");

class AirplaneRepository extends CrudRepository{
    constructor(){
        super(Airplane);
    }
}

module.exports = AirplaneRepository;

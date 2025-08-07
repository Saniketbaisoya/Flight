const {City} = require("../models");
const CrudRepository =  require("./CRUD-REPOSITORY");

class CityRepository extends CrudRepository{
    constructor(){
        super(City);
    }
}

module.exports = CityRepository;

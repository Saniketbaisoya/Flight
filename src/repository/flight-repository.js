const {Sequelize} = require('sequelize');
const {Flight, Airplane, Airpot, City} = require("../models");
const CrudRepository =  require("./CRUD-REPOSITORY");

class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight);
    }

    async getAllFlight(filter){
        
       
        const response = await Flight.findAll({
            where : filter,
            include : [
                {
                    model : Airplane,
                    required : true,
                    as : 'Airplane_details'
                },
                {
                    model : Airpot,
                    required : true,
                    as : 'DepartureAirpot',
                    on : {
                        col1 : Sequelize.where(Sequelize.col("Flight.departureAirpotId"),"=",Sequelize.col("DepartureAirpot.code"))
                    },
                    include : {
                        model : City,
                        required : true,
                    }
                },
                {
                    model : Airpot,
                    required : true,
                    as : 'ArrivalAirpot',
                    on : {
                        col1 : Sequelize.where(Sequelize.col("Flight.arrivalAirpotId"),"=",Sequelize.col("ArrivalAirpot.code"))
                    },
                    include : {
                        model : City,
                        required : true,
                    }
                },
                
            ]
        });
       
        return response;
        
    }
}


module.exports = FlightRepository;
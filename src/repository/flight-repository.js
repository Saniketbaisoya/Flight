const {Sequelize} = require('sequelize');
const {Flight, Airplane, Airpot, City} = require("../models");
const CrudRepository =  require("./CRUD-REPOSITORY");
const db = require('../models');
const addRowLockOnFlights = require('./queries');
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
                    as : 'Airplane_details'//
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
    /**
     * Now jo increament or decreament hota hai voh directly model pr nhi hota 
     * Voh hota hai flight model ke object prr yani sbse phele flightId ka use krke hmm flight object ko access krege
     * then uspe hmm increament decreament lgayege and uss flight object mai hmare pass totalSeats bhi hoga then uspe increament or dec krke hmm totalSeats ko update kr payege....
     */
    async updateRemainingSeats(flightId, seats, dec = true){
        await db.sequelize.query(addRowLockOnFlights(flightId));
        const flight = await Flight.findByPk(flightId);
        if(!+dec){ //  if dec is true 
            await flight.decrement('totalSeats',{by : seats});
        }else{ // dec is false then increament hoga....
            await flight.increment('totalSeats',{by : seats});
        }
        return flight;
    }
}


module.exports = FlightRepository;
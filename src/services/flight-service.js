const { FlightRepository } = require("../repository");
const AppError = require('../utlis/errors/error');
const {StatusCodes} = require('http-status-codes');
const { compareTime } = require("../utlis/helpers/dateTime-helper");

async function createFlight(data){
    try {
        // console.log("Sevice layer data : ",data);
        // console.log(data.departureTime);
        if(compareTime(data.arrivalTime,data.departureTime)==false){
            throw new AppError("The departureTime should be greater than arrival time",StatusCodes.BAD_REQUEST);
        }
        const response = await new FlightRepository().create(data);
        
        return response;
    } catch (error) {
        if(error.name == "SequelizeValidationError"){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot create a new Flight Object",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createFlight
}
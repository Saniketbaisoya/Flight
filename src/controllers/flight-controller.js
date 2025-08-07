const {StatusCodes} = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utlis/common');
const { FlightService } = require('../services');

/**
 * POST : /flights,
 * req.body : {
 * flightNumber : 'UK 808',
 * airplaneId : 1,
 * departureAirpotId : 12,
 * arrivalAirpotId : 11,
 * departureTime : 11:00:00,
 * arrivalTime : 13:00:00,
 * price : 5000,
 * boardingTime : 9:00:00,
 * totalSeats : 500
 * }
 */
async function createFlight_Controller(req,res){
    try {

        const response = await FlightService.createFlight({
            flightNumber : req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirpotId : req.body.departureAirpotId,
            arrivalAirpotId : req.body.arrivalAirpotId,
            departureTime : req.body.departureTime,
            arrivalTime : req.body.arrivalTime,
            price : req.body.price,
            boardingTime : req.body.boardingTime,
            totalSeats : req.body.totalSeats
        });
        SuccessResponse.message = `Successfully created the Flight with id ${response.id}`;
        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong can't created Successfully";
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

module.exports = {
    createFlight_Controller
}
const { ErrorResponse } = require("../utlis/common");
const {StatusCodes} = require('http-status-codes');

function validateCreateRequest(req,res,next){
    if(!req.body.flightNumber){
        ErrorResponse.message = "Something went wrong can't created the Flight";
        ErrorResponse.error = {explanation : "flightNumber is not found in the incoming request"};
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.airplaneId){
        ErrorResponse.message = "Something went wrong can't created the Flight";
        ErrorResponse.error = {explanation : "airplaneId is not found in the incoming request"};
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.departureAirpotId){
        ErrorResponse.message = "Something went wrong can't created the Flight";
        ErrorResponse.error = {explanation : "departureAirpotId is not found in the incoming request"};
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.arrivalAirpotId){
        ErrorResponse.message = "Something went wrong can't created the Flight";
        ErrorResponse.error = {explanation : "arrivalAirpotId is not found in the incoming request"};
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.departureTime){
        ErrorResponse.message = "Something went wrong can't created the Flight";
        ErrorResponse.error = {explanation : "departureTime is not found in the incoming request"};
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.price){
        ErrorResponse.message = "Something went wrong can't created the Flight";
        ErrorResponse.error = {explanation : "price is not found in the incoming request"};
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.boardingTime){
        ErrorResponse.message = "Something went wrong can't created the Flight";
        ErrorResponse.error = {explanation : "boardingTime is not found in the incoming request"};
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.totalSeats){
        ErrorResponse.message = "Something went wrong can't created the Flight";
        ErrorResponse.error = {explanation : "totalSeats is not found in the incoming request"};
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}
module.exports = {
    validateCreateRequest
};
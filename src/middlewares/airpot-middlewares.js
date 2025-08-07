const { ErrorResponse } = require("../utlis/common");
const {StatusCodes} = require('http-status-codes');

function validateCreateRequest(req,res,next){
    if(!req.body.name){
        ErrorResponse.message = "Something went wrong can't created the Airpot";
        ErrorResponse.error = {explanation : "name is not found in the incoming request"};
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.code){
        ErrorResponse.message = "Something went wrong can't created the Airpot";
        ErrorResponse.error = {explanation : "code is not found in the incoming request"};
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.address || req.body.address == null){
        ErrorResponse.message = "Something went wrong can't created the Airpot";
        ErrorResponse.error = {explanation : "Address is not found in the incoming request"};
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.cityId){
        ErrorResponse.message = "Something went wrong can't created the Airpot";
        ErrorResponse.error = {explanation : "cityId is not found in the incoming request"};
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}
module.exports = {
    validateCreateRequest
};
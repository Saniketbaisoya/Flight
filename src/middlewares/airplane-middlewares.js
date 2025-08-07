const { ErrorResponse } = require("../utlis/common");
const {StatusCodes} = require('http-status-codes');

function validateCreateRequest(req,res,next){
    if(!req.body.modelNumber){
        ErrorResponse.message = "Something went wrong can't created the Airplane";
        ErrorResponse.error = {explanation : "Model Number is not found in the incoming request"};
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    if(!req.body.capacity){
        ErrorResponse.message = "Something went wrong can't created the Airplane";
        ErrorResponse.error = {explanation : "Capacity is not found in the incoming request"};
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}
module.exports = {
    validateCreateRequest
};
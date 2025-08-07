const { ErrorResponse } = require("../utlis/common");
const {StatusCodes} = require('http-status-codes');

function validateCreateRequestCity(req,res,next){
    if(!req.body.city){
        ErrorResponse.message = "Something went wrong can't created the City";
        ErrorResponse.error = {explanation : "city is not found in the incoming request"};
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}
module.exports = {
    validateCreateRequestCity
};
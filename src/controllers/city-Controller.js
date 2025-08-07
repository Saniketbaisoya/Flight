const {StatusCodes} = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utlis/common');

const { CityService } = require('../services');

/**
 * POST : /city,
 * req.body : {
 *      city : Delhi
 * }
 */
async function createCity_Controller(req,res){
    try {

        const response = await CityService.createCity({
            city : req.body.city
        });
        SuccessResponse.message = `Successfully created the City with id ${response.id}`;
        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong can't created Successfully";
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

/**
 *  get : /getCity;
 */
async function getCity_Controller(req,res) {
    try {
        const response = await CityService.getAllCity();
        SuccessResponse.message = `Successfully fetch the all data of Cities`;
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong can't fetch the data";
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

/**
 * get : /:id
 * req.params.id
 */
async function getCityById_Controller(req,res) {
    try {
        const response = await CityService.getCityById(req.params.id);
        SuccessResponse.message = "Successfully fetch the data of City";
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong can't fetch the data";
        ErrorResponse.error = error; // error mai AppError hai and then iska explanation return ho jayega res mai kyuki message explaination mai set hain....
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

/**
 * delete : /:id
 */
async function deleteCity_Controller(req,res) {
    try {
        const response = await CityService.deleteCity(req.params.id);
        SuccessResponse.message = "Successfully deleted the data of City";
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong can't delete the data";
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

/**
 * patch : /:id,
 * req.body :   {
 *      city : req.body.city
 * }
 */
async function updateCity_Controller(req,res) {
    try {
        const response = await CityService.updateCity(req.params.id,req.body);
        SuccessResponse.message = "Successfully updated the data at City";
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong can't update the data";
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}
module.exports = {
    createCity_Controller,
    getCity_Controller,
    getCityById_Controller,
    deleteCity_Controller,
    updateCity_Controller
}
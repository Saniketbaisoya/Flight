
const {StatusCodes} = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utlis/common');
const { response } = require('express');
const { AirplaneService } = require('../services');
/**
 * POST : /airplanes,
 * req.body : {
 *      modelNumber : 'airbus 302',
 *      capacity : 200
 * }
 */
async function createAirplane_Controller(req,res){
    try {

        const response = await AirplaneService.createAirplane({
            modelNumber : req.body.modelNumber,
            capacity : req.body.capacity
        });
        SuccessResponse.message = `Successfully created the Airplane with id ${response.id}`;
        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong can't created Successfully";
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

/**
 *  get : /getAirplanes;
 */
async function getAirplanes_Controller(req,res) {
    try {
        const response = await AirplaneService.getAirplanes();
        SuccessResponse.message = `Successfully fetch the all data of Airplanes`;
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
async function getAriplaneById_Controller(req,res) {
    try {
        const response = await AirplaneService.getAirplaneById(req.params.id);
        SuccessResponse.message = "Successfully fetch the data of Airplane";
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
async function deleteAirplane_Controller(req,res) {
    try {
        const response = await AirplaneService.deleteAirplane(req.params.id);
        SuccessResponse.message = "Successfully deleted the data of Airplane";
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
 *  modelNumber : req.body.modelNumber,
 *  capacity : req.body.capacity
 * }
 */
async function updateAirplane_Controller(req,res) {
    try {
        const response = await AirplaneService.updateAiplane(req.params.id,req.body);
        SuccessResponse.message = "Successfully updated the data at Airplane";
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong can't update the data";
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}
module.exports = {
    createAirplane_Controller,
    getAirplanes_Controller,
    getAriplaneById_Controller,
    deleteAirplane_Controller,
    updateAirplane_Controller
}
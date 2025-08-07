const {StatusCodes} = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utlis/common');
const { response } = require('express');
const { AirpotService } = require('../services');

/**
 * POST : /airpots,
 * req.body : {
 *      name : 'DELHI AIRPOT',
 *      code : 'DEL',
 *      address : 'Gurugram 101',
 *      cityId :'2'
 * }
 */
async function createAirpot_Controller(req,res){
    try {

        const response = await AirpotService.createAirpot({
            name : req.body.name,
            code : req.body.code,
            address : req.body.address,
            cityId : req.body.cityId
        });
        SuccessResponse.message = `Successfully created the Airpot with id ${response.id}`;
        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong can't created Successfully";
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

/**
 *  get : /getAirpot;
 */
async function getAirpot_Controller(req,res) {
    try {
        const response = await AirpotService.getAirpot();
        SuccessResponse.message = `Successfully fetch the all data of Airpots`;
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
async function getAripotById_Controller(req,res) {
    try {
        const response = await AirpotService.getAirpotById(req.params.id);
        SuccessResponse.message = "Successfully fetch the data of Airpot";
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
async function deleteAirpot_Controller(req,res) {
    try {
        const response = await AirpotService.deleteAirpot(req.params.id);
        SuccessResponse.message = "Successfully deleted the data of Airpot";
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
 *  name : req.body.name,
 *  code : req.body.code,
 *  address : req.body.address,
 *  cityId : req.body.cityId
 * }
 */
async function updateAirpot_Controller(req,res) {
    try {
        const response = await AirpotService.updateAirpot(req.params.id,req.body);
        SuccessResponse.message = "Successfully updated the data at Airpot";
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong can't update the data";
        ErrorResponse.error = error;
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

module.exports = {
    createAirpot_Controller,
    getAirpot_Controller,
    getAripotById_Controller,
    deleteAirpot_Controller,
    updateAirpot_Controller
}
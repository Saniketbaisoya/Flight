const express = require('express');
// const { createAirplaneConrtoller, getAriplaneController, getAirplaneByIdController, deleteAirplaneController, updateAirplaneController } = require('../../controllers');
const { validateMiddlewareFlight } = require('../../middlewares');
const { FlightController } = require('../../controllers');

const FlightRouter = express.Router();

/**
 * http://localhost:1000/api/v1/airpots/
 */
FlightRouter.post('/',validateMiddlewareFlight.validateCreateRequest,FlightController.createFlight_Controller);

module.exports = {
    FlightRouter
}
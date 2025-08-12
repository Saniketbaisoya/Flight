const express = require('express');
// const { createAirplaneConrtoller, getAriplaneController, getAirplaneByIdController, deleteAirplaneController, updateAirplaneController } = require('../../controllers');
const { validateMiddlewareFlight } = require('../../middlewares');
const { FlightController } = require('../../controllers');

const FlightRouter = express.Router();

/**
 * http://localhost:1000/api/v1/flights/
 */
FlightRouter.post('/',validateMiddlewareFlight.validateCreateRequest,FlightController.createFlight_Controller);

/**
 * http://localhost:1000/api/v1/flights?trips=MUM-HYD&price=1000-2000
 */
FlightRouter.get('/',FlightController.getAllFlight_Controller);

module.exports = {
    FlightRouter
}
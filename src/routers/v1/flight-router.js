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

/**
 * http://localhost:1000/api/v1/flights/:id
 */
FlightRouter.get('/:id',FlightController.getFlightById_Controller);

/**
 * http://localhost:1000/api/v1/flights/:id
 */
FlightRouter.patch('/:id',FlightController.updateFlight_Controller);

/**
 * http://localhost:1000/api/v1/flights/:id/seats
 */
FlightRouter.patch('/:id/seats',validateMiddlewareFlight.validateUpdateSeatsRequest,FlightController.updateSeats_Controller);

module.exports = {
    FlightRouter
}
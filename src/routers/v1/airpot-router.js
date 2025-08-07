const express = require('express');
// const { createAirplaneConrtoller, getAriplaneController, getAirplaneByIdController, deleteAirplaneController, updateAirplaneController } = require('../../controllers');
const { validateMiddlewareAirpot } = require('../../middlewares');
const { AirpotController } = require('../../controllers');

const AirpotRouter = express.Router();

/**
 * http://localhost:1000/api/v1/airpots/
 */
AirpotRouter.post('/',validateMiddlewareAirpot.validateCreateRequest,AirpotController.createAirpot_Controller);

/**
 * http://localhost:1000/api/v1/airpots/getAirpot
 */
AirpotRouter.get('/getAirpot',AirpotController.getAirpot_Controller);

/**
 * http://localhost:1000/api/v1/airpots/:id
 */
AirpotRouter.get('/:id',AirpotController.getAripotById_Controller);

/**
 * http://localhost:1000/api/v1/airpots/:id
 */
AirpotRouter.delete('/:id',AirpotController.deleteAirpot_Controller);

/**
 * http://localhost:1000/api/v1/airpots/:id // Now getAirplane or deleteAirplane dono mai hmm id params mai de rhe hai but usme koi data body mai ni jara like modelNumber and capacity.....
 * // Also but in the update router abb hmm id bej re hai in params but with body which contains the modelNumber and capacity
 */
AirpotRouter.patch('/:id',validateMiddlewareAirpot.validateCreateRequest,AirpotController.updateAirpot_Controller);

module.exports = AirpotRouter;
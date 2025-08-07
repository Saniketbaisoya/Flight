const express = require('express');
// const { createAirplaneConrtoller, getAriplaneController, getAirplaneByIdController, deleteAirplaneController, updateAirplaneController } = require('../../controllers');
const { validateMiddlewareAirplane } = require('../../middlewares');
const { AirplaneConrtoller } = require('../../controllers');

const airplaneRouter = express.Router();

/**
 * http://localhost:1000/api/v1/airplanes/
 */
airplaneRouter.post('/',validateMiddlewareAirplane.validateCreateRequest,AirplaneConrtoller.createAirplane_Controller);

/**
 * http://localhost:1000/api/v1/airplanes/getAirplanes
 */
airplaneRouter.get('/getAirplanes',AirplaneConrtoller.getAirplanes_Controller);

/**
 * http://localhost:1000/api/v1/airplanes/:id
 */
airplaneRouter.get('/:id',AirplaneConrtoller.getAriplaneById_Controller);

/**
 * http://localhost:1000/api/v1/airplanes/:id
 */
airplaneRouter.delete('/:id',AirplaneConrtoller.deleteAirplane_Controller);

/**
 * http://localhost:1000/api/v1/airplanes/:id // Now getAirplane or deleteAirplane dono mai hmm id params mai de rhe hai but usme koi data body mai ni jara like modelNumber and capacity.....
 * // Also but in the update router abb hmm id bej re hai in params but with body which contains the modelNumber and capacity
 */
airplaneRouter.patch('/:id',validateMiddlewareAirplane.validateCreateRequest,AirplaneConrtoller.updateAirplane_Controller);
module.exports = airplaneRouter;
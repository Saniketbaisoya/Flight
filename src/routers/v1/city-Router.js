const express = require('express');
// const { createAirplaneConrtoller, getAriplaneController, getAirplaneByIdController, deleteAirplaneController, updateAirplaneController } = require('../../controllers');
const { validateMiddlewareCity } = require('../../middlewares');
const { CityController } = require('../../controllers');

const cityRouter = express.Router();

/**
 * http://localhost:1000/api/v1/city/
 */
cityRouter.post('/',validateMiddlewareCity.validateCreateRequestCity,CityController.createCity_Controller);

/**
 * http://localhost:1000/api/v1/city/getCity
 */
cityRouter.get('/getCity',CityController.getCity_Controller);

/**
 * http://localhost:1000/api/v1/city/:id
 */
cityRouter.get('/:id',CityController.getCityById_Controller);

/**
 * http://localhost:1000/api/v1/city/:id
 */
cityRouter.delete('/:id',CityController.deleteCity_Controller);

/**
 * http://localhost:1000/api/v1/airplanes/:id // Now getAirplane or deleteAirplane dono mai hmm id params mai de rhe hai but usme koi data body mai ni jara like modelNumber and capacity.....
 * // Also but in the update router abb hmm id bej re hai in params but with body which contains the modelNumber and capacity
 */
cityRouter.patch('/:id',validateMiddlewareCity.validateCreateRequestCity,CityController.updateCity_Controller);
module.exports = cityRouter;
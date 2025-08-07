const express = require('express');
const { infoController, createAirplaneConrtoller } = require('../../controllers');
const airplaneRouter = require('./airplane-router');
const cityRouter = require('./city-Router');
const AirpotRouter = require('./airpot-router');
const { FlightRouter } = require('./flight-router');

const v1Routes = express.Router();
/**
 * http://localhost:1000/api/v1/info
 */
v1Routes.get('/info',infoController.info);

/**
 * http://localhost:1000/api/v1/airplanes
 */
v1Routes.use('/airplanes',airplaneRouter);
/**
 * http://localhost:1000/api/v1/city
 */
v1Routes.use('/city',cityRouter);
/**
 * http://localhost:1000/api/v1/airpots
 */
v1Routes.use('/airpots',AirpotRouter);
/**
 * http://localhost:1000/api/v1/flights
 */
v1Routes.use('/flights',FlightRouter);

module.exports = v1Routes;
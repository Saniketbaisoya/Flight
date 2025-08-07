const { AirpotRepository } = require("../repository");
const AppError = require('../utlis/errors/error');
const {StatusCodes} = require('http-status-codes');

async function createAirpot(data){
    try {
        // console.log("Sevice layer data : ",data);
        
        const response = await new AirpotRepository().create(data);
        
        return response;
    } catch (error) {
        if(error.name == "SequelizeValidationError"){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot create a new Airpot Object",StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

async function getAirpot(){
    try{
        const response = await new AirpotRepository().getAll();
        return response;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airpot you requested is not Present",error.statusCode);
        }
        throw new AppError("Cannot fetch all the data of Airpot Object",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirpotById(id){
    try{
        const airpot = await new AirpotRepository().get(id);
        console.log("Service : ",airpot);
        return airpot;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airpot you requested is not Present",error.statusCode);
        }
        throw new AppError(`Cannot fetch the data of Airpot Object with id : ${id}`,StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteAirpot(id){
    try{
        const response = await new AirpotRepository().destroy(id);
        return response;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airpot is you requested to delete is not Present",error.statusCode);
        }
        throw new AppError("Cannot delete all the data of Airpot Object",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirpot(id,data){
    try{
        const response = await new AirpotRepository().update(id,data);
        
        return response;
    }catch(error){
        console.log(error.statusCode);
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airpot is you requested is not Present ",error.statusCode);
        }
        throw new AppError("Cannot fetch all the data of Airpot Object",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
module.exports = {
    createAirpot,
    getAirpot,
    getAirpotById,
    deleteAirpot,
    updateAirpot
}
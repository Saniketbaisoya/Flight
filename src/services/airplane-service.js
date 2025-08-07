
const { AirplaneRepository } = require("../repository");
const AppError = require('../utlis/errors/error')
const {StatusCodes} = require('http-status-codes')
//const airplaneRepository = new AirplaneRepository();
async function createAirplane(data){
    try {
        // console.log("Sevice layer data : ",data);
        
        const response = await new AirplaneRepository().create(data);
        
        return response;
    } catch (error) {
        if(error.name == "SequelizeValidationError"){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot create a new Airplane Object",StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

async function getAirplanes(){
    try{
        const response = await new AirplaneRepository().getAll();
        return response;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airplane you requested is not Present",error.statusCode);
        }
        throw new AppError("Cannot fetch all the data of Airplane Object",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplaneById(id){
    try{
        const airplane = await new AirplaneRepository().get(id);
        console.log("Service : ",airplane);
        return airplane;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airplane you requested is not Present",error.statusCode);
        }
        throw new AppError(`Cannot fetch the data of Airplane Object with id : ${id}`,StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteAirplane(id){
    try{
        const response = await new AirplaneRepository().destroy(id);
        return response;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airplane is you requested to delete is not Present",error.statusCode);
        }
        throw new AppError("Cannot delete all the data of Airplane Object",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAiplane(id,data){
    try{
        const response = await new AirplaneRepository().update(id,data);
        
        return response;
    }catch(error){
        console.log(error.statusCode);
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airplane is you requested is not Present ",error.statusCode);
        }
        throw new AppError("Cannot fetch all the data of Airplane Object",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
module.exports = {
    createAirplane,
    getAirplanes,
    getAirplaneById,
    deleteAirplane,
    updateAiplane
}
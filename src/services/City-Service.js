const { CityRepository } = require("../repository");
const AppError = require('../utlis/errors/error');
const {StatusCodes} = require('http-status-codes');

async function createCity(data){
    try {
        // console.log("Sevice layer data : ",data);
        
        const response = await new CityRepository().create(data);
        
        return response;
    } catch (error) {
        if(error.name == "SequelizeValidationError"){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Cannot create a new City Object",StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

async function getAllCity(){
    try{
        const response = await new CityRepository().getAll();
        return response;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The City you requested is not Present",error.statusCode);
        }
        throw new AppError("Cannot fetch all the data of City Object",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCityById(id){
    try{
        const city = await new CityRepository().get(id);
        console.log("Service : ",city);
        return city;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The city you requested is not Present",error.statusCode);
        }
        throw new AppError(`Cannot fetch the data of City Object with id : ${id}`,StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteCity(id){
    try{
        const response = await new CityRepository().destroy(id);
        return response;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The city is you requested to delete is not Present",error.statusCode);
        }
        throw new AppError("Cannot delete all the data of City Object",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateCity(id,data){
    try{
        const response = await new CityRepository().update(id,data);
        
        return response;
    }catch(error){
        console.log(error.statusCode);
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The city is you requested is not Present ",error.statusCode);
        }
        throw new AppError("Cannot fetch all the data of City Object",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
module.exports = {
    createCity,
    getAllCity,
    getCityById,
    deleteCity,
    updateCity
}
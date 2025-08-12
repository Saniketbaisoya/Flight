'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { // Now flight belong to many airplanes....
      // define association here
      this.belongsTo(models.Airplane,{
        foreignKey : 'airplaneId',
         as : 'Airplane_details'
      }),
      this.belongsTo(models.Airpot,{
        foreignKey : 'departureAirpotId',
        as : 'DepartureAirpot'
        
      }),
      this.belongsTo(models.Airpot,{
        foreignKey : 'arrivalAirpotId',
         as : 'ArrivalAirpot'
      })
    }
  }
  Flight.init({
    flightNumber: {
      type : DataTypes.STRING,
      allowNull : false,
    },
    airplaneId: {
      type : DataTypes.INTEGER,
      allowNull : false,
    },
    departureAirpotId: {
      type : DataTypes.STRING,
      allowNull : false,
    },
    arrivalAirpotId: {
      type : DataTypes.STRING,
      allowNull : false,
    },
    departureTime: {
      type : DataTypes.DATE,
      allowNull : false,
    },
    arrivalTime: {
      type : DataTypes.DATE,
      allowNull : false,
    },
    price: {
      type : DataTypes.INTEGER,
      allowNull : false,
    },
    boardingTime: {
      type : DataTypes.STRING
    },
    totalSeats: {
      type : DataTypes.INTEGER,
      allowNull : false,
    }
  },{
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};
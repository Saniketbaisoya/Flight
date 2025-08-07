'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airpot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { // reference table -> City
      // define association here
      this.belongsTo(models.City,{
        foreignKey : 'cityId',
        onUpdate : 'CASCADE',
        onDelete : 'CASCADE'
      }),
      // Now abb yha dekhe toh agr flight of departureId delete hogyi toh voh kis airpot pe depart hogi then uske corresponding airpot allocated tha in departureId contraint voh bhi delete ho jayega completely....
      this.hasMany(models.Flight,{ 
        foreignKey : 'departureAirpotId',
        onDelete : 'CASCADE'
      }),
      this.hasMany(models.Flight,{
        foreignKey : 'arrivalAirpotId',
        onDelete : 'CASCADE'
      })
    }
  }
  Airpot.init({
    name: {
      type :DataTypes.STRING,
      allowNull : false,
      unique : true
    },
    code: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : true
    },
    address: {
      type : DataTypes.STRING,
      unique : true
    },
    cityId: {
      type : DataTypes.INTEGER,
      allowNull : false
    }
  }, {
    sequelize,
    modelName: 'Airpot',
  });
  return Airpot;
};
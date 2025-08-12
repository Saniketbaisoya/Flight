'use strict';
const {
  Model
} = require('sequelize');
const {Enum} = require('../utlis/common');
const {BUISNESS, ECONOMY, PREMIUM_ECONOMY, FIRST_CLASS} = Enum.Seat_Type
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane,{
        foreignKey : 'airplaneId'
      })
    }
  }
  Seat.init({
    airplaneId:{
      type : DataTypes.INTEGER,
      allowNull : false,
    },
    row: {
      type : DataTypes.INTEGER,
      allowNull : false,
    },
    col: {
      type : DataTypes.STRING,
      allowNull : false,
    },
    type: { // Now type btayega ki konsi type of seat hai....
      type : DataTypes.ENUM,
      // values : ["Economy","First-Class","Buisness","Premium-Economy"],
      // defaultValue : "Economy",
      values : [BUISNESS, PREMIUM_ECONOMY, ECONOMY, FIRST_CLASS],
      defaultValue : ECONOMY,
      allowNull : false
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};
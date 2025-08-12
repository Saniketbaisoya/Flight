'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Flight,{ // Now yha onDelete ko isliye kyuki if the flight of certain id is deleted then the corresponding data of airplane should be deleted kyuki agr flight ki ni hui create toh kon airplane(modelNumber + capacity) create hoga....
        foreignKey : 'airplaneId',
        onDelete : 'CASCADE'
      }),
      this.hasMany(models.Seat,{
        foreignKey : 'airplaneId',
        onDelete : 'CASCADE'
      })
    }
  }
  // These changes are the java Script level changes but yeah databases mai reflect nhi hmme databases level pe jake bhi yhi changes krne hoge and iske liye hmm jayege iske corressponding migration ke andrr....
  Airplane.init({
    modelNumber: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        isAlphanumeric : true
      }
    },
    capacity: {
      type : DataTypes.STRING,
      allowNull : false,
      defaultValue : 0,
      validate : {
        max : 1000
      }
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};
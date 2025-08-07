'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      airplaneId: { // yeah airplane id ek constraint bnn jayegi in the flight table main....
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model : 'Airplanes',
          key : 'id'
        },
        onUpdate : 'CASCADE',
        onDelete : 'CASCADE'
      },
      departureAirpotId: { // Now this attribute add the Airpots(reference)_table primary key so this is a foreign_Key constraint of the Airpots table....
        type: Sequelize.STRING,
        allowNull: false,
        references : {
          model : 'Airpots',
          key : 'code'
        },
        onUpdate : 'CASCADE',
        onDelete : 'CASCADE',
      },
      arrivalAirpotId: { // Now this attribute add the Airpots(reference)_table primary key so this is a foreign_Key constraint of the Airpots table....
        type: Sequelize.STRING,
        allowNull: false,
        references : {
          model : 'Airpots',
          key : 'code'
        },
        onUpdate : 'CASCADE',
        onDelete : 'CASCADE',
      },
      departureTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      arrivalTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      boardingTime: {
        type: Sequelize.STRING
      },
      totalSeats: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }); 
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};
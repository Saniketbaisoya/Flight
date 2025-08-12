'use strict';
/** @type {import('sequelize-cli').Migration} */
const {Enum} = require('../utlis/common');
const {BUISNESS, ECONOMY, PREMIUM_ECONOMY, FIRST_CLASS} = Enum.Seat_Type
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull : false,
        references : {
          model : 'Airplanes',
          key : 'id'
        },
        onUpdate : 'CASCADE',
        onDelete : 'CASCADE'
      },
      row: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
      col: {
        type: Sequelize.STRING,
        allowNull : false
      },
      type: {
        type: Sequelize.ENUM,
        allowNull : false,
        values : [BUISNESS, PREMIUM_ECONOMY, ECONOMY, FIRST_CLASS],
        defaultValue : ECONOMY
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
    await queryInterface.dropTable('Seats');
  }
};
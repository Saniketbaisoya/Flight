'use strict';



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Seats',[
      {
        airplaneId : 4,
        row : 1,
        col : "A",
        type : 'BUISNESS',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        airplaneId : 4,
        row : 1,
        col : "B",
        type : 'BUISNESS',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        airplaneId : 4,
        row : 1,
        col : "C",
        type : 'BUISNESS',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        airplaneId : 4,
        row : 1,
        col : "D",
        type : 'BUISNESS',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        airplaneId : 4,
        row : 1,
        col : "E",
        type : 'BUISNESS',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        airplaneId : 4,
        row : 1,
        col : "F",
        type : 'BUISNESS',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        airplaneId : 4,
        row : 2,
        col : "A",
        type : 'BUISNESS',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        airplaneId : 4,
        row : 2,
        col : "B",
        type : 'BUISNESS',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        airplaneId : 4,
        row : 2,
        col : "C",
        type : 'BUISNESS',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        airplaneId : 4,
        row : 2,
        col : "D",
        type : 'BUISNESS',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        airplaneId : 4,
        row : 2,
        col : "E",
        type : 'BUISNESS',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        airplaneId : 4,
        row : 2,
        col : "F",
        type : 'BUISNESS',
        createdAt : new Date(),
        updatedAt : new Date()
      },
    ]
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

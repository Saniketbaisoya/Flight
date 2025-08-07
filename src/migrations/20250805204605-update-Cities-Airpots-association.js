'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    /**
     * Target Table name dege.... Now hmne yha association kiya Airpots ka Cities ke sth
     * Now dono ko plural form mai isliye define kiya hai kyunki yeah migration mai ho rha hai ,
     * and Migrations mai databases level pr jakr hmm yeah kaam krr rhe hai so....
     * Target Table -> Airpots and Reference Table -> Cities
     * if agr hmm association kr rhe hai that means ki voh already defined hai....
    */
    await queryInterface.addConstraint('Airpots',{
      type : 'foreign key',
      name : 'city_fk_constraint',
      fields : ['cityId'],
      references : {
        table : 'Cities',
        field : 'id'
      },
      onUpdate : 'CASCADE',
      onDelete : 'CASCADE'
    });
  },

  async down (queryInterface, Sequelize) {
    /**
      * Add reverting commands here.
      *
      * Example:
      * await queryInterface.dropTable('users');
    */
    queryInterface.removeConstraint('Airpots','city_fk_constraint');
  }
};

'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('USERGROUPs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      group_name: {
        type: Sequelize.VARCHAR
      },
      group_id: {
        type: Sequelize.VARCHAR
      },
      msg_title: {
        type: Sequelize.VARCHAR
      },
      msg_value: {
        type: Sequelize.VARCHAR
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('USERGROUPs');
  }
};
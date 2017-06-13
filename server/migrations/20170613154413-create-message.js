'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('MESSAGEs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      msg_id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.VARCHAR
      },
      group_id: {
        type: Sequelize.VARCHAR
      },
      sender_id: {
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
    return queryInterface.dropTable('MESSAGEs');
  }
};
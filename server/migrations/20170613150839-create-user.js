'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('USERs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.VARCHAR
      },
      phone: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.VARCHAR
      },
      password: {
        type: Sequelize.VARCHAR
      },
      userid: {
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
    return queryInterface.dropTable('USERs');
  }
};
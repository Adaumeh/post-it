'use strict';
module.exports = function(sequelize, DataTypes) {
  var MESSAGE = sequelize.define('MESSAGE', {
    msg_id: DataTypes.INTEGER,
    title: DataTypes.VARCHAR,
    group_id: DataTypes.VARCHAR,
    sender_id: DataTypes.VARCHAR,
    msg_value: DataTypes.VARCHAR
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return MESSAGE;
};
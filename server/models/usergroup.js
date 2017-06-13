'use strict';
module.exports = function(sequelize, DataTypes) {
  var USERGROUP = sequelize.define('USERGROUP', {
    group_name: DataTypes.VARCHAR,
    group_id: DataTypes.VARCHAR,
    msg_title: DataTypes.VARCHAR,
    msg_value: DataTypes.VARCHAR
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return USERGROUP;
};
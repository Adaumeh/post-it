'use strict';
module.exports = function(sequelize, DataTypes) {
  var MESSAGE = sequelize.define('MESSAGE', {
    msg_id: DataTypes.INTEGER,
    title: DataTypes.VARCHAR,
    group_id: DataTypes.VARCHAR,
    user_id: DataTypes.VARCHAR,
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
module.exports = (sequelize, DataTypes) => {
  const MESSAGE = sequelize.define('MESSAGE', {
    msg_id:{
      type: DataTypes.INTEGER
      allowNull: false,
    },
    title:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    group_id:{
      type: DataTypes.VARCHAR,
      allowNull: false,
    },
    group_id:{
      type: DataTypes.VARCHAR,
      allowNull: false,
    },
    user_id:{
      type: DataTypes.VARCHAR,
      allowNull: false,
    },

    msg_value:{
      type: DataTypes.VARCHAR,
      allowNull: false,
    },
  }, {

    classMethods: {
      associate: (models) => {
        MESSAGE.hasMany(models.USER,{
          foreignKey:'userid'
        MESSAGE.hasMany(models.usergroup,{
          foreignKey: 'userid
    
          allowNull:false
        });
      },
    },
  });
  return MESSAGE;
};
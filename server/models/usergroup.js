
module.exports = (sequelize, DataTypes) => {
  const USERGROUP = sequelize.define('USERGROUP', {
    group_name: {
      type: DataTypes.VARCHAR,
      allowNull: false,
      
    },
    group_id: {
      type: DataTypes.VARCHAR,
      defaultValue: false,
    },
    msg_id: {
      type: DataTypes.VARCHAR,
      defaultValue: false,
    },
    msg_title: {
      type: DataTypes.VARCHAR,
      defaultValue: false,
    },
    msg_value: {
      type: DataTypes.VARCHAR,
      defaultValue: false,
    },
    user_id: {
      type: DataTypes.VARCHAR,
      defaultValue: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        USERGROUP.hasMany(models.message, {
          foreignKey: 'group_id',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return USERGROUP;
};
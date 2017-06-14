
module.exports = (sequelize, DataTypes) => {
  const USER = sequelize.define('USER', {
    name:{
      type: DataTypes.VARCHAR,
      allowNull: false,
    },
    phone:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email:{
      type: DataTypes.VARCHAR,
      allowNull: false,
    },
    password:{
      type: DataTypes.VARCHAR,
      allowNull: false,
    },
    id:{
      type: DataTypes.VARCHAR,
      allowNull: false,
    },
  }, {

    classMethods: {
      associate: (models) => {
        USER.hasMany(models.message,{
          foreignKey:'userid'
        USER.hasMany(models.usergroup,{
          foreignKey: 'userid
          as: 'userid'
          allowNull:false
        });
      },
    },
  });
  return USER;
};
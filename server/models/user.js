
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
    userid:{
      type: DataTypes.VARCHAR,
      allowNull: false,
    },
  }, {

    classMethods: {
      associate: (models) => {
        USER.hasMany(models.usergroup,{
          foreignKey:''
        Todo.hasMany(models.TodoItem, {
          foreignKey: 'todoId',
          as: 'todoItems',
        });
      },
    },
  });
  return Todo;
};
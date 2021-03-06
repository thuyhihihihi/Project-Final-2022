
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.codes, {foreignKey: 'positionId', targetKey: 'keyMap', as: 'positionData' })
      User.hasOne(models.Markdowns, {foreignKey: 'doctorId'})
      User.hasOne(models.Doctor_Infor, {foreignKey: 'doctorId'})
      // define association here
    }
  };
  User.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    address: DataTypes.STRING,
    positionId: DataTypes.STRING,
    image: DataTypes.STRING,
    roleId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;

};



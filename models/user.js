"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User", {
      pseudo: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    }, {}
  );
  User.associate = function (models) {
    // associations can be defined here
    models.User.hasMany(models.Post);

  };
  return User;
};
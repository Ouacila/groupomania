"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User", {
      pseudo: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true,
        require: true
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        require: true
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true
      }
    }, {}
  );
  User.associate = function (models) {
    // associations can be defined here
    models.User.hasMany(models.Post, {
      foreignKey: 'userPseudo',
      hooks: true,
      onDelete: 'cascade'

    });

  };
  return User;
};
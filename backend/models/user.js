"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User", {
      pseudo: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false
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
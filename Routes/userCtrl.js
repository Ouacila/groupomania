//Imports des modules
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var models = require("../models");

// Constants
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;

//Routes
module.exports = {
  signup: function (req, res, next) {
    //Paramètres:
    var email = req.body.email;
    var pseudo = req.body.pseudo;
    var password = req.body.password;

    models.User.findOne({
      attributes: ["email"],
      where: {
        email: email,
      },
    })
      .then(function (userFound) {
        if (!userFound) {
          bcrypt.hash(password, 8, function (err, bcryptedPwd) {
            var newUser = models.User.create({
              email: email,
              pseudo: pseudo,
              password: bcryptedPwd.then(function (newUser) {
                return res.status(201).json({
                  UserId: newUser.id,
                });
              }),
            }).catch(function (err) {
              return res.status(500).json({
                error: "cannot add User",
              });
            });
          });
        } else {
          return res.status(409).json({
            error: "user already exist",
          });
        }
      })
      .catch(function (err) {
        return res.status(500).json({
          error: "unable to verify the user",
        });
      });
  },
};

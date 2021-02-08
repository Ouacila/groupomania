//Imports des modules
var jwt = require('jsonwebtoken');
var express = require('express');
var md5 = require('md5');
let User = require('../models').User;

let router = express.Router();


//Création User + Route
router.post('/signup', async (req, res) => {
  let email = req.body.email;
  let pseudo = req.body.pseudo;
  let password = md5(req.body.password);
  const user = await User.create({
    email: email,
    pseudo: pseudo,
    password: password
  });
  res.json(user);
});

// Connexion User+Route
router.post('/login', (req, res) => {
  let login = req.body.login;
  let password = md5(req.body.password);
  User.findOne({
    where: {
      email: login,
      password: password
    }
  }).then((data) => {
    if (data) {
      let token = jwt.sign({
        id: data.id,
        login: data.email
      }, req.app.get('key'), {
        expiresIn: 1440
      });
      res.json({
        success: true,
        message: 'Login ok',
        token: token
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Login/password invalide!'
      });
    }
  });
});

module.exports = router;
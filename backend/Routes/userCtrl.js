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
    })
    .then((data) => {

      if (data) {
        // stock data.pseudo dans la session utilisateur 
        //let dataPseudo = data.pseudo;
        //sessionStorage.setItem("dataPseudo", dataPseudo);
        let token = jwt.sign({
            id: data.id,
            login: data.email,

          },

          req.app.get('key'), {
            expiresIn: 3600
          }
        );

        res.json({
          success: true,
          message: 'Login ok',
          userPseudo: data.pseudo,
          userId: data.id,
          token: token,

        });
      } else {
        res.status(400).json({
          success: false,
          message: 'Login/password invalide!'
        });
      }

    });
});

//Supprimer son compte
router.delete('/auth/:id', async (req, res) => {
  User.findOne({
      attributes: ['id', 'email', 'pseudo'],
      where: {
        id: req.params.id

      }
    })
    .then(function (User) {
      User.destroy({
          id: req.params.id
        })
        .then(() =>
          res.status(200).json({
            message: 'Compte supprimé!'
          })
        )
        .catch((error) => {
          console.log(error)
          res.status(400).json({
            message: 'Pb au niveau de la suppression'
          })
        });
    })
    .catch((error) =>
      res.status(500).json({
        message: 'Serveur error'
      })
    );
});


module.exports = router;
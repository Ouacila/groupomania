//Imports

var express = require("express");
var bodyParser = require("body-parser");
var usersCtrl = require("./Routes/userCtrl");
var postsCtrl = require("./Routes/postCtrl");
const jwt = require("jsonwebtoken");


//Instantiate server

var server = express();
//clé pour jwt
server.set("key", "653529cd71b05a834154abfcb4802a5cb10c5b41");

//Configuration bP
server.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
server.use(bodyParser.json());

server.use("/", usersCtrl);
server.use("/api", validateUser, postsCtrl);

//Configuration routes
server.get("/", function (req, res, next) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send("<h1>Bienvenue sur mon serveur</h1>");
});
//server.use("/api/".apiRouter);

server.listen(7070, function () {
  console.log("Serveur en écoute");
});

function validateUser(req, res, next) {
  var token = req.headers['authorization'].split(" ")[1] || req.headers['x-access-token'];
  jwt.verify(token, server.get('key'), (err, decoded) => {
    if (err) {
      res.status(403).json({
        status: 'Error',
        message: err.message
      });
    } else {
      console.log(`User avec l'id ${decoded.login}`);
      next();
    }
  })
}
//Imports

var express = require("express");
var bodyParser = require("body-parser");
var usersCtrl = require("./Routes/userCtrl");
var postsCtrl = require("./Routes/postCtrl");

//Instantiate server

var server = express();
//clé pour jwt
server.set("key", "MY_KEY_FOR_CRYPTAGE");

//Configuration bP
server.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
server.use(bodyParser.json());

server.use("/", usersCtrl);
server.use("/api", postsCtrl);

//Configuration routes
server.get("/", function (req, res, next) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send("<h1>Bienvenue sur mon serveur</h1>");
});
//server.use("/api/".apiRouter);

server.listen(7070, function () {
  console.log("Serveur en écoute");
});
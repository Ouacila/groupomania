//Imports

var express = require("express");
var bodyParser = require("body-parser");
var apiRouter = require("./apiRouter").router;

//Instantiate server

var server = express();

//Configuration bP
server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(bodyParser.json());

//Configuration routes
server.get("/", function (req, res, next) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send("<h1>Bienvenue sur mon serveur</h1>");
});
server.use("/api/".apiRouter);

server.listen(8080, function () {
  console.log("Serveur en écoute");
});
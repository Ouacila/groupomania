//Imports

var express = require("express");
var bodyParser = require("body-parser"); // renvoie un middleware qui analyse uniquement le json;
var usersCtrl = require("./Routes/userCtrl");
var postsCtrl = require("./Routes/postCtrl");
const jwt = require("jsonwebtoken");
var cors = require("cors");
var helmet = require("helmet");
var session = require("cookie-session");

//Instantiate server

var server = express();
server.use(cors());
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
server.use(helmet());

//Configuration routes
server.get("/", function (req, res, next) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send("<h1>Bienvenue sur mon serveur</h1>");
});

server.listen(7070, function () {
  console.log("Serveur en écoute");
});

server.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
/* Ces headers permettent :
d'accéder à notre API depuis n'importe quelle origine ( '*' ) ;
d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;
d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).*/

// Empêche l'ouverture de la page dans le cadre ou l'iframe pour protéger du détournement de clic
server.disable("x-powered-by");

function validateUser(req, res, next) {
  var token =
    req.headers["authorization"].split(" ")[1] || req.headers["x-access-token"];
  jwt.verify(token, server.get("key"), (err, decoded) => {
    if (err) {
      res.status(403).json({
        status: "Error",
        message: err.message,
      });
    } else {
      console.log(`User avec l'id ${decoded.login}`);
      next();
    }
  });
}

server.use(
  session({
    name: "session",
    keys: ["userId"],
    cookie: {
      secure: true,
      httpOnly: true,
      expires: 2,
    },
  })
);

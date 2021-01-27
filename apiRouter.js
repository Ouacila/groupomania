//Imports de modules
var express = require("express");
var usersCtrl = require("./Routes/userCtrl");

//Router

exports.router = (function () {
  var apiRouter = express.Router();

  //routes users
  apiRouter.route("/signup").post(usersCtrl.signup);
  apiRouter.route("/login").post(usersCtrl.login);

  return apiRouter;
})();
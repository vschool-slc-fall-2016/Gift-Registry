var express = require("express");
var registryRoute = express.Router();
var User = require("../models/userModel");
var Registry = require("../models/registryModel");


registryRoute.route("/")
    .get(function(req, res){
         Registry.find({owner: req.user._id}, function(err, registry){
             if(err) res.status(500).send(err);
             res.send(registry)
             })
})

module.exports = registryRoute;
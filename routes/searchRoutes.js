var express = require("express");
var searchRoute = express.Router();
var User = require("../models/userModel");
var Item = require("../models/registryModel")
searchRoute.route("/")
	.get(function (req, res) {
		User.find(function (err, user) {
			console.log(user);
			if (err) res.status(500).send(err);
			res.send(user);
		})
	})

    

       
           

module.exports = searchRoute;
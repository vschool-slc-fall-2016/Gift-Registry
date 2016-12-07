var express = require("express");
var searchRoute = express.Router();
var User = require("../models/userModel");
var Item = require("../models/registryModel");
//var ObjectId = require("mongoose").Types.ObjectId;

searchRoute.route("/")
	.get(function (req, res) {
		User.find(function (err, user) {
			if (err) res.status(500).send(err);
			res.send(user);
		})
	})

searchRoute.route('/:userId')
	.get(function (req, res) {
		console.log(req.params.userId);
		Item.find({
			"owner": req.params.userId
		}, function (err, registry) {
			if (err) res.sataus(500).send(err);
			res.send(registry)
		})
	})



module.exports = searchRoute;
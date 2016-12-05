var express = require("express");
var registryRoute = express.Router();
var User = require("../models/userModel");
var Registry = require("../models/registryModel");


registryRoute.route("/")
	.get(function (req, res) {
		Registry.find({
			owner: req.user._id
		}, function (err, registry) {
			if (err) res.status(500).send(err);
			res.send(registry)
		})
	})

.post(function (req, res) {
	var registry = new Registry(req.body);

	registry.owner = req.user._id;

	registry.save(function (err, newRegistry) {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(newRegistry);
		}
	})
})

module.exports = registryRoute;
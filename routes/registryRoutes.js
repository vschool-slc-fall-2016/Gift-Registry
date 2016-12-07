var express = require("express");
var registryRoute = express.Router();
var User = require("../models/userModel");
var Item = require("../models/registryModel");


registryRoute.route("/")
	.get(function (req, res) {
		Item.find({owner: req.user._id}, function(err, registry){
            if(err) res.sataus(500).send(err);
            res.send(registry)
        })
            
	})

.post(function (req, res) {
	var item = new Item(req.body);
//    var user = new User(req.body);
	item.owner = req.user._id;
	item.save(function (err, newItem) {
		if (err) {
			res.status(500).send(err);
		} else {
//            user.registry.push(newRegistry);
			res.status(201).send(newItem);
		}
	})
})

registryRoute.route("/:registryId")
    .delete(function(req,res){
        Item.findOneAndRemove(req.params.registryId, function(err, deleteitem){
            if(err){
                res.status(500).send(err);
            }else{
                res.send(deleteitem);
            }
        })
})


module.exports = registryRoute;
var express = require("express");
var profileRoute = express.Router();
var User = require("../models/userModel");

profileRoute.route("/")
    .get(function(req, res){
        User.findById({_id: req.user._id}, function(err, user){
        console.log(user);
        if(err) res.status(500).send(err);
        res.send(user);
    })    
    
})
    .post(function(req, res){
        var profile = new User(req.body);
//        profile.firstName = req.user._id;
    
        profile.save(function(err, updateProfile){
            if(err) res.status(500).send(err);
            res.status(201).send(updateProfile);
        })
})

 
module.exports = profileRoute;

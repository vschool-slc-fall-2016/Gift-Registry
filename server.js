var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var config = require("./config");
var logger = require("morgan");

var port = process.env.PORT || 8000;

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, "public")))

app.use(logger("dev"));

mongoose.connect(config.database, function(err){
    if(err) throw err;
    console.log("Suffully connected to the database")
})

app.listen(port, function(){
    console.log("server is listening on port: " + port)
})
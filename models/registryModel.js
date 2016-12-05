var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

//one user only have one registry
//
var registrySchema = new Schema({
    name:{
        type: String
    },
    price:{
        type: Number
    },
    isPurchased:{
        type: Boolean
    },
    owner:{
        type: ObjectId,
        ref:"User"
    } 
})

module.exports = mongoose.model("Registry", registrySchema)
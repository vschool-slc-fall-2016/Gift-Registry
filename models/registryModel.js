var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

//one user only have one registry
//
var registrySchema = new Schema({
    name:{
        type: String
    },
   salePrice:{
        type: Number
    },
    mediumImage:{
        type: String
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
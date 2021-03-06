var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var userSchema = new Schema({
    firstName: {
        type: String,
       required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    userAddress:{
        state: String,
        address: String
    }
//    items:[{
//        //should only have ObjectId as it is defined as variable above?
//		type:ObjectId,
//        ref: "Registry"
//    }]
})

module.exports = mongoose.model("User", userSchema);
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
        type: String
    },
    password:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    State:{
        type: String,
        required: true
    }
    registry:[{
        type:Schema.Types.ObjectId,
        ref: "Registry"
    }]
})

module.exports = mongoose.model("User", userSchema);
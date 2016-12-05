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
        type: String,
        state: String,
        address: String,
        required: true
    },
    registry:[{
        type:Schema.Types.ObjectId,
        ref: "Registry"
    }]
})

module.exports = mongoose.model("User", userSchema);
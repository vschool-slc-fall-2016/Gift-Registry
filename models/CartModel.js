var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;


var cartSchema = new Schema({
    item: {
        type: ObjectId,
        ref:"Registry"
    }
})

module.exports = mongoose.model("Cart", cartSchema);
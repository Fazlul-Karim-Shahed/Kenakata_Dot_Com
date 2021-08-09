
const {Schema, model} = require("mongoose")

const Comment = model("Comment", Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    comment : String,
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    }
}))


module.exports.Comment = Comment
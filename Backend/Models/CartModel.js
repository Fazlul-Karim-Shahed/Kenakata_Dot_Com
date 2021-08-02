
const {model, Schema} = require("mongoose")

const Cart = model("Cart", Schema({

    product : {
        type : Schema.Types.ObjectId,
        ref : "Product"
    },
    price : Number,
    quantity : Number,
    user : {
        type: Schema.Types.ObjectId,
        ref : "User"
    }
}))


module.exports.Cart = Cart
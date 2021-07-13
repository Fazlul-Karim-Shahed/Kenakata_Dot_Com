
const { Schema, model} = require('mongoose')

const Product = model("Product", Schema({
    category : {
        type : Schema.Types.ObjectId,
        ref : "Category"
    },
    name : String,
    description : String,
    stock : Number,
    price : Number,
    photo : {
        data : Buffer, contentType : String
    }

}))

module.exports.Product = Product
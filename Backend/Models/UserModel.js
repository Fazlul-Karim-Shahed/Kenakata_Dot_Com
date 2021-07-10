
const { Schema, model } = require('mongoose')

const User = model("User", Schema({
    firstName: String,
    lastName: String,
    password: String,
    mobile: Number,
    email : String,
    role : {
        type: String,
        default : "user"
    }

}))


module.exports.User = User
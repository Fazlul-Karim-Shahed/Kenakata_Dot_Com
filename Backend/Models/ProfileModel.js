
const {model, Schema} = require('mongoose')



const Profile = model("Profile", Schema({

    user : {type : Schema.Types.ObjectId, ref: "User"},
    photo : {data: Buffer, contentType : String},
    address1 : String,
    address2 : String,
    postCode : Number,
    fax : Number,
    city: String

}))



module.exports.Profile = Profile
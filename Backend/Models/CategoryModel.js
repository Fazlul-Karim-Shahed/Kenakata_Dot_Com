
const { Schema, model } = require('mongoose')


const Category = model('Category', Schema({

    category: {
        type: String,
        unique: true
    }

}))

module.exports.Category = Category
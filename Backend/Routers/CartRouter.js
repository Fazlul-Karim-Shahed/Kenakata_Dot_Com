
const express = require('express')
const { Authorized } = require('../Middlewares/Authorized')
const { Cart } = require('../Models/CartModel')
const router = express()

router.use(express.json({
    type: ['application/json', 'text/plain']
}))



const addCart = async (req, res) => {
    try {
        const data = await Cart.create(req.body)
        res.send(data)

    }
    catch (err) {

    }
}

const getCart = async(req, res) => {

    try{
        const data = await Cart.find({ user: req.user._id})
        .populate("product")
        .populate("user")
        res.send(data)
    }
    catch(err){

    }
}

router.post('/add', Authorized, addCart)
router.get('/get', Authorized, getCart)





module.exports = router
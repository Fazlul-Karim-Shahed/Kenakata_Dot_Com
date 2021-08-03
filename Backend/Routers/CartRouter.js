
const express = require('express')
const { Authorized } = require('../Middlewares/Authorized')
const { Cart } = require('../Models/CartModel')
const router = express()

router.use(express.json({
    type: ['application/json', 'text/plain'],
    limit: '50mb'
}))



const addCart = async (req, res) => {
    try {
        const findData = await Cart.findOne({ user: req.user._id, product: req.body.product })
        if (findData) {
            res.send({ message: "Already added", type: false })
        }
        else {
            const data = await Cart.create(req.body)
            res.send(data)
        }


    }
    catch (err) {

    }
}

const getCart = async (req, res) => {

    try {
        const data = await Cart.find({ user: req.user._id })
            .populate("product")
            .populate("user")
        res.send(data)
    }
    catch (err) {
        res.send({ message: "Something went wrong", type: false })
    }
}

const updateCart = async (req, res) => {
    try {
        const data = await Cart.updateOne({ user: req.user._id, product: req.body.product }, {
            product: req.body.product,
            user: req.user._id,
            price: Number(req.body.price),
            quantity: Number(req.body.quantity)
        })
        if (data.ok === 1) res.send({ message: "Updated successfully", type: true })
        else res.send({ message: "Something went wrong", type: false })
    }
    catch (err) {
        res.send({ message: "Something went wrong", type: false })
    }
}


const deleteCart = async (req, res) => {
    try {
        const data = await Cart.deleteOne({ user: req.user._id, product: req.body.product })
        if (data.ok === 1) res.send({ message: "deleted successfully", type: true })
        else res.send({ message: "Something went wrong", type: false })
    }
    catch (err) {
        res.send({ message: "Something went wrong", type: false })
    }
}

router.post('/add', Authorized, addCart)
router.get('/get', Authorized, getCart)
router.post('/update', Authorized, updateCart)
router.delete('/remove', Authorized, deleteCart)





module.exports = router
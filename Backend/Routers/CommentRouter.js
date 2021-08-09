
const express = require("express")
const { Authorized } = require("../Middlewares/Authorized")
const { Comment } = require('../Models/CommentModal')
const router = express()

router.use(express.json({
    type: ['application/json', 'text/plain'],
    limit: '50mb'
}))

const addComment = async (req, res) => {
    try {
        const data = await Comment.create({
            user: req.user._id,
            product: req.body.product,
            comment: req.body.comment
        })
        res.send(data)
    }
    catch (err) {
        res.send({ message: "Something went wrong", type: false })
    }
}

const getComment = async (req, res) => {
    try {
        const data = await Comment.find({ product: req.body.product })
            .populate("user")
            .populate("product")
        res.send(data)
    }
    catch (err) {
        res.send({ message: "Something went wrong", type: false })
    }
}

router.post("/add", Authorized, addComment)
router.post("/get", getComment)


module.exports = router
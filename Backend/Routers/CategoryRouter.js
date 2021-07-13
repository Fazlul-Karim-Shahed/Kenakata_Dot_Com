

const express = require('express')
const router = express()
const { AdminAuthorized } = require('../Middlewares/AdminAuthorized')
const { Authorized } = require('../Middlewares/Authorized')
const {Category} = require('../Models/CategoryModel')


router.use(express.json({
    type: ['application/json', 'text/plain']
}))


const createCategory = async(req, res) => {

    try{
        const checkData = await Category.findOne({ category: req.body.category })
        if (checkData) {
            res.send({ message: "Already exist", type: false })
        }
        else {
            const data = await Category.create({
                category: req.body.category
            })
            res.send({ message: "Category created successfully", type: true })
        }
    }catch(err){
        res.send({message : err, type : false})
    }

}

const getCategory = async(req, res) => {
    const data = await Category.find()
    res.send(data)
}

router.post('/create', Authorized, AdminAuthorized, createCategory)
router.get('/get', getCategory)

module.exports = router
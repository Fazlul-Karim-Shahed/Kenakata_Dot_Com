
const express = require('express')
const router = express()
const { Product } = require('../Models/ProductModel')
const formidable = require('formidable')
const _ = require('lodash')
const fs = require('fs')


router.use(express.json({
    type: ['application/json', 'text/plain']
}))


const createProduct = async (req, res) => {

    try {
        let form = new formidable.IncomingForm()
        form.keepExtensions = true
        form.parse(req, (err, fields, files) => {
            if (files && files.photo.size > 0) {
                if (files.photo.size > 307200) {
                    console.log("File size should be maximum 300kb")
                    res.send({ message: "File size should be maximum 300kb" })
                }
                else {
                    const data = new Product(_.pick(fields, ["price", "stock", "description", "category", "name"]))

                    fs.readFile(files.photo.path, (err, buffData) => {
                        data.photo.data = buffData
                        data.photo.contentType = files.photo.type

                        const saveData = async () => {
                            const finalData = await data.save()
                            res.send(finalData)
                        }
                        saveData()
                    })
                }

            }
            else {
                res.send({ message: "Product creation failed", type: false })
            }
        })
    } catch (err) {
        res.send({ message: "Product creation failed", type: false })
    }

}


const getProducts = async (req, res) => {
    console.log(req.header("skip"))
    try {
        const data = await Product.find()
            .populate("category")
            .skip(Number(req.header("skip")))
            .limit(4)
        res.send(data)
    } catch (err) {
        res.send({ message: "Something went wrong", type: false })
    }
}

const productDetails = async (req, res) => {
    try {
        const data = await Product.findOne({ _id: req.body.productId })
        if (data) {
            console.log(req.body.productId)
            res.send(data)
        }
        else {
            res.send({ message: "Data not found", type: false })
        }
    }
    catch (err) {

    }
    
}


router.get('/get', getProducts)
router.post('/create', createProduct)
router.post('/details', productDetails)



module.exports = router
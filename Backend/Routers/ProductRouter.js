
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

}


const getProducts = async (req, res) => {
    const data = await Product.find()
        .populate("category")
    res.send(data)
}

router.get('/get', getProducts)
router.post('/create', createProduct)



module.exports = router
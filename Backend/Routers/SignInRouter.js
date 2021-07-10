
const express = require('express')
const router = express()
const { User } = require('../Models/UserModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const _ = require('lodash')

router.use(express.json({
    type: ['application/json', 'text/plain']
}))


const signIn = async (req, res) => {

    try {
        const findData = await User.findOne({ email: req.body.email })
        if (findData) {
            const checkPass = await bcrypt.compare(req.body.password, findData.password)

            if (checkPass) {
                
                const token = await jwt.sign(_.pick(findData, ["firstName", "lastName", "mobile", "email", "role"]), "secret-key", {expiresIn:"1h"})

                res.send({ token: token, message: "Login successfully", type: true })
                
            }
            else res.send({ message: "Password doesn't match", type: false })
        }
        else {
            res.send({ message: "Email not found", type: false })
        }


    } catch (err) {
        res.send({ message: "Something went wrong", type: false })
    }
}

router.post('/', signIn)


module.exports = router
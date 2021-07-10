
const express = require('express')
const router = express()
const { User } = require('../Models/UserModel')
const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

router.use(express.json({
    type: ['application/json', 'text/plain']
}))

const signUp = async (req, res) => {

    try {
        const findData = await User.findOne({ email: req.body.email })
        if (!findData) {
            const data = new User(_.pick(req.body, ["firstName", "lastName", "mobile", "email"]))

            const salt = await bcrypt.genSalt(10)
            data.password = await bcrypt.hash(req.body.password, salt)

            const user = await data.save()
            console.log("User", user)
            let token = await jwt.sign(_.pick(user, ["firstName", "lastName", "mobile", "email", "role"]), "secret-token", { expiresIn: "1h" })

            res.send({ token: token, message: "Account created successfully", type: true })

        } else {
            res.send({ message: "Email already exist", type: false })
        }


    } catch (err) {
        res.send({ message: "Something went wrong", type: false })
    }
}


router.post('/', signUp)





module.exports = router
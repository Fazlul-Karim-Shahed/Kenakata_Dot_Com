
const jwt = require('jsonwebtoken')

const Authorized = async (req, res, next) => {

    try {

        const token = req.header("Authorization")
        // console.log(token)
        let verifyData = await jwt.verify(token, "secret-key")
        // console.log(verifyData)
        if (verifyData) {
            req.user = verifyData
            // console.log(req.user)
            next()
        }
        else req.send({ message: "Authorization failed", type: false })

    } catch (err) {
        // req.send({ message: err, type: false })
        console.log(err)
    }

}

module.exports.Authorized = Authorized
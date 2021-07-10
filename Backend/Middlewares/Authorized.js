
const jwt = require('jsonwebtoken')

const Authorized = async (req, res, next) => {

    try {

        const token = req.header("Authorization")
        let verifyData = await jwt.verify(token, "secret-key")
        if(verifyData){
            req.user = verifyData
            next()
        }
        else req.send({message : "Authorization failed", type : false})

    } catch (err) {
        req.send({ message: err, type: false })
    }

}

module.exports.Authorized = Authorized
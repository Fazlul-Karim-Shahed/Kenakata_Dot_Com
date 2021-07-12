

const AdminAuthorized = async(req, res, next) => {
    if(req.user.role == "admin"){
        next()
    }
    else{
        res.send({message : "You are not admin", type: false})
    }
}

module.exports.AdminAuthorized = AdminAuthorized
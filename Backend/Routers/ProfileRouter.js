
const express = require('express')
const router = express()
const _ = require('lodash')
const formidable = require('formidable')
const { Profile } = require('../Models/ProfileModel')
const fs = require('fs')
const image_conversion = require('image-conversion')
const {Authorized} = require('../Middlewares/Authorized')


router.use(express.json({
    type: ['application/json', 'text/plain']
}))


const updateProfile = async (req, res) => {

    try {

        const findData = await Profile.findOne({ user: req.user._id })
        let form = new formidable.IncomingForm()
        form.keepExtensions = true
        form.parse(req, (error, fields, files) => {

            if (!findData) {
                const profileData = new Profile(_.pick(fields, ['city', 'fax', 'user', 'address1', 'address2', 'postCode']))

                if (files && files.photo.size > 0) {
                    profileData.photo.contentType = files.photo.type
                    fs.readFile(files.photo.path, (err, buff) => {
                        profileData.photo.data = buff
                        const saveData = async () => {
                            const finalData = await profileData.save()
                            res.send({ data: finalData })

                        }
                        saveData()
                    })

                }
                else {
                    const saveData = async () => {
                        const finalData = await profileData.save()
                        res.send({ data: finalData })

                    }
                    saveData()
                }

            }

        })





    } catch (err) {

    }

}


const getProfile = async(req, res) => {

    // console.log(req.user)
    try{

        const data = await Profile.findOne({user : req.user._id})
        res.send(data)

    }catch(err){

    }
}

router.post('/', Authorized , updateProfile)
router.get('/', Authorized, getProfile)



module.exports = router
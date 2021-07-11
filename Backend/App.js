const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const SignUpRouter = require('./Routers/SignUpRouter')
const SignInRouter = require('./Routers/SignInRouter')
const ProfileRouter = require('./Routers/ProfileRouter')


dotenv.config()


mongoose.connect("mongodb+srv://fazlul_karim:71217@cluster0.syo05.mongodb.net/Kenakata-Dot-Com?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(data => console.log("connected")).catch(err => console.log(err))


app.use(cors())
app.use(express({
    type: ['application/json', 'text/plain']
}))


app.use('/signup', SignUpRouter)
app.use('/signIn', SignInRouter)
app.use('/profile', ProfileRouter)



app.get('/', (req, res) => {
    res.send({message : "All ok"})
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Running on port on ${port}`)
})
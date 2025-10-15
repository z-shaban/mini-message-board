const express = require('express')
const app = express()
const PORT = 3000
const index = require('./routes/index')
const newMessage = require('./routes/new')
const path = require ('path')

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))
app.use('/', index)
app.use('/new', newMessage)
app.use(express.urlencoded({extended: true}))

app.listen(PORT, (error)=>{
    if(error){
        throw error
    }
    console.log('server is running')
})
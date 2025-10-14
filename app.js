const express = require('express')
const app = express()
const PORT = 3000
const index = require('./routes/index')
const path = require ('path')

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')


app.use('/', index)
app.listen(PORT, (error)=>{
    if(error){
        throw error
    }
    console.log('server is running')
})
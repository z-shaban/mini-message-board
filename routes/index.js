const {Router} = require('express')
const index = Router();

const messages = [
    {
        text : 'hey there',
        user: 'Marion',
        date: new Date()
    },

     {
        text : 'whatsup',
        user: 'Norman Bates',
        date: new Date()
    }

]

index.get('/', (req,res)=>{
    res.render('index',{messages : messages})
})

module.exports = index
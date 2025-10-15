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

index.get('/message/:id', (req,res)=>{
    const id = req.params.id
   const detailedMessage = messages.find((message,index)=> id == index)
    res.render('message',{detailedMessage})}
)



index.post('/new', (req,res)=>{
   messages.push({text: req.body.message, user: req.body.name, date: new Date()})
   res.redirect('/')
})

module.exports = index
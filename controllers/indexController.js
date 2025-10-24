const db = require('../db/queries')

async function getAllmessages(req,res) {
    const messages = await db.getAllmessages()
    res.render('index', {messages : messages})
}

async function insertMessage(req,res){
   await db.insertMessage(req.body)
   res.redirect('/')
}

async function openMessage(req,res){
    const id = req.params.id
    const detailedMessage = await db.openMessage(id)
    console.log(detailedMessage)
    res.render('message', {detailedMessage :detailedMessage})
   
}

module.exports = {
    getAllmessages,
    insertMessage,
    openMessage
}
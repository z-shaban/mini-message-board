const {Router} = require('express')
const index = Router();
const indexController = require('../controllers/indexController')

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

index.get('/', indexController.getAllmessages)

index.get('/message/:id', indexController.openMessage)



index.post('/new', indexController.insertMessage)

module.exports = index
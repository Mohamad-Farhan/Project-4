const express = require ('express')
const {getAllUser , addMessage} = require('../../controllers/Contact/contactController')
const contactRouter = express.Router()




contactRouter.get('/user' , getAllUser)

contactRouter.post('/contact-us', addMessage)


module.exports = contactRouter
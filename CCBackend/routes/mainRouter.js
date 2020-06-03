require('dotenv').config()
const express = require('express')
const router = express.Router();

const userHelper = require('./Helpers/userHelpers')

router.get('/api', (req, res)=>{
    res.send('hola')
    console.log('hey there')
})

router.post('/api/users', userHelper.createUser)

module.exports = router;
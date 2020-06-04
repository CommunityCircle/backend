require('dotenv').config()
const express = require('express')
const router = express.Router();

const signup = require('../auth/authRoutes')

router.get('/api', (req, res)=>{
    res.send('hola')
    console.log('hey there')
})

router.use('/api/', signup)

module.exports = router;
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const server = express()
const router = require('../routes/mainRouter.js')
const DB = require('../data/db')



server.use(express.json());
server.use(helmet())
server.use(cors())
// server.use(DB)
server.use('/', router)
DB.on('error', console.error.bind(console, 'MongoDB connection error:'))
module.exports = server;
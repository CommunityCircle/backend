require("dotenv");
const mongoose = require('mongoose');

const mDBPassword = process.env.MDBPASSWORD;

const mDBUser = process.env.MDBUSER;

const connectString = `mongodb+srv://${mDBUser}:${mDBPassword}@cluster0-2ytf0.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(connectString, { useNewUrlParser: true, useUnifiedTopology: true })
.then(client => console.log('Connected to DB'))
.catch(err=>console.log('Your Error :', err)); 

const db = ()=> mongoose.connection

module.exports = db;

require("dotenv");
const mongoose = require('mongoose');

const mDBPassword = process.env.MDBPASSWORD;

const mDBUser = process.env.MDBUSER;

mongoose.connect(`mongodb+srv://${mDBUser}:${mDBPassword}@cluster0-2ytf0.mongodb.net/communityCircle?retryWrites=true&w=majority`, { useNewUrlParser: true })
    .then(()=>console.log("connected to the db"))
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db

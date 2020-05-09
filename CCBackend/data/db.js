require('dotenv')
const MongoClient = require('mongodb').MongoClient;

const mDBPassword = process.env.MDBPASSWORD

const mDBUser = process.env.MDBUSER

MongoClient.connect(`mongodb+srv://${mDBUser}:${mDBPassword}@cluster0-2ytf0.mongodb.net/test?retryWrites=true&w=majority`, (err, client)=>{
    
})
require("dotenv");
const MongoClient = require("mongodb").MongoClient;

const mDBPassword = process.env.MDBPASSWORD;

const mDBUser = process.env.MDBUSER;

const connectString = `mongodb+srv://${mDBUser}:${mDBPassword}@cluster0-2ytf0.mongodb.net/test?retryWrites=true&w=majority`;

MongoClient.connect(
  connectString,
  { useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      return console.log("Error :", err);
    }
    console.log("connected to Database");
  }
);

module.exports = MongoClient;

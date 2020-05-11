const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    firstName : String,
    lastName : String,
    email : String
},{timestamps:true})

module.exports = 
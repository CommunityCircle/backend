const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const User = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, unique: true, required: true },
    password: {
      type: String,
     
      validate: [
        function (input) {
          return input.length >= 6;
        },
        "Password should be longer",
      ],
      required: ()=>this.password!= null,
    },
    email: {
      type: String,
      unique: true,
      required: true,
  
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ]}
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);

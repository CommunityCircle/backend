const User = require("../data/model/userModel.js");
const express = require("express");
const bcrypt = require("bcryptjs")
const router = express.Router();


router.post('/signup',(req, res) => {
  const body = req.body;
  const hash = bcrypt.hashSync(body.password, 14)
  body.password = hash
  if (!body) {
    return res
      .status(400)
      .json({ success: false, error: "You must provide user information" });
  }

  const user = new User(body);
  if (!user) {
    return res.status(400).json({ success: false, error: err });
  }

  user
    .save()
    .then(()=>{
        return res.status(201).json({
            success: true,
            id: user._id,
            message : 'User Created'
        })
    })
    .catch(err =>{
      res.status(400).json(err)
    })
}).createUser



module.exports =router
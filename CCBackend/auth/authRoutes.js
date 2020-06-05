const User = require("../data/model/userModel.js");
const express = require("express");
const bcrypt = require("bcryptjs")
const { generateToken } = require("./token-service.js");
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

router.post('/login', (req, res) => {
    const {username, password} = req.body

    User.findOne({username})
        .then( user =>{
            console.log(user._id)
            if(user && bcrypt.compareSync(password, user.password)){
                const token = generateToken(user)
                
            }
        })

})



module.exports =router
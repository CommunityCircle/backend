const User = require("../data/model/userModel.js");
const express = require("express");
const bcrypt = require("bcryptjs");
const { generateToken } = require("./token-service.js");
const router = express.Router();

router.post("/signup", (req, res) => {
  const body = req.body;
  const hash = bcrypt.hashSync(body.password, 10);
  body.password = hash;
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
    .then(() => {
      return res.status(201).json({
        success: true,
        id: user._id,
        message: "User Created",
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}).createUser;

router.post("/login", (req, res) => {
  const username = req.body.userName;
  const password = req.body.password;

    User.findOne( {userName : username} )
    .then(user => {
    console.log("db password", user.password);
    console.log(password);

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({
        message: `${user.userName} is logged in`,
        token,
        id: user.id,
      });
    } else {
      res.status(401).json({ message: "You shall not pass!" });
    }})
   .catch(err => {
    res.status(500).json(err, {message : "oops"});
  })
});

module.exports = router;

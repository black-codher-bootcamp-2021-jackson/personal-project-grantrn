// everything related to users add delte update

const router = require("express").Router();
const User = require("../models/User");


//REGISTER
router.post("/register", (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const user = newUser.save();
    res.send(newUser);
  } catch (err) {
    console.log(err);
  }
});

//LOG IN
router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).send("User not found"); // have to add return statement otherwise settingt header error
  } // if don't have async and await then only password is checked
  const correct_password = req.body.password === user.password;
  if (correct_password === false) {
    return res.status(400).send("Incorrect password"); // have to add return statement otherwise settingt header error
  }
  res.status(200).send(user);
});

//UPDATE USER

//DELETE USER

// GET A USER

// FOLLOW A USER

// UNFOLLOW A USER

module.exports = router;

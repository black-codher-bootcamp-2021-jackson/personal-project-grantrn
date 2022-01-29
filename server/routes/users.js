// everything related to users add delte update

const router = require("express").Router();
const User = require("../models/User");

//TEST
router.get("/test", (req, res) => res.send("route testing!"));

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
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).send("Account has been updated");
    } catch (err) {
      return res.status(400);
    }
  } else {
    return res.status(403).send("You can update only your account!");
  }
});
//UPDATE CR BOOK
router.patch("/:id/currently", async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, {
      $push: req.body,
    });
    res.status(200).send("Book has been updated");
  } catch (err) {
    return res.status(400);
  }
});

//GET A USER
router.get("/:id/", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
  } catch (err) {
    res.status(400);
  }
});

// GET CURRENTLY READING
router.get("/:id/currently", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const currentBooks = user.currentBooks;
    res.status(200).send(currentBooks);
  } catch (err) {
    res.status(400);
  }
});

//DELETE USER

// GET A USER

// FOLLOW A USER

// UNFOLLOW A USER

module.exports = router;

// everything related to users add delte update

const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

//TEST
router.get("/test", (req, res) => res.send("route testing!"));

//REGISTER
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10); //A salt is a random string. By hashing a plain text password plus a salt, the hash algorithm’s output is no longer predictable. The same password will no longer yield the same hash.
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //save user and respond
    const user = await newUser.save();
    res.send(newUser);
  } catch (err) {
    console.log(err);
  }
});

//LOG IN
router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).send("user not found");
  }

  const correctPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (user) {
    const token = jwt.sign(
      {
        email: user.email,
        userId: user._id,
      },
      process.env.JWT_KEY,
      {
        expiresIn: "1h",
      }
    );
    return res.status(200).json({
      message: "Auth successful",
      token: token,
      user: user,
    });
  }

  if (!correctPassword) {
    return res.status(400).send("wrong password");
  }
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

//GET A USER
router.get("/:id/", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
  } catch (err) {
    res.status(400);
  }
});

//UPDATE CURRENTLY READING BOOK
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

//UPDATE WANT TO READ
router.patch("/:id/want", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, {
      $pull: req.body,
    });
    res.status(200).send("Book has been updated");
  } catch (err) {
    return res.status(400);
  }
});

//ADD TO READ
router.patch("/:id/read", async (req, res) => {
  console.log(req.body);
  //u[pdate many??
  try {
    await User.findByIdAndUpdate(req.params.id, {
      $push: req.body,
      $pull: { currentBooks: req.body.read },
    });
    res.status(200).send("Book has been updated");
  } catch (err) {
    return res.status(400);
  }
});

module.exports = router;

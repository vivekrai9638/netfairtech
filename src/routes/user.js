const express = require("express");
const auth = require("../middleware/auth");
const User = require("../models/user");
const {
  sendWelcomeEmail,
  sendCancellationEmail,
} = require("../emails/account");

const router = new express.Router();

// Signup/Register endpoint
router.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    sendWelcomeEmail(user.email, user.name);
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e.message);
  }
});

// Login endpoint
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Logout endpoint
router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token != req.token
    );

    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send();
  }
});

//Logout All endpoint
router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];

    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send();
  }
});

// Delete account endpoint
router.delete("/users/me", auth, async (req, res) => {
  try {
    sendCancellationEmail(req.user.email, req.user.name);
    await req.user.remove();

    res.send(req.user);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;

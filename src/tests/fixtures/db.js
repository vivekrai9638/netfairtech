const mongoose = require("mongoose");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
  _id: userOneId,
  name: "Vivek Kumar",
  email: "test1@test1.com",
  age: 21,
  password: "tes1233",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET),
    },
  ],
};

const setupDatabase = async () => {
  await User.deleteMany();
  await new User(userOne).save();
};

module.exports = {
  userOneId,
  userOne,
  setupDatabase,
};

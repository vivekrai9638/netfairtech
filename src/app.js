const express = require("express");
const cors = require("cors");
const User = require("./models/user");
require("./db/mongoose");

const userRouter = require("./routes/user");

const app = express();
app.use(cors());

// enabling express to convert objects to json
app.use(express.json());

// Router calls
app.use(userRouter);

module.exports = app;

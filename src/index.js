const express = require("express");
const app = require("./app");

const port = process.env.PORT;

// server
app.listen(port, () => console.log("Server up and running at port ", port));

const express = require("express");
const routes = express.Router();

routes.use("/auth",require("./user-auth"))

module.exports = routes;
const express = require("express");
const routes = express.Router();

routes.use("/auth", require("../../main-routes/user"))
module.exports = routes;
const express = require("express");
const routes = express.Router();

routes.use("/users", require("../../main-routes/admin/admin-genaric"));
routes.use("/category", require("../../main-routes/category"));

module.exports = routes;
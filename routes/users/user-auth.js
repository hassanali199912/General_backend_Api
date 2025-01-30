const express = require("express");
const routes = express.Router();
const {
    login,
    register

} = require("../../controllers/users/auth")

//Auth 
routes.post("/login", login);
routes.post("/register", register);



module.exports = routes
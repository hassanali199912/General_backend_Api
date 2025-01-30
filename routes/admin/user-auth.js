const express = require("express");
const routes = express.Router();
const {
    createUsers,
    updateUsers,
    getOneUser,
    getAllUser,
    deleteUser,
    // admin Auth
    login

} = require("../../controllers/dashboard/users")

//Auth 
routes.post("/login", login);

//Admin Crud On Users 
routes.get("/user", getAllUser);
routes.get("/user/:id", getOneUser);
routes.post("/user", createUsers);
routes.put("/user", updateUsers);
routes.delete("/user/:id", deleteUser);



module.exports = routes
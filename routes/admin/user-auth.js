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
routes.get("/", getAllUser);
routes.get("/:id", getOneUser);
routes.post("/", createUsers);
routes.put("/:id", updateUsers);
routes.delete("/:id", deleteUser);



module.exports = routes
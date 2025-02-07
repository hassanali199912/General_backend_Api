const BASECRUED = require("../services/index-crud");
const USERMORECONTROLLERS = require("../controllers/users/user-more-controllers");
const USERMOREROUTES = require("../routes/users/user-more");
const Users = require("../models/users");

const UsertModule = new BASECRUED(Users);
const UserController = new USERMORECONTROLLERS(UsertModule);
const UserRoute = new USERMOREROUTES(UserController);

module.exports = UserRoute.getRouter();
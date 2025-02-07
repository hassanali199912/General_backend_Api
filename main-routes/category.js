const Category = require("../models/category");
const BASICCRUD = require("../services/index-crud");
const BAICCONTROLLERS = require("../controllers/Base-Controller");
const BASEROUTES = require("../routes/Base-Routes");



const categoryModel = new BASICCRUD(Category);
const categoryController = new BAICCONTROLLERS(categoryModel);
const categoryRouter = new BASEROUTES(categoryController);

module.exports = categoryRouter.getRouter();
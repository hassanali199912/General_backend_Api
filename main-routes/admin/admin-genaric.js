const BASECRUED = require("../../services/index-crud");
const AdminController = require("../../controllers/dashboard/admin-more-controller");
const AdminRoutes = require("../../routes/admin/admin-more");
const User = require("../../models/users");

const adminModule = new BASECRUED(User);
const adminController = new AdminController(adminModule);
const adminRouter = new AdminRoutes(adminController);

module.exports = adminRouter.getRouter();


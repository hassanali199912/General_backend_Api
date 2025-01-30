const express = require("express");
const router = express.Router();

const { upload } = require("../utils/MulterImageUploader");

// const authRoutes = require("./auth");
/*======================= Admin Routes =================================== */
const admin = require("./admin/admin");
router.use("/dashboard", admin);
/*======================= Admin Routes =================================== */

/*======================= Users Routes =================================== */
const users = require("./users/users");
router.use("/users", users);
/*======================= Users Routes =================================== */


// /*======================= Products Routes =================================== */
// const productsRoutes = require("./products");
// router.use("/products", upload.array("images"),  productsRoutes);
// /*======================= Products Routes =================================== */

// /*======================= Payments Routes =================================== */
// const paymentsRoutes = require("./payments");
// router.use("/payment", paymentsRoutes);
// /*======================= Payments Routes =================================== */

// /*======================= User Routes =================================== */
// const categoryRoutes = require("./caregory");
// router.use("/category", categoryRoutes);
// /*======================= User Routes =================================== */



module.exports = router;

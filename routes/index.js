const express = require("express");
const router = express.Router();

//const { upload } = require("../utils/MulterImageUploader");

// const authRoutes = require("./auth");
/*======================= Admin Routes =================================== */
const admin = require("./admin/index");
router.use("/dashboard", admin);
/*======================= Admin Routes =================================== */

/*======================= Users Routes =================================== */
const users = require("./users/index");
router.use("/users", users);
/*======================= Users Routes =================================== */





module.exports = router;

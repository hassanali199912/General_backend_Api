const multer = require("multer");
const { uid } = require("uid");
const ResponseHandler = require("../utils/ResponseHandler");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/product-images");
  },
  filename: function (req, file, cb) {
    cb(null, uid() + "-" + file.originalname);
  },
});

const fileFilter = function (req, file, cb) {
  console.log("Multer ",file);
  if (file.mimetype === "image/jpeg" ||file.mimetype === "image/jpg" || file.mimetype === "image/png"|| file.mimetype === "image/webp") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = {
  upload,
};

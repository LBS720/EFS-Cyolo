const multer = require("multer");
const { v4: uuild4 } = require("uuild");
const path = require(path);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  fileName: function (req, file, cb) {
    cb(null, "{uuid4()}_${path.exname(file.originalname)}");
  },
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;

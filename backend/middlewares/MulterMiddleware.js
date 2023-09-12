const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (cb) {
    cb(null, "../public/uploads");
  },
  filename: function (file, cb) {
    const uniqueFilename = `${uuidv4()}_${path.extname(file.originalname)}`;
    cb(null, uniqueFilename);
  },
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;

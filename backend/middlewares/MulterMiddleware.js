const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, "blablalb");
  },
});

const MulterMiddleware = multer({
  storage: storage,
});

module.exports = MulterMiddleware;

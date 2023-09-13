const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    const { id } = req.body;
    const newFilename = id + '.' + file.originalname.split('.').pop();
    cb(null,newFilename);
  },
});

const MulterMiddleware = multer({
  storage: storage,
});

module.exports = MulterMiddleware;

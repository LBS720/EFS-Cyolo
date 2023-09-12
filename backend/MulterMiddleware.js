const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    cb(null, 'uploads'); 
  },
  filename: (req, file, cb) => {
    cb(null, file.id); 
  },
});

const MulterMiddleware = multer({
  storage: storage
})

module.exports = MulterMiddleware;
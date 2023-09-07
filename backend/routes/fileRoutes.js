const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");
const uploadMiddleware = require("../middleware/multerMiddleware");

router.post(
  "/v1/file",
  uploadMiddleware.single("file"),
  fileController.uploadFile
);

router.get("/v1/:fileUrl", fileController.getFileByURL);

module.exports = router;

const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const UploadModel = require("../models/UploadModel");
const MulterMiddleware = require("../middlewares/MulterMiddleware");

router.post("/file", MulterMiddleware.single("image"), async (req, res) => {
  const promises = [];

  try {
    const images = [req.body];
    const { id, name, retentionTime } = req.body;

    images.forEach((image, index) => {
      const newUpload = new UploadModel({
        id: id,
        name: name,
        retentionTime: new Date(retentionTime),
      });

      promises.push(newUpload.save());
    });

    await Promise.all(promises);
    res.status(201);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

module.exports = router;

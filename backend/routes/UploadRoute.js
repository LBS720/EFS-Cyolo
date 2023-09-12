const express = require("express");
const router = express.Router();
const UploadModel = require("../models/UploadModel");
const { v4: uuidv4 } = require("uuid");
const uploadMiddleware = require("../middlewares/MulterMiddleware");

router.post("/file", uploadMiddleware.single("file"), async (req, res) => {
  const promises = [];

  try {
    const images = req.body.images;

    console.log(images);
    images.forEach((image) => {
      const newUpload = new UploadModel({
        name: image.name,
        url: image.url,
        retentionTime: image.retentionTime,
      });

      console.log(newUpload);
      promises.push(newUpload.save());
    });

    await Promise.all(promises);
    res.status(201);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

router.get("/", async (req, res) => {
  try {
    const fileUrl = req.query.fileUrl;

    const file = await UploadModel.findOne({
      url: `/uploads/${fileUrl}`,
    });

    if (!file) {
      return res.status(404).json({ error: "File not found" });
    }

    const retentionTime = new Date(file.retentionTime);

    if (retentionTime <= new Date()) {
      return res.status(404).json({ error: "File has expired" });
    }

    res.status(200).json({
      filename: file.filename,
      url: file.url,
      retentionTime: file.retentionTime,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
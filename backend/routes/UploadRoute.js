const express = require("express");
const router = express.Router();
const UploadModel = require("../models/UploadModel");
const { v4: uuidv4 } = require("uuid");
const uploadMiddleware = require("../middlewares/MulterMiddleware");

// POST /v1/file - Upload a single file
router.post("/file", uploadMiddleware.single("file"), async (req, res) => {
  const promises = [];

  try {
    const images = req.body;

    console.log(images);
    images.forEach((image) => {
      const newUpload = new UploadModel({
        id: uuidv4(), // Generate a new UUID here
        name: image.name,
        url: image.url,
        retentionTime: image.retentionTime,
      });

      console.log(newUpload);
      promises.push(newUpload.save());
    });

    await Promise.all(promises);
    res.status(201).json({ message: "Images uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /v1/:fileUrl - Retrieve a file by URL
router.get("/:fileUrl", async (req, res) => {
  try {
    // Find the document by URL
    const file = await UploadModel.findOne({
      url: `/uploads/${req.params.fileUrl}`,
    });

    if (!file) {
      return res.status(404).json({ error: "File not found" });
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

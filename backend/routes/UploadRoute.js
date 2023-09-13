const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const UploadModel = require("../models/UploadModel");
const MulterMiddleware = require("../middlewares/MulterMiddleware");

router.post("/file", MulterMiddleware.single("image"), async (req, res) => {
  const promises = [];

  try {
    const image = req.file;
    const { id, name, retentionTime } = req.body;

    console.log(req.body);
    console.log(req.file);

    console.log("reach");

    images.forEach((image, index) => {
      const newUpload = new UploadModel({
        id: id,
        name: name,
        retentionTime: retentionTime,
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

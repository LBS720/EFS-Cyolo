const express = require("express");
const router = express.Router();
const UploadModel = require("../models/UploadModel");

router.get("/:fileId", async (req, res) => {
  try {
    const fileId = req.params.fileId; 

    const fileContent = await UploadModel.findOne({
      id: `${fileId}`,
    });

    console.log(fileId);
    console.log(fileContent);

    if (!fileContent) {
      return res.status(404).json({ error: "File not found" });
    }

    const retentionTime = new Date(fileContent.retentionTime);

    if (retentionTime <= new Date()) {
      return res.status(404).json({ error: "File has expired" });
    }

    res.status(200).json({
      id: fileContent.id,
      name: fileContent.name,
      retentionTime: fileContent.retentionTime,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

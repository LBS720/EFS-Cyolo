const express = require("express");
const router = express.Router();
const path = require("path");
const UploadModel = require("../models/UploadModel");

async function removeFile(fileId, filePath) {
  try {
    await UploadModel.deleteOne({ id: fileId });
    await fs.unlink(filePath);
  } catch (error) {
    console.error("Error removing file:", error);
  }
};

router.get("/:fileId", async (req, res) => {
  try {
    const fileId = req.params.fileId; 
    const fileContent = await UploadModel.findOne({
      id: `${fileId}`,
    });
    const retentionTime = new Date(fileContent.retentionTime);
    const fileExtension = fileContent.name.slice((fileContent.name.lastIndexOf(".") - 1 >>> 0) + 2);
    console.log(fileContent.id + "." + fileExtension);
    const imagePath = path.join(__dirname, "../public/uploads", fileContent.id + "." + fileExtension);

    if (!fileContent) {
      return res.status(404).json({ error: "File not found" });
    }

    if (retentionTime <= new Date()) {
      await removeFile(fileId, imagePath);
      return res.status(404).json({ error: "File has expired" });
    }
    
    res.sendFile(imagePath);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

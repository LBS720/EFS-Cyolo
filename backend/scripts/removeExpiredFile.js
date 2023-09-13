const fs = require("fs/promises");
const UploadModel = require("../models/UploadModel");

export async function removeFile(fileId, filePath) {
    try {
      await UploadModel.deleteOne({ id: fileId });
      await fs.unlink(filePath);
    } catch (error) {
      console.error("Error removing file:", error);
    }
 };
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

function uploadFile(req, res) {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const fileExtension = path.extname(req.file.originalname);
  const uniqueFileName = `${uuidv4()}${fileExtension}`;
  const filePath = path.join(__dirname, "../uploads", uniqueFileName);

  fs.renameSync(req.file.path, filePath);

  const fileUrl = `/v1/${uniqueFileName}`;

  res.json({ fileUrl });
}

function getFileByURL(req, res) {}

module.exports = {
  uploadFile,
  getFileByURL,
};

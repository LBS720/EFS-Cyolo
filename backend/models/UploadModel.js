const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const uploadSchema = new mongoose.Schema({
  id: String,
  name: String,
  url: String,
  retentionTime: String,
});

module.exports = mongoose.model("upload", uploadSchema);

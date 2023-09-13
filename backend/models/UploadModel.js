const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  id: String,
  name: String,
  retentionTime: Date,
});

module.exports = mongoose.model("upload", uploadSchema);

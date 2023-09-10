const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
  "mongodb+srv://LBS720:LBSCyolo@efs-cyolo.xs5kdaa.mongodb.net/efs-cyolo",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const uploadSchema = new mongoose.Schema({
  filename: String,
  url: String,
  retentionTime: String,
});

const UploadModel = mongoose.model("Upload", uploadSchema);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadMiddleware = multer({ storage });

const uploadRoutes = require("./routes/UploadRoute");
app.use("/v1", uploadRoutes);

const PORT = process.env.PORT || 5006;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

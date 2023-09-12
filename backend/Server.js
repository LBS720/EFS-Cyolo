const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

mongoose.connect(
  "mongodb+srv://LBS720:LBSCyolo@efs-cyolo.xs5kdaa.mongodb.net/efs-cyolo",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const uploadRoutes = require("./routes/UploadRoute");
app.use("/v1", uploadRoutes);

const PORT = process.env.PORT || 5006;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

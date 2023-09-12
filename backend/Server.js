const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const uploadRoutes = require("./routes/UploadRoute");
const connectToDatabase = require("./db");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/v1", uploadRoutes);

connectToDatabase();

const PORT = process.env.PORT || 5006;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

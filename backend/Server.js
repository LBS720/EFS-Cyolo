const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const UploadRoute = require("./routes/UploadRoute");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 5006;

mongoose.connect(
  "mongodb+srv://LBS720:LBSCyolo@efs-cyolo.xs5kdaa.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(UploadRoute);

app.listen(PORT, () => {
  console.log("server in " + PORT);
});

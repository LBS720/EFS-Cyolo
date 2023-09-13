const express = require("express");
const cors = require("cors");
const path = require("path"); 
const uploadRoute = require("./routes/UploadRoute");
const getImageRoute = require("./routes/GetImageRoute");
const connectToDatabase = require("./database/dbConnection");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/uploads", express.static(path.join(__dirname, "public", "uploads")));

app.use("/v1", uploadRoute);
app.use("/v1", getImageRoute);

connectToDatabase();

const PORT = process.env.PORT || 5006;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

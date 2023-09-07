const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const fileRoutes = require("./routes/fileRoutes");
const molluskRoutes = require("./routes/molluskRoutes");

app.use("/v1/file", fileRoutes);
app.use("/v1/mollusk", molluskRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

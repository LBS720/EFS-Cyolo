const { Router } = require("express");
const uploadMiddleware = require("../middlewares/MulterMiddleware");
const UploadModel = require("../models/UploadModel");

const router = Router();

router.get("/v1/{file-url}", async (req, res) => {
  const photo = await UploadModel.find();
  res.status(200).send(photo);
});

router.post("/v1/file", uploadMiddleware.single("photo"), (req, res) => {
  const photo = req.file.filename;

  console.log(photo);

  UploadModel.create({ photo })
    .then((data) => {
      console.log("upload successfuly ");
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
});

module.exports = router;

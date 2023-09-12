import express from "express";
import upload from "../utils/upload.mjs";
import { uploadImage, getImage } from "../controller/image-controller.mjs";

const router = express.Router();

router.post("/v1/file", upload.single("file"), uploadImage);
router.get("/v1/:fileId", getImage);

export default router;

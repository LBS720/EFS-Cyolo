import express from "express";
import upload from "../utils/upload.mjs";
import { uploadImage, getImage } from "../controller/image-controller.js";

const router = express.Router();

router.post("/v1/file", upload.single("file"), uploadImage);
router.get("/file/:fileId", getImage);

export default router;

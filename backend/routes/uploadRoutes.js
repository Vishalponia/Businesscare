import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { uploadFormFile } from "../controllers/uploadController.js";

const router = express.Router();
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname.replace(/\s+/g,"_"));
  }
});

const upload = multer({ storage });

router.post("/upload", upload.single("file"), uploadFormFile);

// download route (static served from /uploads in server.js)
// delete handled in adminRoutes
export default router;

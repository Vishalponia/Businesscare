import express from "express";
import { adminLogin } from "../controllers/adminController.js";
import { getUploads, deleteUpload } from "../controllers/uploadController.js";
import { adminAuth } from "../middlewares/adminAuth.js";

const router = express.Router();

router.post("/login", adminLogin);
router.get("/uploads", adminAuth, getUploads);

// Delete route (admin)
router.delete("/delete/:id/:fileName", adminAuth, deleteUpload);

export default router;

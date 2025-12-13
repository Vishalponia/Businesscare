import express from "express";
import multer from "multer";
import { handleFormSubmit } from "../controllers/formController.js";

const router = express.Router();

// Accept only text fields (no files). Multer .none() handles multipart/form-data without files.
const upload = multer(); // .none() would be upload.none(), but multer() default works with middleware
router.post("/submit-form", upload.none(), handleFormSubmit);

export default router;

import Registration from "../models/Registration.js";
import fs from "fs";
import path from "path";

// fetch list for admin
export const getUploads = async (req, res) => {
  try {
    const list = await Registration.find().sort({ createdAt: -1 });
    // return items with fields admin expects
    const data = list.map(i => ({
      _id: i._id,
      companyName: i.companyName || i.founderName || "",
      originalName: i.pdfFile || "N/A",
      fileName: i.pdfFile || null
    }));
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// delete entry + file
export const deleteUpload = async (req, res) => {
  try {
    const { id, fileName } = req.params;
    if (fileName) {
      const filePath = path.join(process.cwd(), "uploads", fileName);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }
    await Registration.findByIdAndDelete(id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// legacy (admin can upload an arbitrary filled pdf) — optional
export const uploadFormFile = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ success: false, message: "No file" });
    const { companyName, founderName } = req.body || {};
    const RegistrationModel = await Registration.create({
      companyName,
      founderName,
      pdfFile: req.file.filename
    });
    res.json({ success: true, data: RegistrationModel });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

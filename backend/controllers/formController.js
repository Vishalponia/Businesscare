import Registration from "../models/Registration.js";
import path from "path";
import fs from "fs";
import { registrationHtml } from "../utils/htmlTemplate.js";
import puppeteer from "puppeteer";

export const handleFormSubmit = async (req, res) => {
  try {
    // multer.none() used in route -> req.body has text fields
    const body = req.body || {};

    // normalize checkboxes that might come as 'on' fields
    // If your frontend uses names like category_fmcg, telecast_founder etc,
    // better to process them into arrays. Here we pick keys starting with 'category_' or 'telecast_'
    const categories = [];
    const telecastSegments = [];
    for (const k of Object.keys(body)) {
      if (k.startsWith("category_") && (body[k] === "on" || body[k] === "true" || body[k] === "checked")) {
        categories.push(k.replace("category_", "").replace(/_/g, " "));
      }
      if (k.startsWith("telecast_") && (body[k] === "on" || body[k] === "true" || body[k] === "checked")) {
        telecastSegments.push(k.replace("telecast_", "").replace(/_/g, " "));
      }
    }

    const reg = new Registration({
      ...body,
      categories,
      telecastSegments
    });

    await reg.save();

    // create uploads dir if missing
    const uploadsDir = path.join(process.cwd(), "uploads");
    if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);

    // generate HTML and PDF using Puppeteer
    const html = registrationHtml({ ...body, categories, telecastSegments });

    // Launch Puppeteer (headless)
    const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle0" });

    const filename = `filled-${reg._id}.pdf`;
    const outPath = path.join(uploadsDir, filename);

    await page.pdf({
      path: outPath,
      format: "A4",
      printBackground: true,
      margin: { top: "20px", bottom: "20px", left: "20px", right: "20px" }
    });

    await browser.close();

    // save pdfFile field
    reg.pdfFile = filename;
    await reg.save();

    return res.json({ success: true, file: `/uploads/${filename}` });
  } catch (err) {
    console.error("Submit Error:", err);
    return res.status(500).json({ success: false, message: err.message });
  }
};

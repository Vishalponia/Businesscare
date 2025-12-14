import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import rateLimit from "express-rate-limit";

import { connectDB } from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js";
import formRoutes from "./routes/formRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB();

app.use(helmet());
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://businesscare.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));  
app.use(express.json());
app.use(morgan("dev"));
app.use(rateLimit({ windowMs: 60*1000, max: 100 }));







// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/form", formRoutes);
app.use("/api/form", uploadRoutes); // legacy upload/download
app.use(express.urlencoded({ extended: true }));






// Static
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/blank-forms", express.static(path.join(__dirname, "blank-forms")));

app.get("/", (req,res)=> res.send("Backend running"));

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

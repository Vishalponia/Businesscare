import mongoose from "mongoose";
const RegistrationSchema = new mongoose.Schema({
  founderName: String,
  representativeName: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  email: String,
  phone: String,
  altPhone: String,

  companyName: String,
  gst: String,
  pan: String,
  cin: String,
  msme: String,
  iec: String,
  gender: String,

  // categories & telecastSegments stored as arrays (checkboxes)
  categories: { type: [String], default: [] },
  telecastSegments: { type: [String], default: [] },

  selectedChannel: String,

  signName: String,
  place: String,
  date: String,

  // generated pdf file name (relative)
  pdfFile: String
}, { timestamps: true });

export default mongoose.model("Registration", RegistrationSchema);





import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUs() {
  const [form, setForm] = useState({
    companyName: "",
    ownerName: "",
    mobile: "",
    website: "",
    email: "",
    businessType: "",
    product: "",
    budget: "",
    location: "",
    meetingType: "",
  });

  const WHATSAPP_NUMBER = "918799746544"; 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
📌 *New Business Inquiry*

🏢 Company Name: ${form.companyName}
👤 Owner Name: ${form.ownerName}
📞 Mobile: ${form.mobile}
🌐 Website: ${form.website}
📧 Email: ${form.email}
🏭 Business Type: ${form.businessType}
📦 Product/Service: ${form.product}
💰 Monthly Budget: ${form.budget}
📍 Location: ${form.location}
🗓 Meeting Type: ${form.meetingType}
    `;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    // Optional: clear form after submit
    setForm({
      companyName: "",
      ownerName: "",
      mobile: "",
      website: "",
      email: "",
      businessType: "",
      product: "",
      budget: "",
      location: "",
      meetingType: "",
    });
  };

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-500 via-white to-blue-700 text-gray-800">

        {/* ===== HERO ===== */}
        <div
          className="relative h-[520px] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7)",
          }}
        >
          <div className="relative z-10 text-center px-6">
            <h1 className="text-7xl md:text-7xl font-extrabold text-orange-400">
              Contact Us
            </h1>
          </div>
        </div>

        {/* ===== FORM ===== */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl p-8 md:p-10 space-y-8"
          >
            <h2 className="text-2xl font-bold text-blue-700">
              Business Inquiry Form
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Company Name" name="companyName" value={form.companyName} onChange={handleChange} />
              <Input label="Owner Name" name="ownerName" value={form.ownerName} onChange={handleChange} />
              <Input label="Mobile Number" name="mobile" value={form.mobile} onChange={handleChange} />
              <Input label="Website" name="website" value={form.website} onChange={handleChange} />
              <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
              <Input label="Type of Business" name="businessType" value={form.businessType} onChange={handleChange} />
              <Input label="Product / Service" name="product" value={form.product} onChange={handleChange} />
              <Input label="Monthly Budget" name="budget" value={form.budget} onChange={handleChange} />
              <Input label="Business Location" name="location" value={form.location} onChange={handleChange} />
            </div>

            {/* Meeting Type */}
            <div>
              <label className="block mb-3 text-blue-600 font-semibold">
                Preferred Meeting Type
              </label>
              <div className="flex flex-wrap gap-6">
                <Radio label="Call Meeting" value="Call" name="meetingType" onChange={handleChange} />
                <Radio label="Zoom Meeting" value="Zoom" name="meetingType" onChange={handleChange} />
                <Radio label="Physical Meeting" value="Physical" name="meetingType" onChange={handleChange} />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition"
            >
              Send on WhatsApp
            </button>
          </form>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <Footer />
    </>
  );
}

/* ===== REUSABLE INPUT ===== */
function Input({ label, name, type = "text", value, onChange }) {
  return (
    <div>
      <label className="block mb-1 text-gray-600 font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-3 rounded-lg bg-blue-50 border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none"
        required
      />
    </div>
  );
}

/* ===== RADIO ===== */
function Radio({ label, value, name, onChange }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer text-gray-700">
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        className="accent-blue-600"
        required
      />
      {label}
    </label>
  );
}

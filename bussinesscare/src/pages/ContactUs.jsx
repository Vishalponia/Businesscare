import { useState } from "react";

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // backend later
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ================= HERO SECTION ================= */}
      <div
        className="h-[320px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d)",
        }}
      >
        <div className="bg-black/70 p-10 rounded-xl text-center">
          <h1 className="text-4xl font-bold text-yellow-400">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-300 max-w-xl">
            Let us understand your business needs and help you grow faster.
          </p>
        </div>
      </div>

      {/* ================= FORM SECTION ================= */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 border border-yellow-500/30 rounded-2xl p-10 space-y-8"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Business Inquiry Form
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Company Name" name="companyName" onChange={handleChange} />
            <Input label="Owner Name" name="ownerName" onChange={handleChange} />
            <Input label="Mobile Number" name="mobile" onChange={handleChange} />
            <Input label="Website" name="website" onChange={handleChange} />
            <Input label="Email" name="email" type="email" onChange={handleChange} />
            <Input label="Type of Business" name="businessType" onChange={handleChange} />
            <Input label="Product / Service" name="product" onChange={handleChange} />
            <Input label="Monthly Budget" name="budget" onChange={handleChange} />
            <Input label="Business Location" name="location" onChange={handleChange} />
          </div>

          {/* Meeting Type */}
          <div>
            <label className="block mb-3 text-yellow-300 font-semibold">
              Preferred Meeting Type
            </label>
            <div className="flex flex-wrap gap-6">
              <Radio
                label="Call Meeting"
                value="Call"
                name="meetingType"
                onChange={handleChange}
              />
              <Radio
                label="Zoom Meeting"
                value="Zoom"
                name="meetingType"
                onChange={handleChange}
              />
              <Radio
                label="Physical Meeting"
                value="Physical"
                name="meetingType"
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-4 rounded-xl hover:scale-105 transition-all"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function Input({ label, name, type = "text", onChange }) {
  return (
    <div>
      <label className="block mb-1 text-yellow-300">{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        className="w-full p-3 rounded bg-black/40 border border-yellow-500/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>
  );
}

function Radio({ label, value, name, onChange }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        className="accent-yellow-500"
      />
      {label}
    </label>
  );
}

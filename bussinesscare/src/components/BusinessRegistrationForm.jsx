
// src/components/BusinessRegistrationForm.jsx
import { useState } from "react";

export default function BusinessRegistrationForm() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? (checked ? "on" : "") : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    Object.keys(form).forEach((k) => fd.append(k, form[k]));

    const res = await fetch(
      "https://businesscare.onrender.com/api/form/submit-form",
      {
        method: "POST",
        body: fd,
      }
    );

    const data = await res.json();
    if (data.success) alert("Form submitted successfully!");
    else alert("Server Error: " + (data.message || ""));
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-6 sm:p-10">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-[#111] p-4 sm:p-8 rounded-2xl space-y-8 border border-yellow-500/30"
      >
        <h1 className="text-center text-xl sm:text-3xl font-bold text-yellow-400">
          BUSINESS CARE — REGISTRATION FORM
        </h1>

        {/* CLIENT INFO */}
        <Section title="CLIENT INFORMATION">
          <Grid>
            <Input label="Founder Full Name" name="founderName" handle={handleChange} />
            <Input label="Authorised Representative Name" name="representativeName" handle={handleChange} />
            <Input label="Address" name="address" handle={handleChange} />
            <Input label="City" name="city" handle={handleChange} />
            <Input label="State" name="state" handle={handleChange} />
            <Input label="Zip Code" name="zip" handle={handleChange} />
            <Input label="Email" name="email" handle={handleChange} />
            <Input label="Phone Number" name="phone" handle={handleChange} />
            <Input label="Alternate Phone" name="altPhone" handle={handleChange} />
          </Grid>
        </Section>

        {/* BUSINESS */}
        <Section title="BUSINESS REGISTRATION DETAILS">
          <Grid>
            <Input label="Company Name" name="companyName" handle={handleChange} />
            <Input label="GST Number" name="gst" handle={handleChange} />
            <Input label="PAN Number" name="pan" handle={handleChange} />
            <Input label="CIN Number" name="cin" handle={handleChange} />
            <Input label="MSME Registration No." name="msme" handle={handleChange} />
            <Input label="IEC Code" name="iec" handle={handleChange} />
          </Grid>

          <h3 className="text-yellow-400 font-semibold mt-4">Gender</h3>
          <div className="flex gap-6 mt-2">
            <Radio label="Male" name="gender" value="Male" handle={handleChange} />
            <Radio label="Female" name="gender" value="Female" handle={handleChange} />
          </div>
        </Section>

        {/* CATEGORY */}
        <Section title="BUSINESS CATEGORY">
          <CheckboxGroup
            prefix="category_"
            names={[
              "FMCG","Grocery","Manufacturing","Technology / IT","Agriculture",
              "Ayurvedic","Real Estate","Pharma","Cosmetics","Other",
            ]}
            handle={handleChange}
          />
        </Section>

        {/* TELECAST */}
        <Section title="TELECAST SEGMENT">
          <CheckboxGroup
            prefix="telecast_"
            names={[
              "Founder Story","Startup Feature","Global Business Leaders",
              "MSME Feature","Product Showcase","Franchise & Dealer Network","Other",
            ]}
            handle={handleChange}
          />
        </Section>

        {/* CHANNEL */}
        <Section title="SELECT TELECAST CHANNEL">
          <select
            name="selectedChannel"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black border border-yellow-500/40 focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Select Channel</option>
            <option>Aaj Tak HD</option>
            <option>CNBC Prime</option>
            <option>ABP News</option>
            <option>YouTube</option>
            <option>Social Media</option>
            <option>Partner Channels</option>
          </select>
        </Section>

        {/* SIGN */}
        <Section title="SIGNATURE DETAILS">
          <Input label="Owner / Authorized Signatory Name" name="signName" handle={handleChange} />
          <Grid>
            <Input label="Place" name="place" handle={handleChange} />
            <Input label="Date" name="date" type="date" handle={handleChange} />
          </Grid>
          <p className="text-xs text-gray-400">
            Signature & Stamp upload removed — PDF will be generated from form data.
          </p>
        </Section>

        <button className="w-full py-4 bg-yellow-500 text-black font-bold rounded-xl hover:scale-105 transition">
          Submit Form
        </button>
      </form>
    </div>
  );
}

/* ====== COMPONENTS ====== */

function Section({ title, children }) {
  return (
    <section className="border border-yellow-500/30 p-4 sm:p-5 rounded-xl space-y-4">
      <h2 className="text-lg sm:text-2xl font-bold text-yellow-400">{title}</h2>
      {children}
    </section>
  );
}

function Input({ label, name, type = "text", handle }) {
  return (
    <div>
      <label className="text-sm text-yellow-300">{label}</label>
      <input
        type={type}
        name={name}
        onChange={handle}
        className="w-full p-3 mt-1 bg-black border border-yellow-500/40 rounded-lg focus:ring-2 focus:ring-yellow-400"
      />
    </div>
  );
}

function Grid({ children }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-5">{children}</div>;
}

function CheckboxGroup({ names, prefix, handle }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {names.map((n) => (
        <label key={n} className="flex items-center gap-3 text-sm">
          <input
            type="checkbox"
            name={prefix + n.toLowerCase().replace(/[^a-z]/g, "")}
            onChange={handle}
            className="accent-yellow-500"
          />
          {n}
        </label>
      ))}
    </div>
  );
}

function Radio({ label, name, value, handle }) {
  return (
    <label className="flex items-center gap-2 text-sm">
      <input
        type="radio"
        name={name}
        value={value}
        onChange={handle}
        className="accent-yellow-500"
      />
      {label}
    </label>
  );
}

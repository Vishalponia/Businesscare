

// src/components/BusinessRegistrationForm.jsx
import { useState } from "react";

export default function BusinessRegistrationForm() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? (checked ? "on" : "") : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    Object.keys(form).forEach(k => fd.append(k, form[k]));
    // send multipart but with only text fields
    // const res = await fetch("http://localhost:5000/api/form/submit-form", {
    const res = await fetch("https://businesscare.onrender.com/api/form/submit-form", {
      method: "POST",
      body: fd
    });
    const data = await res.json();
    if (data.success) alert("Form submitted successfully!");
    else alert("Server Error: " + (data.message||""));
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-[#111] p-8 rounded-xl space-y-10 border border-yellow-500/30">
        <h1 className="text-center text-3xl font-bold text-yellow-400 mb-10">BUSINESS CARE — REGISTRATION FORM</h1>

        {/* CLIENT */}
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

          <h3 className="text-lg text-yellow-400 font-semibold mb-2">Gender</h3>
          <div className="flex gap-8">
            <Radio label="Male" name="gender" value="Male" handle={handleChange} />
            <Radio label="Female" name="gender" value="Female" handle={handleChange} />
          </div>
        </Section>

        {/* CATEGORIES */}
        <Section title="BUSINESS CATEGORY">
          <CheckboxGroup names={[
            "FMCG","Grocery","Manufacturing","Technology / IT","Agriculture",
            "Ayurvedic","Real Estate","Pharma","Cosmetics","Other"
          ]} prefix="category_" handle={handleChange} />
        </Section>

        {/* TELECAST */}
        <Section title="TELECAST SEGMENT">
          <CheckboxGroup names={[
            "Founder Story","Startup Feature","Global Business Leaders",
            "MSME Feature","Product Showcase","Franchise & Dealer Network","Other"
          ]} prefix="telecast_" handle={handleChange} />
        </Section>

        {/* CHANNEL */}
        <Section title="SELECT TELECAST CHANNEL">
          <select name="selectedChannel" onChange={handleChange} className="w-full p-4 rounded bg-black border border-yellow-500">
            <option value="">Select</option>
            <option>Aaj Tak HD</option>
            <option>CNBC Prime</option>
            <option>ABP News</option>
            <option>YouTube</option>
            <option>Social Media</option>
            <option>Partner Channels</option>
          </select>
        </Section>

        {/* SIGN */}
        <Section title="SIGNATURE & STAMP (disabled)">
          <Input label="Owner / Authorized Signatory Name" name="signName" handle={handleChange} />
          <Grid>
            <Input label="Place" name="place" handle={handleChange} />
            <Input label="Date" name="date" type="date" handle={handleChange} />
          </Grid>
          <p className="text-sm text-gray-400 mt-2">Signature & Stamp upload removed — PDF will be generated from the form data only.</p>
        </Section>

        <button className="w-full py-4 bg-yellow-500 text-black font-bold rounded-xl">Submit Form</button>
      </form>
    </div>
  );
}

function Section({ title, children }) { return (<section className="border border-yellow-500 p-5 rounded-xl space-y-5"><h2 className="text-2xl font-bold text-yellow-400">{title}</h2>{children}</section>); }
function Input({ label, name, type = "text", handle }) { return (<div><label>{label}</label><input type={type} name={name} onChange={handle} className="w-full p-3 mt-2 bg-black border border-yellow-500 rounded" /></div>); }
function Grid({ children }) { return <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>; }
function CheckboxGroup({ names, prefix, handle }) {
  return (<div className="grid grid-cols-2 md:grid-cols-3 gap-4">{names.map(n => (<label key={n} className="flex gap-3"><input type="checkbox" name={prefix + n.toLowerCase().replace(/[^a-z]/g,"")} onChange={handle} />{n}</label>))}</div>);
}
function Radio({ label, name, value, handle }) { return (<label className="flex gap-2"><input type="radio" name={name} value={value} onChange={handle} />{label}</label>); }

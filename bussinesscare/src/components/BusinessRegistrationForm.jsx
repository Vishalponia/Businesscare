// import { useState } from "react";

// export default function BusinessRegistrationForm() {
//   const [formData, setFormData] = useState({});

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Form Submitted Successfully!");
//     console.log(formData);
//   };

//   return (
//     <div className="min-h-screen  bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4">

//       {/* OUTER PREMIUM CONTAINER */}
//       <div className="max-w-5xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_0_40px_rgba(255,200,0,0.15)] rounded-3xl p-10">

//         {/* TITLE */}
//         <h1 className="text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 drop-shadow-xl tracking-wide mb-12">
//           BUSINESS CARE – Registration Form
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-12">

//           {/* CLIENT INFO */}
//           <FormSection title="Client Information">

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//               <Input label="Founder Full Name" name="founderName" handleChange={handleChange} />
//               <Input label="Authorised Representative Name" name="representativeName" handleChange={handleChange} />

//               <Input label="Address" name="address" handleChange={handleChange} />
//               <Input label="City" name="city" handleChange={handleChange} />

//               <Input label="Zip Code" name="zip" handleChange={handleChange} />
//               <Input label="Email" type="email" name="email" handleChange={handleChange} />

//               <Input label="Phone Number" name="phone" handleChange={handleChange} />
//               <Input label="Alternate Phone" name="altPhone" handleChange={handleChange} />
//             </div>

//           </FormSection>

//           {/* BUSINESS REGISTRATION */}
//           <FormSection title="Business Registration Information">

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <Input label="Company Name" name="companyName" handleChange={handleChange} />
//               <Input label="GST Number" name="gst" handleChange={handleChange} />

//               <Input label="PAN Number" name="pan" handleChange={handleChange} />
//               <Input label="CIN Number" name="cin" handleChange={handleChange} />

//               <Input label="MSME Registration No. (Optional)" name="msme" handleChange={handleChange} />
//               <Input label="IEC Code (If applicable)" name="iec" handleChange={handleChange} />
//             </div>

//             {/* Gender */}
//             <div className="mt-6">
//               <h3 className="font-semibold text-yellow-400 mb-2 text-lg">Gender</h3>
//               <div className="flex gap-8 text-white">
//                 <Radio name="gender" value="Male" label="Male" handleChange={handleChange} />
//                 <Radio name="gender" value="Female" label="Female" handleChange={handleChange} />
//               </div>
//             </div>

//           </FormSection>

//           {/* BUSINESS CATEGORY */}
//           <FormSection title="Business Category">
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-5 text-white">

//               <Checkbox label="FMCG" name="category_fmcg" handleChange={handleChange} />
//               <Checkbox label="Grocery" name="category_grocery" handleChange={handleChange} />
//               <Checkbox label="Manufacturing" name="category_mfg" handleChange={handleChange} />

//               <Checkbox label="Technology / IT" name="category_it" handleChange={handleChange} />
//               <Checkbox label="Agriculture" name="category_agri" handleChange={handleChange} />
//               <Checkbox label="Ayurvedic" name="category_ayurvedic" handleChange={handleChange} />

//               <Checkbox label="Real Estate" name="category_re" handleChange={handleChange} />
//               <Checkbox label="Pharma" name="category_pharma" handleChange={handleChange} />
//               <Checkbox label="Cosmetics" name="category_cosmetics" handleChange={handleChange} />

//               <Checkbox label="Other" name="category_other" handleChange={handleChange} />
//             </div>
//           </FormSection>

//           {/* TELECAST SEGMENT */}
//           <FormSection title="Telecast Segment">
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-5 text-white">
//               <Checkbox label="Founder Story" name="t_founder" handleChange={handleChange} />
//               <Checkbox label="Startup Feature" name="t_startup" handleChange={handleChange} />
//               <Checkbox label="Global Business Leaders" name="t_global" handleChange={handleChange} />

//               <Checkbox label="MSME Feature" name="t_msme" handleChange={handleChange} />
//               <Checkbox label="Product Showcase" name="t_product" handleChange={handleChange} />
//               <Checkbox label="Franchise & Dealer Network" name="t_franchise" handleChange={handleChange} />

//               <Checkbox label="Other" name="t_other" handleChange={handleChange} />
//             </div>
//           </FormSection>

//           {/* CHANNEL SELECT */}
//           <FormSection title="Select Telecast Channel">
//             <p className="text-gray-300 mb-3">
//               Choose one channel where the interview should be telecast:
//             </p>

//             <select
//               name="selectedChannel"
//               onChange={handleChange}
//               className="w-full p-4 rounded-xl bg-black/40 text-white border border-yellow-500/40 
//                          focus:ring-2 focus:ring-yellow-400 outline-none shadow-lg"
//             >
//               <option value="">Select Channel</option>
//               <option value="Aaj Tak HD">Aaj Tak HD</option>
//               <option value="CNBC Prime">CNBC Prime</option>
//               <option value="ABP News">ABP News</option>
//               <option value="YouTube">YouTube</option>
//               <option value="Social Media">Social Media</option>
//               <option value="Partner Channels">Partner Channels</option>
//             </select>
//           </FormSection>

//           {/* PRIVACY POLICY */}
//           <FormSection title="Privacy & Content Policy Acknowledgement">
//             <textarea
//               readOnly
//               className="w-full p-5 rounded-2xl bg-black/40 text-gray-300 border border-yellow-500/30 h-80 shadow-inner"
//               value={`Privacy & Content Policy Acknowledgement:
// I hereby declare that:

// 1. All information provided by me and my company is true, correct, and legally compliant.
// 2. Business Care does not promote, sell, or endorse any product on our behalf.
// 3. If any information is false or misleading, Business Care may cancel telecast or deny participation.
// 4. I authorize Business Care to telecast my content on:
//    - Aaj Tak HD
//    - CNBC Prime
//    - ABP News
//    - YouTube & Social Media
// `}
//             />
//           </FormSection>

//           {/* CONSENT */}
//           <FormSection title="Consent & Signature">
//             <Input label="Owner/Authorized Signatory Name" name="signName" handleChange={handleChange} />
//             <Input label="Place" name="place" handleChange={handleChange} />

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <Input label="Date" type="date" name="date" handleChange={handleChange} />
//               <Input label="Company Stamp (Optional)" name="stamp" handleChange={handleChange} />
//             </div>
//           </FormSection>

//           {/* SUBMIT */}
//           <button className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-700 text-black font-bold text-xl tracking-wider rounded-2xl shadow-[0_0_20px_rgba(255,210,0,0.6)] hover:scale-105 transition-all">
//             Submit Form
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// }

// /* ❇️ REUSABLE COMPONENTS BELOW ❇️ */

// function FormSection({ title, children }) {
//   return (
//     <section className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-md">
//       <h2 className="text-yellow-400 text-2xl font-bold mb-6">{title}</h2>
//       {children}
//     </section>
//   );
// }

// function Input({ label, name, type = "text", handleChange }) {
//   return (
//     <div>
//       <label className="text-gray-200 font-semibold">{label}</label>
//       <input
//         type={type}
//         name={name}
//         onChange={handleChange}
//         className="w-full mt-2 p-4 rounded-xl bg-black/30 text-white border border-yellow-500/30 
//         focus:ring-2 focus:ring-yellow-400 outline-none shadow-lg"
//       />
//     </div>
//   );
// }

// function Checkbox({ label, name, handleChange }) {
//   return (
//     <label className="flex items-center gap-3 text-gray-200 cursor-pointer">
//       <input type="checkbox" name={name} onChange={handleChange} className="w-5 h-5" />
//       {label}
//     </label>
//   );
// }

// function Radio({ label, name, value, handleChange }) {
//   return (
//     <label className="flex items-center gap-3 text-gray-200 cursor-pointer">
//       <input type="radio" name={name} value={value} onChange={handleChange} className="w-5 h-5" />
//       {label}
//     </label>
//   );
// }







// import { useState } from "react";

// export default function BusinessRegistrationForm() {
//   const [formData, setFormData] = useState({});
//   const [errors, setErrors] = useState({});

//   // VALIDATION
//   const validate = () => {
//     let newErrors = {};

//     if (!formData.founderName) newErrors.founderName = "Required";
//     if (!formData.companyName) newErrors.companyName = "Required";
//     if (!formData.email) newErrors.email = "Email is required";
//     else if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(formData.email))
//       newErrors.email = "Invalid Email";

//     if (!formData.phone) newErrors.phone = "Phone is required";
//     else if (!/^[0-9]{10}$/.test(formData.phone))
//       newErrors.phone = "Phone must be 10 digits";

//     if (!formData.selectedChannel)
//       newErrors.selectedChannel = "Please select a channel";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // HANDLE CHANGE
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   // SUBMIT TO BACKEND
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;

//     try {
//       const response = await fetch("http://localhost:5000/api/submit-form", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Form submitted successfully!");

//         // reset
//         setFormData({});
//         document.querySelector("form").reset();
//         setErrors({});
//       } else {
//         alert(data.message || "Submission failed");
//       }
//     } catch (err) {
//       alert("Server error!");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4">
//       <div className="max-w-5xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_0_40px_rgba(255,200,0,0.15)] rounded-3xl p-10">

//         <h1 className="text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 drop-shadow-xl tracking-wide mb-12">
//           BUSINESS CARE – Registration Form
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-12">
          
//           {/* ================= CLIENT INFO ================= */}
//           <FormSection title="Client Information">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//               <Input 
//                 label="Founder Full Name" 
//                 name="founderName" 
//                 handleChange={handleChange}
//                 error={errors.founderName}
//               />

//               <Input 
//                 label="Authorised Representative Name" 
//                 name="representativeName" 
//                 handleChange={handleChange} 
//               />

//               <Input label="Address" name="address" handleChange={handleChange} />
//               <Input label="City" name="city" handleChange={handleChange} />

//               <Input label="Zip Code" name="zip" handleChange={handleChange} />

//               <Input 
//                 label="Email" 
//                 name="email" 
//                 handleChange={handleChange} 
//                 error={errors.email}
//               />

//               <Input 
//                 label="Phone Number" 
//                 name="phone" 
//                 handleChange={handleChange} 
//                 error={errors.phone}
//               />

//               <Input label="Alternate Phone" name="altPhone" handleChange={handleChange} />
//             </div>
//           </FormSection>

//           {/* ================= BUSINESS REGISTRATION ================= */}
//           <FormSection title="Business Registration Information">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//               <Input 
//                 label="Company Name" 
//                 name="companyName" 
//                 handleChange={handleChange}
//                 error={errors.companyName}
//               />

//               <Input label="GST Number" name="gst" handleChange={handleChange} />
//               <Input label="PAN Number" name="pan" handleChange={handleChange} />
//               <Input label="CIN Number" name="cin" handleChange={handleChange} />
//               <Input label="MSME Registration No. (Optional)" name="msme" handleChange={handleChange} />
//               <Input label="IEC Code (If applicable)" name="iec" handleChange={handleChange} />
//             </div>

//             <h3 className="font-semibold text-yellow-400 mb-2 text-lg">Gender</h3>
//             <div className="flex gap-8 text-white">
//               <Radio name="gender" value="Male" label="Male" handleChange={handleChange} />
//               <Radio name="gender" value="Female" label="Female" handleChange={handleChange} />
//             </div>
//           </FormSection>

//           {/* ================= BUSINESS CATEGORY ================= */}
//           <FormSection title="Business Category">
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-5 text-white">
//               {["FMCG","Grocery","Manufacturing","Technology / IT","Agriculture","Ayurvedic","Real Estate","Pharma","Cosmetics","Other"].map((cat,i)=>
//                 <Checkbox 
//                   key={i} 
//                   label={cat} 
//                   name={"category_"+cat.toLowerCase().replace(/[^a-z]/g,"")}
//                   handleChange={handleChange} 
//                 />
//               )}
//             </div>
//           </FormSection>

//           {/* ================= TELECAST SEGMENT ================= */}
//           <FormSection title="Telecast Segment">
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-5 text-white">
//               {["Founder Story","Startup Feature","Global Business Leaders","MSME Feature","Product Showcase","Franchise & Dealer Network","Other"].map((seg,i)=>
//                 <Checkbox 
//                   key={i} 
//                   label={seg} 
//                   name={"t_"+seg.toLowerCase().replace(/[^a-z]/g,"")}
//                   handleChange={handleChange}
//                 />
//               )}
//             </div>
//           </FormSection>

//           {/* ================= CHANNEL SELECT ================= */}
//           <FormSection title="Select Telecast Channel">
//             <select
//               name="selectedChannel"
//               onChange={handleChange}
//               className="w-full p-4 rounded-xl bg-black/40 text-white border border-yellow-500/40 focus:ring-2 focus:ring-yellow-400 outline-none shadow-lg"
//             >
//               <option value="">Select Channel</option>
//               <option value="Aaj Tak HD">Aaj Tak HD</option>
//               <option value="CNBC Prime">CNBC Prime</option>
//               <option value="ABP News">ABP News</option>
//               <option value="YouTube">YouTube</option>
//               <option value="Social Media">Social Media</option>
//               <option value="Partner Channels">Partner Channels</option>
//             </select>

//             {errors.selectedChannel && (
//               <p className="text-red-400 mt-1">{errors.selectedChannel}</p>
//             )}
//           </FormSection>

//           {/* ================= POLICY ================= */}
//           <FormSection title="Privacy & Content Policy Acknowledgement">
//             <textarea
//               readOnly
//               className="w-full p-5 rounded-2xl bg-black/40 text-gray-300 border border-yellow-500/30 h-80 shadow-inner"
//               value={`Privacy Policy...
// 1. All information must be true.
// 2. Business Care is not responsible for false claims.
// 3. Telecast can be canceled if content violates guidelines.
// 4. Approved Channels:
//    - Aaj Tak HD
//    - CNBC Prime
//    - ABP News
//    - YouTube & Social Media`}
//             />
//           </FormSection>

//           {/* ================= CONSENT ================= */}
//           <FormSection title="Consent & Signature">
//             <Input label="Owner/Authorized Signatory Name" name="signName" handleChange={handleChange} />
//             <Input label="Place" name="place" handleChange={handleChange} />

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <Input label="Date" type="date" name="date" handleChange={handleChange} />
//               <Input label="Company Stamp (Optional)" name="stamp" handleChange={handleChange} />
//             </div>
//           </FormSection>

//           {/* ================= SUBMIT BUTTON ================= */}
//           <button className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-700 text-black font-bold text-xl tracking-wider rounded-2xl shadow-[0_0_20px_rgba(255,210,0,0.6)] hover:scale-105 transition-all">
//             Submit Form
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// }

// /* ================= REUSABLE COMPONENTS ================= */

// function FormSection({ title, children }) {
//   return (
//     <section className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-md">
//       <h2 className="text-yellow-400 text-2xl font-bold mb-6">{title}</h2>
//       {children}
//     </section>
//   );
// }

// function Input({ label, name, type = "text", handleChange, error }) {
//   return (
//     <div>
//       <label className="text-gray-200 font-semibold">{label}</label>
//       <input
//         type={type}
//         name={name}
//         onChange={handleChange}
//         className="w-full mt-2 p-4 rounded-xl bg-black/30 text-white border border-yellow-500/30 focus:ring-2 focus:ring-yellow-400 outline-none shadow-lg"
//       />
//       {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
//     </div>
//   );
// }

// function Checkbox({ label, name, handleChange }) {
//   return (
//     <label className="flex items-center gap-3 text-gray-200 cursor-pointer">
//       <input type="checkbox" name={name} onChange={handleChange} className="w-5 h-5" />
//       {label}
//     </label>
//   );
// }

// function Radio({ label, name, value, handleChange }) {
//   return (
//     <label className="flex items-center gap-3 text-gray-200 cursor-pointer">
//       <input type="radio" name={name} value={value} onChange={handleChange} className="w-5 h-5" />
//       {label}
//     </label>
//   );
// }






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
    const res = await fetch("http://localhost:5000/api/form/submit-form", {
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

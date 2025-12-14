import { useState, useEffect } from "react";

export default function FormOptionsPage() {
  const [companyList, setCompanyList] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");

  // Fetch all company names from backend
  useEffect(() => {
    // fetch("http://localhost:5000/api/forms")
    fetch("https://businesscare.onrender.com/api/forms")
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const list = data.data.map(item => item.companyName);
          setCompanyList(list);
        }
      });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-20 flex flex-col items-center px-4">
      <h1 className="text-4xl font-extrabold text-yellow-400 tracking-wide">
        Registration Form Options
      </h1>
      <p className="text-gray-400 mt-2">
        Choose company and select how you want to fill the form.
      </p>

      <div className="mt-14 bg-white/10 p-10 rounded-3xl border border-yellow-500/20 shadow-[0_0_30px_rgba(255,200,0,0.2)] max-w-2xl w-full">

        {/* Company Select */}
        {/* <label className="text-yellow-300 font-semibold tracking-wide">
          Select Company Name
        </label> */}

        {/* <select
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
          className="w-full mt-3 p-4 rounded-xl bg-black/40 text-white border border-yellow-500/40 focus:ring-2 focus:ring-yellow-400 outline-none"
        >
          <option value="">-- Select Company --</option>
          {companyList.map((name, i) => (
            <option key={i} value={name}>{name}</option>
          ))}
        </select> */}

        <div className="mt-10 space-y-6">

          {/* Fill Online Form */}
          <a
            href="/registration-form"
            className="block w-full text-center bg-yellow-500 text-black font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(255,200,0,0.4)] hover:scale-105 transition-all"
          >
            ✏️ Fill Online Registration Form
          </a>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="h-[1px] bg-yellow-500/30 flex-1"></div>
            <span className="text-yellow-400">OR</span>
            <div className="h-[1px] bg-yellow-500/30 flex-1"></div>
          </div>

          {/* Download Blank Form */}
          <a
            // href={`http://localhost:5000/blank-forms/${encodeURIComponent("BUSINESS CARE REGISTRATION FORM.pdf")}`}
             href={`https://businesscare.onrender.com/blank-forms/${encodeURIComponent("BUSINESS CARE REGISTRATION FORM.pdf")}`}
            download
            className="block w-full text-center bg-yellow-500 text-black font-bold py-4 rounded-xl hover:scale-105 transition-all"
          >
            📄 Download Blank Form (PDF)
          </a>

          {/* Upload Filled Form */}
          <a
            href="/upload-form"
            className="block w-full text-center bg-yellow-500 text-black font-bold py-4 rounded-xl hover:scale-105 transition-all"
          >
            📤 Upload Filled Form
          </a>

        </div>
      </div>
    </div>
  );
}

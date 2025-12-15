

import { useState } from "react";

export default function AdminUpload() {
  const [companyName, setCompanyName] = useState("");
  const [founderName, setFounderName] = useState("");
  const [file, setFile] = useState(null);

  const token = localStorage.getItem("adminToken");

  const handleUpload = async () => {
    if (!companyName || !founderName || !file)
      return alert("Enter all fields and select a file");

    const formData = new FormData();
    formData.append("companyName", companyName);
    formData.append("founderName", founderName);
    formData.append("file", file);

    try {
      const res = await fetch(
        "https://businesscare.onrender.com/api/form/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        const text = await res.text();
        console.error("Server returned:", text);
        return alert("Server error, try again later");
      }

      const data = await res.json();
      if (data.success) alert("File uploaded successfully!");
      else alert(data.message);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900 border border-yellow-500/30 rounded-2xl p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6 text-center">
          Upload Form
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Company Name"
            className="w-full p-3 rounded bg-gray-800 border border-yellow-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Founder Name"
            className="w-full p-3 rounded bg-gray-800 border border-yellow-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={founderName}
            onChange={(e) => setFounderName(e.target.value)}
          />

          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full text-sm text-white file:mr-4 file:py-2 file:px-4 
                       file:rounded file:border-0 file:bg-yellow-500 
                       file:text-black file:font-semibold cursor-pointer"
          />

          <button
            onClick={handleUpload}
            className="w-full px-6 py-3 bg-yellow-500 text-black font-bold rounded-xl hover:scale-105 transition-all"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

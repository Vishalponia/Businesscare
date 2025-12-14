import { useState } from "react";

export default function UploadForm() {
  const [companyName, setCompanyName] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async () => {
    if (!companyName) return alert("Please enter company name");
    if (!file) return alert("Please select a PDF file");

    const formData = new FormData();
    formData.append("companyName", companyName); // ✅ send company name
    formData.append("file", file);

    try {
      // const res = await fetch("http://localhost:5000/api/form/upload", {
       const res = await fetch("https://businesscare.onrender.com/api/form/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        alert("File uploaded successfully!");
        setCompanyName("");
        setFile(null);
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Error uploading file:", err);
      alert("Server error, try again later");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center px-6 py-20">
      <div className="bg-white/10 p-10 rounded-2xl w-full max-w-xl border border-yellow-500/30">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">
          Upload Filled Form
        </h1>

        <label className="text-yellow-300 font-semibold">Company Name</label>
        <input
          type="text"
          className="w-full mt-2 p-3 bg-black/40 border border-yellow-500/30 rounded"
          placeholder="Enter company name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <label className="text-yellow-300 font-semibold mt-6 block">
          Upload PDF
        </label>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full mt-2 bg-black/30 border border-yellow-500/30 p-3 rounded"
        />

        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-yellow-600 text-black py-3 rounded-xl font-bold hover:scale-105 transition-all"
        >
          Upload
        </button>
      </div>
    </div>
  );
}

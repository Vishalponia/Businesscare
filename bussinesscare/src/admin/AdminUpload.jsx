import { useState } from "react";

export default function AdminUpload() {
  const [companyName, setCompanyName] = useState("");
  const [founderName, setFounderName] = useState("");
  const [file, setFile] = useState(null);

  const token = localStorage.getItem("adminToken");

  const handleUpload = async () => {
    if (!companyName || !founderName || !file) return alert("Enter all fields and select a file");

    const formData = new FormData();
    formData.append("companyName", companyName);
    formData.append("founderName", founderName);
    formData.append("file", file);

    try {
      // const res = await fetch("http://localhost:5000/api/form/upload", {
      const res = await fetch("https://businesscare.onrender.com/api/form/upload", {
        method: "POST",
        body: formData,
      });

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
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Upload Form</h1>

      <input
        type="text"
        placeholder="Company Name"
        className="mb-4 p-3 rounded bg-gray-800 border border-yellow-500 text-white"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Founder Name"
        className="mb-4 p-3 rounded bg-gray-800 border border-yellow-500 text-white"
        value={founderName}
        onChange={(e) => setFounderName(e.target.value)}
      />

      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4 text-white"
      />

      <button
        onClick={handleUpload}
        className="px-6 py-3 bg-yellow-500 text-black font-bold rounded hover:scale-105 transition-all"
      >
        Upload
      </button>
    </div>
  );
}

import { useState } from "react";

export default function FormPortal() {
  const [companyName, setCompanyName] = useState("");
  const [uploadLink, setUploadLink] = useState(null);
  const [downloadLink, setDownloadLink] = useState(null);

  const handleInit = async () => {
    if (!companyName) return alert("Enter company name");

    // For now, static blank form
    setDownloadLink(
      // `http://localhost:5000/blank-forms/${encodeURIComponent("BUSINESS CARE REGISTRATION FORM.pdf")}`
       `https://businesscare.onrender.com/blank-forms/${encodeURIComponent("BUSINESS CARE REGISTRATION FORM.pdf")}`
    );

    // Upload link
    // setUploadLink("http://localhost:5000/api/form/upload");
    setUploadLink("https://businesscare.onrender.com/api/form/upload");
    //  setUploadLink("/api/form/upload");
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("companyName", companyName);
    formData.append("file", file);

    try {
      const res = await fetch(uploadLink, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        alert("File uploaded successfully!");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Error uploading file:", err);
      alert("Server error, try again later");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl mb-6 font-bold text-yellow-400">
        Company Form Download / Upload
      </h1>

      <input
        type="text"
        placeholder="Enter Company Name"
        className="p-4 rounded-xl bg-gray-800 border border-yellow-500 text-white w-full max-w-md"
        onChange={(e) => setCompanyName(e.target.value)}
      />

      <button
        onClick={handleInit}
        className="mt-4 bg-yellow-500 text-black px-8 py-3 rounded-xl font-bold"
      >
        Proceed
      </button>

      {downloadLink && (
        <div className="mt-10 space-y-6 text-center">
          <a
            href={downloadLink}
            download
            className="block bg-green-500 text-black px-8 py-3 rounded-xl font-bold"
          >
            Download Blank Form
          </a>

          <div>
            <p className="text-yellow-300 mb-2">Upload Filled Form</p>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileUpload}
              className="text-gray-300"
            />
          </div>
        </div>
      )}
    </div>
  );
}

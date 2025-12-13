import { useEffect, useState } from "react";
import AdminNavbar from "../components/AdminNavbar";

export default function UploadsList() {
  const [files, setFiles] = useState([]);

  const fetchFiles = async () => {
    const res = await fetch("http://localhost:5000/api/admin/uploads", {
      headers: { Authorization: localStorage.getItem("adminToken") },
    });

    const data = await res.json();
    if (data.success) setFiles(data.files);
  };

  useEffect(() => { fetchFiles(); }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <AdminNavbar />

      <div className="max-w-5xl mx-auto mt-10">
        
        <h1 className="text-3xl text-yellow-400 font-bold mb-6">
          Uploaded Documents
        </h1>

        {files.map((file) => (
          <div key={file._id} className="bg-gray-900 p-5 rounded-lg mb-4">
            <p className="text-xl font-bold">{file.companyName}</p>

            <a
              className="text-yellow-400 underline mt-2 inline-block"
              href={`http://localhost:5000/uploads/${file.filePath}`}
              target="_blank"
            >
              Download File
            </a>

          </div>
        ))}
      </div>
    </div>
  );
}


import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [uploads, setUploads] = useState([]);
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    const fetchUploads = async () => {
      try {
        const res = await fetch("https://businesscare.onrender.com/api/admin/uploads", {
          headers: { Authorization: token },
        });
        const data = await res.json();
        if (data.success) setUploads(data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUploads();
  }, [token]);

  const handleDelete = async (fileName, id) => {
    if (!confirm("Are you sure you want to delete this file?")) return;
    try {
      const res = await fetch(
        `https://businesscare.onrender.com/api/admin/delete/${id}/${fileName}`,
        {
          method: "DELETE",
          headers: { Authorization: token },
        }
      );

      const data = await res.json();

      if (data.success) {
        setUploads((prev) => prev.filter((f) => f._id !== id));
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to delete file");
    }
  };

  return (
    <div className="p-4 sm:p-8 bg-black min-h-screen text-white">
      <h1 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6">
        Uploaded Forms
      </h1>

      {/* Desktop / Tablet Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border border-yellow-500">
          <thead>
            <tr className="bg-yellow-500 text-black">
              <th className="px-4 py-2">Company Name</th>
              <th className="px-4 py-2">File Name</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {uploads.map((f) => (
              <tr key={f._id} className="text-center border-t border-yellow-500">
                <td className="px-4 py-2">{f.companyName}</td>
                <td className="px-4 py-2 break-all">{f.originalName}</td>
                <td className="px-4 py-2 space-x-2">
                  <a
                    href={`https://businesscare.onrender.com/uploads/${f.fileName}`}
                    download
                    className="bg-green-500 px-3 py-1 rounded text-black"
                  >
                    Download
                  </a>
                  <button
                    className="bg-red-500 px-3 py-1 rounded text-black"
                    onClick={() => handleDelete(f.fileName, f._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {uploads.map((f) => (
          <div
            key={f._id}
            className="border border-yellow-500 rounded-xl p-4 space-y-3"
          >
            <div>
              <p className="text-yellow-400 font-semibold">Company</p>
              <p className="break-words">{f.companyName}</p>
            </div>

            <div>
              <p className="text-yellow-400 font-semibold">File</p>
              <p className="break-all text-sm">{f.originalName}</p>
            </div>

            <div className="flex gap-3">
              <a
                href={`https://businesscare.onrender.com/uploads/${f.fileName}`}
                download
                className="flex-1 text-center bg-green-500 px-3 py-2 rounded text-black"
              >
                Download
              </a>
              <button
                className="flex-1 bg-red-500 px-3 py-2 rounded text-black"
                onClick={() => handleDelete(f.fileName, f._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
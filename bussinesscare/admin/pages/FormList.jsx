import { useEffect, useState } from "react";
import AdminNavbar from "../components/AdminNavbar";

export default function FormsList() {
  const [forms, setForms] = useState([]);

  const fetchForms = async () => {
    const res = await fetch("http://localhost:5000/api/admin/forms", {
      headers: {
        Authorization: localStorage.getItem("adminToken"),
      },
    });

    const data = await res.json();
    if (data.success) setForms(data.data);
  };

  useEffect(() => { fetchForms(); }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <AdminNavbar />

      <div className="max-w-5xl mx-auto mt-10">
        
        <h1 className="text-3xl text-yellow-400 font-bold mb-6">
          Submitted Forms
        </h1>

        <div className="space-y-4">
          {forms.map((f) => (
            <div key={f._id} className="p-5 bg-gray-900 rounded-lg border border-gray-700">
              <h2 className="text-xl text-yellow-400 font-bold">{f.companyName}</h2>
              <p>Email: {f.email}</p>
              <p>Phone: {f.phone}</p>
              <p>Founder: {f.founderName}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

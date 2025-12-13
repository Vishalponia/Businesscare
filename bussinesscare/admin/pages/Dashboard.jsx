import { Link } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <AdminNavbar />

      <div className="max-w-4xl mx-auto mt-16">

        <h1 className="text-4xl font-bold text-yellow-400 mb-10">
          Welcome Admin
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <Link
            to="/admin/forms"
            className="p-6 bg-gray-800 rounded-lg shadow hover:bg-gray-700"
          >
            <h2 className="text-2xl font-bold text-yellow-400">View Submitted Forms</h2>
            <p className="text-gray-300 mt-2">See all user submitted forms</p>
          </Link>

          <Link
            to="/admin/uploads"
            className="p-6 bg-gray-800 rounded-lg shadow hover:bg-gray-700"
          >
            <h2 className="text-2xl font-bold text-yellow-400">View Uploaded Documents</h2>
            <p className="text-gray-300 mt-2">Check uploaded PDF files</p>
          </Link>

        </div>

      </div>
    </div>
  );
}

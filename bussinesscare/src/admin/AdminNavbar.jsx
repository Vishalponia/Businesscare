
import { useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  }

  return (
    <nav className="bg-gray-950 text-white px-4 py-3 sm:px-8 flex items-center justify-between">
      <h2 className="text-lg sm:text-xl font-bold">
        Admin Panel
      </h2>

      <button
        onClick={logout}
        className="bg-red-600 px-3 py-1.5 sm:px-4 sm:py-2 rounded text-sm sm:text-base hover:bg-red-700 transition"
      >
        Logout
      </button>
    </nav>
  );
}

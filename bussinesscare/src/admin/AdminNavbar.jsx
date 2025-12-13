import { useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  }

  return (
    <nav className="bg-gray-950 text-white p-4 flex justify-between">
      <h2 className="text-xl font-bold">Admin Panel</h2>

      <button
        onClick={logout}
        className="bg-red-600 px-4 py-1 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </nav>
  );
}

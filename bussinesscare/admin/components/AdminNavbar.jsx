import { logoutAdmin } from "../utils/adminAuth";
import { useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();

  return (
    <div className="bg-black py-4 px-6 flex justify-between items-center border-b border-yellow-600/40">
      <h2 className="text-yellow-400 text-2xl font-bold">Admin Panel</h2>

      <button
        onClick={() => {
          logoutAdmin();
          navigate("/admin");
        }}
        className="bg-red-500 px-4 py-2 text-black font-bold rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}

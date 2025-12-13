import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("adminToken", data.token);
      navigate("/admin/dashboard");
    } else {
      alert(data.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <div className="bg-gray-900 p-10 rounded-xl shadow-lg w-96">
        
        <h1 className="text-3xl text-yellow-400 font-bold text-center mb-8">
          Admin Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">

          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 rounded bg-black/30 text-white border border-yellow-500/40"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-black/30 text-white border border-yellow-500/40"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="w-full p-3 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    "Home",
    "About",
    "Award",
    "Services",
    "Videos",
    "Gallery",
    <li
    className="hover:text-blue-600 cursor-pointer"
    onClick={() => navigate("/contact-us")}
    >Contact Us</li>
  ];

  return (
    <nav className="w-full shadow-md bg-gray-800 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-1 py-2 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://businesscare.org.in/wp-content/uploads/2023/03/logo-web-png.png" 
            alt="Brand"
            className="h-15 w-30 object-fit "
          />
          <h1 className="text-xl font-bold text-white">BussinessCare</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center text-white font-medium">
          {navItems.map((item) => (
            <li key={item} className="hover:text-blue-600 cursor-pointer">
              {item}
            </li>
          ))}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-800 hover:text-black transition">
            Schedule a Call Today
          </button>
        </ul>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <div
              key={item}
              className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer"
            >
              {item}
            </div>
          ))}

          <button className="bg-blue-400 text-white w-full py-2 rounded-xl shadow hover:bg-blue-900  transition">
            Schedule a Call Today
          </button>
        </div>
      )}
    </nav>
  );
}

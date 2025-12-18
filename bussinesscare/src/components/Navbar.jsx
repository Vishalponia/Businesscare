import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const navigate = useNavigate();

  const aboutItems = [
    { label: "Our Founders", path: "/about/founders" },
    { label: "Mission & Vision", path: "/about/mission-vision" },
    { label: "Why Us", path: "/about/why-us" },
  ];

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Award", path: "/award" },
    { label: "Services", path: "/services" },
    { label: "Videos", path: "/videos" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  const go = (path) => {
    navigate(path);
    setOpen(false);
    setAboutOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() => go("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src="https://businesscare.org.in/wp-content/uploads/2023/03/logo-web-png.png"
            alt="logo"
            className="h-10"
          />
          <span className="text-white text-xl font-bold">BusinessCare</span>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex items-center gap-6 text-white font-medium">

          <button onClick={() => go("/")} className="hover:text-blue-400">
            Home
          </button>

          {/* ABOUT BUTTON */}
          <div className="relative">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex items-center gap-1 hover:text-blue-400"
            >
              About <ChevronDown size={16} />
            </button>

            {aboutOpen && (
              <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-xl z-50">
                {aboutItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => go(item.path)}
                    className="block w-full text-left px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {navItems.slice(1).map((item) => (
            <button
              key={item.label}
              onClick={() => go(item.path)}
              className="hover:text-blue-400"
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => go("/contact-us")}
            className="ml-4 bg-blue-500 px-4 py-2 rounded-xl hover:bg-blue-600"
          >
            Schedule a Call Today
          </button>
        </div>

        {/* MOBILE ICON */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden bg-white px-6 py-5 space-y-4 shadow-lg">

          <button onClick={() => go("/")} className="block font-medium">
            Home
          </button>

          {/* MOBILE ABOUT */}
          <div>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex justify-between w-full font-medium"
            >
              About <ChevronDown size={18} />
            </button>

            {aboutOpen && (
              <div className="mt-2 ml-4 space-y-2">
                {aboutItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => go(item.path)}
                    className="block text-gray-600 hover:text-blue-500"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {navItems.slice(1).map((item) => (
            <button
              key={item.label}
              onClick={() => go(item.path)}
              className="block font-medium"
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => go("/contact-us")}
            className="w-full bg-blue-500 text-white py-2 rounded-xl"
          >
            Schedule a Call Today
          </button>
        </div>
      )}
    </nav>
  );
}

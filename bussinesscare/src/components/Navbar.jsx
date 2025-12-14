// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();

//   const navItems = [
//     "Home",
//     "About",
//     "Award",
//     "Services",
//     "Videos",
//     "Gallery",
//     <li
//     className="hover:text-blue-600 cursor-pointer"
//     onClick={() => navigate("/contact-us")}
//     >Contact Us</li>
//   ];

//   return (
//     <nav className="w-full shadow-md bg-gray-800 fixed top-0 left-0 z-50">
//       <div className="max-w-7xl mx-auto px-1 py-2 flex justify-between items-center">
//         {/* Brand Logo */}
//         <div className="flex items-center gap-2">
//           <img
//             src="https://businesscare.org.in/wp-content/uploads/2023/03/logo-web-png.png" 
//             alt="Brand"
//             className="h-15 w-30 object-fit "
//           />
//           <h1 className="text-xl font-bold text-white">BussinessCare</h1>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-6 items-center text-white font-medium">
//           {navItems.map((item) => (
//             <li key={item} className="hover:text-blue-600 cursor-pointer">
//               {item}
//             </li>
//           ))}
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-800 hover:text-black transition">
//             Schedule a Call Today
//           </button>
//         </ul>

//         {/* Mobile Icon */}
//         <button
//           className="md:hidden text-white"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
//           {navItems.map((item) => (
//             <div
//               key={item}
//               className="text-gray-700 font-medium hover:text-blue-600 cursor-pointer"
//             >
//               {item}
//             </div>
//           ))}

//           <button className="bg-blue-400 text-white w-full py-2 rounded-xl shadow hover:bg-blue-900  transition">
//             Schedule a Call Today
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }






import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Award", path: "/award" },
    { label: "Services", path: "/services" },
    { label: "Videos", path: "/videos" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false); // close mobile menu
  };

  return (
    <nav className="w-full bg-gray-800 fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="https://businesscare.org.in/wp-content/uploads/2023/03/logo-web-png.png"
            alt="BusinessCare"
            className="h-10 w-auto"
          />
          <h1 className="text-xl font-bold text-white">BusinessCare</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-white font-medium">
          {navItems.map((item) => (
            <li
              key={item.label}
              onClick={() => handleNavigate(item.path)}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              {item.label}
            </li>
          ))}
          <button className="ml-4 bg-blue-500 px-4 py-2 rounded-xl shadow hover:bg-blue-600 transition">
            Schedule a Call Today
          </button>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-5 space-y-4">
          {navItems.map((item) => (
            <div
              key={item.label}
              onClick={() => handleNavigate(item.path)}
              className="text-gray-700 font-medium cursor-pointer hover:text-blue-500"
            >
              {item.label}
            </div>
          ))}
          <button className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition">
            Schedule a Call Today
          </button>
        </div>
      )}
    </nav>
  );
}

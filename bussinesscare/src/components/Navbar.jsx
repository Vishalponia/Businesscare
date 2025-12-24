// import { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [aboutOpen, setAboutOpen] = useState(false);
//   const navigate = useNavigate();

//   const aboutItems = [
//     { label: "Our Founders", path: "/about/founders" },
//     { label: "Mission & Vision", path: "/about/mission-vision" },
//     { label: "Why Us", path: "/about/why-us" },
//   ];

//   const navItems = [
//     { label: "Award", path: "/award" },
//     { label: "Services", path: "/services" },
//     { label: "Videos", path: "/videos" },
//     { label: "Gallery", path: "/gallery" },
//     { label: "Contact Us", path: "/contact-us" },
//   ];

//   const go = (path) => {
//     navigate(path);
//     setOpen(false);
//     setAboutOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-gray-800 z-50 shadow">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

//         {/* LOGO */}
//         <div
//           onClick={() => go("/")}
//           className="flex items-center gap-2 cursor-pointer"
//         >
//           <img
//             src="https://businesscare.org.in/wp-content/uploads/2023/03/logo-web-png.png"
//             alt="logo"
//             className="h-10"
//           />
//           <span className="text-white text-xl font-bold">
//             BusinessCare
//           </span>
//         </div>

//         {/* ================= DESKTOP MENU ================= */}
//         <div className="hidden md:flex items-center gap-6 text-white font-medium">

//           {/* HOME */}
//           <div
//             onClick={() => go("/")}
//             className="cursor-pointer hover:text-blue-400 transition"
//           >
//             Home
//           </div>

//           {/* ABOUT DROPDOWN */}
//           <div className="relative">
//             <div
//               onClick={() => setAboutOpen(!aboutOpen)}
//               className="flex items-center gap-1 cursor-pointer hover:text-blue-400 transition"
//             >
//               About <ChevronDown size={16} />
//             </div>

//             {aboutOpen && (
//               <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-xl z-50">
//                 {aboutItems.map((item) => (
//                   <div
//                     key={item.label}
//                     onClick={() => go(item.path)}
//                     className="px-5 py-3 text-gray-700 cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition"
//                   >
//                     {item.label}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* OTHER LINKS */}
//           {navItems.map((item) => (
//             <div
//               key={item.label}
//               onClick={() => go(item.path)}
//               className="cursor-pointer hover:text-blue-400 transition"
//             >
//               {item.label}
//             </div>
//           ))}

//           {/* CTA */}
//           <div
//             onClick={() => go("/contact-us")}
//             className="ml-4 bg-blue-500 px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-600 transition"
//           >
//             Schedule a Call Today
//           </div>
//         </div>

//         {/* ================= MOBILE ICON ================= */}
//         <div
//           className="md:hidden text-white cursor-pointer"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </div>
//       </div>

//       {/* ================= MOBILE MENU ================= */}
//       {open && (
//         <div className="md:hidden bg-white px-6 py-5 space-y-4 shadow-lg">

//           <div
//             onClick={() => go("/")}
//             className="cursor-pointer font-medium"
//           >
//             Home
//           </div>

//           {/* MOBILE ABOUT */}
//           <div>
//             <div
//               onClick={() => setAboutOpen(!aboutOpen)}
//               className="flex justify-between items-center cursor-pointer font-medium"
//             >
//               About <ChevronDown size={18} />
//             </div>

//             {aboutOpen && (
//               <div className="mt-2 ml-4 space-y-2">
//                 {aboutItems.map((item) => (
//                   <div
//                     key={item.label}
//                     onClick={() => go(item.path)}
//                     className="cursor-pointer text-gray-600 hover:text-blue-500"
//                   >
//                     {item.label}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {navItems.map((item) => (
//             <div
//               key={item.label}
//               onClick={() => go(item.path)}
//               className="cursor-pointer font-medium"
//             >
//               {item.label}
//             </div>
//           ))}

//           <div
//             onClick={() => go("/contact-us")}
//             className="w-full bg-blue-500 text-white py-2 rounded-xl text-center cursor-pointer hover:bg-blue-600"
//           >
//             Schedule a Call Today
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }




import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const aboutItems = [
    { label: "About Us", path: "/about" },
    { label: "Our Founders", path: "/about/founders" },
    { label: "Mission & Vision", path: "/about/mission-vision" },
    { label: "Why Us", path: "/about/why-us" },
  ];

  const navItems = [
    { label: "Award", path: "/award" },
    { label: "Services", path: "/services" },
    { label: "Videos", path: "/videos" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  const go = (path) => {
    navigate(path);
    setOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const activeClass =
    "relative text-blue-400 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-400";

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
          <span className="text-white text-xl font-bold">
            BusinessCare
          </span>
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden md:flex items-center gap-6 text-white font-medium">

          {/* HOME */}
          <div
            onClick={() => go("/")}
            className={`cursor-pointer hover:text-blue-400 transition ${
              isActive("/") ? activeClass : ""
            }`}
          >
            Home
          </div>

          {/* ABOUT (HOVER DROPDOWN) */}
          <div className="relative group">
            <div
              className={`flex items-center gap-1 cursor-pointer transition hover:text-blue-400 ${
                location.pathname.startsWith("/about") ? activeClass : ""
              }`}
            >
              About <ChevronDown size={16} />
            </div>

            {/* DROPDOWN */}
            <div className="absolute top-full left-0 mt-3 w-60 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {aboutItems.map((item) => (
                <div
                  key={item.label}
                  onClick={() => go(item.path)}
                  className={`px-5 py-3 cursor-pointer transition ${
                    isActive(item.path)
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* OTHER LINKS */}
          {navItems.map((item) => (
            <div
              key={item.label}
              onClick={() => go(item.path)}
              className={`cursor-pointer hover:text-blue-400 transition ${
                isActive(item.path) ? activeClass : ""
              }`}
            >
              {item.label}
            </div>
          ))}

          {/* CTA */}
          <div
            onClick={() => go("/contact-us")}
            className="ml-4 bg-blue-500 px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-600 transition"
          >
            Schedule a Call Today
          </div>
        </div>

        {/* ================= MOBILE ICON ================= */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden bg-white px-6 py-5 space-y-4 shadow-lg">

          <div
            onClick={() => go("/")}
            className={`cursor-pointer font-medium ${
              isActive("/") ? "text-blue-600 font-bold" : ""
            }`}
          >
            Home
          </div>

          {/* MOBILE ABOUT */}
          <div>
            <div className="font-medium text-blue-600">About</div>
            <div className="mt-2 ml-4 space-y-2">
              {aboutItems.map((item) => (
                <div
                  key={item.label}
                  onClick={() => go(item.path)}
                  className={`cursor-pointer ${
                    isActive(item.path)
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-blue-500"
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {navItems.map((item) => (
            <div
              key={item.label}
              onClick={() => go(item.path)}
              className={`cursor-pointer font-medium ${
                isActive(item.path) ? "text-blue-600 font-bold" : ""
              }`}
            >
              {item.label}
            </div>
          ))}

          <div
            onClick={() => go("/contact-us")}
            className="w-full bg-blue-500 text-white py-2 rounded-xl text-center cursor-pointer hover:bg-blue-600"
          >
            Schedule a Call Today
          </div>
        </div>
      )}
    </nav>
  );
}



import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-gray-300 pt-20 pb-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-wider bg-gradient-to-r from-yellow-300 to-yellow-700 text-transparent bg-clip-text mb-4 drop-shadow-[0_0_10px_rgba(255,210,48,0.5)]">
              BUSINESSCARE
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Transforming businesses with modern media strategy,  
              result-driven marketing & world-class brand planning.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="footer-title-luxury text-yellow-400">Quick Links</h3>
            <ul className="footer-list-luxury space-y-2">

              <li>About</li>
              <li>Awards</li>
              <li>Mission & Vision</li>
              <li>Our Founders</li>
              <li>Why Business Care</li>

              {/* ⭐ SUPER HIGHLIGHTED REGISTRATION LINK ⭐ */}
              <li className="mt-4">
                <Link
                  to="form-options"
                  className="relative text-[20px] font-extrabold 
                  bg-gradient-to-r from-yellow-300 to-yellow-600 
                  text-transparent bg-clip-text 
                  drop-shadow-[0_0_12px_rgba(255,210,0,0.5)]
                  hover:scale-110 transition-all duration-300 inline-block"
                >
                  ⭐ Business Registration Form
                </Link>
              </li>

              {/* ⭐ ADMIN LOGIN LINK ADDED HERE ⭐ */}
              <li className="mt-4">
                <Link
                  to="/admin"
                  className="text-yellow-400 hover:text-yellow-500 
                  font-semibold tracking-wide transition-all"
                >
                  Admin Login
                </Link>
              </li>

            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="footer-title-luxury text-yellow-400">Our Services</h3>
            <ul className="footer-list-luxury space-y-2">
              <li>Grow Your Sales</li>
              <li>Low Investment Big Buzz</li>
              <li>Find Target Audience</li>
              <li>Startup Strategy</li>
              <li>Business Growth Programme</li>
              <li>Choose Right Media Platforms</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="footer-title-luxury text-yellow-400">Contact</h3>
            <ul className="footer-list-luxury space-y-2">
              <li><strong>Phone:</strong> +91 7042-438-293</li>
              <li><strong>Email:</strong> Info@businesscare.org.in</li>
              <li>
                <strong>Address:</strong>  
                A-111, Sec-63, Noida UP-201301
              </li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6">
              <IconGold><Facebook size={22} /></IconGold>
              <IconGold><Twitter size={22} /></IconGold>
              <IconGold><Linkedin size={22} /></IconGold>
              <IconGold><Instagram size={22} /></IconGold>
              <IconGold><Youtube size={22} /></IconGold>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="text-center mt-16 pt-6 border-t border-[#1a1a1a]">
          <p className="text-yellow-400 tracking-wide">
            © {new Date().getFullYear()} Businesscare.org.in — All Rights Reserved
          </p>

          <div className="flex justify-center gap-8 mt-4 text-sm text-yellow-400">
            <a className="luxury-bottom-link cursor-pointer">Privacy Policy</a>
            <a className="luxury-bottom-link cursor-pointer">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

/* ICON GOLD STYLE */
function IconGold({ children }) {
  return (
    <div className="p-3 rounded-full bg-[#111] border border-[#2a2a2a] 
                     text-yellow-400
                    hover:border-yellow-500 hover:text-yellow-400 
                    shadow-[0_0_10px_rgba(255,200,0,0.15)]
                    hover:shadow-[0_0_18px_rgba(255,200,0,0.45)]
                    transition-all cursor-pointer">
      {children}
    </div>
  );
}

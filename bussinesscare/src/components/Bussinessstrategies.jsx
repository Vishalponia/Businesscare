


import React, { useState, useEffect } from "react";
import {
  FaLightbulb,
  FaChartLine,
  FaUsers,
  FaMoneyBill,
  FaBolt,
  FaStore,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function BusinessSection() {
  const navigate = useNavigate();

  const images = [
    "https://businesscare.org.in/wp-content/uploads/2023/03/IMG-20220824-WA0016-2.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/03/IMG_20220417_000315_557-1.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/03/IMG-20221013-WA0039.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/03/IMG-20221203-WA0025.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/03/IMG-20190208-WA0047.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/03/puja.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/03/puja1-scaled.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/03/puja4.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-31-at-1.26.54-PM.jpeg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(slider);
  }, []);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <section className="relative w-full bg-[#420037] text-white py-16 lg:py-24 overflow-hidden">
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/videos/bgvideo2.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* TOP TEXT */}
        <p className="text-base sm:text-lg md:text-xl text-center max-w-4xl mx-auto mb-12 leading-relaxed">
          ज्यादातर बिजनेसमैन बिजनेस एक्सपेंशन के लिए पुरानी तकनीकों का इस्तेमाल करते हैं।
          जिसके चलते बिजनेस लॉस में चले जाते हैं, व्यापार की एक छोटी सी रणनीति की गलतियाँ
          आपको घाटे में ला सकती है।
        </p>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Come To Us And We Will Show You How To Take Your Company To New Heights
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm sm:text-base">
              <li>✔ Media placements strategy</li>
              <li>✔ Television media promotion</li>
              <li>✔ National TV commercial ads</li>
              <li>✔ TV ad film development</li>
              <li>✔ Creative TV ad ideas</li>
              <li>✔ Radio ad placements</li>
              <li>✔ IPL special promotions</li>
              <li>✔ OTT promotions</li>
              <li>✔ Airport promotions</li>
              <li>✔ Metro promotions</li>
              <li>✔ PVR cinemas PAN India</li>
              <li>✔ In-film promotions</li>
            </ul>

            <button
              onClick={() => navigate("/contact-us")}
              className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400"
            >
              Let's Work Together
            </button>
          </div>

          {/* RIGHT SLIDER */}
          <div className="relative w-full h-[220px] sm:h-[300px] md:h-[360px] lg:h-[420px] rounded-xl overflow-hidden shadow-xl">
            <img
              src={images[index]}
              alt="Business"
              className="w-full h-full object-cover transition-all duration-700"
            />

            <button
              onClick={prev}
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 px-3 py-2 rounded-full"
            >
              ❮
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 px-3 py-2 rounded-full"
            >
              ❯
            </button>
          </div>
        </div>

        {/* ICON GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center mt-20">
          {[
            { icon: FaLightbulb, text: "NEW STARTUPS MARKETING STRATEGY" },
            { icon: FaChartLine, text: "OLD BUSINESS GROWTH STRATEGY" },
            { icon: FaUsers, text: "FIND YOUR TARGET AUDIENCE" },
            { icon: FaMoneyBill, text: "GROW YOUR SALES" },
            { icon: FaBolt, text: "LOW INVESTMENT BIG BUZZ" },
            { icon: FaStore, text: "CHOOSE RIGHT MEDIA PLATFORMS" },
          ].map((item, i) => (
            <div key={i} className="space-y-3">
              <item.icon size={60} className="mx-auto text-yellow-400" />
              <h3 className="text-base sm:text-lg font-semibold hover:text-yellow-400">
                {item.text}
              </h3>
              <button 
             onClick={() => navigate("/services")}
              className="bg-yellow-500 text-black px-5 py-2 rounded-full font-bold hover:bg-yellow-400">
                SEE MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function BusinessBrandSection() {
  // Counter States
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // Detect when Awards Section is on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [hasStarted]);

  // Counter Animation
  useEffect(() => {

    if (!hasStarted) return;

    let start = 0;
    const end = 100;
    const duration = 2000;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [hasStarted]);

  return (
    <>
      {/* ===== LAST COMPONENT START ===== */}
      <section className="w-full py-20 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT LARGE IMAGE */}
          <img
            src="https://businesscare.org.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-31-at-12.42.45.png"
            alt="Business Strategy"
            className="w-full h-auto rounded-2xl  object-cover"
          />

          {/* RIGHT CONTENT */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
              अब कम खर्चा मुनाफा ज्यादा,
              <br />
              कम समय में बनाएं अपने ब्रांड को नंबर 1 ब्रांड
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Are you a business owner trying to increase sales, we are here to plan your
              marketing strategy:
            </p>

            <ul className="list-disc list-inside text-gray-800 font-semibold space-y-2">
              <li>Product analysis</li>
              <li>Product research</li>
              <li>Product target audience strategy</li>
              <li>Product market strategy</li>
              <li>Product distribution</li>
              <li>Product dealer network management strategy</li>
              <li>Product sales growth strategy</li>
            </ul>

            <button 
             onClick={() => navigate("/contact-us")}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition font-medium mt-4">
              Get Appointment
            </button>
          </div>
        </div>
      </section>
      {/* ===== LAST COMPONENT END ===== */}


      {/* ===== AWARDS SECTION START (ADDED) ===== */}
      <section
        ref={sectionRef}
        className="w-full py-20 bg-gradient-to-r from-blue-50 to-blue-300 text-center"
      >
        <div className="max-w-4xl mx-auto px-6">

          {/* COUNTER */}
          <h2 className="text-6xl md:text-7xl font-extrabold text-blue-700 drop-shadow">
            {count}+
          </h2>

          {/* HEADING */}
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
             Awards
          </h3>

          {/* SUBHEADING */}
          <p className="text-lg md:text-xl text-gray-700 font-bold mt-2 leading-relaxed">
            WE ARE AVAILABLE IN DELHI, GURGAON, NOIDA, MUMBAI, GUJARAT & PONDICHERRY
          </p>
        </div>
      </section>
      {/* ===== AWARDS SECTION END ===== */}

    </>
  );
}

// import { motion } from "framer-motion";
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";



// function CounterCard({ target, label }) {
//   const [count, setCount] = useState(0);
//   const [hasStarted, setHasStarted] = useState(false);
//   const ref = React.useRef(null);
 

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && !hasStarted) {
//           setHasStarted(true);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => observer.disconnect();
//   }, [hasStarted]);

//   useEffect(() => {
//     if (!hasStarted) return;

//     let start = 0;
//     const end = target;
//     const duration = 2000;
//     const increment = end / (duration / 16);

//     const counter = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         setCount(end);
//         clearInterval(counter);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, 16);

//     return () => clearInterval(counter);
//   }, [hasStarted, target]);

//   return (
//     <div ref={ref} className="text-center bg-white rounded-2xl p-6 shadow-md">
//       <h3 className="text-4xl font-bold text-blue-700">{count}+</h3>
//       <p className="text-gray-700 font-medium pt-2">{label}</p>
//     </div>
//   );
// }

// export default function HeroSection() {
//   const navigate = useNavigate();
//   return (
//     <section className="w-full bg-gradient-to-r from-blue-500 to-blue-300 py-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

//         {/* LEFT IMAGE */}
//         <motion.img
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           src="https://businesscare.org.in/wp-content/uploads/2023/04/Untitled-1.png"
//           alt="Business Coach"
//           className="w-full h-auto rounded-2xl  bg-transparent"
//         />

//         {/* RIGHT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: 80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           className="space-y-4"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold leading-snug text-yellow-400 drop-shadow">
//             MEET LIVE WITH INDIA'S CELEBRITY BUSINESS COACHES
//           </h2>

//           <h3 className="text-2xl font-semibold text-blue-700">Mr. Ankur Bansal</h3>
//           <h3 className="text-2xl font-semibold text-blue-700">&</h3>
//           <h3 className="text-2xl font-semibold text-blue-700">Ms. Pooja Sharma</h3>

//           <p className="text-lg font-bold text-gray-900">CELEBRITY COACHES</p>

//           <p className="text-gray-900 text-2xl font-bold leading-relaxed">
//             अब बदलेगा इंडिया का बिज़नेस, आ गया है <span className="font-semibold">Business Care</span>,
//             <br />पुरानी पद्धति छोड़ो नयी रणनीति अपनाओ
//           </p>

//           <p className="text-gray-700 text-lg leading-relaxed">
//             Are you a Business Owner trying to increase sales?
//             <br />We are here to plan your marketing strategy.
//           </p>

         

//           <motion.button
//   whileHover={{ scale: 1.05 }}
//   whileTap={{ scale: 0.95 }}
//   onClick={() => navigate("/contact-us")}
//   className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition font-medium"
// >
//   Schedule an Appointment
// </motion.button>


//           {/* ACHIEVEMENT BUTTON BELOW CONTENT */}
          
//         </motion.div>
//       </div>
//       <button className="bg-orange-500 text-white px-5 py-2 rounded-xl shadow 
// hover:bg-orange-600 transition font-semibold mt-6 mx-auto block text-center">
//   Our Achievements
// </button>
//       {/* COUNTER SECTION BELOW FULL HERO */}
//       <div className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
//         <CounterCard target={1500} label="Real Estate Projects Done" />
//         <CounterCard target={1500} label="FMCG Startup Projects Done" />
//         <CounterCard target={2500} label="Pan India Clients" />
//       </div>
//     </section>
//   );
// }





import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function CounterCard({ target, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setStarted(true),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = target / 80;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 20);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref} className="bg-white rounded-xl p-5 shadow text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-blue-700">{count}+</h3>
      <p className="text-sm md:text-base text-gray-700 mt-1">{label}</p>
    </div>
  );
}

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gradient-to-r from-blue-500 to-blue-300 pt-20 md:pt-28 pb-14">
      <div className="max-w-7xl mx-auto px-4">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* IMAGE */}
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            src="https://businesscare.org.in/wp-content/uploads/2023/04/Untitled-1.png"
            alt="Business Coach"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full mx-auto"
          />

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left space-y-4"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-300">
              MEET LIVE WITH INDIA'S CELEBRITY BUSINESS COACHES
            </h2>

            <div className="text-lg sm:text-xl md:text-2xl font-bold text-orange-400">
              Mr. Ankur Bansal & Ms. Pooja Sharma
            </div>

            <p className="font-bold text-gray-900">[CELEBRITY COACHES]</p>

            <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
              अब बदलेगा इंडिया का बिज़नेस, आ गया है Business Care,
              <br className="hidden sm:block" />
              पुरानी पद्धति छोड़ो नयी रणनीति अपनाओ
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-800">
              Are you a Business Owner trying to increase sales?
              <br className="hidden sm:block" />
              We are here to plan your marketing strategy.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col cursor-pointer sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact-us")}
                className="bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-lg"
              >
                Schedule an Appointment
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/about/founders")}
                className="bg-orange-600 cursor-pointer text-white px-6 py-3 rounded-lg"
              >
                Our Achievements
              </motion.button>

            </div>
          </motion.div>
        </div>

        {/* COUNTERS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <CounterCard target={1500} label="Real Estate Projects Done" />
          <CounterCard target={1500} label="FMCG Startup Projects Done" />
          <CounterCard target={2500} label="Pan India Clients" />
        </div>
      </div>
    </section>
  );
}


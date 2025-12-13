// import { motion, AnimatePresence } from "framer-motion";
// import React, { useState, useEffect } from "react";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// export default function BusinessStrategySection() {
//   const images = [
//     "https://businesscare.org.in/wp-content/uploads/2023/03/IMG-20220824-WA0016-2.jpg",
//     "https://businesscare.org.in/wp-content/uploads/2023/03/IMG_20220417_000315_557-1.jpg",
//     "https://businesscare.org.in/wp-content/uploads/2023/03/IMG-20221013-WA0039.jpg",
//     "https://businesscare.org.in/wp-content/uploads/2023/03/IMG-20221203-WA0025.jpg",
//     "https://businesscare.org.in/wp-content/uploads/2023/03/IMG-20190208-WA0047.jpg",
//     "https://businesscare.org.in/wp-content/uploads/2023/03/puja.jpg",
//     "https://businesscare.org.in/wp-content/uploads/2023/03/puja1-scaled.jpg",
//     "https://businesscare.org.in/wp-content/uploads/2023/03/puja4.jpg",
//     "https://businesscare.org.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-31-at-1.26.54-PM.jpeg"
//   ];

//   const [index, setIndex] = useState(0);

//   // Auto slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   const slideVariants = {
//     enter: { x: "100%", opacity: 0 },
//     center: { x: "0%", opacity: 1 },
//     exit: { x: "-100%", opacity: 0 },
//   };

//   // Next / Prev handlers
//   const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
//   const prevSlide = () =>
//     setIndex((prev) => (prev - 1 + images.length) % images.length);

//   return (
//     <section className="w-full py-20 bg-white">
//       {/* TOP HINDI CONTENT */}
//       <motion.p
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-4xl mx-auto text-center text-lg font-extrabold md:text-2xl font-medium text-gray-700 leading-relaxed px-6"
//       >
//         ज्यादातर बिजनेसमैन बिजनेस एक्सपेंशन के लिए पुरानी तकनीकों का इस्तेमाल करते हैं।
//         जिसके चलते बिजनेस लॉस में चले जाते हैं, व्यापार की एक छोटी सी रणनीति की गलतियाँ
//         आपको घाटे में ला सकती है।
//       </motion.p>

//       {/* 2 COLUMN SECTION */}
//       <div className="max-w-7xl mx-auto px-6 mt-16 grid md:grid-cols-2 gap-12 items-center">
//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="space-y-4"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
//             Come To Us And We Will Show You <br />
//             How To Take Your Company To New Heights
//           </h2>

//           <ul className="list-disc list-inside font-bold text-gray-700 leading-relaxed space-y-2">
//             <li>Media placements strategy</li>
//             <li>Television media promotion & advertising</li>
//             <li>TV commercial placements on national TV channels</li>
//             <li>TV ad films development as per the product</li>
//             <li>Innovative ideas for TV commercial ads</li>
//             <li>Radio ads planning & placements</li>
//             <li>IPL special promotions for exclusive products</li>
//             <li>OTT platforms promotions</li>
//             <li>Airports promotions pan India</li>
//             <li>Metro promotions pan India</li>
//             <li>PVR cinemas pan India</li>
//             <li>Film & TV serial promotions & integrations</li>
//           </ul>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition font-medium mt-6"
//           >
//             Let's Work Together
//           </motion.button>
//         </motion.div>

//         {/* RIGHT SLIDING IMAGE WITH ARROWS */}
//         <div className="relative w-full h-auto overflow-hidden rounded-2xl shadow-lg">
//           <AnimatePresence initial={false}>
//             <motion.img
//               key={index}
//               src={images[index]}
//               alt={`Slider ${index + 1}`}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{ type: "tween", duration: 1 }}
//               className="w-full h-auto object-contain bg-transparent"
//             />
//           </AnimatePresence>

//           {/* Prev Arrow */}
//           <button
//             onClick={prevSlide}
//             className="absolute top-1/2 -translate-y-1/2 left-2 bg-gray-700 bg-opacity-40 hover:bg-opacity-70 text-white p-2 rounded-full"
//           >
//             <ChevronLeftIcon className="w-6 h-6" />
//           </button>

//           {/* Next Arrow */}
//           <button
//             onClick={nextSlide}
//             className="absolute top-1/2 -translate-y-1/2 right-2 bg-gray-700 bg-opacity-40 hover:bg-opacity-70 text-white p-2 rounded-full"
//           >
//             <ChevronRightIcon className="w-6 h-6" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }




// import { useState, useEffect } from "react";
// import bgVideo from "../assets/bgvideo2.mp4";


// const MediaSection = () => {
//   const images = [
//     "https://businesscare.org.in/wp-content/uploads/2023/03/IMG-20220824-WA0016-2.jpg",
//     "https://businesscare.org.in/wp-content/uploads/2023/03/IMG_20220417_000315_557-1.jpg",
//     "https://businesscare.org.in/wp-content/uploads/2023/03/IMG-20221013-WA0039.jpg",
//     "https://businesscare.org.in/wp-content/uploads/2023/03/IMG-20221203-WA0025.jpg",
//     "https://businesscare.org.in/wp-content/uploads/2023/03/IMG-20190208-WA0047.jpg",
//     "https://businesscare.org.in/wp-content/uploads/2023/03/puja.jpg",
//     "https://businesscare.org.in/wp-content/uploads/2023/03/puja1-scaled.jpg",
//     "https://businesscare.org.in/wp-content/uploads/2023/03/puja4.jpg",
//     "https://businesscare.org.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-31-at-1.26.54-PM.jpeg",
//   ];

//   const [current, setCurrent] = useState(0);

//   // Auto-slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <section className="relative w-full  bg-black text-white overflow-hidden py-20">

//       {/* Background Video */}
//       <video
//         src={bgVideo}
//         className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         {/* <source src="/bgvideo2.mp4" type="video/mp4" /> */}
//       </video>

//       {/* Content Section */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

//         {/* LEFT CONTENT */}
//         <div className="flex flex-col justify-center">
//           <p className="text-lg mb-4 text-orange-400 font-semibold">
//             ज्यादातर बिजनेसमैन बिजनेस एक्सपेंशन के लिए पुरानी तकनीकों का इस्तेमाल करते हैं।
//   जिसके चलते बिजनेस लॉस में चले जाते हैं, व्यापार की एक छोटी सी रणनीति की गलतियाँ
//   आपको घाटे में ला सकती है।
//           </p>

//           <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
//             Come To Us And We Will Show You How To Take Your Company To New Heights
//           </h2>

//           <ul className="space-y-2 text-lg">
//             <li>• Media placements strategy</li>
//             <li>• Television media promotion & advertising</li>
//             <li>• TV commercial placements on national tv channels</li>
//             <li>• TV ad films development for your product</li>
//             <li>• Innovative ideas for TV commercial ads</li>
//             <li>• Radio ads planning & placements</li>
//             <li>• IPL special promotions</li>
//             <li>• OTT platforms promotions</li>
//             <li>• Airport promotions (Pan India)</li>
//             <li>• Metro promotions (Pan India)</li>
//             <li>• PVR cinemas advertising</li>
//             <li>• In-film & TV serial promotions & integrations</li>
//           </ul>

//           <button className="mt-6 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl text-lg font-semibold w-fit">
//             Let’s Work Together
//           </button>
//         </div>

//         {/* RIGHT — FIXED IMAGE SLIDER */}
//         <div className="relative w-full  h-[420px] rounded-2xl overflow-hidden shadow-xl">

//           {/* Images */}
//           <div
//             className="w-full h-full flex transition-transform duration-700"
//             style={{ transform: `translateX(-${current * 100}%)` }}
//           >
//             {images.map((img, idx) => (
//               <img
//                 key={idx}
//                 src={img}
//                 className="w-full h-[420px] object-cover flex-shrink-0 rounded-2xl"
//                 alt=""
//               />
//             ))}
//           </div>

//           {/* Left Arrow */}
//           <button
//             onClick={prevSlide}
//             className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full"
//           >
//             ❮
//           </button>

//           {/* Right Arrow */}
//           <button
//             onClick={nextSlide}
//             className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full"
//           >
//             ❯
//           </button>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default MediaSection;







import React, { useState, useEffect } from "react";
import { FaLightbulb, FaChartLine, FaUsers, FaMoneyBill, FaBolt, FaStore } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BusinessSection = () => {
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
    "https://businesscare.org.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-31-at-1.26.54-PM.jpeg"
  ];

  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {

    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative w-full bg-[#420037]  text-white py-20 overflow-hidden">

      {/* 🔥 Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-fit opacity-20"
      >
        <source src="/videos/bgvideo2.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <p className="text-3xl text-center max-w-4xl mx-auto mb-10">
          ज्यादातर बिजनेसमैन बिजनेस एक्सपेंशन के लिए पुरानी तकनीकों का इस्तेमाल करते हैं।
          जिसके चलते बिजनेस लॉस में चले जाते हैं, व्यापार की एक छोटी सी रणनीति की गलतियाँ आपको घाटे में ला सकती है।
        </p>

        {/* Content + Slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left content */}
          <div>
            <h2 className="text-3xl font-bold leading-snug mb-4">
              Come To Us And We Will Show You How To Take Your Company To New Heights
            </h2>

            <ul className="space-y-2 text-lg">
              <li>✔ Media placements strategy</li>
              <li>✔ Television media promotion & advertising</li>
              <li>✔ TV commercial placements on national channels</li>
              <li>✔ TV ad films development</li>
              <li>✔ Creative ideas for TV ads</li>
              <li>✔ Radio ads planning & placements</li>
              <li>✔ IPL special product promotions</li>
              <li>✔ OTT promotions</li>
              <li>✔ Airport promotions PAN India</li>
              <li>✔ Metro promotions PAN India</li>
              <li>✔ PVR cinemas PAN India</li>
              <li>✔ In-film & serial promotions</li>
            </ul>

            <button 
             onClick={() => navigate("/contact-us")}
            className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded-lg font-bold hover:bg-yellow-400">
              Let's Work Together
            </button>
          </div>

          {/* Right Slider */}
          <div className="relative w-full h-[300px] overflow-hidden rounded-xl shadow-xl">

            <img
              src={images[index]}
              alt="slider"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
            />

            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
            >
              ❮
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
            >
              ❯
            </button>
          </div>
        </div>

        {/* EXTRA ICONS SECTION BELOW — YOU SAID THIS VIEW ALSO ADD */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mt-20">

          <div>
            <FaLightbulb size={70} color="#FFD700" className="mx-auto" />
            <h3 className="text-xl font-semibold mt-3  hover:text-yellow-500">NEW STARTUPS MARKETING STRATEGY</h3>
            <button className="mt-3 bg-yellow-500  hover:bg-yellow-600 text-black px-5 py-2 rounded-full font-bold">
              SEE MORE
            </button>
          </div>

          <div>
            <FaChartLine size={70} color="#FFD700" className="mx-auto" />
            <h3 className="text-xl font-semibold mt-3  hover:text-yellow-500">OLD BUSINESS GROWTH PROGRAM STRATEGY</h3>
            <button className="mt-3 bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2 rounded-full font-bold">
              SEE MORE
            </button>
          </div>

          <div>
            <FaUsers size={70} color="#FFD700" className="mx-auto" />
            <h3 className="text-xl font-semibold mt-3  hover:text-yellow-500">HOW TO FIND YOUR TARGET AUDIENCE</h3>
            <button className="mt-3 bg-yellow-500  hover:bg-yellow-600 text-black px-5 py-2 rounded-full font-bold">
              SEE MORE
            </button>
          </div>

            <div>
            <FaMoneyBill size={70} color="#FFD700" className="mx-auto" />
            <h3 className="text-xl font-semibold mt-3  hover:text-yellow-500">HOW TO GROW YOUR SALE</h3>
            <button className="mt-3 bg-yellow-500  hover:bg-yellow-600 text-black px-5 py-2 rounded-full font-bold">
              SEE MORE
            </button>
          </div>
           

            <div>
            <FaBolt size={70} color="#FFD700" className="mx-auto" />
            <h3 className="text-xl font-semibold mt-3  hover:text-yellow-500">LOW INVESTMENT BIG BUZZ</h3>
            <button className="mt-3 bg-yellow-500  hover:bg-yellow-600 text-black px-5 py-2 rounded-full font-bold">
              SEE MORE
            </button>
          </div>


           <div>
            <FaStore size={70} color="#FFD700" className="mx-auto" />
            <h3 className="text-xl font-semibold mt-3 hover:text-yellow-500">HOW TO CHOOSE RIGHT MEDIA PLATFORMS</h3>
            <button className="mt-3 bg-yellow-500  hover:bg-yellow-600 text-black px-5 py-2 rounded-full font-bold">
              SEE MORE
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BusinessSection;

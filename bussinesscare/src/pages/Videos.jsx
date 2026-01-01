// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function Videos() {
//   return (
//     <>
//       <Navbar />

//       HERO SECTION
//        <section className="pt-28 pb-20 relative">
//         Background Image 
//          <div
//           className="absolute inset-0 bg-cover bg-center brightness-125"
//           style={{
//             backgroundImage:
//               "url(https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg)",
//           }}
//         ></div>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/20"></div>

//         {/* Content */}
//         <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="text-white">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
//               Our Video Presence
//             </h1>
//             <p className="text-lg text-blue-500 font-extrabold leading-relaxed">
//               BusinessCare brings your brand into the spotlight through
//               powerful video storytelling, national coverage and impactful
//               digital reach.
//             </p>
//           </div>

//           {/* Right Image */}
//           <div className="flex justify-center">
//             <img
//               src="https://businesscare.org.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-31-at-12.42.45.png"
//               alt="BusinessCare Videos"
//               className="rounded-2xl  w-full max-w-lg"
//             />
//           </div>
//         </div> 
//       </section> 

//       {/* VIDEOS SECTION */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-center text-3xl md:text-4xl font-bold text-yellow-400 mb-12">
//             Featured Videos
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Video 1 */}
//             <iframe
//               className="w-full h-64 rounded-xl border border-yellow-500/30"
//               src="https://www.youtube.com/embed/QLiTsOfcKhw"
//               title="BusinessCare Video 1"
//               allowFullScreen
//             ></iframe>

//             {/* Video 2 */}
//             <iframe
//               className="w-full h-64 rounded-xl border border-yellow-500/30"
//               src="https://www.youtube.com/embed/Cc-T3PxAlQw"
//               title="BusinessCare Video 2"
//               allowFullScreen
//             ></iframe>

//             {/* Video 3 */}
//             <iframe
//               className="w-full h-64 rounded-xl border border-yellow-500/30"
//               src="https://www.youtube.com/embed/4V8bZ0HTiSo"
//               title="BusinessCare Video 3"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </section> 

//       <Footer />
//     </>
//   );
// }








import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Videos() {
  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="pt-28 pb-20 relative min-h-[420px] md:min-h-[520px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-125"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg)",
             
          }}

        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 flex items-center min-h-[420px] md:min-h-[520px]">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-yellow-500">
              Our Video Presence
            </h1>
            <p className=" text-white  text-xl font-extrabold leading-relaxed">
              BusinessCare brings your brand into the spotlight through powerful
              video storytelling, national coverage and impactful digital reach.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VIDEOS SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-yellow-600 mb-12 border-2 border-yellow-500 rounded-3xl">
            Featured Videos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Video 1 */}
            <iframe
              className="w-full h-64 rounded-xl border border-yellow-500/30"
              src="https://www.youtube.com/embed/QLiTsOfcKhw"
              title="BusinessCare Video 1"
              allowFullScreen
            ></iframe>

            {/* Video 2 */}
            <iframe
              className="w-full h-64 rounded-xl border border-yellow-500/30"
              src="https://www.youtube.com/embed/Cc-T3PxAlQw"
              title="BusinessCare Video 2"
              allowFullScreen
            ></iframe>

            {/* Video 3 */}
            <iframe
              className="w-full h-64 rounded-xl border border-yellow-500/30"
              src="https://www.youtube.com/embed/4V8bZ0HTiSo"
              title="BusinessCare Video 3"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

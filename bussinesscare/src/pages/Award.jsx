import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Award() {
  const awardImages = [
    "https://businesscare.org.in/wp-content/uploads/2023/03/48.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/03/BTUS.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/03/UTY.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/03/O9P.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/04/571.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/04/PUJ-JII-1-scaled.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/04/44Q.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/04/lio.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-03-at-11.54.21-P.jpeg",
    "https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-7.40.08-PM.jpeg",
    "https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-7.40.09-PM.jpeg",
    "https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-7.40.10-PM-1.jpeg",
  ];

  return (
    <>
      <Navbar />

      {/* ================= HERO AWARD SECTION ================= */}
      <section
        className="relative min-h-screen flex items-center pt-24"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/abstract-flowing-neon-wave-background_53876-101942.jpg?semt=ais_hybrid&w=740&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Bright Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-125"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-white">
            <h1 className="inline-block px-6 py-4  text-xl sm:text-3xl md:text-4xl lg:text-2xl font-extrabold  text-yellow-500 bg-[#F5E6F1]  rounded-2xl 
                   cursor-pointer transition-all duration-300 hover:bg-yellow-500 hover:text-[#420037]">
              Our Awards & Recognition
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              BusinessCare has been honored across India for excellence in
              entrepreneurship support, media visibility, and business growth
              strategies. These awards reflect our commitment to empowering
              businesses nationwide.
            </p>
          </div>

          {/* RIGHT PERSON IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://businesscare.org.in/wp-content/uploads/2023/03/O9P.jpg"
              // src="https://businesscare.org.in/wp-content/uploads/2023/04/PUJ-JII-1-scaled.jpg"
              alt="Awarded Person"
              className="w-[300px] md:w-[420px] lg:w-[400px] rounded-2xl shadow-2xl border-4 border-yellow-400  transition-transform duration-500 ease-in-out hover:scale-120"
            />
          </div>
        </div>
      </section>

      {/* ================= AWARDS GALLERY ================= */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-bold text-yellow-400 mb-14 border-4 border-yellow-500  rounded-3xl">
            Glimpses of Our Achievements
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {awardImages.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-yellow-500/30 
                           shadow-lg hover:shadow-yellow-500/40 transition-all duration-300"
              >
                <img
                  src={img}
                  alt={`Award ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

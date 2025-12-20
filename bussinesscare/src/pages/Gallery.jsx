 import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  const images = [
    "https://businesscare.org.in/wp-content/uploads/2023/03/GTB-scaled.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/03/U8-scaled.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/03/77-scaled.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/04/POJI-scaled.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/03/46.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/03/BGTD.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/03/F3.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/03/REM1.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/03/FDSA-scaled.jpg",
    "https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-03-at-11.54.18-PM.jpeg",
    "https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-03-at-11.55.17-PM.jpeg",
    "https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-03-at-11.54.20-PM.jpeg",
    "https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-03-at-11.54.21-PM.jpeg",
    "https://businesscare.org.in/wp-content/uploads/2023/04/Whk-1.jpeg",
    "https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-03-at-11.55.18-PM-1.jpeg",
    "https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-05-at-5.07.02-PM.jpeg",
    "https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-05-at-5.07.04-PM.jpeg",
    "https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-05-at-5.07.07-PM.jpeg",
    "https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-25-at-12.00.44.jpeg",
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="pt-28 pb-20 py-0 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1681400054984-c20bf5879c3b?w=500)",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
              Our Gallery
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              A glimpse of our successful events, award ceremonies,  
              business meets and memorable moments with industry leaders.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src="https://businesscare.org.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-31-at-12.42.45.png"
              alt="Gallery Highlight"
              className="w-full rounded-2xl  brightness-150"
            />
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-yellow-400 mb-12">
            Event & Award Moments
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {images.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-yellow-500/30
                           hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-fit"
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

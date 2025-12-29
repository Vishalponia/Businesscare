import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <>
      <Navbar />

      {/* ================= FULL PAGE HERO ================= */}
      <section
        className="h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1555900/pexels-photo-1555900.jpeg')",
        }}
      >
        <div className="bg-black/30 w-full h-full flex items-center justify-center">
          <h1 className="text-amber-300 text-5xl md:text-6xl font-extrabold tracking-wider">
            OUR SERVICES
          </h1>
        </div>
      </section>

      {/* ================= SECTION 1 ================= */}
      <ServiceSection
        bg="bg-blue-500"
        title="NEW START UP MARKETING STRATEGY"
        text="Programmes for Raising New Startups. In relation to the development of any startup, it is very important to understand their business model and consumer angle."
        image="https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-15.28.24.png"
      />

      {/* ================= SECTION 2 ================= */}
      <ServiceSection
        bg="bg-green-500"
        title="OLD BUSINESS GROWTH PROGRAMMES STRATEGY"
        text="How to Revive an Old Business. Raising the buzz of the product from door to door, make everyone need, make everyone rote again and again."
        image="https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-15.20.19-e1681987481804.png"
      />

      {/* ================= SECTION 3 ================= */}
      <ServiceSection
        bg="bg-yellow-500"
        title="HOW TO TARGET YOUR AUDIENCE"
        text="Grab real customers, end buyer's hassle, and start your sales."
        image="https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-15.24.03.png"
        extra="For More Information — Contact us: 7042438293"
      />

      {/* ================= SECTION 4 ================= */}
      <ServiceSection
        bg="bg-purple-500"
        title="HOW TO GROW YOUR SALES"
        text="Find your real buyer. When the need of the customer arises, then your business will shine."
        image="https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-15.19.05.png"
        extra="For More Understanding — Contact us: 7042438293"
      />

      <Footer />
    </>
  );
}

/* ================= REUSABLE SERVICE SECTION ================= */

function ServiceSection({ bg, title, text, image, extra }) {
  return (
    <section className={`${bg} py-0 `}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6  mt-4 text-gray-900">
            {title}
          </h2>

          <p className="text-gray-800 text-lg mb-6 leading-relaxed">
            {text}
          </p>

          {extra && (
            <p className="font-semibold text-gray-900 mb-6">{extra}</p>
          )}

          <button
            onClick={() => (window.location.href = "tel:+917042438293")}
            className="cursor-pointer bg-blue-900 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Call Now
          </button>
        </div>

        {/* IMAGE */}
        <div>
          <img
            src={image}
            alt={title}
            className="w-full rounded-3xl "
          />
        </div>
      </div>
    </section>
  );
}

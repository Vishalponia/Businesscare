import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        className="pt-12 pb-60 text-white"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1681399975135-252eab5fd2db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D')",
             backgroundSize: "cover",
            // backgroundPosition: "center",
        
        }}
      >
        <div className="bg-black/60 py-20">
          <h1 className="text-center text-amber-300 text-4xl md:text-5xl font-bold">
            SERVICES
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
        text="How to Revive an Old Business. Raising the buzz of the product from door to door, make everyone need, make everyone rote again and again. Stand out from competitors."
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

/* ================= REUSABLE SECTION ================= */

function ServiceSection({ bg, title, text, image, extra }) {
  return (
    <section className={`${bg} py-0`}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            {title}
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            {text}
          </p>

          {extra && (
            <p className="font-semibold text-gray-800 mb-6">{extra}</p>
          )}

          <button 
          onClick={() => window.location.href = "tel:+917042438293"}
          className="bg-blue-900 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
            Call Now
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src={image}
            alt={title}
            className="w-full rounded-2xl "
          />
        </div>
      </div>
    </section>
  );
}

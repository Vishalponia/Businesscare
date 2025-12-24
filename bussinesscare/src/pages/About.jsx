import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";


export default function About() {
  const navigate = useNavigate();
  return (
    <>
   
      <Navbar />
     

      {/* ================= HERO SECTION (BG IMAGE) ================= */}
      {/* ================= HERO SECTION (BG IMAGE) ================= */}
<section
  className="w-full h-[100vh] pt-4"
  style={{
    backgroundImage:
      "url('https://businesscare.org.in/wp-content/uploads/2023/04/about-header-1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* OVERLAY */}
  <div className="w-full h-full bg-black/10 pt-4 flex items-center">
    <div className="px-6 md:px-16 lg:px-24">
      <h2 className="text-white text-3xl md:text-5xl font-extrabold leading-snug mb-4">
        बिजनेस की एक्सक्लूसिव स्ट्रैटेजी <br />
        सिर्फ बिजनेस केयर पर
      </h2>

      <p className="text-gray-200 max-w-xl text-lg">
        We help businesses grow with proven media strategies, expert
        guidance, and real-world experience.
      </p>
    </div>
  </div>
</section>


      {/* ================= ABOUT CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h3 className="text-3xl font-bold mb-4 text-purple-900">
            About Us
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            Business Care was started by great minds in the media industry who
            have benefited thousands of business owners with their knowledge and
            wisdom. Business Care is a wonderful research and initiative of two
            scholars who have made their career in the media industry, appearing
            on many big TV channels.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Founders of Business Care, Miss Pooja Sharma – a media industry
            professional and television celebrity entrepreneur, and Mr. Ankur
            Bansal – a young business strategist. In just 12 years, the company
            has opened 14 companies and today they are a well-known name across
            the country.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src="https://businesscare.org.in/wp-content/uploads/2023/03/FDSA-1280x1280.jpg"
            alt="About Business Care"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://businesscare.org.in/wp-content/uploads/2023/03/49.jpg"
              alt="Strategy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-4">
              Create more Sales and grow your business
            </h3>

            <p className="text-gray-700 mb-6">
              We can help you with picking out the best strategy for your company
              and its work. Our expert guidance ensures long-term growth and
              profitability.
            </p>

            <button 
              onClick={() => navigate("/services")}
             className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
              Read More
            </button>
          </div>
        </div>
      </section>


      {/* ================= ENHANCE YOUR POWERS ================= */}
<section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
  {/* LEFT CONTENT */}
  <div>
    <h2 className="text-4xl font-extrabold text-purple-900 mb-4">
      ENHANCE YOUR <br /> POWERS
    </h2>

    <h4 className="text-lg text-purple-700 mb-6">
      Choose Correct Platform
    </h4>

    <p className="text-gray-700 leading-relaxed mb-6">
      Business is new or old, we design marketing and strategy
      according to your product and market need. Our expert
      team ensures clarity, growth and profitability.
    </p>

    <ul className="space-y-3 font-semibold">
      <li>✔ Valuation Services</li>
      <li>✔ Development of Financial Models</li>
      <li>✔ Corporate Financial Advisory</li>
      <li>✔ Deal Structuring</li>
    </ul>
  </div>

  {/* RIGHT ICON STATS */}
  <div className="grid grid-cols-3 gap-6 text-center">
    <div>
      <h3 className="text-3xl font-bold">100+</h3>
      <p className="text-sm">Live Personal Meetings</p>
    </div>
    <div>
      <h3 className="text-3xl font-bold">300+</h3>
      <p className="text-sm">Online per day consultation</p>
    </div>
    <div>
      <h3 className="text-3xl font-bold">250+</h3>
      <p className="text-sm">Video Calls Consultancy</p>
    </div>
  </div>
</section>
         


         {/* ================= AVAILABILITY SECTION ================= */}
<section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

    {/* LEFT EMPTY / INFO */}
    <div>
      <h3 className="text-3xl font-bold mb-4">
        Expanding Across India
      </h3>
      <p className="text-gray-700">
        Our presence is growing rapidly across major cities
        with strong business networks and expert teams.
      </p>
    </div>

    {/* RIGHT LIST */}
    <div className="space-y-6">
      <div className="bg-gray-200 px-6 py-4 font-bold">
        We Available in Noida
      </div>
      <div className="bg-gray-200 px-6 py-4 font-bold">
        We Available in Delhi
      </div>
      <div className="bg-gray-200 px-6 py-4 font-bold">
        We Available in Gurgaon
      </div>
      <div className="bg-gray-200 px-6 py-4 font-bold">
        We Available in Gujrat
      </div>
      <div className="bg-orange-600 text-white px-6 py-4 font-bold">
        We Available in Mumbai
      </div>
    </div>

  </div>
</section>



      <Footer />
    </>
  );
}

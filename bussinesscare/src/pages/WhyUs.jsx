import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function WhyUs() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="bg-yellow-500 text-gray-800">

        {/* ================= TOP BANNER ================= */}
        <div className="relative w-full mt-16 ">
          <img
            src="https://businesscare.org.in/wp-content/uploads/2023/03/di9-1.jpg"
            alt="Why Business Care"
            className="w-full  h-[580px] object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-orange-400 text-center px-4">
              Why Business Care
            </h1>
          </div>
        </div>

        {/* ================= INTRO TEXT ================= */}
        

        {/* ================= MAIN CONTENT ================= */}
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://businesscare.org.in/wp-content/uploads/2023/03/poja-sh.jpg"
              alt="Business Care Founder"
              className="rounded-2xl  w-full  max-w-md object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              Game Changer of Business
            </h2>

            <p className="text-gray-700 font-semibold mb-4">
              Are you a new startup? Are you facing problems improving your sales growth?
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Many businesses struggle due to lack of marketing planning and
              business awareness. That’s where Business Care steps in.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Come meet our business coaches who can change your business model
              with their unique business strategies and practical tricks.
            </p>

            {/* POINTS */}
            <ul className="space-y-3 text-gray-700 mb-8 list-disc list-inside">
              <li>How do you sell your product when there are none available on the market?</li>
              <li>How to make your product different</li>
              <li>Business strategy planning</li>
              <li>How to grow sales</li>
              <li>How to do marketing</li>
              <li>How to become No.1 brand</li>
              <li>How to succeed</li>
              <li>How to attract distributors</li>
            </ul>

            {/* CTA BUTTON */}
            <button
              onClick={() => navigate("/services")}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

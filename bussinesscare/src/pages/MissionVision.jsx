import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MissionVision() {
  const navigate = useNavigate(); // ✅ REQUIRED

  return (
    <>
      <Navbar />

      <div className="bg-white text-gray-800">

        {/* TOP BANNER */}
        <div className="w-full mt-16">
          <img
            src="https://businesscare.org.in/wp-content/uploads/2023/03/SAV.jpg"
            alt="Mission Vision Banner"
            className="w-full h-[580px] object-cover"
          />
        </div>

        {/* OUR MISSION */}
        <section className="bg-blue-500">
          <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

            <div className="flex justify-center">
              <img
                src="https://businesscare.org.in/wp-content/uploads/2023/03/RMK.jpg"
                alt="Our Mission"
                className="rounded-2xl shadow-xl w-full max-w-md object-cover"
              />
            </div>

            <div>
              <button
                onClick={() => navigate("/services")}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 cursor-pointer"
              >
                OUR MISSION
              </button>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Empowering Indian Business Owners
              </h2>

              <div className="font-bold text-black">
                <p className="mb-4">
                  Business Care is built for business owners in India.
                </p>
                <p className="mb-4">
                  Wrong strategies and weak business models cause failure.
                </p>
                <p>
                  We help businesses grow and face challenges confidently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OUR VISION */}
        <section className="bg-yellow-500">
          <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

            <div>
              <button
                onClick={() => navigate("/services")}
                className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 cursor-pointer"
              >
                OUR VISION
              </button>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Building Independent Entrepreneurs
              </h2>

              <div className="font-extrabold text-black">
                <p className="mb-4">
                  Only few business owners succeed with correct strategies.
                </p>
                <p className="mb-4">
                  80% still depend on others.
                </p>
                <p>
                  We make entrepreneurs self-reliant.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="https://businesscare.org.in/wp-content/uploads/2023/03/lio.jpg"
                alt="Our Vision"
                className="rounded-2xl shadow-xl w-full max-w-md object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

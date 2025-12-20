import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MissionVision() {
  return (
    <>
      <Navbar />

      <div className="bg-white text-gray-800">

        {/* ================= TOP BANNER ================= */}
        <div className="w-full mt-16">
          <img
            src="https://businesscare.org.in/wp-content/uploads/2023/03/SAV.jpg"
            alt="Mission Vision Banner"
            className="w-full h-[380px] object-cover"
          />
        </div>

        {/* ================= OUR MISSION ================= */}
        <section className="bg-blue-500">
          <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src="https://businesscare.org.in/wp-content/uploads/2023/03/RMK.jpg"
                alt="Our Mission"
                className="rounded-2xl shadow-xl w-full max-w-md object-cover"
              />
            </div>

            {/* CONTENT */}
            <div>
              <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                OUR MISSION
              </span>
               
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Empowering Indian Business Owners
              </h2>
               <div className="font-bold text-black">
              <p className="leading-relaxed mb-4">
                Business Care is built for business owners in India. Our aim is to
                educate business owners about the increasing wrong techniques used
                in their businesses.
              </p>

              <p className=" leading-relaxed mb-4">
                Wrong strategies, wrong marketing platforms, and weak business
                models are major reasons behind business failures.
              </p>

              <p className=" leading-relaxed">
                Business Care helps you understand customers, prepare for business
                challenges, and grow a scalable business.
              </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= OUR VISION ================= */}
        <section className="bg-yellow-500">
          <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

            {/* CONTENT */}
            <div>
              <span className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                OUR VISION
              </span>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Building Independent Entrepreneurs
              </h2>
              <div className="font-extrabold text-black">
              <p className=" leading-relaxed mb-4">
                Only a small percentage of Indian business owners succeed in
                implementing the right business strategies.
              </p>

              <p className="leading-relaxed mb-4">
                Nearly 80% still depend on staff, influencers, and third parties.
                Our vision is to make business owners self-reliant and confident.
              </p>

              <p className=" leading-relaxed">
                Business Care enables entrepreneurs across India to create and
                execute their own marketing and business strategies.
              </p>
              </div>
            </div>

            {/* IMAGE */}
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
